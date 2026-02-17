'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Phone, Clock, ArrowRight, Send, Loader2, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '@/components/ui/use-toast' // We need to check if use-toast exists, if not use simple alert or create it

// Form Schema
const formSchema = z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    company: z.string().min(2, 'Company name is required'),
    subject: z.string().min(5, 'Subject is required'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@optylize.com', href: 'mailto:contact@optylize.com' },
    { icon: MapPin, label: 'Location', value: 'Noida, India', href: null },
    { icon: Users, label: 'Founding Team', value: 'Alex Rivera, Priya Sharma, Rohan Singh', href: null },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
]

export default function ContactContent() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        reset()
        alert("Strategic Audit Request Received. Our team (contact@optylize.com) will reach out within 24 hours to confirm your consultation.")
    }

    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-background to-black/5" />
                <div className="noise-overlay" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                            GET IN TOUCH
                        </p>
                        <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-display-xl">
                            <span className="text-foreground">LET&apos;S BUILD </span>
                            <span className="text-black/60">TOGETHER</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                            Ready to explore how GenAI can transform your business?
                            Book a free 30-minute consultation with our founding team.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section ref={ref} className="relative py-20">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-5">
                        {/* Left: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-2"
                        >
                            <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-8">
                                CONTACT INFO
                            </h2>

                            <div className="space-y-6">
                                {contactInfo.map((item) => {
                                    const Icon = item.icon
                                    const content = (
                                        <div className="flex items-start gap-4 group">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-black bg-black">
                                                <Icon className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-wider text-black/40">{item.label}</p>
                                                <p className="text-foreground font-medium mt-1 group-hover:text-black transition-colors">{item.value}</p>
                                            </div>
                                        </div>
                                    )
                                    return item.href ? (
                                        <a key={item.label} href={item.href} className="block">
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={item.label}>{content}</div>
                                    )
                                })}
                            </div>

                            {/* Map placeholder */}
                            <div className="mt-10 aspect-video rounded-xl skeu-card overflow-hidden">
                                <div className="h-full w-full bg-black flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="h-10 w-10 text-white/60 mx-auto mb-3" />
                                        <p className="text-sm font-bold uppercase tracking-wider text-white/40">NOIDA, INDIA</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-3"
                        >
                            <div className="skeu-card-elevated rounded-xl p-8 lg:p-10">
                                <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-2">
                                    SEND US A MESSAGE
                                </h2>
                                <p className="text-sm text-white/60 mb-8">
                                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                                </p>

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider">FIRST NAME</Label>
                                            <Input
                                                id="firstName"
                                                placeholder="John"
                                                className={`skeu-input ${errors.firstName ? 'border-red-500' : ''}`}
                                                {...register('firstName')}
                                            />
                                            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider">LAST NAME</Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Doe"
                                                className={`skeu-input ${errors.lastName ? 'border-red-500' : ''}`}
                                                {...register('lastName')}
                                            />
                                            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider">WORK EMAIL</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@company.com"
                                            className={`skeu-input ${errors.email ? 'border-red-500' : ''}`}
                                            {...register('email')}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wider">COMPANY</Label>
                                        <Input
                                            id="company"
                                            placeholder="Acme Inc."
                                            className={`skeu-input ${errors.company ? 'border-red-500' : ''}`}
                                            {...register('company')}
                                        />
                                        {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider">SUBJECT</Label>
                                        <Input
                                            id="subject"
                                            placeholder="GenAI strategy consultation"
                                            className={`skeu-input ${errors.subject ? 'border-red-500' : ''}`}
                                            {...register('subject')}
                                        />
                                        {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-white/80">MESSAGE</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your project and how we can help..."
                                            rows={5}
                                            className={`skeu-input resize-none text-white ${errors.message ? 'border-red-500' : ''}`}
                                            {...register('message')}
                                        />
                                        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                                    </div>

                                    <Button variant="brutal" size="xl" className="w-full gap-2 text-base" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                        ) : (
                                            <Send className="h-5 w-5" />
                                        )}
                                        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Calendar placeholder */}
            <section className="relative py-16 bg-card/50 border-t border-border">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
                    <Clock className="h-10 w-10 text-black/60 mx-auto mb-4" />
                    <h2 className="text-2xl font-extrabold uppercase tracking-tight">
                        PREFER A CALL?
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground mb-6">
                        Book a free 30-minute consultation directly with our founding team.
                    </p>
                    <Button variant="brutal" size="xl" className="gap-2">
                        BOOK A TIME SLOT <ArrowRight className="h-5 w-5" />
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    )
}
