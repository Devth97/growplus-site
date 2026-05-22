import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { mediaUrl } from '../lib/media';

export default function IntroSplash({ onFinish }) {
    const [isVisible, setIsVisible] = useState(true);
    const videoRef = useRef(null);

    const handleFinish = () => {
        if (!isVisible) return;
        setIsVisible(false);
        // Wait for the fade out animation to finish before unmounting via parent
        setTimeout(() => onFinish(), 800); 
    };

    // If video fails to autoplay (e.g. browser policy or low power mode blocking video)
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (videoRef.current && videoRef.current.paused) {
                // Autoplay blocked, bypass intro
                handleFinish();
            }
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-gp-bg flex items-center justify-center overflow-hidden"
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleFinish}
                        className="w-full h-full object-contain"
                        src={mediaUrl("growplus/intro_video.mp4")}
                    />
                    
                    {/* Skip Button */}
                    <button 
                        onClick={handleFinish}
                        className="absolute bottom-10 right-10 z-[101] text-white/50 hover:text-white text-xs md:text-sm font-bold tracking-[0.2em] font-heading uppercase transition-colors"
                    >
                        Skip
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
