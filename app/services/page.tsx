import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
    title: 'Capabilities | Optylize',
    description: 'From GenAI strategy to full-scale production. Explore our range of AI consulting services.',
}

export default function ServicesPage() {
    return <ServicesContent />
}
