import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Contact from "@/components/Contact"
import { Helmet } from "react-helmet-async"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

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
