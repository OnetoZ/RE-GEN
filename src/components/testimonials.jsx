"use client"

import { Star, Quote } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const testimonials = [
    {
        name: "Rajesh K.",
        role: "Dev @ Startup",
        content: "Skeptical at first, but blown away. The battery health was exactly as promised. Best investment for my career.",
        rating: 5,
        color: "text-neon-blue",
        border: "border-neon-blue"
    },
    {
        name: "Priya S.",
        role: "Student",
        content: "The rental system is a lifesaver. Automated reminders meant I never missed a payment. Super chill experience.",
        rating: 5,
        color: "text-neon-pink",
        border: "border-neon-pink"
    },
    {
        name: "Arun P.",
        role: "Founder",
        content: "Bought 5 units for my team. Transparency 100/100. Support is actually human and helpful. RE:GEN is the future.",
        rating: 5,
        color: "text-neon-green",
        border: "border-neon-green"
    },
]

export function Testimonials() {
    const containerRef = useRef(null)

    useGSAP(() => {
        gsap.from(".testimonial-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            scale: 0.9,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "elastic.out(1, 0.8)",
        })
    }, { scope: containerRef })

    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden" ref={containerRef}>
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-neon-purple/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter">
                        The <span className="text-neon-purple">Vibe</span> Check
                    </h2>
                    <p className="text-xl text-gray-400 font-medium">
                        Don't just take our word for it. Here's what the squad says.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`testimonial-card relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors duration-300 backdrop-blur-sm`}
                        >
                            <Quote className={`absolute top-8 right-8 w-12 h-12 text-white/5`} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 fill-current ${t.color}`} />
                                ))}
                            </div>

                            <p className="text-lg text-gray-300 font-medium leading-relaxed mb-8 relative z-10">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border ${t.border} flex items-center justify-center font-bold text-white`}>
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase tracking-wide">{t.name}</p>
                                    <p className={`text-sm font-bold ${t.color}`}>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
