# Hello Vendoh: Why We Bet Everything on Voice-First in a Text-First World

**Published:** March 22, 2026
**Author:** Alex Nwoko
**Tag:** Product & Technology
**Read Time:** 7 min read

---

When I first described my vision for Vendoh to some of my closest friends, I was careful with the framing. Vendoh would be a voice-first experience, not a voice-optional one. Their response was the one I had heard a dozen times before: "But everyone searches with text. Google is text. Instagram is text. The whole internet is text."

They were right about the internet. They were wrong about Nigeria.

## The data nobody references

Roughly seventy-eight percent of Nigerians send voice messages every single day. That is not a fringe behaviour. It is the default way most Nigerians transmit any piece of information longer than "ok" or "please send account number". Anyone who has spent time in a Nigerian family WhatsApp group already knows this intuitively. The scroll is punctuated by voice notes because voice, for most of us, is how we naturally think and express ourselves.

This preference is not unique to Nigeria. Brazilians, Mexicans, and Indians all send voice notes at comparably high rates. But it is particularly pronounced in our context, and the reasons are worth naming. Nigerians frequently code-switch between English, Pidgin, Yoruba, Igbo, and Hausa in a single sentence. Voice preserves tone, urgency, and half-formed thoughts in ways that typed text cannot. Literacy levels vary widely across the population. And on a practical level, holding a microphone button while stuck in Third Mainland Bridge traffic is simply easier than typing on a screen.

Most products built for this market continue to ignore these realities. They add a microphone icon to an otherwise text-first interface and describe the result as "voice support". The outcome is a voice feature that very few people use, because it has been optimised for the minority of users who would happily have typed anyway.

## What "voice-first" actually means at Vendoh

At Vendoh, voice is treated as the primary input, not as a convenience layer sitting on top of text. In practical terms, that commitment shows up in four places:

- One of the first things a user sees on the Vendoh home tab is an animated voice button, positioned prominently next to the search box. Tap, speak, done.
- The voice model is tuned specifically for Nigerian English and Nigerian Pidgin. Pidgin is treated as a first-class language with its own grammar and semantics, rather than as a fallback for English that happens to include some local vocabulary.
- Queries are interpreted as natural descriptions of a problem, not as keywords. A request like "my AC is not cooling well, I am in Lekki Phase 1, I need someone today" is processed as a single unit of meaning, rather than as four filters to be extracted and applied to a database query.
- Results are ranked by how closely each vendor matches the described problem, not by how closely the query matches a fixed taxonomy. The model decides whether "my AC is not cooling" is more likely a gas refill issue, a compressor fault, or a capacitor problem, and the vendors surfaced reflect that interpretation.

This is a fundamentally different product from one that simply adds a microphone button to an existing search bar. Building it has been harder than we expected, and that difficulty is precisely why we believe it will be defensible.

## What we would tell anyone building voice for emerging markets

Three lessons, in order of importance:

1. **Do not bolt voice onto text.** The users for whom voice is genuinely useful are not the users who would have typed. A single interface cannot serve both groups equally well, so it is better to commit.
2. **Train for code-switching.** Real users mix languages inside a single query. A model that treats "send somebody wey sabi fix AC come my house" as malformed English has already lost the user, and possibly the market.
3. **Build for the two-second ceiling.** The hardest engineering problem in voice is not accuracy. It is latency. If the system cannot respond within roughly two seconds, the user assumes they have not been heard, and the conversational illusion collapses immediately.

Our aspiration is that voice will not remain merely a feature inside Vendoh. Over time, it will become central to the product itself. Every other pillar we are building, including secure payments, verification, the dual-role economy, and the commission model, sits at the same level of priority as the voice-first experience, because none of them function in isolation. The voice-first experience is the core of what we are shipping, and every other decision we make is in service of it.

Hello, Vendoh.
