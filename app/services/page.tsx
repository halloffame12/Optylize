import { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
    title: 'Services | Optylize',
    description: 'End-to-end GenAI solutions: Strategy, Implementation, and Process Automation.',
}

export default function ServicesPage() {
    return <ServicesContent />
}
