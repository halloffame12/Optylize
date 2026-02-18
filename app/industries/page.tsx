import type { Metadata } from 'next'
import IndustriesContent from './IndustriesContent'

export const metadata: Metadata = {
    title: 'Industries | Optylize',
    description: 'AI solutions tailored for Finance, Healthcare, Manufacturing, and Retail.',
}

export default function IndustriesPage() {
    return <IndustriesContent />
}
