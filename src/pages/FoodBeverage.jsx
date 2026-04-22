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
                <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                        "@type": "Question",
                        "name": "How does Growplus help food brands?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Growplus provides cinematic food videography, high-converting digital menus, and AI-driven social media management specifically tailored for restaurants and cafes to drive reservations and footfall."
                        }
                    }, {
                        "@type": "Question",
                        "name": "Can Growplus automate restaurant bookings?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, we architect intelligent AI workflows that handle reservation inquiries, customer feedback, and automated marketing loops for F&B businesses."
                        }
                    }]
                }
                `}
                </script>
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
            <section className="py-12 px-8 border-t border-border2 text-center bg-gp-bg">
                <p className="font-heading text-[0.6rem] font-bold tracking-[0.3em] uppercase text-gp-grey2">
                    Part of the <a href="/" className="text-primary hover:underline">Growplus AI Automation Agency</a> ecosystem.
                </p>
            </section>
        </main>
    )
}
