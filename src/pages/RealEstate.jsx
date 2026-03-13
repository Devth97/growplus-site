import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Contact from "@/components/Contact"
import { Helmet } from "react-helmet-async"

export default function RealEstate() {
    return (
        <main>
            <Helmet>
                <title>Real Estate Content & Marketing Agency | Growplus</title>
                <meta name="description" content="Sell properties faster with cinematic real estate video tours, lead-generation websites, and premium social media content." />
                <link rel="canonical" href="https://growplus.site/real-estate-marketing" />
            </Helmet>
            <Hero
                title="Premium real estate marketing that sells properties faster"
                subtitle="Cinematic property tours, lead-gen websites, and high-end branding."
                description="We help developers and realtors showcase luxury properties through stunning visuals and performant websites."
            />
            <Projects />
            <Services />
            <Process />
            <Contact />
        </main>
    )
}
