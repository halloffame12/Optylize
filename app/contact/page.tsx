import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
    title: 'Contact | Optylize',
    description: 'Get in touch with our team of AI experts to start your transformation.',
}

export default function ContactPage() {
    return <ContactContent />
}
