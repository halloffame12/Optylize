import { Metadata } from 'next'
import InsightsContent from './InsightsContent'

export const metadata: Metadata = {
  title: 'Insights | Optylize',
  description: 'Technical deep dives, strategy frameworks, and research on Enterprise GenAI.',
}

export default function InsightsPage() {
  return <InsightsContent />
}
