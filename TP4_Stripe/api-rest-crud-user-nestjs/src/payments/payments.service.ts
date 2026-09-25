import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Request } from 'express';
import Stripe from 'stripe';
import { CreatePaymentSessionDto } from './dto/create-payment-session.dto';

@Injectable()
export class PaymentsService {
  private readonly stripe: Stripe;

  constructor() {
    const secretKey = process.env.STRIPE_SECRET;

    if (!secretKey) {
      throw new Error('STRIPE_SECRET is required');
    }

    this.stripe = new Stripe(secretKey);
  }

  async createPaymentSession(dto: CreatePaymentSessionDto) {
    const successUrl = process.env.STRIPE_SUCCESS_URL;
    const cancelUrl = process.env.STRIPE_CANCEL_UR;

    if (!successUrl || !cancelUrl) {
      throw new Error(
        'STRIPE_SUCCESS_URL and STRIPE_CANCEL_UR are required',
      );
    }

    try {
      const session = await this.stripe.checkout.sessions.create({
        mode: 'payment',

        line_items: dto.items.map((item) => ({
          price_data: {
            currency: dto.currency,
            product_data: {
              name: item.name,
            },
            unit_amount: Math.round(item.price * 100),
          },
          quantity: item.quantity,
        })),

        success_url: successUrl,
        cancel_url: cancelUrl,

        payment_intent_data: {
          metadata: {
            orderId: dto.orderId,
          },
        },
      });

      return {
        id: session.id,
        url: session.url,
      };
    } catch (error) {
      console.error(
        'Error creating Stripe Checkout Session:',
        error,
      );

      throw new InternalServerErrorException(
        'Could not create payment session',
      );
    }
  }

  async handleWebhook(
    req: Request,
    signature: string,
  ) {
    const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

    if (!endpointSecret) {
      throw new Error(
        'STRIPE_ENDPOINT_SECRET is required',
      );
    }

    if (!signature) {
      throw new BadRequestException(
        'Missing stripe-signature header',
      );
    }

    try {
      const rawBody = (
        req as Request & { rawBody?: Buffer }
      ).rawBody;

      if (!rawBody) {
        throw new BadRequestException(
          'Missing raw body',
        );
      }

      const event = this.stripe.webhooks.constructEvent(
        rawBody,
        signature,
        endpointSecret,
      );

      if (event.type === 'charge.succeeded') {
        const charge = event.data.object as Stripe.Charge;

        const orderId = charge.metadata?.orderId;

        console.log(
          `charge.succeeded - orderId: ${
            orderId ?? 'not found'
          }`,
        );
      } else {
        console.log(
          `Evento no manejado: ${event.type}`,
        );
      }

      return {
        received: true,
      };
    } catch (error) {
      console.error('Webhook error:', error);

      throw new BadRequestException(
        'Invalid webhook signature',
      );
    }
  }
}