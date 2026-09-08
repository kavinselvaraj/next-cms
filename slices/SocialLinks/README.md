# SocialLinks

A titled list of outbound social/external links.

**Live examples**: none currently authored on a live page (only ever seeded with placeholder test content, since replaced).

## ⚠️ Status: unstyled placeholder

Like `CtaBanner`/`HeroBanner`/`NewsletterSignup`, this slice's `index.tsx` has **no Tailwind classes** — a plain `<h2>` + `<ul>` of `PrismicNextLink`s.

## When to use

- Not yet — needs a design pass (icons? inline row vs. stacked list? footer placement?) before real content should be authored against it. Likely candidate for the Footer zone once designed, alongside patterns like `FaqQuestionList`'s `footer_grid`.

## Variation: `default`

### Primary fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | Text | No | Rendered as a plain `<h2>`. |

### Item fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `label` | Text | Yes | Link text (e.g. "Instagram"). |
| `url` | Link (target-blank allowed) | Yes | The outbound URL. |

### Example content

```json
{
  "primary": { "title": "Follow" },
  "items": [
    { "label": "Instagram", "url": { "url": "https://instagram.com/zipair", "target": "_blank" } },
    { "label": "X (Twitter)", "url": { "url": "https://x.com/zipair", "target": "_blank" } }
  ]
}
```

## Rendering & behavior

- No icon support — `label` is plain text, not paired with an icon field. If the target design (see reference screenshots showing icon + label rows in the site footer) needs icons, this slice's model needs an `icon` field (e.g. a Select of known platforms, or a Link/Image field for a custom icon).

## Known limitations

- **Needs a design/Tailwind pass.**
- No icon field.

## Related slices

- [`LinkList`](../LinkList/README.md) — general-purpose chevron link list; not social-specific but structurally similar (label + link items).
