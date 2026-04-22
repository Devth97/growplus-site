import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { Star, ShieldCheck, Globe, Zap } from "lucide-react"

const reviews = [
    {
        name: "Praveen",
        role: "Owner of Snow Spoon, Puttur",
        text: "Growplus transformed our cafe's digital presence. The AI automation in our backend operations allowed us to focus on our desserts while our reach grew exponentially in the region. Their work in F&B is truly innovative.",
        logo: "SS"
    },
    {
        name: "Nagendra Kamath",
        role: "CEO of Popular Nutrition",
        text: "Scaling a Bakery brand requires both trust and technology. Growplus implemented AI strategies and creative content that optimized our customer journey, allowing us to build deeper connections with our health-conscious audience across Karnataka while automating our expansion.",
        logo: "NK"
    },
    {
        name: "Rohan Shetty",
        role: "Managing Director, Skyline Estates",
        text: "The precision in their workflow is what set them apart. They didn't just build a website for our luxury villas in Bangalore; they built an intelligent engine that handles inquiries and showcases our properties with architectural perfection.",
        logo: "SE"
    },
    {
        name: "Siraj",
        role: "Owner of SS Masala",
        text: "Being a brand since 1972, we needed to evolve. Growplus automated our marketing workflows, ensuring our legacy food products reach a much wider modern audience with sophisticated creative strategy and automation.",
        logo: "SM"
    }
]

const stats = [
    { icon: <Zap className="w-5 h-5" />, value: "100+", label: "Automations Live", color: "from-primary to-green-300" },
    { icon: <Globe className="w-5 h-5" />, value: "12+", label: "Countries Reached", color: "from-blue-400 to-primary" },
    { icon: <ShieldCheck className="w-5 h-5" />, value: "50+", label: "Elite Brands", color: "from-primary to-emerald-400" },
]

export default function Reviews() {
    return (
        <main className="bg-gp-bg text-gp-black">
            <Helmet>
                <title>Success Stories | Growplus AI Agency Testimonials</title>
                <meta name="description" content="Discover how Growplus has transformed businesses globally through elite AI automation and premium creative strategy." />
            </Helmet>

            {/* Hero */}
            <section className="pt-40 md:pt-48 pb-20 md:pb-32 px-8 md:px-20 container mx-auto text-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="gp-eyebrow inline-flex mb-8"
                >
                    Elite Performance
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="font-heading text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-gp-black mb-12"
                >
                    Proven <span className="text-primary italic">Success.</span><br />
                    Sophisticated <span style={{ WebkitTextStroke: '1px var(--black)', color: 'transparent' }}>Scale.</span>
                </motion.h1>

                <p className="text-lg md:text-xl text-gp-grey leading-relaxed max-w-2xl mx-auto mb-16 px-4">
                    Explore testimonials from our elite collective of clients who have integrated artificial intelligence into their core DNA for exponential growth.
                </p>

                {/* Stat Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {stats.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 bg-white border border-border2 rounded-2xl flex flex-col items-center justify-center group hover:border-primary transition-all duration-500"
                        >
                            <div className={`p-4 rounded-full bg-gp-bg text-primary mb-6 transition-transform group-hover:scale-110`}>
                                {s.icon}
                            </div>
                            <div className="text-4xl font-bold font-heading mb-1 text-gp-black">{s.value}</div>
                            <div className="text-[0.66rem] uppercase tracking-[0.2em] font-bold text-gp-grey">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials Grid Section */}
            <section className="py-24 md:py-32 px-8 md:px-20 bg-gp-bg2 border-y border-border2">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {reviews.map((r, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-12 md:p-16 rounded-[2rem] border border-transparent hover:border-primary/20 transition-all duration-700 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group"
                        >
                            <div className="absolute top-12 right-12 opacity-[0.03] text-primary group-hover:opacity-10 transition-opacity">
                                <Star className="w-20 h-20 fill-current" />
                            </div>

                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold font-heading text-lg">
                                    {r.logo}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-heading">{r.name}</h3>
                                    <p className="text-[0.66rem] font-bold uppercase tracking-widest text-primary">{r.role}</p>
                                </div>
                            </div>

                            <blockquote className="text-xl md:text-2xl font-body italic text-gp-black leading-relaxed relative">
                                <span className="text-5xl text-primary font-serif absolute -left-8 -top-4 opacity-20">"</span>
                                {r.text}
                            </blockquote>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* Map Placeholder / Future Strategy */}
            <section className="py-32 bg-gp-black text-white px-8 md:px-20 relative overflow-hidden">
                <div className="container mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="max-w-xl">
                            <div className="gp-eyebrow mb-6">Global Scale</div>
                            <h2 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-8">
                                Engineering Growth <br />
                                <span className="text-primary italic">Beyond Boundaries.</span>
                            </h2>
                            <p className="text-white/50 text-lg leading-relaxed mb-12">
                                Our presence spans across multiple industries and continents, delivering sophisticated automation that works while the world sleeps.
                            </p>
                            <div className="flex gap-16">
                                <div>
                                    <div className="text-3xl font-bold font-heading text-primary mb-1">99%</div>
                                    <div className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-white/40">Uptime Reliability</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold font-heading text-primary mb-1">Luxury</div>
                                    <div className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-white/40">Industry Focus</div>
                                </div>
                            </div>
                        </div>

                        {/* Minimalist Map Illusion */}
                        <div className="relative aspect-video lg:aspect-square flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-150" />
                            <div className="w-full h-full relative z-20 opacity-30">
                                {/* Simple dot grid map effect */}
                                <div className="grid grid-cols-12 gap-4 h-full w-full opacity-50">
                                    {Array.from({ length: 144 }).map((_, i) => (
                                        <div key={i} className={`w-1 h-1 rounded-full ${Math.random() > 0.8 ? 'bg-primary' : 'bg-white/10'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Glowing CTA Footer */}
            <section className="py-40 bg-gp-bg text-center relative px-8 overflow-hidden">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h2 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-12">
                        READY TO <span className="text-primary">JOIN THEM?</span>
                    </h2>
                    <p className="text-lg text-gp-grey mb-16 max-w-xl mx-auto px-4">
                        Step into the future of elite business growth. Request your personalized automation audit and elevate your operations.
                    </p>
                    <a href="https://wa.me/919901542387" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-green-400 to-primary group-hover:from-green-400 group-hover:to-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 shadow-[0_0_50px_rgba(92,184,50,0.3)] hover:shadow-[0_0_80px_rgba(92,184,50,0.5)] transition-shadow">
                        <span className="relative px-12 py-5 transition-all ease-in duration-75 bg-gp-black rounded-full group-hover:bg-opacity-0 font-heading font-bold uppercase tracking-widest text-xs">
                            Start Success Journey
                        </span>
                    </a>
                </motion.div>

                {/* Background Textural Glow */}
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[150px] opacity-30 rounded-full" />
            </section>
        </main>
    )
}
