import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // WHATSAPP NUMBER
    const WHATSAPP_URL = "https://wa.me/919901542387"

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Work", href: "#work" },
        { name: "Services", href: "#services" },
        { name: "Process", href: "#process" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className={`w-full max-w-7xl rounded-2xl border border-white/10 px-6 py-4 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                        ? "bg-neutral-900/80 backdrop-blur-xl shadow-2xl"
                        : "bg-transparent backdrop-blur-sm"
                        }`}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#" className="z-50 flex items-center gap-2">
                            <img src="/logo.jpg" alt="Growplus" className="h-12 w-12 object-contain rounded-full bg-white/10 p-1" />
                            <span className="text-xl font-bold text-white tracking-wide">Growplus</span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center gap-8 md:flex">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Desktop CTAs */}
                        <div className="hidden items-center gap-4 md:flex">
                            <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5" asChild>
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>
                            </Button>
                            <Button variant="cta" className="rounded-full" asChild>
                                <a href="#contact">
                                    Get Started
                                </a>
                            </Button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="z-50 block p-2 text-white md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-40 bg-black/95 pt-28 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 p-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-medium text-white/90"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <hr className="w-full border-white/10" />
                            <Button
                                variant="ghost"
                                className="w-full text-lg text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                                asChild
                            >
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                            </Button>
                            <Button
                                variant="cta"
                                className="w-full rounded-full py-6 text-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                                asChild
                            >
                                <a href="#contact">Get Started</a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
