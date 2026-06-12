import { Phone, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";

export function FloatingButtons() {
  return (
    <>
      <a
        href={BRAND.tel}
        aria-label="Call Now"
        className="fixed left-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-deep text-white shadow-glass hover:scale-105 transition-transform"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full animate-ping bg-deep/40 -z-10" />
      </a>
      <a
        href={BRAND.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glass hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 -z-10" />
      </a>
    </>
  );
}
