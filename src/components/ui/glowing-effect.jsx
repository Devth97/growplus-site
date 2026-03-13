"use client"

import { useRef, useState, useEffect } from "react"

export const GlowingEffect = ({ children, className = "" }) => {
    const divRef = useRef(null)
    const [isFocused, setIsFocused] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e) => {
        if (!divRef.current) return

        const div = divRef.current
        const rect = div.getBoundingClientRect()

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleFocus = () => {
        setIsFocused(true)
        setOpacity(1)
    }

    const handleBlur = () => {
        setIsFocused(false)
        setOpacity(0)
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    // Disable on touch devices to save performance and prevent sticky hover states
    useEffect(() => {
        const isTouch = window.matchMedia("(pointer: coarse)").matches
        if (isTouch) {
            setOpacity(0)
        }
    }, [])

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    )
}
