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
                <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                        "@type": "Question",
                        "name": "How does Growplus showcase jewellery collections?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We use high-end macro videography and premium creative strategy to capture the brilliance of jewellery, creating luxurious visuals that resonate with high-net-worth clients."
                        }
                    }, {
                        "@type": "Question",
                        "name": "Does Growplus design websites for jewellers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, we build elegant, high-performance E-commerce and catalog websites specifically designed to reflect the prestige and craftsmanship of elite jewellery brands."
                        }
                    }]
                }
                `}
                </script>
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
            <section className="py-12 px-8 border-t border-border2 text-center bg-gp-bg">
                <p className="font-heading text-[0.6rem] font-bold tracking-[0.3em] uppercase text-gp-grey2">
                    Creative Strategy by <a href="/" className="text-primary hover:underline">Growplus Creative Studio</a>.
                </p>
            </section>
        </main>
    )
}
