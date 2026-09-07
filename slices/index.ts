import Breadcrumbs from "./Breadcrumbs";
import CtaBanner from "./CtaBanner";
import FaqQuestionList from "./FaqQuestionList";
import HeroBanner from "./HeroBanner";
import NewsletterSignup from "./NewsletterSignup";
import PageTitle from "./PageTitle";
import SocialLinks from "./SocialLinks";

export type PageContext = {
  breadcrumbs: { label: string | null; href: string | null }[];
};

export const components = {
  breadcrumbs: Breadcrumbs,
  cta_banner: CtaBanner,
  faq_question_list: FaqQuestionList,
  hero_banner: HeroBanner,
  newsletter_signup: NewsletterSignup,
  page_title: PageTitle,
  social_links: SocialLinks,
};
