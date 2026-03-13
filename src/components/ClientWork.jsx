import { motion, AnimatePresence } from "framer-motion"
import { X, Play, Pause, Download, Image } from "lucide-react"
import { useState, useRef } from "react"
import { sectors } from "@/data/clients"

function getSectorColor(sector) {
    switch (sector) {
        case "food-beverage":
            return "text-orange-400"
        case "real-estate":
            return "text-blue-400"
        case "jewellery":
            return "text-yellow-400"
        default:
            return "text-neutral-400"
    }
}

// Video Card Component
function VideoCard({ content, isPlaying, onPlay, onPause }) {
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current?.pause();
            onPause();
        } else {
            videoRef.current?.play();
            onPlay();
        }
    }

    return (
        <div className="relative">
            {/* Type Badge */}
            <div className="absolute top-3 right-3 z-10">
                <span className="px-2 py-1 rounded-md text-xs font-medium bg-black/70 text-white border border-white/20 flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    VIDEO
                </span>
            </div>

            <div
                className="relative aspect-[9/16] bg-neutral-800 rounded-xl overflow-hidden group border border-white/5 cursor-pointer"
                onClick={togglePlay}
            >
                {!isPlaying && (
                    <>
                        <img
                            src={content.thumbnail}
                            alt="Video thumbnail"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                        </div>
                    </>
                )}

                <video
                    ref={videoRef}
                    src={content.src}
                    className={`w-full h-full object-cover ${isPlaying ? 'block' : 'hidden'}`}
                    playsInline
                    loop
                    controls={isPlaying}
                    onPause={onPause}
                />
            </div>
        </div>
    )
}

// Poster Card Component
function PosterCard({ content }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <div className="relative">
                {/* Type Badge */}
                <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-1 rounded-md text-xs font-medium bg-black/70 text-white border border-white/20 flex items-center gap-1">
                        <Image className="w-3 h-3" />
                        POSTER
                    </span>
                </div>

                <div
                    className="relative bg-neutral-800 rounded-xl overflow-hidden group border border-white/5 cursor-pointer hover:border-white/20 transition-colors"
                    onClick={() => setIsExpanded(true)}
                >
                    <img
                        src={content.src}
                        alt="Poster"
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Download className="w-8 h-8 text-white" />
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                        onClick={() => setIsExpanded(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-5xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <img
                                src={content.src}
                                alt="Poster full view"
                                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

// Content Type Icons
const contentTypeIcons = {
    video: VideoCard,
    poster: PosterCard
}

export default function ClientWork({ client, isOpen, onClose }) {
    const [playingVideoId, setPlayingVideoId] = useState(null);

    if (!isOpen || !client) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overscroll-contain touch-pan-y"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Header */}
                    <div className="p-8 md:p-12 border-b border-white/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`text-sm font-medium tracking-wider uppercase ${getSectorColor(client.sector)}`}>
                                {sectors[client.sector]?.label || client.sector}
                            </span>
                            <span className="text-white/30">•</span>
                            <span className="text-primary text-sm font-medium tracking-wider uppercase">{client.category}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">{client.title}</h2>
                        <p className="text-xl text-neutral-400 max-w-2xl">{client.description}</p>
                        {client.location && <p className="text-sm text-neutral-500 mt-2">{client.location}</p>}
                    </div>

                    {/* Content Gallery */}
                    <div className="p-8 md:p-12 bg-neutral-900/20">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-white">Content Gallery</h3>
                            <span className="text-sm text-neutral-500">{client.content?.length || 0} items</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {client.content?.map((item) => {
                                const CardComponent = contentTypeIcons[item.type];
                                if (!CardComponent) return null;

                                return (
                                    <CardComponent
                                        key={item.id}
                                        content={item}
                                        isPlaying={playingVideoId === item.id}
                                        onPlay={() => setPlayingVideoId(item.id)}
                                        onPause={() => setPlayingVideoId(null)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
