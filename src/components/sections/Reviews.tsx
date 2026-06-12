import { Star, Quote } from "lucide-react";

const reviews = [
  { n: "Aarav & Priya Sharma", c: "Delhi", t: "Honeymoon in Srinagar", r: 5, m: "The houseboat night was magical — JAK arranged everything end to end. Highly recommended for couples!" },
  { n: "Rakesh Iyer", c: "Bengaluru", t: "Family Trip", r: 5, m: "Took my parents and kids — driver was friendly, hotels were premium, and prices were exactly as quoted. Zero surprises." },
  { n: "Neha Kapoor", c: "Mumbai", t: "Group Tour 6 pax", r: 5, m: "Sonamarg and Gulmarg were unbelievable. Loved the personalised itinerary and Shikara ride at sunset." },
  { n: "Mohammed Ali", c: "Hyderabad", t: "5N 6D Premium", r: 5, m: "Doodhpatri was a hidden gem — wouldn't have known without JAK. Local knowledge that big agencies just don't have." },
  { n: "Ananya Roy", c: "Kolkata", t: "Solo Customised", r: 5, m: "As a solo female traveller I felt completely safe. The team was reachable 24/7 throughout my trip." },
  { n: "Vikram Singh", c: "Jaipur", t: "Jammu Pickup Package", r: 5, m: "Picked us up from Katra after the yatra and managed Pahalgam, Gulmarg, Srinagar flawlessly. Best price too." },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-secondary/50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-orange uppercase tracking-widest">Customer Reviews</span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-deep">Loved by travelers across India</h2>
          <p className="mt-4 text-muted-foreground">Real stories from real guests we've hosted in Kashmir.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.n} className="relative rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-glass transition">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-orange/20" />
              <div className="flex gap-0.5">
                {Array.from({ length: r.r }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange text-orange" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/85 leading-relaxed">"{r.m}"</blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border">
                <div className="font-semibold text-deep">{r.n}</div>
                <div className="text-xs text-muted-foreground">{r.c} • {r.t}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
