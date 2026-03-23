import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
    const [selectedSector, setSelectedSector] = useState("")

    const WHATSAPP_URL = "https://wa.me/919901542387"

    const doForm = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);

        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const industry = formData.get('industry');
        const message = formData.get('message');

        const industryMap = {
            'fb': 'Food & Beverage',
            're': 'Real Estate',
            'je': 'Jewellery',
            'ot': 'Other'
        };
        const industryLabel = industry ? industryMap[industry] : 'Not specified';

        const waText = `*New Lead from Growplus Website!*\n\n*Name:* ${name}\n*Phone:* ${phone || 'Not provided'}\n*Email:* ${email}\n*Industry:* ${industryLabel}\n\n*Message:*\n${message || 'No specific message.'}`;
        const waLink = `https://wa.me/919901542387?text=${encodeURIComponent(waText)}`;

        // Open WhatsApp in new tab
        window.open(waLink, "_blank");

        const btn = form.querySelector('button[type="submit"]')
        const originalText = btn.innerHTML
        btn.textContent = 'Redirecting…'
        setTimeout(() => {
            btn.innerHTML = '✓ Sent to WhatsApp!'
            document.getElementById('fsuc').classList.add('block')
            document.getElementById('fsuc').classList.remove('hidden')
            setTimeout(() => {
                btn.innerHTML = originalText
                document.getElementById('fsuc').classList.add('hidden')
                document.getElementById('fsuc').classList.remove('block')
                form.reset()
            }, 4000)
        }, 1000)
    }

    return (
        <section id="contact" className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left Side - Black */}
            <div className="bg-gp-black p-12 md:p-24 lg:p-[100px_64px] flex flex-col justify-center">
                <span className="font-heading text-[0.66rem] font-bold tracking-[0.3em] uppercase text-primary mb-4 flex items-center gap-2.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-primary">
                    Get In Touch
                </span>

                <h2 className="font-heading text-4xl md:text-[2.8rem] font-extrabold text-white leading-[1.1] tracking-tight mb-5">
                    Ready to elevate<br />your brand?<br />Let's talk.
                </h2>

                <p className="text-[0.95rem] text-white/50 leading-[1.85] max-w-md">
                    Reach out directly — we respond within 24 hours. No waiting. Just great conversations that lead to great creative work.
                </p>

                <div className="mt-12 flex flex-col gap-8">
                    <div>
                        <span className="font-heading text-[0.64rem] font-bold tracking-[0.28em] uppercase text-primary mb-2 block">WhatsApp</span>
                        <div className="text-[0.95rem] text-white font-body">
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+91 99015 42387</a>
                        </div>
                    </div>
                    <div>
                        <span className="font-heading text-[0.64rem] font-bold tracking-[0.28em] uppercase text-primary mb-2 block">Email</span>
                        <div className="text-[0.95rem] text-white font-body">
                            <a href="mailto:connect@growplus.site" className="hover:text-primary transition-colors">connect@growplus.site</a>
                        </div>
                    </div>
                    <div>
                        <span className="font-heading text-[0.64rem] font-bold tracking-[0.28em] uppercase text-primary mb-2 block">Location</span>
                        <div className="text-[0.95rem] text-white font-body">Mangalore, Karnataka, India</div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form (Beige) */}
            <div className="bg-gp-bg2 p-12 md:p-24 lg:p-[100px_64px] flex flex-col justify-center">
                <h3 className="font-heading text-[1.4rem] font-extrabold text-gp-black mb-7">Send a Message</h3>

                <form className="flex flex-col gap-4" onSubmit={doForm}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        <div className="flex flex-col gap-1.5">
                            <label className="font-heading text-[0.64rem] font-bold tracking-[0.2em] uppercase text-gp-grey">Your Name</label>
                            <input type="text" name="name" className="bg-white border-[1.5px] border-border2 text-gp-black p-[13px_15px] font-body text-[0.9rem] outline-none focus:border-primary transition-colors w-full" placeholder="Enter your name" required />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="font-heading text-[0.64rem] font-bold tracking-[0.2em] uppercase text-gp-grey">Phone</label>
                            <input type="tel" name="phone" className="bg-white border-[1.5px] border-border2 text-gp-black p-[13px_15px] font-body text-[0.9rem] outline-none focus:border-primary transition-colors w-full" placeholder="+91 00000 00000" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="font-heading text-[0.64rem] font-bold tracking-[0.2em] uppercase text-gp-grey">Email</label>
                        <input type="email" name="email" className="bg-white border-[1.5px] border-border2 text-gp-black p-[13px_15px] font-body text-[0.9rem] outline-none focus:border-primary transition-colors w-full" placeholder="your@email.com" required />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="font-heading text-[0.64rem] font-bold tracking-[0.2em] uppercase text-gp-grey">Industry</label>
                        <select name="industry" className="bg-white border-[1.5px] border-border2 text-gp-black p-[13px_15px] font-body text-[0.9rem] outline-none focus:border-primary transition-colors w-full" defaultValue="">
                            <option value="" disabled>Select your industry</option>
                            <option value="fb">Food & Beverage</option>
                            <option value="re">Real Estate</option>
                            <option value="je">Jewellery</option>
                            <option value="ot">Other</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="font-heading text-[0.64rem] font-bold tracking-[0.2em] uppercase text-gp-grey">Message</label>
                        <textarea name="message" className="bg-white border-[1.5px] border-border2 text-gp-black p-[13px_15px] font-body text-[0.9rem] outline-none focus:border-primary transition-colors w-full min-h-[96px] resize-y" placeholder="Tell us about your project..."></textarea>
                    </div>

                    <button type="submit" className="bg-gp-black text-white px-8 py-4 font-heading text-[0.74rem] font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 self-start hover:bg-primary transition-all group mt-2">
                        Send Message <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>

                    <div id="fsuc" className="hidden bg-gp-bg3 border-[1.5px] border-primary p-3.5 text-gp-black text-[0.88rem] text-center mt-1">
                        ✓ Message sent! We'll be in touch within 24 hours.
                    </div>
                </form>
            </div>

        </section>
    )
}
