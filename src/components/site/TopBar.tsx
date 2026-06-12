import { BRAND } from "@/lib/brand";
import { ShieldCheck, FileBadge, Sparkles, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-gradient-brand text-white text-xs sm:text-[13px]">
      <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-orange" /> Govt. Registered <span className="opacity-70">({BRAND.regNo})</span></span>
          <span className="hidden sm:inline-flex items-center gap-1.5"><FileBadge className="h-3.5 w-3.5 text-orange" /> GST: {BRAND.gst}</span>
          <span className="hidden md:inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-orange" /> Trusted Kashmir Tour Operator</span>
        </div>
        <a href={BRAND.tel} className="inline-flex items-center gap-1.5 font-semibold hover:text-orange transition-colors">
          <Phone className="h-3.5 w-3.5" /> {BRAND.phonePrimary}
        </a>
      </div>
    </div>
  );
}
