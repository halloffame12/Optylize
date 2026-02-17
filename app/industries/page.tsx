import { Metadata } from 'next'
import IndustriesContent from './IndustriesContent'

export const metadata: Metadata = {
  title: 'Industries | Optylize',
  description: 'Vertical-specific GenAI solutions for Financial Services, Healthcare, Retail, Manufacturing, and Logistics.',
}

export default function IndustriesPage() {
  return <IndustriesContent />
}
