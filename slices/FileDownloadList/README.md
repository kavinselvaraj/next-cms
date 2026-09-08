# FileDownloadList

A stack of outline download buttons, each with a label and a "File Size: ..." caption underneath.

**Live examples**: `special-assistance` — interleaved after the relevant topic in `DisclosureList` (Medical Information Form after "Medical Needs" and "Pregnant Customers"; US DOT Form ×2 + Service Dog Consent Form after "Assistance Dogs").

## When to use

- One or more downloadable files (forms, PDFs) need a prominent button each, with a size caption.
- Multiple files belong together as a group (e.g. all the forms relevant to one FAQ topic) — see the note in [`DisclosureList`](../DisclosureList/README.md#when-not-to-use) on why this is a **separate, standalone slice** placed after the relevant content, rather than a field nested inside another slice's items.

## Variation: `default`

No primary fields.

### Item fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `label` | Text | Yes | Button text. |
| `file` | Link (target-blank allowed; typically a Media link) | No | If empty, the button renders `disabled` instead of as a link. |
| `file_size` | Text | No | Freeform, e.g. `504KB`. Caption below the button, only rendered if set. |

### Example content

```json
{
  "items": [
    { "label": "MEDICAL INFORMATION FORM (Questionnaire)", "file": { "url": "#" }, "file_size": "504KB" },
    { "label": "US DOT Form", "file": { "url": "#" }, "file_size": "369KB" }
  ]
}
```

## Rendering & behavior

- Built on shadcn's `Button` (`@/components/ui/button`), `variant="outline"`.
- `isFilled.link(item.file)` decides link-vs-disabled: filled → `Button asChild` wrapping `PrismicNextLink`; empty → plain `Button disabled`.
- Items stack vertically, `max-w-80` container — intentionally narrow, matching the reference design's compact button column (not full-width buttons).

## Styling conventions

- Same `border-primary! text-primary! hover:bg-accent!` treatment as `ButtonLink`.
- Disabled state: `border-border! text-muted-foreground! opacity-100!` (overriding shadcn's default dimmed-opacity disabled look, since this button is disabled because "no file uploaded yet," not because an action is unavailable — a full-opacity muted look reads better here).

## Known limitations

- No progress/loading state — purely a static link/button (file downloads are native browser behavior, not client-side JS).
- All files in one instance render as a single flat list — if a design needs, say, a 2-column grid of download buttons, this slice would need a new variation.

## Related slices

- [`ButtonLink`](../ButtonLink/README.md) — single centered button, for a non-file CTA.
- [`DisclosureList`](../DisclosureList/README.md) — the slice this one is most often interleaved after.
