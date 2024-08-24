import { api } from '../lib/axios'

export interface dispatchOrderParams {
  orderId: string
}

export interface dispatchOrderResponse {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function dispatchOrder({ orderId }: dispatchOrderParams) {
  await api.patch<dispatchOrderResponse>(`/orders/${orderId}/dispatch`)
}
