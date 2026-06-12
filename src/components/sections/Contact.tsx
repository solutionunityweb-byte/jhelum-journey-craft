import { BRAND } from "@/lib/brand";
import { MapPin, Phone, Mail, MessageCircle, Navigation } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold text-orange uppercase tracking-widest">Get in touch</span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-deep">Plan your Kashmir trip today</h2>
          <p className="mt-4 text-muted-foreground max-w-lg">Reach out via WhatsApp, call us directly or drop by our Srinagar office — we'll craft the perfect itinerary for you.</p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-2xl bg-gradient-brand text-white inline-flex items-center justify-center shrink-0"><MapPin className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="font-semibold text-deep">Office Address</div>
                <div className="text-sm text-muted-foreground">{BRAND.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-2xl bg-[#25D366] text-white inline-flex items-center justify-center shrink-0"><MessageCircle className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="font-semibold text-deep">WhatsApp</div>
                <a href={BRAND.whatsapp} target="_blank" rel="noopener" className="text-sm text-muted-foreground hover:text-orange">{BRAND.whatsappNumber}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-2xl bg-gradient-brand text-white inline-flex items-center justify-center shrink-0"><Phone className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="font-semibold text-deep">Call Us</div>
                <div className="text-sm text-muted-foreground flex flex-col">
                  {BRAND.callNumbers.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-orange">{p}</a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-2xl bg-gradient-brand text-white inline-flex items-center justify-center shrink-0"><Mail className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="font-semibold text-deep">Email</div>
                <div className="text-sm text-muted-foreground flex flex-col">
                  {BRAND.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="hover:text-orange break-all">{e}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <a href={BRAND.whatsapp} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-5 py-3.5 font-semibold shadow-soft hover:scale-[1.02] transition">
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
            {BRAND.callNumbers.map((n) => (
              <a key={n} href={`tel:${n.replace(/\s/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-3.5 font-semibold hover:opacity-95 transition">
                <Phone className="h-4 w-4" /> Call {n}
              </a>
            ))}
            <a href="https://www.google.com/maps/search/?api=1&query=Central+Market+Abi+Guzar+Srinagar" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 font-semibold text-deep hover:bg-secondary transition"><Navigation className="h-4 w-4" /> Get Directions</a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-border shadow-card min-h-[420px]">
          <iframe
            title="JAK Tour & Travels Srinagar Location"
            src="https://www.google.com/maps?q=Central+Market+Abi+Guzar+Srinagar&output=embed"
            className="h-full w-full min-h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
