export default function Footer() {
    const WHATSAPP_URL = "https://wa.me/919901542387"

    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container px-6 mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

                <div>
                    <a href="#" className="flex items-center gap-2 mb-2">
                        <img src="/logo.jpg" alt="Growplus" className="h-10 w-10 object-contain rounded-full bg-white/10 p-1" />
                    </a>
                    <p className="text-sm text-neutral-500 mt-2">
                        © {new Date().getFullYear()} Growplus Creative Agency.
                    </p>
                </div>

                <div className="flex gap-8 text-sm text-neutral-400">
                    <a href="#work" className="hover:text-white transition-colors">Work</a>
                    <a href="#services" className="hover:text-white transition-colors">Services</a>
                    <a href="#process" className="hover:text-white transition-colors">Process</a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a>
                </div>

            </div>
        </footer>
    )
}
