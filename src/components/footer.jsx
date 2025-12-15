"use client"
import { Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
            {/* Decorative Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-50" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="text-3xl font-black tracking-tighter">
                            RE:<span className="text-neon-green">GEN</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Redefining refurbished tech for the next generation. Premium quality, transparent pricing, and sustainable vibes.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neon-green hover:text-black hover:border-neon-green transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-neon-blue">Explore</h3>
                        <ul className="space-y-4">
                            {["Laptops", "Rental", "Why Us", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-neon-green transition-colors text-sm font-medium">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-neon-purple">Support</h3>
                        <ul className="space-y-4">
                            {["Warranty Policy", "Returns & Refunds", "FAQ", "Terms of Service"].map((item) => (
                                <li key={item} className="text-gray-400 hover:text-white transition-colors text-sm font-medium cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-neon-yellow">Stay in the Loop</h3>
                        <p className="text-gray-400 text-sm mb-4">Get the latest drops and exclusive deals.</p>
                        <div className="flex gap-2">
                            <Input
                                placeholder="Enter your email"
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-neon-green"
                            />
                            <Button size="icon" className="bg-neon-green text-black hover:bg-neon-green/80">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-center md:text-left text-gray-500 text-sm">
                        © 2025 RE:GEN Laptops. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span>Privacy Policy</span>
                        <span>Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
