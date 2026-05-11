"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { isDraft } from "@/lib/blog-drafts";
import { BlogCardArt, type BlogArtVariant } from "@/components/ui/BlogCardArt";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

type Post = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  read: string;
  author?: string;
  gradient: string;
  featured?: boolean;
  label?: string;
  art?: BlogArtVariant;
};

const POSTS: Post[] = [
  {
    slug: "why-95-percent-nigerias-service-economy-offline",
    tag: "Industry Insight",
    title:
      "Why 95% of Nigeria's Service Economy Is Still Offline, And What It Will Take to Change That",
    desc: "Nigeria has 120M+ smartphone users, yet finding a plumber still requires a WhatsApp scavenger hunt. We unpack the trust deficit, the WhatsApp trap, and what needs to change.",
    read: "8 min read",
    author: "Alex Nwoko",
    gradient: "from-[#2A1F5C] to-[#2D1B4E]",
    featured: true,
    label: "95%",
  },
  {
    slug: "meet-the-vendors-lagos-service-providers",
    tag: "Vendor Stories",
    title:
      "Meet the Vendors: How Lagos Service Providers Are Building Businesses One Booking at a Time",
    desc: "From Instagram DMs to a full booking calendar. Three vendors share how structured visibility and trust are transforming their livelihoods.",
    read: "6 min read",
    gradient: "from-vendoh-orange to-vendoh-orange-300",
    art: "dual-rings",
  },
  {
    slug: "hello-vendoh-voice-first",
    tag: "Product & Technology",
    title:
      "Hello Vendoh: Why We Bet Everything on Voice-First in a Text-First World",
    desc: "78% of Nigerians send voice messages daily. Here's why we built an entire marketplace around that reality, and the technical challenge of making it work.",
    read: "7 min read",
    gradient: "from-vendoh-blue to-vendoh-plum-300",
    art: "voice-waves",
  },
  {
    slug: "dual-role-revolution",
    tag: "Product Philosophy",
    title:
      "The Dual-Role Revolution: Why the Best Marketplace Users Are Both Clients and Vendors",
    desc: "A school teacher who does makeup on weekends. A banker who caters events. In Nigeria's economy, people don't fit into one box. Neither should your app.",
    read: "5 min read",
    gradient: "from-[#0D9488] to-[#14B8A6]",
    art: "dual-rings",
  },
  {
    slug: "building-vendoh-solo-in-lagos",
    tag: "Founder Journey",
    title:
      "Building Vendoh: What It's Really Like to Build a Tech Startup Solo in Lagos",
    desc: "No co-founder, no external funding, no team. Just a vision, a laptop, and AI tools. The honest story of building alone, and why it's worth it.",
    read: "8 min read",
    gradient: "from-vendoh-plum-400 to-vendoh-plum-200",
    art: "origin-timeline",
  },
  {
    slug: "dirty-december-seasonal-demand",
    tag: "Market Insight",
    title:
      "Dirty December and Beyond: How Seasonal Demand Shapes Nigeria's Service Economy",
    desc: "Owambes, weddings, homecomings. December demand spikes 3-5x. How Vendoh is built for Nigeria's unique seasonal rhythms.",
    read: "5 min read",
    gradient: "from-[#DC2626] to-vendoh-orange",
    art: "origin-timeline",
  },
  {
    slug: "from-food-vendor-naija-to-vendoh",
    tag: "Origin Story",
    title:
      "From Food Vendor Naija to Vendoh: A Seven-Year Journey to Reimagine Africa's Service Economy",
    desc: "In 2019, I recorded a 1-minute video about a food delivery app. Seven years later, that idea became a voice-powered marketplace for 321+ services. This is how it happened.",
    read: "10 min read",
    author: "Alex Nwoko",
    gradient: "from-[#2A1F5C] to-vendoh-plum-400",
    art: "origin-timeline",
  },
  {
    slug: "then-vs-now-2019-to-2026",
    tag: "Origin Story",
    title:
      "Then vs. Now: How a 2019 Food Delivery App Became Nigeria's Voice-Powered Service Marketplace",
    desc: "A side-by-side look at Food Vendor Naija's original concept and what Vendoh has become — what changed, what stayed the same, and why the evolution matters.",
    read: "7 min read",
    gradient: "from-vendoh-orange to-[#DC2626]",
    art: "origin-timeline",
  },
  {
    slug: "why-a-gis-expert-built-nigerias-next-marketplace",
    tag: "Founder Perspective",
    title:
      "Deploying Geospatial Intelligence in Building Nigeria's Next Marketplace",
    desc: "Most marketplace founders come from business or engineering. I came from maps. Here's how geospatial intelligence became Vendoh's secret advantage.",
    read: "8 min read",
    gradient: "from-[#0D9488] to-vendoh-blue",
    art: "street-grid",
  },
  {
    slug: "built-from-the-streets",
    tag: "Market Insight",
    title:
      "Built from the Streets: How Nigeria's Informal Economy Inspired Vendoh",
    desc: "From mama-put stalls to voice-powered AI — the story of how Nigeria's 65%-of-GDP informal service economy shaped every design decision in Vendoh.",
    read: "9 min read",
    gradient: "from-vendoh-plum-400 to-[#2A1F5C]",
    art: "street-grid",
  },
];

