"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Laptop, Shield, Zap } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function Hero() {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const contentRef = useRef(null)
    const floatingRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
        })
            .from(contentRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }, "-=1")
            .from(".hero-stat", {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "back.out(1.7)",
            }, "-=0.5")

        // Mouse movement parallax effect
        const handleMouseMove = (e) => {
            if (!containerRef.current) return
            const { clientX, clientY } = e
            const x = (clientX / window.innerWidth - 0.5) * 20
            const y = (clientY / window.innerHeight - 0.5) * 20

            gsap.to(titleRef.current, {
                x: x * 2,
                y: y * 2,
                duration: 1,
                ease: "power2.out",
            })

            gsap.to(floatingRef.current, {
                x: -x * 4,
                y: -y * 4,
                duration: 2,
                ease: "power2.out",
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
        >
            {/* Dynamic Background Elements */}
            <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-neon-green/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-[40%] left-[60%] w-48 h-48 bg-neon-blue/20 rounded-full blur-[80px]" />
            </div>

            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div
                    ref={contentRef}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-sm font-bold tracking-wider mb-8 uppercase"
                >
                    <Zap className="w-4 h-4 fill-current" />
                    Next-Gen Tech • Verified Quality
                </div>

                <h1 ref={titleRef} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-foreground mb-8 tracking-tighter leading-[0.9]">
                    FUTURE <span className="text-stroke-2 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue">READY</span>
                    <br />
                    <span className="text-neon-green">LAPTOPS.</span>
                </h1>

                <div ref={contentRef} className="max-w-3xl mx-auto">
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-medium">
                        Premium refurbished tech that fits your vibe and your budget.
                        <span className="text-foreground font-bold"> 50-point checks</span>.
                        <span className="text-foreground font-bold"> 100% Transparent</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                        <Button size="lg" className="bg-neon-green text-black hover:bg-neon-green/90 px-10 py-8 text-xl font-black tracking-wide hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,157,0.4)]">
                            SHOP NOW <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                        <Button size="lg" variant="outline" className="px-10 py-8 text-xl border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white font-bold tracking-wide hover:scale-105 transition-transform bg-transparent">
                            RENT IT
                        </Button>
                    </div>

                    {/* Trust Indicators - Glassmorphism */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { icon: Shield, text: "50-Point Quality Check", color: "text-neon-purple" },
                            { icon: Laptop, text: "Battery Health Report", color: "text-neon-blue" },
                            { icon: Zap, text: "Instant Rental Approval", color: "text-neon-yellow" },
                        ].map((item, i) => (
                            <div key={i} className="hero-stat flex flex-col items-center gap-3 p-6 rounded-2xl glass-panel hover:border-neon-green/50 transition-colors duration-300 group">
                                <item.icon className={`w-10 h-10 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                                <p className="text-base font-bold text-foreground/90 uppercase tracking-wide">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
