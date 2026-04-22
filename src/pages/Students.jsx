import { motion } from "framer-motion"
import { ArrowRight, Zap, Target, Unlock, Flag } from "lucide-react"
import { Helmet } from "react-helmet-async"

const ENGINEERKIT_URL = "https://engineerkit-ai.vercel.app/"

const features = [
    {
        icon: Zap,
        emoji: "⚡",
        title: "Instant Generation",
        description: "No sign-up, no waiting. Your unique project idea in under 30 seconds.",
    },
    {
        icon: Target,
        emoji: "🎯",
        title: "100% Original",
        description: "Every idea is freshly AI-generated for your exact branch and interest.",
    },
    {
        icon: Unlock,
        emoji: "🔓",
        title: "Always Free",
        description: "No paywall, no credits, no hidden costs. GitHub repos revealed for free.",
    },
    {
        icon: Flag,
        emoji: "🇮🇳",
        title: "Built for India",
        description: "Tailored for VTU, Anna University, JNTUH & other Indian engineering curricula.",
    },
]

const steps = [
    {
        num: "01",
        title: "Pick Your Stack",
        description: "Select your engineering branch, area of interest, and academic year.",
    },
    {
        num: "02",
        title: "AI Crafts Your Idea",
        description: "Llama 3.3 70B generates a unique, original project idea tailored just for you.",
    },
    {
        num: "03",
        title: "Get GitHub Repos",
        description: "Curated real GitHub repos matching your tech stack — revealed instantly, 100% free.",
    },
]

const tags = [
    "Machine Learning", "IoT", "Web Development", "Computer Vision", "NLP", "Blockchain",
    "AR / VR", "Cybersecurity", "Cloud Computing", "Deep Learning", "Flutter", "React",
    "Python", "TensorFlow", "OpenCV", "FastAPI", "Supabase", "Firebase", "Node.js", "Next.js",
    "Robotics", "Embedded Systems", "Data Analytics", "Edge Computing", "Mobile Dev",
    "TypeScript", "Docker", "Kubernetes",
]

