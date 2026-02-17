import { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us | Optylize',
  description: 'Get in touch with our team for enterprise GenAI consulting.',
}

export default function ContactPage() {
  return <ContactContent />
}
