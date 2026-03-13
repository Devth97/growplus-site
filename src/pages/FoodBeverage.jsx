import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Contact from "@/components/Contact"
import { Helmet } from "react-helmet-async"

export default function FoodBeverage() {
    return (
        <main>
            <Helmet>
                <title>Food & Beverage Marketing Agency | Growplus</title>
                <meta name="description" content="Increase restaurant footfall and brand awareness with premium video production, websites, and social media management for F&B brands." />
                <link rel="canonical" href="https://growplus.site/food-and-beverage-marketing" />
            </Helmet>
            <Hero
                title="Sizzle your sales with premium Food & Beverage marketing"
                subtitle="High-converting menus, cinematic food videos, and websites that drive reservations."
                description="We help restaurants, cafes, and food brands increase footfall and online orders through scroll-stopping content."
            />
            <Projects />
            <Services />
            <Process />
            <Contact />
        </main>
    )
}
