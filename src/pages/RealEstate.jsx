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
                <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                        "@type": "Question",
                        "name": "What real estate marketing services does Growplus offer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We offer cinematic property tours, lead-generation landing pages, and AI-automated follow-up systems that help real estate developers showcase luxury properties and close deals faster."
                        }
                    }, {
                        "@type": "Question",
                        "name": "How do AI workflows help real estate agencies?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our AI workflows automate lead qualification, property inquiry handling, and drip marketing campaigns, allowing realtors to focus on closing sales rather than administrative tasks."
                        }
                    }]
                }
                `}
                </script>
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
            <section className="py-12 px-8 border-t border-border2 text-center bg-gp-bg">
                <p className="font-heading text-[0.6rem] font-bold tracking-[0.3em] uppercase text-gp-grey2">
                    Powered by <a href="/" className="text-primary hover:underline">Elite AI Workflows</a> from Growplus.
                </p>
            </section>
        </main>
    )
}
