# TP4 - Sesiones de pago y webhook Stripe

Trabajo práctico de Programación Avanzada 2026.

Microservicio desarrollado con NestJS que permite:

- Crear sesiones de pago con Stripe Checkout.
- Recibir eventos de Stripe mediante webhook.
- Validar la firma del webhook.
- Registrar el `orderId` cuando se recibe `charge.succeeded`.

## Instalación

```bash
npm install
