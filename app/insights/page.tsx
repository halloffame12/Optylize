import type { Metadata } from 'next'
import InsightsContent from './InsightsContent'

export const metadata: Metadata = {
    title: 'Insights | Optylize',
    description: 'The latest thoughts on GenAI, enterprise transformation, and AI governance.',
}

export default function InsightsPage() {
    return <InsightsContent />
}
