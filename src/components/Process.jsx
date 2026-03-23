import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We dive deep into your brand, audience, and goals to understand your unique story.",
    },
    {
        number: "02",
        title: "Plan",
        description: "Strategy, shot lists, and mood boards tailored to optimise engagement and reach.",
    },
    {
        number: "03",
        title: "Create & Automate",
        description: "Executing autonomous AI workflows and professional content creation to produce results that scale.",
    },
    {
        number: "04",
        title: "Deliver & Grow",
        description: "We deliver assets ready for posting and analyse performance to continuously improve results.",
    },
]

export default function Process() {
    return (
        <section id="process" className="py-24 md:py-32 bg-gp-bg">
            <div className="container px-6 md:px-12 mx-auto max-w-[1400px]">
                <div className="text-center mb-20 md:mb-28">
                    <span className="font-heading text-[0.66rem] font-bold tracking-[0.3em] uppercase text-primary mb-4 flex items-center justify-center gap-2.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-primary after:content-[''] after:w-5 after:h-[1.5px] after:bg-primary">
                        How We Work
                    </span>
                    <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-gp-black tracking-tight leading-[1.05] mt-4">
                        A Simple 4-Step<br className="hidden md:block" />Recipe for Success.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1.5px] bg-border2 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative z-10 flex flex-col items-center md:items-start lg:items-center text-center md:text-left lg:text-center group"
                        >
                            <div className="w-[58px] h-[58px] rounded-full bg-white border border-border2 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(92,184,50,0.3)] transition-all duration-500">
                                <span className="font-heading text-lg font-bold text-gp-black group-hover:text-white transition-colors">{step.number}</span>
                            </div>
                            
                            <h3 className="font-heading text-2xl font-extrabold text-gp-black mb-4 tracking-[0.02em]">
                                {step.title}
                            </h3>
                            
                            <p className="text-[0.95rem] text-gp-grey leading-relaxed max-w-[280px]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
