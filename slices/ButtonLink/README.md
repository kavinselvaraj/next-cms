# ButtonLink

A single, centered outline button linking to another page or file.

**Live examples**: `where-does-zipair-fly-to` ("See Related Questions List"), `faq` ("Contact Form").

## When to use

- One clear, prominent call-to-action link, standalone (not inline with body text).
- You need exactly one button — for multiple stacked buttons with file-size captions, use [`FileDownloadList`](../FileDownloadList/README.md) instead (even for non-file links, if you need more than one button in a group, that's the closer-fitting slice's layout).

## Variation: `default`

### Primary fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `label` | Text | Yes | Button text. |
| `link` | Link (target-blank allowed) | Yes | If empty, the whole slice renders nothing (`isFilled.link` guard). |

No item fields.

### Example content

```json
{
  "label": "See Related Questions List",
  "link": { "url": "/network-and-timetable" }
}
```

## Rendering & behavior

- Built on shadcn's `Button` (`@/components/ui/button`) via `asChild`, wrapping `PrismicNextLink` — so the actual DOM node is an `<a>`, not a `<button>`, while getting Button's styling/variant system.
- `variant="outline"`.
- Wrapped in a `flex justify-center` container to center it on the page.

## Styling conventions

- `border-primary! text-primary!` overriding Button's default outline colors (the `!` forces these to win over the component's own Tailwind classes — see [slice library conventions](../README.md) on why this is sometimes needed even though shadcn overrides normally aren't required).
- `hover:bg-accent!` for the hover state.
- `h-auto! px-8 py-3` — Button's default fixed height (`h-8`) is overridden for a larger, more prominent CTA size.

## Known limitations

- None — this slice is a thin, stable wrapper.

## Related slices

- [`FileDownloadList`](../FileDownloadList/README.md) — multiple outline buttons with a file-size caption each.
- [`LinkList`](../LinkList/README.md) — for a set of plain (non-button) chevron links instead.
