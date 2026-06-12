import { BRAND } from "@/lib/brand";
import { ShieldCheck, FileBadge, Sparkles } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-gradient-brand text-white text-[11px] sm:text-[13px]">
      <div className="container mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex flex-wrap items-center justify-center md:justify-between gap-x-3 gap-y-1 text-center md:text-left">
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <ShieldCheck className="h-3.5 w-3.5 text-orange shrink-0" />
          <span className="font-semibold">Govt. Registered</span>
        </span>
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <FileBadge className="h-3.5 w-3.5 text-orange shrink-0" />
          <span>Reg: <strong className="font-semibold">{BRAND.regNo}</strong></span>
        </span>
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <Sparkles className="h-3.5 w-3.5 text-orange shrink-0" />
          <span>GST: <strong className="font-semibold">{BRAND.gst}</strong></span>
        </span>
      </div>
    </div>
  );
}
