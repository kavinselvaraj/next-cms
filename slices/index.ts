import Breadcrumbs from "./Breadcrumbs";
import ButtonLink from "./ButtonLink";
import Callout from "./Callout";
import CtaBanner from "./CtaBanner";
import FaqQuestionList from "./FaqQuestionList";
import HeroBanner from "./HeroBanner";
import ImageBlock from "./ImageBlock";
import InfoCardList from "./InfoCardList";
import NewsletterSignup from "./NewsletterSignup";
import PageTitle from "./PageTitle";
import RichTextSection from "./RichTextSection";
import SocialLinks from "./SocialLinks";

export type PageContext = {
  breadcrumbs: { label: string | null; href: string | null }[];
};

export const components = {
  breadcrumbs: Breadcrumbs,
  button_link: ButtonLink,
  callout: Callout,
  cta_banner: CtaBanner,
  faq_question_list: FaqQuestionList,
  hero_banner: HeroBanner,
  image_block: ImageBlock,
  info_card_list: InfoCardList,
  newsletter_signup: NewsletterSignup,
  page_title: PageTitle,
  rich_text_section: RichTextSection,
  social_links: SocialLinks,
};
