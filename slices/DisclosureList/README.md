# DisclosureList

Unnumbered, individually collapsible sections, each with an optional highlighted box and a single trailing link. `Accordion`'s unnumbered sibling.

**Live examples**: `special-assistance` (Passengers who require a wheelchair, Hearing-impaired customers, etc. — 8 items).

## When to use

- A list of independent policy/eligibility topics that don't form a numbered sequence.
- Each topic needs: intro body text, optionally a highlighted sub-box (e.g. "Accompanied by a Hearing Dog"), optionally one trailing link.

## When NOT to use

- Content is a numbered step-by-step sequence → use [`Accordion`](../Accordion/README.md).
- You need two trailing links → use `Accordion` (which supports `link`/`link2`), or follow this slice with a [`LinkList`](../LinkList/README.md).
- Each item needs multiple downloadable files → see the note on `FileDownloadList` below; this slice's flat schema can't hold a variable-length file list per item (Prismic doesn't allow nesting a repeatable group inside another repeatable zone — see the [slice library conventions](../README.md#conventions-used-across-every-slice)). The working pattern used on `special-assistance` is: split into one `DisclosureList` instance per topic, and interleave standalone [`FileDownloadList`](../FileDownloadList/README.md) instances after the relevant topic in the same zone.

## Variation: `default`

No primary fields.

### Item fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | Text | Yes | Section heading. |
| `body` | Rich Text (multi: `paragraph,strong,em,hyperlink,list-item,o-list-item`) | No | Main content. |
| `box_heading` | Text | No | Heading for the highlighted sub-box. Only rendered if `box_body` has content. |
| `box_body` | Rich Text (multi: `paragraph,strong,em,hyperlink,list-item,o-list-item`) | No | The `bg-muted` box's content. |
| `link_label` | Text | No | Trailing link text. |
| `link` | Link (target-blank allowed) | No | Trailing link — only one, unlike `Accordion`. |

### Example content (one item)

```json
{
  "title": "Hearing-impaired customers",
  "body": [
    { "type": "paragraph", "content": { "text": "Hearing-impaired customers must confirm the following with the contact center in advance.", "spans": [] } }
  ],
  "box_heading": "Accompanied by a Hearing Dog or Other Assistance",
  "box_body": [
    { "type": "paragraph", "content": { "text": "Staff and cabin crew cannot assist with personal care...", "spans": [] } }
  ]
}
```

## Rendering & behavior

- Built on shadcn's `Accordion` (`@/components/ui/accordion`), `type="multiple"`, `defaultValue` set to every item — same "all open by default, individually collapsible" behavior as `Accordion`.
- An item with an entirely empty `body` (e.g. "Passengers who require a wheelchair" on `special-assistance`, which has a title only) is valid — the accordion panel just renders empty.
- **`box_body`/`FileDownloadList` pairing**: when a topic needs download buttons alongside its sub-box (e.g. "Customers with Assistance Dogs" on `special-assistance`), keep the intro copy in `body` and put everything that belongs *inside the shaded box* — including any text introducing the downloads — in `box_body`, then add a standalone `FileDownloadList` slice instance immediately after this `DisclosureList` instance in the same zone. The box renders `rounded-t-md` with **no bottom margin** whenever `item.link` is empty (the common case when a download list follows), and `FileDownloadList` renders `rounded-b-md` with **no top margin** — together they read as one continuous shaded card, even though they're two independent slice instances (Prismic can't nest a file list inside this slice's items — see the [flat-slice limitation](../README.md#conventions-used-across-every-slice)). Getting this wrong (leaving download-adjacent text in `body` instead of `box_body`) is exactly what caused the "buttons aren't inside the card" look before this convention was established.

## Styling conventions

- Trailing link uses the shared [`ChevronLink`](../../components/prismic/chevron-link.tsx) component with `chevron={false}` — same `font-semibold text-primary` color/weight as `Accordion`'s links, but *without* the trailing `›` or row spacing (a plain inline link, not a stacked row). Same `bg-muted` box treatment as `Accordion`, including the box's smaller `text-[0.9rem]` paragraph size vs. the main `body` text above it (matches the reference design's two font sizes — main intro text at normal size, the shaded sub-box at a visibly smaller size). See [slice library conventions](../README.md#conventions-used-across-every-slice).
- Same `AccordionItem` border override pattern (`border-t! border-b-0! last:border-b!`) for a single divider between items.

## Known limitations

- One trailing link only (vs. `Accordion`'s two) — by design, since this slice's original driving use case never needed a second link.
- Can't hold a variable-length list of files/links per item — see [When NOT to use](#when-not-to-use).

## Related slices

- [`Accordion`](../Accordion/README.md) — numbered sibling, supports two trailing links and a "necessities" checklist box.
- [`FileDownloadList`](../FileDownloadList/README.md) — the workaround for multiple files per topic.
