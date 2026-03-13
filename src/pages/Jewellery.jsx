import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Contact from "@/components/Contact"
import { Helmet } from "react-helmet-async"

export default function Jewellery() {
    return (
        <main>
            <Helmet>
                <title>Jewellery Branding & Marketing Agency | Growplus</title>
                <meta name="description" content="Elevate your jewellery brand with luxurious product videography, stunning social media feeds, and elegant website design." />
                <link rel="canonical" href="https://growplus.site/jewellery-branding" />
            </Helmet>
            <Hero
                title="Luxurious branding for high-end jewellery collections"
                subtitle="Elegant video production, gorgeous posters, and premium websites."
                description="We help jewellers capture the sparkle and prestige of their collections to attract high-net-worth clients."
            />
            <Projects />
            <Services />
            <Process />
            <Contact />
        </main>
    )
}
