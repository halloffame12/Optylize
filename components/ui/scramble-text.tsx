'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ScrambleTextProps {
    text: string
    className?: string
    scrambleSpeed?: number
    scrambleDuration?: number
    revealDelay?: number
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?'

export default function ScrambleText({
    text,
    className = '',
    scrambleSpeed = 50,
    scrambleDuration = 1000,
    revealDelay = 0,
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState('')
    const [isScrambling, setIsScrambling] = useState(true)

    useEffect(() => {
        let interval: NodeJS.Timeout
        let timeout: NodeJS.Timeout
        let startTime = Date.now()

        const startScramble = () => {
            interval = setInterval(() => {
                const elapsedTime = Date.now() - startTime

                if (elapsedTime > scrambleDuration) {
                    setDisplayText(text)
                    setIsScrambling(false)
                    clearInterval(interval)
                    return
                }

                const progress = elapsedTime / scrambleDuration
                const revealIndex = Math.floor(progress * text.length)

                const scrambled = text
                    .split('')
                    .map((char, index) => {
                        if (index < revealIndex) return char
                        if (char === ' ') return ' '
                        return CHARS[Math.floor(Math.random() * CHARS.length)]
                    })
                    .join('')

                setDisplayText(scrambled)
            }, scrambleSpeed)
        }

        if (revealDelay > 0) {
            timeout = setTimeout(() => {
                startTime = Date.now()
                startScramble()
            }, revealDelay)
        } else {
            startScramble()
        }

        return () => {
            clearInterval(interval)
            clearTimeout(timeout)
        }
    }, [text, scrambleSpeed, scrambleDuration, revealDelay])

    return (
        <motion.span className={className}>
            {displayText}
        </motion.span>
    )
}
