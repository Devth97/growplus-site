import { motion } from "framer-motion"
import { Video, Globe, Palette, Calendar, Camera, Image } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const services = [
    {
        icon: Video,
        title: "Content Creation",
        description: "Videos, Reels, and Short-form content designed to stop the scroll and drive engagement across all platforms.",
    },
    {
        icon: Globe,
        title: "Website Development",
        description: "Custom websites for F&B, Real Estate, and Jewellery brands that convert visitors into customers.",
    },
    {
        icon: Palette,
        title: "Brand Storytelling",
        description: "Narrative-driven campaigns that highlight your brand's unique story, values, and craftsmanship.",
    },
    {
        icon: Calendar,
        title: "Social Media Management",
        description: "End-to-end content planning, creation, and execution. We handle everything while you focus on business.",
    },
    {
        icon: Camera,
        title: "Photography & Videography",
        description: "Professional shoots for products, properties, jewelry, and food. Cinematic quality that elevates your brand.",
    },
    {
        icon: Image,
        title: "Poster & Graphic Design",
        description: "High-impact visual designs for posters, flyers, and social media graphics that demand attention.",
    },
]

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#050505]">
            <div className="container px-6 mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
                    >
                        Our <span className="text-gradient">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        Everything you need to dominate your industry online.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="glass-card h-full border-white/5 hover:bg-neutral-800/50">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-white font-heading">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
