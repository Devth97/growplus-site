import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Contact from "@/components/Contact"
import { Helmet } from "react-helmet-async"

export default function Home() {
    return (
        <main>
            <Helmet>
                <title>Growplus | Creative Agency - Content & Websites</title>
                <meta name="description" content="Premium content creation and website development for Food & Beverage, Real Estate, and Jewellery brands." />
            </Helmet>
            <Hero />
            <Projects />
            <Services />
            <Process />
            <Contact />
        </main>
    )
}
