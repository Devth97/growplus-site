import { GlowingEffect } from "@/components/ui/glowing-effect"
import { motion } from "framer-motion"
import { clients, sectors } from "@/data/clients"
import { useState } from "react"
import ClientWork from "@/components/ClientWork"

const filters = [
    { id: "all", label: "All" },
    { id: "food-beverage", label: "Food & Beverage" },
    { id: "real-estate", label: "Real Estate" },
    { id: "jewellery", label: "Jewellery" },
]

function getSectorColor(sector) {
    switch(sector) {
        case "food-beverage":
            return "bg-orange-500/20 text-orange-400 border-orange-500/30"
        case "real-estate":
            return "bg-blue-500/20 text-blue-400 border-blue-500/30"
        case "jewellery":
            return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
        default:
            return "bg-neutral-500/20 text-neutral-400 border-neutral-500/30"
    }
}

export default function Projects() {
    const [selectedClient, setSelectedClient] = useState(null)
    const [activeFilter, setActiveFilter] = useState("all")

    const filteredClients = activeFilter === "all" 
        ? clients 
        : clients.filter(c => c.sector === activeFilter)

    return (
        <section id="work" className="py-24 bg-[#050505]">
            <div className="container px-6 mx-auto max-w-7xl">
                <div className="mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
                    >
                        Selected <span className="text-gradient">Creations</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        Crafting premium content across Food & Beverage, Real Estate, and Jewellery industries.
                    </motion.p>
                </div>

                {/* Sector Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-3 mb-12"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeFilter === filter.id
                                    ? "bg-primary text-black"
                                    : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredClients.map((client, index) => (
                        <motion.div
                            key={client.id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedClient(client)}
                            className="cursor-pointer group"
                        >
                            <GlowingEffect className="h-full">
                                <div className="flex flex-col h-full">
                                    <div className="aspect-video w-full overflow-hidden bg-neutral-900 border-b border-white/5 relative">
                                        <img
                                            src={client.thumbnail}
                                            alt={client.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Sector Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSectorColor(client.sector)}`}>
                                                {sectors[client.sector]?.label || client.sector}
                                            </span>
                                        </div>

                                        {/* Overlay instruction */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">View Work</span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col justify-end">
                                        <div className="mb-2">
                                            <span className="text-primary text-sm font-medium tracking-wider uppercase">{client.category}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{client.title}</h3>
                                        <p className="text-white/60 line-clamp-3">{client.description}</p>
                                        {client.location && <p className="text-sm text-white/40 mt-2">{client.location}</p>}
                                    </div>
                                </div>
                            </GlowingEffect>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ClientWork
                client={selectedClient}
                isOpen={!!selectedClient}
                onClose={() => setSelectedClient(null)}
            />
        </section>
    )
}
