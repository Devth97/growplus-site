import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { mediaUrl } from "@/utils/media"

export default function Hero() {
    return (
        <section id="home" className="relative h-screen min-h-[680px] w-full overflow-hidden flex bg-gp-bg">
            
            {/* Left Rail */}
            <div className="hidden lg:flex w-[110px] min-w-[110px] border-r border-border2 flex-col items-center justify-between pb-12 pt-36 z-20 bg-gp-bg">
                <div 
                    className="font-heading text-[0.68rem] font-bold tracking-[0.28em] text-primary uppercase"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                    01 / 01
                </div>
                <div className="w-[1px] h-[60px] bg-border2 my-auto" />
            </div>

            {/* Main Hero Slider Area */}
            <div className="flex-1 relative overflow-hidden flex flex-col justify-end px-8 md:px-20 pb-20 md:pb-24 z-10">
                
                {/* Background Video */}
                <div className="absolute inset-0 z-[-1] overflow-hidden bg-gp-bg2">
                    <motion.div 
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1.04 }}
                        transition={{ duration: 8, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-cover"
                        >
                            <source src={mediaUrl("growplus/hero.mp4")} type="video/mp4" />
                        </video>
                    </motion.div>
                    {/* Light Fade Gradient overlay on video */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f7f4ef] via-white/80 to-white/10 content-[''] pointer-events-none" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-[780px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="gp-eyebrow"
                    >
                        AI Automation Agency
                    </motion.div>

                    <div className="relative">
                        {/* Background Glow Hub */}
                        <div className="absolute -inset-10 md:-inset-20 bg-primary/10 blur-[80px] md:blur-[120px] rounded-full z-[-1] animate-pulse" />
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="font-heading text-6xl sm:text-7xl md:text-[7.2rem] font-extrabold leading-[0.92] tracking-tighter text-gp-black mb-8"
                        >
                            THE FUTURE<br />
                            <span style={{ WebkitTextStroke: '1.5px var(--black)', color: 'transparent' }}>OF GROWTH,</span><br />
                            <span className="text-primary italic">AUTOMATED.</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-base md:text-lg text-gp-grey leading-relaxed max-w-[460px] mb-10"
                    >
                        Growplus is an AI automation agency that transforms modern businesses by integrating artificial intelligence into daily workflows, alongside building premium digital experiences that scale.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap items-center gap-8"
                    >
                        <a href="https://wa.me/919901542387" target="_blank" rel="noopener noreferrer" className="group relative bg-gp-black text-white px-10 py-5 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10 font-heading text-[0.74rem] font-bold tracking-[0.18em] uppercase">Claim Free AI Audit</span>
                        </a>

                        <a href="#work" className="inline-flex items-center gap-4 font-heading text-[0.74rem] font-bold tracking-[0.18em] uppercase text-gp-black hover:gap-6 transition-all group">
                            View Portfolio
                            <div className="w-12 h-12 border-[1.5px] border-border2 rounded-full flex items-center justify-center text-lg group-hover:bg-gp-black group-hover:border-gp-black group-hover:text-white transition-all text-gp-black">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Right progress indicator */}
            <div className="hidden lg:flex w-[72px] min-w-[72px] border-l border-border2 flex-col items-center justify-center z-20 bg-gp-bg">
                <div className="w-1.5 h-8 bg-primary rounded-sm transition-all duration-300" />
            </div>

        </section>
    )
}
