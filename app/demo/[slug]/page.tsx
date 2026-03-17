import { notFound } from 'next/navigation'
import { demos } from '@/content/demos'
import DemoClient from './demo-client'

export function generateStaticParams() {
  return Object.keys(demos).map(slug => ({ slug }))
}

export default async function DemoPage({ params }: { params: { slug: string } }) {
  const content = demos[params.slug]
  if (!content) notFound()
  return <DemoClient content={content} />
}
