"use client"

import { MapPin, Clock, Phone } from "lucide-react"

export function Location() {
    return (
        <section className="py-24 md:py-32 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Visit Our <span className="text-neon-yellow">Hub</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                        Come see our laptops in person. Test them, ask questions, and make an informed decision.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white/5 rounded-[2rem] overflow-hidden h-[400px] border border-white/10 relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089944427!2d77.46612750000001!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                            allowFullScreen
                            loading="lazy"
                            className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 pointer-events-none border-[3px] border-white/5 rounded-[2rem]" />
                    </div>

                    <div className="space-y-6">
                        {[
                            { icon: MapPin, title: "Address", content: <>123 Tech Street, Anna Nagar,<br />Chennai, Tamil Nadu 600040</>, color: "text-neon-purple" },
                            { icon: Clock, title: "Hours", content: <>Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: 11:00 AM - 6:00 PM</>, color: "text-neon-blue" },
                            { icon: Phone, title: "Contact", content: <>Phone: +91 98765 43210<br />Email: hello@regen-laptops.com</>, color: "text-neon-green" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-colors group">
                                <div className="flex items-start gap-6">
                                    <div className={`w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-${item.color.split('-')[1]}-${item.color.split('-')[2]} transition-colors`}>
                                        <item.icon className={`w-7 h-7 ${item.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-2 uppercase tracking-wide text-lg">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed font-medium">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
