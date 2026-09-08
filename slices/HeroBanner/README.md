# HeroBanner

A full-width image with a title overlay and an optional CTA link.

**Live examples**: none currently authored.

## ⚠️ Status: unstyled placeholder

Like [`CtaBanner`](../CtaBanner/README.md), this slice's `index.tsx` has **no Tailwind classes** — plain `<section>`/image/title/link with zero visual treatment (no overlay, no sizing, no positioning). Needs a design pass before real content should be authored against it.

## When to use

- Not yet — treat as a placeholder / not production-ready until styled.

## Variation: `default`

### Primary fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | Rich Text (single: `heading1`) | No | Rendered via `PrismicRichText`, no custom heading component (unlike `PageTitle`'s styled `h1`). |
| `image` | Image | No | Rendered via `PrismicNextImage`, no explicit width/height/`fill` styling. |
| `cta_label` | Text | No | Button text. |
| `cta_link` | Link (target-blank allowed) | No | Only rendered if filled (`isFilled.link` guard). |

No item fields.

### Example content

```json
{
  "title": [{ "type": "heading1", "content": { "text": "Fly Further", "spans": [] } }],
  "image": { "url": "https://images.prismic.io/.../hero.jpg", "alt": "" },
  "cta_label": "Book Now",
  "cta_link": { "url": "/booking" }
}
```

## Rendering & behavior

- `PrismicNextImage` is used (not a raw `<img>`), so it gets Next.js image optimization even without explicit sizing props — but without a `sizes`/`fill`/explicit `width`/`height` prop set in this component, verify the rendered output looks correct once real content is authored (Next.js's Image component behaves differently depending on which sizing props are present).

## Known limitations

- **Needs a design/Tailwind pass** — currently no overlay, no responsive image handling beyond Next.js defaults, no button styling (plain `<a>`, not shadcn `Button`).

## Related slices

- [`PageTitle`](../PageTitle/README.md) — the styled equivalent for a page's H1 (no image).
- [`ButtonLink`](../ButtonLink/README.md) — the styled equivalent for the CTA once this slice is designed.
