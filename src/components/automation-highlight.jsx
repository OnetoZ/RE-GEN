"use client"

import { useState, useEffect } from "react"
import { Bell, MessageSquare, Calendar, CheckCircle2 } from "lucide-react"

export function AutomationHighlight() {
    const [animationStep, setAnimationStep] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationStep((prev) => (prev + 1) % 4)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 text-balance uppercase tracking-tighter">
                            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">Automation</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed font-medium">
                            Never miss a rental due date again. Our automated system sends timely reminders via WhatsApp and SMS,
                            keeping both you and us synchronized.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Bell, title: "5-Day Advance Notice", text: "Get notified well in advance to plan your payment or renewal.", color: "text-neon-pink", bg: "bg-neon-pink/10" },
                                { icon: MessageSquare, title: "Multi-Channel Reminders", text: "Receive alerts on WhatsApp, SMS, and Email - never miss a message.", color: "text-neon-blue", bg: "bg-neon-blue/10" },
                                { icon: CheckCircle2, title: "Easy Renewals", text: "One-click renewal process with digital payment options.", color: "text-neon-green", bg: "bg-neon-green/10" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className={`w-12 h-12 rounded-xl ${item.bg} border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        <item.icon className={`w-6 h-6 ${item.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                                        <p className="text-gray-400 font-medium">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 rounded-full blur-3xl" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { icon: Calendar, title: "Day 1", text: "Rental period starts", color: "text-neon-blue", border: "border-neon-blue", bg: "bg-neon-blue/10" },
                                        { icon: Bell, title: "Day 25", text: "\"Rent due in 5 days\" - WhatsApp reminder", color: "text-neon-pink", border: "border-neon-pink", bg: "bg-neon-pink/10" },
                                        { icon: MessageSquare, title: "Day 28", text: "\"Rent due in 2 days\" - SMS alert", color: "text-neon-purple", border: "border-neon-purple", bg: "bg-neon-purple/10" },
                                        { icon: CheckCircle2, title: "Day 30", text: "Payment received - Thank you!", color: "text-neon-green", border: "border-neon-green", bg: "bg-neon-green/10" }
                                    ].map((step, index) => (
                                        <div
                                            key={index}
                                            className={`${step.bg} rounded-2xl p-6 border-l-4 ${step.border} transition-all duration-500 ${animationStep === index ? "opacity-100 scale-100 shadow-[0_0_20px_rgba(0,0,0,0.3)]" : "opacity-40 scale-95"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <step.icon className={`w-5 h-5 ${step.color}`} />
                                                <span className="font-bold text-white uppercase tracking-wider">{step.title}</span>
                                            </div>
                                            <p className="text-sm text-gray-300 font-medium">{step.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
