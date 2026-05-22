import { mediaUrl } from "@/utils/media"

export default function Footer() {
    return (
        <footer className="bg-gp-bg border-t border-border2 py-12 md:py-16">
            <div className="container px-6 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={mediaUrl("/logo.jpg")} alt="Growplus" className="h-[30px] w-auto object-contain rounded-full shadow-sm" />
                            <span className="font-heading text-xl font-bold text-gp-black tracking-wide">
                                GROW<span className="text-primary">+</span>
                            </span>
                        </div>
                        <p className="text-[0.8rem] text-gp-grey leading-relaxed max-w-xs">
                            Elite AI Automation Agency architecting the future of growth for modern brands through intelligent workflows and premium creative.
                        </p>
                    </div>

                    {/* Expertise Silos */}
                    <div className="col-span-1">
                        <h4 className="font-heading text-[0.65rem] font-bold tracking-[0.25em] uppercase text-gp-black mb-6">Expertise</h4>
                        <div className="flex flex-col gap-3">
                            <a href="/food-and-beverage-marketing" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">
                                Food & Beverage Marketing
                            </a>
                            <a href="/real-estate-marketing" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">
                                Real Estate Automation
                            </a>
                            <a href="/jewellery-branding" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">
                                Jewellery Branding
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="font-heading text-[0.65rem] font-bold tracking-[0.25em] uppercase text-gp-black mb-6">Agency</h4>
                        <div className="flex flex-col gap-3">
                            <a href="/about" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">
                                Our Methodology
                            </a>
                            <a href="/reviews" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">
                                Client Results
                            </a>
                            <a href="/#services" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">
                                AI Services
                            </a>
                        </div>
                    </div>

                    {/* Students */}
                    <div className="col-span-1">
                        <h4 className="font-heading text-[0.65rem] font-bold tracking-[0.25em] uppercase text-gp-black mb-6">Students</h4>
                        <div className="flex flex-col gap-3">
                            <a href="/students" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">
                                Student Hub
                            </a>
                            <a href="https://engineerkit-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">
                                EngineerKit AI →
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="col-span-1">
                        <h4 className="font-heading text-[0.65rem] font-bold tracking-[0.25em] uppercase text-gp-black mb-6">Connect</h4>
                        <div className="flex flex-col gap-3">
                            <a href="https://instagram.com/growplus" target="_blank" rel="noopener noreferrer" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">
                                Instagram
                            </a>
                            <a href="https://wa.me/919901542387" target="_blank" rel="noopener noreferrer" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">
                                WhatsApp Audit
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border2 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="font-body text-[0.75rem] text-gp-grey2">
                        &copy; 2024 Growplus.site | #1 AI Automation & Creative Agency India
                    </div>
                    <div className="flex gap-6">
                        <p className="text-[0.7rem] text-gp-grey2 uppercase tracking-widest font-bold">Mangalore • Mysuru • Global</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
