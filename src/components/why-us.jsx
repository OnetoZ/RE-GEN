"use client"

import { useRef } from "react"
import { Shield, Battery, Award, Clock, FileCheck, Headphones } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const features = [
    {
        icon: Shield,
        title: "50-Point Quality Check",
        description: "Rigorous testing. Hardware, software, performance. We don't miss a beat.",
        color: "text-neon-green"
    },
    {
        icon: Battery,
        title: "100% Battery Truth",
        description: "Real battery health stats. No hidden surprises. What you see is what you get.",
        color: "text-neon-pink"
    },
    {
        icon: Award,
        title: "Ironclad Warranty",
        description: "6-12 months of peace of mind. Transparent terms. Quick resolutions.",
        color: "text-neon-purple"
    },
    {
        icon: Clock,
        title: "Auto-Pilot Tracking",
        description: "WhatsApp & SMS alerts for rentals. Never miss a due date again.",
        color: "text-neon-blue"
    },
    {
        icon: FileCheck,
        title: "Verified Legit",
        description: "Proper paperwork. Original invoices. Full ownership transfer.",
        color: "text-neon-yellow"
    },
    {
        icon: Headphones,
        title: "24/7 Squad Support",
        description: "WhatsApp, phone, or in-person. We're always here when you need us.",
        color: "text-white"
    },
]

export function WhyUs() {
    const containerRef = useRef(null)

    useGSAP(() => {
        gsap.from(".feature-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y: 60,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
        })
    }, { scope: containerRef })

    return (
        <section id="why-us" ref={containerRef} className="py-24 md:py-32 bg-black relative">
            <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-b from-neon-purple/10 to-transparent blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                        Why <span className="text-stroke-2 text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-yellow">RE:GEN?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl font-medium border-l-4 border-neon-green pl-6">
                        We're not just selling laptops. We're upgrading your entire tech experience. Transparency is our currency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={index}
                                className="feature-card group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neon-green/30 transition-colors duration-500 hover:-translate-y-2"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`p-4 rounded-2xl bg-black/50 border border-white/10 group-hover:border-neon-green/50 transition-colors`}>
                                        <Icon className={`w-8 h-8 ${feature.color}`} />
                                    </div>
                                    <span className="text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors">0{index + 1}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-neon-green transition-colors">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
