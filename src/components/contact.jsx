"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, MapPin, Phone, Mail } from "lucide-react"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission here
    }

    return (
        <section id="contact" className="py-24 md:py-32 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">
                            Hit Us <span className="text-neon-green">Up</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 font-medium max-w-md">
                            Got questions? Need a custom quote? Or just want to talk tech? We're all ears.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: MapPin, title: "HQ Location", text: "Chennai, Tamil Nadu", color: "text-neon-purple" },
                                { icon: Phone, title: "Call / WhatsApp", text: "+91 98765 43210", color: "text-neon-blue" },
                                { icon: Mail, title: "Email Us", text: "hello@regen-laptops.com", color: "text-neon-pink" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-${item.color.split('-')[1]}-${item.color.split('-')[2]} transition-colors duration-300`}>
                                        <item.icon className={`w-8 h-8 ${item.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-1">{item.title}</h3>
                                        <p className="text-2xl font-bold text-white">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-neon-green uppercase tracking-wider">Name</label>
                                    <Input
                                        className="bg-black/50 border-white/10 text-white h-14 rounded-xl focus-visible:ring-neon-green focus-visible:border-neon-green font-medium"
                                        placeholder="Cyber Punk"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-neon-blue uppercase tracking-wider">Phone</label>
                                    <Input
                                        className="bg-black/50 border-white/10 text-white h-14 rounded-xl focus-visible:ring-neon-blue focus-visible:border-neon-blue font-medium"
                                        placeholder="+91..."
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-neon-pink uppercase tracking-wider">Email</label>
                                <Input
                                    className="bg-black/50 border-white/10 text-white h-14 rounded-xl focus-visible:ring-neon-pink focus-visible:border-neon-pink font-medium"
                                    placeholder="you@future.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-neon-yellow uppercase tracking-wider">Message</label>
                                <Textarea
                                    className="bg-black/50 border-white/10 text-white min-h-[150px] rounded-xl focus-visible:ring-neon-yellow focus-visible:border-neon-yellow font-medium resize-none"
                                    placeholder="Tell us what you need..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full bg-neon-green text-black hover:bg-neon-green/80 h-16 text-lg font-black tracking-widest uppercase rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(0,255,157,0.3)]">
                                Send Message <Send className="ml-2 w-5 h-5" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
