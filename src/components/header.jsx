"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const headerRef = useRef(null)

    useGSAP(() => {
        gsap.from(headerRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        })
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "LAPTOPS", href: "#laptops" },
        { name: "RENTAL", href: "#rental" },
        { name: "WHY US", href: "#why-us" },
        { name: "CONTACT", href: "#contact" },
    ]

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="text-3xl font-black tracking-tighter text-foreground group-hover:text-neon-green transition-colors duration-300">
                            RE:<span className="text-neon-purple">GEN</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold tracking-widest text-muted-foreground hover:text-neon-green transition-colors uppercase"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="outline" size="sm" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black font-bold tracking-wider">
                            CALL NOW
                        </Button>
                        <Button size="sm" className="bg-neon-green text-black hover:bg-neon-green/80 font-bold tracking-wider shadow-[0_0_15px_rgba(0,255,157,0.5)]">
                            WHATSAPP
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-foreground hover:text-neon-green transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col gap-2 pt-4">
                                <Button variant="outline" size="sm">
                                    Call Now
                                </Button>
                                <Button size="sm" className="bg-accent hover:bg-accent/90">
                                    WhatsApp Us
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
