import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, ChevronDown } from "lucide-react"
import { useState } from "react"

const sectors = [
    { value: "food-beverage", label: "Food & Beverage" },
    { value: "real-estate", label: "Real Estate" },
    { value: "jewellery", label: "Jewellery" },
    { value: "other", label: "Other" },
]

export default function Contact() {
    const [selectedSector, setSelectedSector] = useState("")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const WHATSAPP_URL = "https://wa.me/919901542387"

    const getWhatsAppLink = () => {
        let message = "Hi, I want to discuss content creation for my brand"
        if (selectedSector) {
            const sectorLabel = sectors.find(s => s.value === selectedSector)?.label
            message = `Hi, I want to discuss content creation for my ${sectorLabel} brand`
        }
        return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    }

    return (
        <section id="contact" className="py-24 bg-[#050505]">
            <div className="container px-6 mx-auto max-w-7xl">
                <div className="rounded-3xl bg-neutral-900/40 border border-white/5 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">

                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                        >
                            Ready to elevate your brand? <span className="text-gradient">Let's talk</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-neutral-400 font-light"
                        >
                            Reach out directly — we respond within 24 hours. No forms, no waiting.
                        </motion.p>
                    </div>

                    <div className="flex flex-col gap-4 w-full md:w-auto min-w-[300px]">
                        {/* Sector Selector */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="relative"
                        >
                            <label className="text-sm text-neutral-400 mb-2 block">Your Industry</label>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                            >
                                <span className={selectedSector ? "text-white" : "text-neutral-500"}>
                                    {selectedSector ? sectors.find(s => s.value === selectedSector)?.label : "Select your sector"}
                                </span>
                                <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-800 border border-white/10 rounded-xl overflow-hidden z-20 shadow-xl">
                                    {sectors.map((sector) => (
                                        <button
                                            key={sector.value}
                                            onClick={() => {
                                                setSelectedSector(sector.value)
                                                setIsDropdownOpen(false)
                                            }}
                                            className={`w-full px-4 py-3 text-left hover:bg-white/5 transition-colors ${selectedSector === sector.value ? "text-primary bg-primary/10" : "text-white"
                                                }`}
                                        >
                                            {sector.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Button
                                variant="cta"
                                size="lg"
                                className="w-full text-lg h-16 px-10 rounded-full shadow-orange-500/20"
                                asChild
                            >
                                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="mr-2 h-6 w-6" />
                                    Chat on WhatsApp
                                </a>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <a href="mailto:connect@growplus.site" className="flex items-center justify-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm font-medium py-2">
                                <Mail className="w-4 h-4" />
                                connect@growplus.site
                            </a>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