export default function Students() {
    return (
        <main>
            <Helmet>
                <title>Students | Growplus — EngineerKit AI for Indian Engineering Students</title>
                <meta name="description" content="EngineerKit AI — Free AI project idea generator for Indian engineering students. Get a unique project idea + curated GitHub repos instantly. Built for VTU, Anna University, JNTUH & more." />
            </Helmet>

            {/* Hero */}
            <section className="relative min-h-[88vh] flex items-center bg-gp-bg overflow-hidden pt-24">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

                <div className="container px-6 md:px-16 mx-auto max-w-[1400px] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left — Copy */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="font-heading text-[0.65rem] font-bold tracking-[0.2em] uppercase text-primary">
                                    AI · Free · Indian Engineering
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.15 }}
                                className="font-heading text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold leading-[1.0] tracking-tighter text-gp-black mb-6"
                            >
                                Turn Your<br />
                                <span style={{ WebkitTextStroke: '1.5px var(--black)', color: 'transparent' }}>Semester Into</span><br />
                                <span className="text-primary italic">A Project.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="text-base md:text-lg text-gp-grey leading-relaxed max-w-[500px] mb-10"
                            >
                                Get a unique AI-generated engineering project idea + curated GitHub repos. Completely free for Indian students.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.45 }}
                                className="flex flex-wrap items-center gap-6"
                            >
                                <a
                                    href={ENGINEERKIT_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative bg-gp-black text-white px-10 py-5 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                                >
                                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative z-10 font-heading text-[0.74rem] font-bold tracking-[0.18em] uppercase flex items-center gap-2">
                                        ✦ Generate My Project Idea
                                    </span>
                                </a>

                                <a
                                    href={ENGINEERKIT_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-4 font-heading text-[0.74rem] font-bold tracking-[0.18em] uppercase text-gp-black hover:gap-6 transition-all group"
                                >
                                    Get Started
                                    <div className="w-12 h-12 border-[1.5px] border-border2 rounded-full flex items-center justify-center group-hover:bg-gp-black group-hover:border-gp-black group-hover:text-white transition-all text-gp-black">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </a>
                            </motion.div>
                        </div>

                        {/* Right — Tool card */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="rounded-3xl border border-border2 bg-white shadow-[0_32px_80px_rgba(0,0,0,0.07)] overflow-hidden">
                                {/* Header */}
                                <div className="px-8 pt-8 pb-6 border-b border-border2 bg-gp-bg2">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="font-heading text-lg font-extrabold text-gp-black tracking-tight">EngineerKit <span className="text-primary">AI</span></p>
                                        <span className="font-heading text-[0.6rem] font-bold tracking-[0.2em] uppercase bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1">Free for all students</span>
                                    </div>
                                    <p className="font-body text-xs text-gp-grey">AI-generated project ideas for Indian engineering students</p>
                                </div>

                                {/* Form mockup */}
                                <div className="p-8 space-y-4">
                                    <div>
                                        <label className="font-heading text-[0.6rem] font-bold tracking-[0.2em] uppercase text-gp-black block mb-2">Engineering Branch</label>
                                        <div className="w-full border border-border2 rounded-xl px-4 py-3 font-body text-sm text-gp-grey bg-gp-bg flex justify-between items-center">
                                            <span>Select your branch...</span>
                                            <span className="text-gp-grey2">▼</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="font-heading text-[0.6rem] font-bold tracking-[0.2em] uppercase text-gp-black block mb-2">Area of Interest / Primary Technology</label>
                                        <div className="w-full border border-border2 rounded-xl px-4 py-3 font-body text-sm text-gp-grey bg-gp-bg flex justify-between items-center">
                                            <span>Select your interest...</span>
                                            <span className="text-gp-grey2">▼</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="font-heading text-[0.6rem] font-bold tracking-[0.2em] uppercase text-gp-black block mb-2">Academic Year</label>
                                        <div className="flex gap-2">
                                            {["1st Y", "2nd Y", "3rd Y", "4th Y"].map((y) => (
                                                <div key={y} className={`flex-1 border rounded-xl px-2 py-2.5 font-heading text-[0.6rem] font-bold text-center cursor-default ${y === "4th Y" ? "border-primary bg-primary/10 text-primary" : "border-border2 text-gp-grey bg-gp-bg"}`}>
                                                    {y}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <a
                                        href={ENGINEERKIT_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-gp-black text-white text-center font-heading text-[0.7rem] font-bold tracking-[0.18em] uppercase py-4 rounded-xl hover:bg-primary transition-colors duration-300 mt-2"
                                    >
                                        ✦ Generate My Project Idea
                                    </a>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/6 rounded-full blur-2xl pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-24 md:py-32 bg-gp-bg2">
                <div className="container px-6 md:px-12 mx-auto max-w-[1400px]">
                    <div className="text-center mb-20">
                        <span className="font-heading text-[0.66rem] font-bold tracking-[0.3em] uppercase text-primary mb-4 flex items-center justify-center gap-2.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-primary after:content-[''] after:w-5 after:h-[1.5px] after:bg-primary">
                            How It Works
                        </span>
                        <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-gp-black tracking-tight leading-[1.05] mt-4">
                            Three steps.<br />Zero friction.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="p-10 md:p-12 relative overflow-hidden group rounded-2xl gp-glow-card"
                            >
                                <div className="absolute top-0 left-0 right-full h-[3px] bg-primary transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:right-0 z-10" />
                                <div className="font-heading text-6xl font-extrabold text-primary/15 mb-6 leading-none">
                                    {step.num}
                                </div>
                                <h3 className="font-heading text-2xl font-extrabold text-gp-black mb-4 tracking-[0.02em]">
                                    {step.title}
                                </h3>
                                <p className="text-[0.95rem] text-gp-grey leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scrolling tag marquee */}
            <section className="py-10 bg-gp-black overflow-hidden">
                <div className="flex gap-6 marquee-track whitespace-nowrap w-max">
                    {[...tags, ...tags].map((tag, i) => (
                        <span key={i} className="font-heading text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/40 shrink-0">
                            {tag} <span className="text-primary/50 mx-2">·</span>
                        </span>
                    ))}
                </div>
            </section>

            {/* Why EngineerKit */}
            <section className="py-24 md:py-32 bg-gp-bg">
                <div className="container px-6 md:px-12 mx-auto max-w-[1400px]">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <span className="font-heading text-[0.66rem] font-bold tracking-[0.3em] uppercase text-primary mb-4 flex items-center gap-2.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-primary">
                                Why EngineerKit AI?
                            </span>
                            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-gp-black tracking-tight leading-[1.05] mt-4">
                                The fastest way to start your final year project.
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {features.map((f, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-10 md:p-12 relative overflow-hidden group rounded-2xl gp-glow-card"
                            >
                                <div className="absolute top-0 left-0 right-full h-[3px] bg-primary transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:right-0 z-10" />
                                <div className="text-4xl mb-8">{f.emoji}</div>
                                <h3 className="font-heading text-2xl font-extrabold text-gp-black mb-4 tracking-[0.02em]">
                                    {f.title}
                                </h3>
                                <p className="text-[0.95rem] text-gp-grey leading-relaxed">
                                    {f.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-24 md:py-32 bg-gp-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_65%)] opacity-20 pointer-events-none" />
                <div className="container px-6 md:px-16 mx-auto max-w-[1400px] relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="font-heading text-[0.66rem] font-bold tracking-[0.3em] uppercase text-primary mb-6 flex items-center justify-center gap-2.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-primary after:content-[''] after:w-5 after:h-[1.5px] after:bg-primary">
                            Start Today
                        </span>
                        <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.0] mb-6">
                            ✦ Generate My Project<br />
                            <span className="text-primary italic">Idea — Free</span>
                        </h2>
                        <p className="text-lg text-white/50 leading-relaxed max-w-[480px] mx-auto mb-4">
                            AI by Llama 3.3 70B via NVIDIA NIM · Repos from GitHub
                        </p>
                        <p className="text-sm text-white/30 mb-12">Built for Indian engineering students</p>
                        <a
                            href={ENGINEERKIT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-block bg-primary text-white px-12 py-5 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,200,80,0.3)]"
                        >
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10 font-heading text-[0.74rem] font-bold tracking-[0.18em] uppercase group-hover:text-gp-black transition-colors duration-300 flex items-center gap-2">
                                Get Started — It's Free
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
