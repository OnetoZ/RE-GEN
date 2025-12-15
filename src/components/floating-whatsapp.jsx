"use client"

import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_0_50px_rgba(37,211,102,0.8)] transition-all duration-300 z-50 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 text-black fill-current animate-pulse" />
            <span className="absolute right-full mr-4 bg-black text-[#25D366] px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-[#25D366]">
                Chat with us!
            </span>
        </a>
    )
}
