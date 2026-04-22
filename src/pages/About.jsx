import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"

const team = [
    {
        name: "KHALANDAR THAMEEM",
        role: "Founding Partner / Creative Director",
        image: "/team/member2.jpg",
        bio: "Specialist in luxury branding and high-end creative strategy for global markets."
    },
    {
        name: "MOHAMMED AFZAL",
        role: "Head of Engineering / AI Architect",
        image: "/team/member1.jpg",
        bio: "Expert in autonomous agents and large-scale AI workflow integration."
    },
    {
        name: "RAVIPRAKASH K",
        role: "AI Strategist & Data Analyst",
        image: "/team/member3.jpg",
        bio: "Architecting predictive data models and intelligent growth engines for elite brands."
    }
]

const methodology = [
    {
        title: "Discovery & Audit",
        description: "Deep mapping of your current digital footprint to identify friction points and latent potential."
    },
    {
        title: "Architectural Design",
        description: "Building the custom AI infrastructure and workflow automation. See instances in [Real Estate](/real-estate-marketing) and [Jewellery](/jewellery-branding)."
    },
    {
        title: "Deployment & Refinement",
        description: "Launching the ecosystem with persistent AI-driven optimization loops. Highly effective for [Food & Beverage](/food-and-beverage-marketing) brands."
    }
]

export default function About() {
    return (
        <main className="bg-gp-bg text-gp-black">
            <Helmet>
                <title>About Us | Growplus AI Agency</title>
                <meta name="description" content="Discover the methodology and vision behind Growplus, an elite AI Automation and Creative Agency." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-40 md:pt-48 pb-24 md:pb-32 px-8 md:px-20 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="gp-eyebrow mb-6"
                >
                    Since 2022
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-heading text-5xl md:text-[5.5rem] font-bold leading-[1] tracking-tight mb-12 max-w-4xl"
                >
                    The Future of Growth, <span className="text-primary italic">Automated.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gp-grey leading-relaxed max-w-2xl"
                >
                    We architect intelligent ecosystems that bridge the gap between human intuition and machine precision. Growplus is where high-end AI meets elite creative strategy.
                </motion.p>
            </section>

            {/* Vision Section */}
            <section className="py-24 md:py-32 bg-gp-black text-white px-8 md:px-20 overflow-hidden">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="font-heading text-[0.66rem] font-bold tracking-[0.3em] uppercase text-primary mb-6 flex items-center gap-2.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-primary">
                            Our Vision
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-10 leading-[1.1]">
                            Quiet Luxury in <br />
                            <span className="text-primary">Intelligent Data.</span>
                        </h2>

                        <div className="space-y-12">
                            <div className="group">
                                <h3 className="text-xl font-bold mb-4 font-heading group-hover:text-primary transition-colors cursor-default">Ethereal Intelligence</h3>
                                <p className="text-white/50 leading-relaxed max-w-md">
                                    We believe AI shouldn't feel like software. It should feel like an invisible architect, quietly optimizing every interaction.
                                </p>
                            </div>
                            <div className="group">
                                <h3 className="text-xl font-bold mb-4 font-heading group-hover:text-primary transition-colors cursor-default">Human-First Precision</h3>
                                <p className="text-white/50 leading-relaxed max-w-md">
                                    Every line of code is an intentional stroke of progress. We don't just scale; we refine with elite strategists at the helm.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                            className="aspect-square bg-gradient-to-br from-primary/30 to-gp-black rounded-full blur-3xl absolute inset-0 -z-10"
                        />
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                        >
                            <div className="text-[0.64rem] font-bold tracking-[0.28em] uppercase text-primary mb-8 block">Metrics of Excellence</div>
                            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                                <div>
                                    <div className="text-4xl font-bold font-heading mb-1">98%</div>
                                    <div className="text-[0.64rem] text-white/40 uppercase tracking-widest font-bold">Efficiency Increase</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold font-heading mb-1">500+</div>
                                    <div className="text-[0.64rem] text-white/40 uppercase tracking-widest font-bold">Automations Live</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold font-heading mb-1">24/7</div>
                                    <div className="text-[0.64rem] text-white/40 uppercase tracking-widest font-bold">Operational Drift</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold font-heading mb-1">Elite</div>
                                    <div className="text-[0.64rem] text-white/40 uppercase tracking-widest font-bold">Client Tier</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-24 md:py-32 px-8 md:px-20 container mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="gp-eyebrow inline-flex mb-4"
                    >
                        Strategic Process
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">The Growplus Methodology</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-border2">
                    {methodology.map((m, idx) => (
                        <div key={idx} className="p-12 border-r border-b border-border2 hover:bg-gp-bg2 transition-colors group">
                            <div className="text-[0.64rem] font-bold text-primary mb-6 font-heading">0{idx + 1} /</div>
                            <h3 className="text-2xl font-bold font-heading mb-6 group-hover:text-primary transition-colors">{m.title}</h3>
                            <p className="text-gp-grey leading-relaxed text-[0.95rem]">{m.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 md:py-32 px-8 md:px-20 bg-gp-bg2">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <div className="gp-eyebrow mb-4">Our Collective</div>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading">The Architects</h2>
                        </div>
                        <p className="max-w-md text-gp-grey text-right">
                            A specialized group of thinkers and builders dedicated to the quiet luxury of high-tech automation and creative precision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-gp-bg">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-lg font-bold font-heading mb-1">{t.name}</h3>
                                <p className="text-[0.7rem] text-primary font-bold uppercase tracking-widest mb-3">{t.role}</p>
                                <p className="text-sm text-gp-grey leading-relaxed">{t.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-8 md:px-20 text-center container mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold font-heading mb-12 tracking-tighter">
                    Ready to <span className="text-primary italic">evolve?</span>
                </h2>
                <p className="text-lg text-gp-grey mb-12 max-w-xl mx-auto">
                    Experience the quiet luxury of intelligent growth. Let's build your future architecture today.
                </p>
                <a href="https://wa.me/919901542387" target="_blank" rel="noopener noreferrer" className="bg-gp-black text-white px-10 py-5 rounded-full font-heading font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all">
                    Initiate Audit
                </a>
            </section>
        </main>
    )
}
