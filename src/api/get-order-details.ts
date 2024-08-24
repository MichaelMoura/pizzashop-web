import { api } from '../lib/axios'

export interface getOrderDetailsParams {
  orderId: string
}

export interface getOrderDetailsResponse {
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

export async function getOrderDetails({ orderId }: getOrderDetailsParams) {
  const response = await api.get<getOrderDetailsResponse>(`/orders/${orderId}`)

  return response.data
}
