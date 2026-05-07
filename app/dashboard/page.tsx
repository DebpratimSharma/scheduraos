export const dynamic = 'force-dynamic'
import { Suspense, lazy} from 'react';
import React from 'react'
import Header from '@/components/dashboard/Header'
import { StatsCards } from '@/components/dashboard/StatsCard'
import { RoutineSkeleton } from '@/components/dashboard/RoutineSkeleton';

const Routine = lazy(()=> import("@/components/dashboard/Routine"))

const DashboardPage = () => {

  
  return (
    <div className='w-full min-h-screen px-4 md:px-10 lg:px-20 space-y-6'>
      <StatsCards />
      <Suspense fallback={<RoutineSkeleton/>} >
        <Routine />
      </Suspense>
      
    </div>
  )
}

export default DashboardPage


