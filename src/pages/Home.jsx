import { Hero } from "@/components/hero"
import { WhyUs } from "@/components/why-us"
import { FeaturedLaptops } from "@/components/featured-laptops"
import { RentalSystem } from "@/components/rental-system"
import { AutomationHighlight } from "@/components/automation-highlight"
import { Testimonials } from "@/components/testimonials"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Home() {
    useEffect(() => {
        // Refresh ScrollTrigger to ensure start/end positions are correct after layout
        const refresh = () => ScrollTrigger.refresh()

        // Immediate refresh and after a short delay
        refresh()
        const timer = setTimeout(refresh, 100)

        // Refresh on window load (for images/fonts)
        window.addEventListener('load', refresh)
        // Refresh on resize
        window.addEventListener('resize', refresh)

        return () => {
            clearTimeout(timer)
            window.removeEventListener('load', refresh)
            window.removeEventListener('resize', refresh)
        }
    }, [])

    return (
        <>
            <Header />
            <main className="overflow-hidden">
                <Hero />
                <WhyUs />
                <FeaturedLaptops />
                <RentalSystem />
                <AutomationHighlight />
                <Testimonials />
                <Location />
                <Contact />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    )
}
