import { motion } from "framer-motion"
import { Video, Globe, Palette, Calendar, Camera, Image, Bot } from "lucide-react"

const services = [
    {
        icon: Bot,
        title: "AI Automation",
        description: "Custom autonomous AI agents and LLM-powered workflows that eliminate manual tasks and dramatically scale your operational efficiency.",
    },
    {
        icon: Video,
        title: "Content Creation",
        description: "Videos, Reels, and Short-form content designed to stop the scroll and drive engagement across all platforms.",
    },
    {
        icon: Globe,
        title: "Website Development",
        description: "Custom websites for modern brands integrating seamless UI with robust backend architectures that convert visitors.",
    },
    {
        icon: Palette,
        title: "Brand Storytelling",
        description: "Narrative-driven campaigns that highlight your brand's unique story, values, and craftsmanship.",
    },
    {
        icon: Calendar,
        title: "Social Media Management",
        description: "End-to-end AI-assisted content planning, creation, and execution. We handle everything while you focus on business.",
    },
    {
        icon: Camera,
        title: "Photography & Videography",
        description: "Professional shoots for products, properties, jewelry, and food. Cinematic quality that elevates your brand.",
    }
]

export default function Services() {
    return (
        <section id="services" className="py-24 md:py-32 bg-gp-bg2">
            <div className="container px-6 md:px-12 mx-auto max-w-[1400px]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="font-heading text-[0.66rem] font-bold tracking-[0.3em] uppercase text-primary mb-4 flex items-center gap-2.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-primary">
                            AI & Creative Services
                        </span>
                        <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-gp-black tracking-tight leading-[1.05]">
                            How does our AI Agency scale your business?
                        </h2>
                    </div>
                    <p className="text-lg text-gp-grey leading-relaxed max-w-[500px]">
                        By combining cutting-edge artificial intelligence with lush visual execution, our services are designed to automate operations, elevate your brand, and deliver measurable business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-10 md:p-12 relative overflow-hidden group rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 ease-out border border-white/50"
                        >
                            {/* Hover accent top border */}
                            <div className="absolute top-0 left-0 right-full h-[3px] bg-primary transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:right-0 z-10" />

                            <div className="w-14 h-14 rounded-full bg-gp-bg flex items-center justify-center mb-8 text-primary shadow-sm group-hover:scale-110 transition-transform duration-500">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading text-2xl font-extrabold text-gp-black mb-4 tracking-[0.02em]">
                                {service.title}
                            </h3>
                            <p className="text-[0.95rem] text-gp-grey leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <a href="#contact" className="inline-flex items-center gap-3 font-heading text-[0.65rem] font-bold tracking-[0.2em] uppercase text-gp-black mt-2 transition-all hover:text-primary group/link">
                                Learn More 
                                <span className="w-6 h-6 rounded-full bg-gp-bg flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-colors duration-300">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