export function BlogContent() {
  // Filter out drafts (defined in src/lib/blog-drafts.ts). Drafts stay in the
  // repo and on disk but are hidden from the blog list until ready to publish.
  const visible = POSTS.filter((p) => !isDraft(p.slug));
  const [featured, ...rest] = visible;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-vendoh-blue-50 via-surface to-background" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <h1 className="text-5xl sm:text-7xl tracking-tight text-foreground font-[family-name:var(--font-display)]">
              Vendoh Journal
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Stories from the frontlines of Africa&apos;s service economy
            </p>
          </motion.div>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-10 pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Featured */}
          <motion.div {...fadeUp} className="mb-5">
            <Link href={`/blog/${featured.slug}`} className="block group">
              <article className="rounded-2xl border border-border-light bg-white overflow-hidden grid sm:grid-cols-2 group-hover:border-vendoh-blue/30 group-hover:shadow-[0_12px_40px_rgba(107,74,138,0.08)] transition-all duration-300">
                <div
                  className={`bg-gradient-to-br ${featured.gradient} flex items-center justify-center min-h-[240px] sm:min-h-[300px]`}
                >
                  <span className="text-6xl sm:text-7xl font-black text-white/15">
                    {featured.label}
                  </span>
                </div>
                <div className="p-7 sm:p-9 flex flex-col justify-center">
                  <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-blue">
                    {featured.tag}
                  </span>
                  <h2 className="mt-3 text-xl sm:text-2xl font-bold text-foreground leading-tight tracking-tight group-hover:text-vendoh-blue transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                    {featured.desc}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-text-tertiary">
                    <span>
                      {featured.read} &middot; {featured.author}
                    </span>
                    <span className="text-vendoh-blue font-semibold group-hover:underline">
                      Read &rarr;
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              >
                <Link href={`/blog/${post.slug}`} className="block h-full group">
                  <article className="rounded-2xl border border-border-light bg-white overflow-hidden flex flex-col h-full group-hover:border-vendoh-blue/30 group-hover:shadow-[0_12px_40px_rgba(107,74,138,0.08)] transition-all duration-300 group-hover:-translate-y-1">
                    <div
                      className={`relative bg-gradient-to-br ${post.gradient} h-[180px] overflow-hidden`}
                    >
                      {post.art && (
                        <div className="absolute inset-0 p-4">
                          <BlogCardArt variant={post.art} />
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-blue">
                        {post.tag}
                      </span>
                      <h3 className="mt-2 font-bold text-foreground leading-snug tracking-tight group-hover:text-vendoh-blue transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-text-secondary text-sm leading-relaxed flex-1">
                        {post.desc}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs text-text-tertiary">
                        <span>{post.read}</span>
                        <span className="text-vendoh-blue font-semibold group-hover:underline">
                          Read &rarr;
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
