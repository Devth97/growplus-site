import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowDown } from "lucide-react"
import { useState, useEffect } from "react"

const rotatingSectors = [
    "Food & Beverage",
    "Real Estate",
    "Jewellery"
]

export default function Hero({ title, subtitle, description }) {
    const WHATSAPP_URL = "https://wa.me/919901542387"
    const [currentSectorIndex, setCurrentSectorIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSectorIndex((prev) => (prev + 1) % rotatingSectors.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center pt-44 md:pt-52">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-60"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
                {/* Soft bottom gradient to blend into next section */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-6 mx-auto max-w-7xl">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white"
                    >
                        {title || "Premium content & websites for brands that demand excellence"}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-6"
                    >
                        <p className="text-xl text-white/80 md:text-2xl font-light max-w-3xl">
                            {subtitle || (
                                <>
                                    Crafting cinematic visuals and digital experiences across{" "}
                                    <span className="relative inline-block">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={currentSectorIndex}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.5 }}
                                                className="text-gradient font-semibold"
                                            >
                                                {rotatingSectors[currentSectorIndex]}
                                            </motion.span>
                                        </AnimatePresence>
                                    </span>
                                </>
                            )}
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-4 text-lg text-white/60 max-w-2xl"
                    >
                        {description || "Cinematic videos and striking posters for F&B, Real Estate, and Jewellery brands."}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                    >
                        <Button
                            variant="cta"
                            size="lg"
                            className="group text-lg h-14 px-8 rounded-full"
                            asChild
                        >
                            <a href="#work">
                                View Our Work
                                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </a>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="text-lg h-14 px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40"
                            asChild
                        >
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Chat on WhatsApp
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
