import { notFound } from 'next/navigation'
import { demos } from '@/content/demos'
import DemoClient from './demo-client'

export function generateStaticParams() {
  return Object.keys(demos).map(slug => ({ slug }))
}
export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const content = demos[slug]
  if (!content) notFound()
  return <DemoClient content={content} />
}
