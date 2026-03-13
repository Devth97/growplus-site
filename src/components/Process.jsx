import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We dive deep into your brand, menu, and target audience to understand your unique flavor.",
    },
    {
        number: "02",
        title: "Plan",
        description: "Strategy, shot lists, and mood boards tailored to maximize engagement and reach.",
    },
    {
        number: "03",
        title: "Create",
        description: "Professional shooting and AI-enhanced editing to produce mouth-watering content.",
    },
    {
        number: "04",
        title: "Deliver & Optimize",
        description: "We deliver assets ready for posting and analyze performance to keep improving.",
    },
]

export default function Process() {
    return (
        <section id="process" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-6 mx-auto max-w-7xl relative z-10">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
                    >
                        How We <span className="text-gradient">Work</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        A simple 4-step recipe for success.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group"
                        >
                            {/* Connector Line (Desktop) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-white/10" />
                            )}

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors duration-300 shadow-lg shadow-black/50">
                                    <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-heading">{step.title}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed max-w-[250px]">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
