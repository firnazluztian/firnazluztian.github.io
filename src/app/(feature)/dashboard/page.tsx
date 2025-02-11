"use client"
import dynamic from "next/dynamic"

const DashboardContainer = dynamic(()=> import("@/containers/dashboard").then(mod=> mod.DashboardContainer), {ssr: false })

const Dashboard = () => {

  return (
    <DashboardContainer />
  )
}

export default Dashboard
