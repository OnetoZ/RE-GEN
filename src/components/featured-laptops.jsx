"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Battery, Cpu, HardDrive, Monitor, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const laptops = [
    {
        id: 1,
        name: "Dell Latitude 7400",
        image: "/dell-latitude-laptop-silver-professional.jpg",
        processor: "Intel Core i5 8th Gen",
        ram: "16GB DDR4",
        storage: "256GB SSD",
        screen: '14" FHD',
        batteryHealth: 92,
        price: "₹28,500",
        rentPerMonth: "₹2,500",
        condition: "Excellent",
    },
    {
        id: 2,
        name: "HP EliteBook 840 G6",
        image: "/hp-elitebook-laptop-sleek-business.jpg",
        processor: "Intel Core i7 8th Gen",
        ram: "16GB DDR4",
        storage: "512GB SSD",
        screen: '14" FHD',
        batteryHealth: 88,
        price: "₹35,000",
        rentPerMonth: "₹3,200",
        condition: "Excellent",
    },
    {
        id: 3,
        name: "Lenovo ThinkPad T480",
        image: "/lenovo-thinkpad-laptop-black-professional.jpg",
        processor: "Intel Core i5 8th Gen",
        ram: "8GB DDR4",
        storage: "256GB SSD",
        screen: '14" FHD',
        batteryHealth: 85,
        price: "₹24,000",
        rentPerMonth: "₹2,200",
        condition: "Very Good",
    },
    {
        id: 4,
        name: "MacBook Air 2017",
        image: "/macbook-air-silver-laptop-premium.jpg",
        processor: "Intel Core i5 7th Gen",
        ram: "8GB DDR3",
        storage: "128GB SSD",
        screen: '13.3" Retina',
        batteryHealth: 78,
        price: "₹32,000",
        rentPerMonth: "₹3,000",
        condition: "Good",
    },
    {
        id: 5,
        name: "Dell XPS 13 9360",
        image: "/dell-xps-13-laptop-modern-sleek.jpg",
        processor: "Intel Core i7 8th Gen",
        ram: "16GB DDR4",
        storage: "512GB SSD",
        screen: '13.3" FHD',
        batteryHealth: 90,
        price: "₹42,000",
        rentPerMonth: "₹3,800",
        condition: "Excellent",
    },
    {
        id: 6,
        name: "HP ProBook 450 G7",
        image: "/hp-probook-laptop-business-professional.jpg",
        processor: "Intel Core i5 10th Gen",
        ram: "8GB DDR4",
        storage: "256GB SSD",
        screen: '15.6" FHD',
        batteryHealth: 95,
        price: "₹38,000",
        rentPerMonth: "₹3,400",
        condition: "Excellent",
    },
]

