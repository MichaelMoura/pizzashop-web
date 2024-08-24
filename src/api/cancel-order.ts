import { api } from '../lib/axios'

export interface cancelOrderParams {
  orderId: string
}

export interface cancelOrderResponse {
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

export async function cancelOrder({ orderId }: cancelOrderParams) {
  await api.patch<cancelOrderResponse>(`/orders/${orderId}/cancel`)
}
