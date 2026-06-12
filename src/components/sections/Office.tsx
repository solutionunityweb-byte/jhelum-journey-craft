import office1 from "@/assets/office-1.asset.json";
import office2 from "@/assets/office-2.asset.json";
import { MapPin } from "lucide-react";

export function Office() {
  return (
    <section id="office" className="bg-secondary/50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-orange uppercase tracking-widest">Visit Our Office</span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-deep">Meet us in Srinagar</h2>
          <p className="mt-4 text-muted-foreground">Visit our registered office in Central Market, Abi Guzar, Srinagar. Meet our travel experts and plan your Kashmir vacation with confidence.</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-deep font-medium"><MapPin className="h-4 w-4 text-orange" /> Central Market, Abi Guzar, Srinagar – 190001</div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[office1, office2].map((o, i) => (
            <div key={i} className="overflow-hidden rounded-3xl border border-border shadow-card group">
              <img src={o.url} alt={`JAK Tour & Travels Srinagar office ${i + 1}`} loading="lazy" className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
