import { Link } from "@tanstack/react-router";
import { BRAND } from "@/lib/brand";
import logoAsset from "@/assets/jak-logo.asset.json";
import { Mail, MapPin, Phone, ShieldCheck, FileBadge } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 bg-deep text-white/90">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="JAK logo" className="h-14 w-14 bg-white rounded-xl p-1" />
            <div>
              <div className="font-display text-xl font-bold text-white">JAK Tour & Travels</div>
              <div className="text-xs text-white/60 uppercase tracking-wide">Journey Beyond Destinations</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70">Government Registered Kashmir travel agency offering premium tours, houseboats, sightseeing & airport transfers.</p>
          <div className="mt-4 space-y-1.5 text-sm">
            <div className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-orange" /> Govt Reg: {BRAND.regNo}</div>
            <div className="inline-flex items-center gap-2"><FileBadge className="h-4 w-4 text-orange" /> GST: {BRAND.gst}</div>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/tour-packages" className="hover:text-orange">Tour Packages</Link></li>
            <li><Link to="/about" className="hover:text-orange">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-orange">Contact Us</Link></li>
            <li><a href="#destinations" className="hover:text-orange">Destinations</a></li>
            <li><a href="#reviews" className="hover:text-orange">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-orange shrink-0" />{BRAND.address}</li>
            <li><a href={BRAND.whatsapp} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-orange"><Phone className="h-4 w-4 text-orange" />WhatsApp: {BRAND.whatsappNumber}</a></li>
            {BRAND.callNumbers.map((p) => (
              <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-orange"><Phone className="h-4 w-4 text-orange" />Call: {p}</a></li>
            ))}
            {BRAND.emails.map((e) => (
              <li key={e}><a href={`mailto:${e}`} className="inline-flex items-center gap-2 hover:text-orange break-all"><Mail className="h-4 w-4 text-orange" />{e}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-white mb-3">Popular Tours</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>Kashmir Honeymoon Package</li>
            <li>Srinagar Houseboat Booking</li>
            <li>Gulmarg Tour Package</li>
            <li>Pahalgam Family Trip</li>
            <li>Sonamarg Day Tour</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© 2026 JAK Tour & Travels. All Rights Reserved.</p>
          <p className="flex gap-4"><a href="#" className="hover:text-orange">Privacy Policy</a><a href="#" className="hover:text-orange">Terms & Conditions</a></p>
        </div>
      </div>
    </footer>
  );
}
