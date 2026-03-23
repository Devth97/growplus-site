export default function Footer() {
    return (
        <footer className="bg-gp-bg border-t border-border2 py-8 md:py-12">
            <div className="container px-6 mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <img src="/logo.jpg" alt="Growplus" className="h-[26px] w-auto object-contain rounded-full shadow-sm" />
                    <span className="font-heading text-lg font-bold text-gp-black tracking-wide">
                        GROW<span className="text-primary">+</span>
                    </span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-heading text-[0.66rem] font-bold tracking-[0.2em] uppercase text-gp-grey hover:text-primary transition-colors">
                        Instagram
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-heading text-[0.66rem] font-bold tracking-[0.2em] uppercase text-gp-grey hover:text-primary transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="font-heading text-[0.66rem] font-bold tracking-[0.2em] uppercase text-gp-grey hover:text-primary transition-colors">
                        Behance
                    </a>
                </div>
                
                <div className="font-body text-[0.8rem] text-gp-grey2 text-center md:text-right">
                    &copy; 2024 Growplus.site<br/>All rights reserved.
                </div>
            </div>
        </footer>
    )
}
