import { motion } from "framer-motion"
import { clients, sectors } from "@/data/clients"
import { useState } from "react"
import ClientWork from "@/components/ClientWork"
import { Plus } from "lucide-react"
import { mediaUrl } from "@/utils/media"

const filters = [
    { id: "all", label: "All Work" },
    { id: "food-beverage", label: "F&B" },
    { id: "real-estate", label: "Real Estate" },
    { id: "jewellery", label: "Jewellery" },
]

export default function Projects() {
    const [selectedClient, setSelectedClient] = useState(null)
    const [activeFilter, setActiveFilter] = useState("all")

    const filteredClients = activeFilter === "all" 
        ? clients 
        : clients.filter(c => c.sector === activeFilter)

    return (
        <section id="work" className="py-24 md:py-32 bg-gp-bg relative">
            <div className="container px-6 md:px-12 mx-auto max-w-[1400px]">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="font-heading text-[0.66rem] font-bold tracking-[0.3em] uppercase text-primary mb-4 flex items-center gap-2.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-primary">
                            Selected Projects
                        </span>
                        <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-gp-black tracking-tight leading-[1.05]">
                            Work that<br/>speaks for itself.
                        </h2>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`font-heading text-[0.7rem] font-bold tracking-[0.16em] uppercase px-6 py-3 rounded-full cursor-pointer transition-all duration-400 ${
                                    activeFilter === filter.id
                                        ? "bg-gp-black text-white shadow-lg"
                                        : "bg-white text-gp-grey hover:bg-gp-black hover:text-white shadow-sm"
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Editorial Staggered Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                    {filteredClients.map((client, index) => {
                        // Create a staggered effect for columns
                        const isMiddleColumn = index % 3 === 1;
                        return (
                            <motion.div
                                key={client.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: (index % 3) * 0.15, ease: "easeOut" }}
                                onClick={() => setSelectedClient(client)}
                                className={`group cursor-pointer flex flex-col ${isMiddleColumn ? 'lg:mt-24' : ''}`}
                            >
                                <div className="relative overflow-hidden w-full aspect-[3/4] md:aspect-[4/5] bg-gp-bg2 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-700">
                                    <img
                                        src={mediaUrl(client.thumbnail)}
                                        alt={client.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:scale-110"
                                    />
                                    
                                    {/* Reveal overlay */}
                                    <div className="absolute inset-0 bg-gp-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.2,1.5,0.4,1)]">
                                            <Plus className="w-6 h-6 text-gp-black" />
                                        </div>
                                    </div>
                                    
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gp-black font-heading text-[0.6rem] font-bold tracking-[0.2em] uppercase shadow-sm">
                                            {sectors[client.sector]?.label || client.sector}
                                        </span>
                                    </div>
                                </div>
                                
                                <div>
                                    <span className="font-heading text-[0.65rem] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
                                        {client.category}
                                    </span>
                                    <h3 className="font-heading text-2xl font-extrabold text-gp-black mb-2 group-hover:text-primary transition-colors">
                                        {client.title}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
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
