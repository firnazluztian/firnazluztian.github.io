"use client"
import dynamic from 'next/dynamic';

const RootContainer = dynamic(() => import('../containers/root').then(mod => mod.RootContainer), { ssr: false });

export default function Home() {
  return (
    <RootContainer />
  )
}