export function FeaturedLaptops() {
    const [hoveredId, setHoveredId] = useState(null)
    const [selectedLaptop, setSelectedLaptop] = useState(laptops[0])
    const containerRef = useRef(null)

    useGSAP(() => {
        if (!containerRef.current) return

        // Ensure elements are visible initially if JS fails or before animation starts
        // But for animation, we set initial state
        const cards = document.querySelectorAll(".laptop-card");
        gsap.set(cards, { y: 50, opacity: 0 });

        ScrollTrigger.batch(".laptop-card", {
            onEnter: batch => gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                overwrite: true
            }),
            onLeave: batch => gsap.set(batch, { opacity: 0, y: -50, overwrite: true }),
            onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1, overwrite: true }),
            onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
            start: "top 85%",
            // end: "bottom 15%",
            // markers: true
        });

        // Force refresh to ensure coordinates are correct
        ScrollTrigger.refresh();

    }, { scope: containerRef })

    return (
        <section id="laptops" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={containerRef}>
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-neon-blue text-neon-blue px-4 py-1 text-xs tracking-widest uppercase">
                        Fresh Arrivals
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-6 tracking-tighter uppercase">
                        Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">Gear</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                        Pro-level performance. Student-friendly prices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {laptops.map((laptop) => (
                        <Dialog key={laptop.id} onOpenChange={(open) => open && setSelectedLaptop(laptop)}>
                            <DialogTrigger asChild>
                                <div
                                    className="laptop-card group relative bg-card/30 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden hover:border-neon-green/50 transition-colors duration-500 cursor-pointer hover:shadow-[0_0_30px_rgba(0,255,157,0.15)]"
                                    onMouseEnter={() => setHoveredId(laptop.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60" />
                                        <img
                                            src={laptop.image || "/placeholder.svg"}
                                            alt={laptop.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                        <div className="absolute top-4 right-4 z-20">
                                            <Badge className="bg-neon-green text-black font-bold border-none">
                                                <Battery className="w-3 h-3 mr-1" />
                                                {laptop.batteryHealth}%
                                            </Badge>
                                        </div>
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-green transition-colors">{laptop.name}</h3>
                                            <p className="text-sm text-gray-300">{laptop.processor}</p>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white transition-colors">
                                                <HardDrive className="w-4 h-4 text-neon-purple" />
                                                {laptop.ram} | {laptop.storage}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white transition-colors">
                                                <Monitor className="w-4 h-4 text-neon-blue" />
                                                {laptop.screen}
                                            </div>
                                        </div>

                                        <div className="flex items-end justify-between border-t border-white/10 pt-4">
                                            <div>
                                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Starting at</p>
                                                <p className="text-2xl font-black text-white">{laptop.price}</p>
                                            </div>
                                            <Button size="icon" className="rounded-full bg-white/10 hover:bg-neon-green hover:text-black transition-colors">
                                                <ArrowRight className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-black/90 border-neon-green/20 backdrop-blur-xl p-0 overflow-hidden gap-0">
                                {/* Visually hidden title and description for accessibility */}
                                <DialogTitle className="sr-only">
                                    {selectedLaptop?.name} Details
                                </DialogTitle>
                                <DialogDescription className="sr-only">
                                    Detailed specifications and rental options for {selectedLaptop?.name}.
                                </DialogDescription>

                                <div className="grid md:grid-cols-2 h-full">
                                    <div className="relative h-64 md:h-full bg-muted">
                                        <img
                                            src={selectedLaptop?.image || "/placeholder.svg"}
                                            alt={selectedLaptop?.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <Badge className="bg-neon-green text-black font-bold mb-2">In Stock</Badge>
                                            <h2 className="text-3xl font-black text-white mb-2">{selectedLaptop?.name}</h2>
                                            <p className="text-lg text-gray-300">{selectedLaptop?.condition} Condition</p>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col justify-center">
                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold text-neon-purple mb-4 uppercase tracking-wider">Specifications</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                                                    <span className="text-muted-foreground flex items-center gap-2"><Cpu size={16} /> Processor</span>
                                                    <span className="font-bold">{selectedLaptop?.processor}</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                                                    <span className="text-muted-foreground flex items-center gap-2"><HardDrive size={16} /> Memory</span>
                                                    <span className="font-bold">{selectedLaptop?.ram} / {selectedLaptop?.storage}</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                                                    <span className="text-muted-foreground flex items-center gap-2"><Battery size={16} /> Battery</span>
                                                    <span className="font-bold text-neon-green">{selectedLaptop?.batteryHealth}% Health</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-1 p-4 rounded-xl border border-neon-green/30 bg-neon-green/5 text-center">
                                                <p className="text-sm text-muted-foreground mb-1">Buy Now</p>
                                                <p className="text-3xl font-black text-white">{selectedLaptop?.price}</p>
                                            </div>
                                            <div className="flex-1 p-4 rounded-xl border border-neon-purple/30 bg-neon-purple/5 text-center">
                                                <p className="text-sm text-muted-foreground mb-1">Rent / Month</p>
                                                <p className="text-3xl font-black text-white">{selectedLaptop?.rentPerMonth}</p>
                                            </div>
                                        </div>

                                        <div className="mt-8 flex gap-4">
                                            <Button className="flex-1 bg-neon-green text-black hover:bg-neon-green/90 font-bold h-12 text-lg">
                                                ADD TO CART
                                            </Button>
                                            <Button variant="outline" className="flex-1 border-white/20 hover:bg-white/10 h-12 font-bold">
                                                WHATSAPP
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Button size="lg" variant="outline" className="px-12 py-6 border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-black font-bold tracking-widest text-lg uppercase transition-all hover:shadow-[0_0_30px_rgba(0,243,255,0.3)] bg-transparent">
                        View All Inventory
                    </Button>
                </div>
            </div>
        </section>
    )
}
