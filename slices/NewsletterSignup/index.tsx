import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type NewsletterSignupProps =
  SliceComponentProps<Content.NewsletterSignupSlice>;

export default function NewsletterSignup({ slice }: NewsletterSignupProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2>{slice.primary.title}</h2>
      <form action="/api/newsletter" method="post">
        <label>
          <span className="sr-only">Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder={slice.primary.input_placeholder || "you@example.com"}
          />
        </label>
        <button type="submit">{slice.primary.submit_label || "Subscribe"}</button>
      </form>
    </section>
  );
}
