# NewsletterSignup

An email newsletter signup form (heading + email input + submit button).

**Live examples**: none currently authored.

## ⚠️ Status: unstyled placeholder, no working backend

Like `CtaBanner`/`HeroBanner`, this slice's `index.tsx` has **no Tailwind classes**. More importantly: the form posts to `/api/newsletter` (`action="/api/newsletter" method="post"`), and **that API route does not exist in this project** (`app/api/` is not present). Submitting this form in its current state will 404.

## When to use

- Not yet — needs both a design pass and a real form-handling endpoint (a Next.js Route Handler at `app/api/newsletter/route.ts`, or a client-side integration with an email provider) before it's usable.

## Variation: `default`

### Primary fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | Text | No | Rendered as a plain `<h2>`. |
| `input_placeholder` | Text | No | Defaults to `you@example.com` if unset. |
| `submit_label` | Text | No | Defaults to `Subscribe` if unset. |

No item fields.

### Example content

```json
{
  "title": "Stay in the loop",
  "input_placeholder": "you@example.com",
  "submit_label": "Subscribe"
}
```

## Rendering & behavior

- Uncontrolled native `<form>` — no client-side validation, no submit handler, no success/error state.
- Includes a `sr-only` label for accessibility on the email input (one thing already done correctly, worth preserving in any redesign).

## Known limitations

- **No backend**: `POST /api/newsletter` doesn't exist — build the route handler (or swap the form action for a real integration) before shipping this slice on a live page.
- **Needs a design/Tailwind pass.**
- No client-side validation/error/success states.

## Related slices

- None directly comparable — this is the only form-type slice in the library.
