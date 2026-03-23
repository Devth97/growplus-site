import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

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
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Work", href: "#work" },
        { name: "Process", href: "#process" },
    ]

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-400">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className={`w-full px-6 py-6 md:px-16 md:py-6 transition-all duration-400 flex items-center justify-between ${isScrolled || isMobileMenuOpen
                        ? "bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-sm md:py-4"
                        : "bg-transparent"
                        }`}
                >
                    {/* Logo */}
                    <a href="#home" className="z-50 flex items-center gap-2">
                        <img src="/logo.jpg" alt="Growplus Logo" className="h-9 w-auto object-contain mix-blend-multiply" />
                        <span className="text-xl font-bold font-heading text-gp-black tracking-wide">
                            GROW<span className="text-primary">+</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-10 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-semibold tracking-[0.14em] uppercase text-gp-grey hover:text-gp-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href="#contact"
                            className="text-xs font-semibold tracking-[0.14em] uppercase text-white bg-gp-black hover:bg-primary transition-colors px-6 py-3"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="z-50 block p-2 text-gp-black md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-gp-bg flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        <img src="/logo.jpg" alt="Grow+" className="h-10 w-auto rounded-full shadow-sm mb-4" />
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-3xl font-heading font-bold letter-spacing-wide text-gp-black hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="text-3xl font-heading font-bold letter-spacing-wide text-gp-black hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

