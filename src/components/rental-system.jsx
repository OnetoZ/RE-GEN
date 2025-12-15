"use client"

import { Calendar, Bell, CreditCard, CheckCircle } from "lucide-react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const steps = [
    {
        icon: Calendar,
        title: "Pick Your Gear",
        description: "Choose from our high-performance inventory. Short-term or long-term.",
        color: "text-neon-blue",
        border: "border-neon-blue",
        bg: "bg-neon-blue/10"
    },
    {
        icon: CreditCard,
        title: "Zero Stress Deposit",
        description: "Transparent security deposit. Digital receipts. No hidden fees.",
        color: "text-neon-purple",
        border: "border-neon-purple",
        bg: "bg-neon-purple/10"
    },
    {
        icon: Bell,
        title: "Smart Alerts",
        description: "Automated WhatsApp reminders. We won't let you miss a beat.",
        color: "text-neon-pink",
        border: "border-neon-pink",
        bg: "bg-neon-pink/10"
    },
    {
        icon: CheckCircle,
        title: "Rent-to-Own",
        description: "Fall in love with the tech? Make it yours. Payments count towards ownership.",
        color: "text-neon-green",
        border: "border-neon-green",
        bg: "bg-neon-green/10"
    },
]

export function RentalSystem() {
    const containerRef = useRef(null)

    useGSAP(() => {
        // Set initial state to avoid FOUC or sticking visibility issues
        gsap.set(".rental-step", { y: 50, opacity: 0 });
        gsap.set(".connector-line", { scaleX: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse", // Good practice to reverse on scroll up if desired, or "play reverse play reverse"
            }
        })

        tl.to(".rental-step", {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "back.out(1.7)"
        })
            .to(".connector-line", {
                scaleX: 1,
                duration: 1,
                ease: "power3.inOut"
            }, "-=1") // Overlap by 1 second

        // Refresh ScrollTrigger to ensure start/end positions are correct
        ScrollTrigger.refresh();

    }, { scope: containerRef })

    return (
        <section id="rental" className="py-24 md:py-32 bg-black relative overflow-hidden" ref={containerRef}>
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Rental <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Revolution</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                        Own the experience, not the depreciation. The smartest way to use tech.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Connector Line */}
                    <div className="connector-line hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-30 origin-left" />

                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div key={index} className="rental-step relative group">
                                <div className="flex flex-col items-center text-center p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors duration-300 hover:-translate-y-2">
                                    <div className={`w-24 h-24 rounded-full ${step.bg} border-2 ${step.border} flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow duration-300`}>
                                        <Icon className={`w-10 h-10 ${step.color}`} />
                                        <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${step.bg} ${step.border} border flex items-center justify-center text-white font-black text-sm`}>
                                            {index + 1}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-medium">{step.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
