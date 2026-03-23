import { motion, AnimatePresence } from "framer-motion"
import { X, Play, Download, Image as ImageIcon } from "lucide-react"
import { useState, useRef } from "react"
import { sectors } from "@/data/clients"

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
                <span className="px-2 py-1 rounded-sm text-[0.6rem] font-heading font-bold tracking-[0.2em] bg-white text-gp-black shadow-sm flex items-center gap-1 uppercase">
                    <Play className="w-3 h-3" />
                    Video
                </span>
            </div>

            <div
                className="relative aspect-[9/16] bg-gp-bg3 rounded-none overflow-hidden group border border-border2 cursor-pointer transition-all hover:border-gp-black"
                onClick={togglePlay}
            >
                {!isPlaying && (
                    <>
                        <img
                            src={content.thumbnail}
                            alt="Video thumbnail"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-6 h-6 text-gp-black fill-gp-black ml-1" />
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
                    <span className="px-2 py-1 rounded-sm text-[0.6rem] font-heading font-bold tracking-[0.2em] bg-white text-gp-black shadow-sm flex items-center gap-1 uppercase">
                        <ImageIcon className="w-3 h-3" />
                        Poster
                    </span>
                </div>

                <div
                    className="relative bg-gp-bg3 rounded-none overflow-hidden group border border-border2 cursor-pointer hover:border-gp-black transition-colors"
                    onClick={() => setIsExpanded(true)}
                >
                    <img
                        src={content.src}
                        alt="Poster"
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <Download className="w-5 h-5 text-gp-black" />
                        </div>
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
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-gp-black/95 p-4"
                        onClick={() => setIsExpanded(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="relative max-w-5xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="absolute -top-12 right-0 p-2 text-white hover:text-primary transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <img
                                src={content.src}
                                alt="Poster full view"
                                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
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
                className="fixed inset-0 z-50 flex items-center justify-center bg-gp-black/60 backdrop-blur-sm p-4 md:p-8"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.98, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.98, opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gp-bg border border-border2 shadow-2xl overscroll-contain touch-pan-y"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-50 p-2 text-gp-grey hover:text-gp-black transition-colors"
                    >
                        <X className="w-7 h-7" />
                    </button>

                    {/* Header */}
                    <div className="p-8 md:p-14 border-b border-border2 bg-gp-bg2">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="font-heading text-[0.66rem] font-bold tracking-[0.2em] uppercase text-gp-black">
                                {sectors[client.sector]?.label || client.sector}
                            </span>
                            <span className="text-border2">—</span>
                            <span className="font-heading text-[0.66rem] font-bold tracking-[0.2em] uppercase text-primary text-gradient">
                                {client.category}
                            </span>
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gp-black tracking-tight mb-4">{client.title}</h2>
                        <p className="text-base text-gp-grey leading-relaxed max-w-3xl">{client.description}</p>
                        {client.location && <p className="text-[0.8rem] font-bold font-heading uppercase tracking-[0.1em] text-gp-grey mt-6">{client.location}</p>}
                    </div>

                    {/* Content Gallery */}
                    <div className="p-8 md:p-14 bg-gp-bg">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="font-heading text-2xl font-extrabold text-gp-black tracking-tight">Content Gallery</h3>
                            <span className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.15em] text-gp-grey">{client.content?.length || 0} items</span>
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
