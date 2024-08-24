import { api } from '../lib/axios'

export interface deliverOrderParams {
  orderId: string
}

export interface deliverOrderResponse {
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

export async function deliverOrder({ orderId }: deliverOrderParams) {
  await api.patch<deliverOrderResponse>(`/orders/${orderId}/deliver`)
}
