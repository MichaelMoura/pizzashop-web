import { Helmet } from 'react-helmet-async'

import { DayOrderAmountCard } from './days-orders-amont-card copy 2'
import { MonthOrderAmountCard } from './month-orders-amont-card copy'
import { MonthRevenueCard } from './month-revenue-card'
import { MonthCanceledOrdersAmountCard } from './mounth-canceled-orders-amount-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrderAmountCard />
          <DayOrderAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
