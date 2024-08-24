import { api } from '../lib/axios'

export interface approveOrderParams {
  orderId: string
}

export interface approveOrderResponse {
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

export async function approveOrder({ orderId }: approveOrderParams) {
  await api.patch<approveOrderResponse>(`/orders/${orderId}/approve`)
}
