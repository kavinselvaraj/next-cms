# CtaBanner

Centered call-to-action text with a plain link.

**Live examples**: none currently authored (only ever seeded with placeholder test content on the `faq` document, since replaced).

## ⚠️ Status: unstyled placeholder

Unlike every other slice in this library, `CtaBanner`'s `index.tsx` has **no Tailwind classes, no shadcn component, no `data-slice-*` styling hooks beyond the attributes themselves** — it renders plain semantic HTML (`<section>`, `<a>`) with zero visual treatment. Before using this slice on a real page, it needs a design pass (likely converging on shadcn's `Button`, similar to [`ButtonLink`](../ButtonLink/README.md), plus rich-text styling similar to [`RichTextSection`](../RichTextSection/README.md)).

## When to use

- Not yet — treat as a placeholder / not production-ready until styled.

## Variation: `default`

### Primary fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `body` | Rich Text (multi: `paragraph,strong,em,hyperlink`) | No | Banner text. |
| `label` | Text | No | Link text. |
| `href` | Text (plain string, not a Link field) | No | Rendered as `<a href={href}>` only if non-empty. |

No item fields.

### Example content

```json
{
  "body": [{ "type": "paragraph", "content": { "text": "Ready to book your next flight?", "spans": [] } }],
  "label": "Book Now",
  "href": "/booking"
}
```

## Rendering & behavior

- No `PrismicNextLink` — `href` is a plain **Text** field (not a Prismic `Link` field), so it can't resolve internal document links the way other slices' `Link` fields can; it only ever renders a literal `<a href="...">`.

## Known limitations

- **Needs a design/Tailwind pass** before real content should be authored against it.
- `href` being a plain Text field (rather than a `Link` field) is inconsistent with the rest of the library — worth migrating to a `Link` field (with a schema push + content migration) if this slice moves toward production use, for parity with [`ButtonLink`](../ButtonLink/README.md) and [`LinkList`](../LinkList/README.md).

## Related slices

- [`ButtonLink`](../ButtonLink/README.md) — the styled, production-ready equivalent for a single CTA button.
