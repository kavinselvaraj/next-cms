import Accordion from "./Accordion";
import Breadcrumbs from "./Breadcrumbs";
import ButtonLink from "./ButtonLink";
import Callout from "./Callout";
import CtaBanner from "./CtaBanner";
import DisclosureList from "./DisclosureList";
import FaqQuestionList from "./FaqQuestionList";
import FileDownloadList from "./FileDownloadList";
import HeroBanner from "./HeroBanner";
import ImageBlock from "./ImageBlock";
import InfoCardList from "./InfoCardList";
import LinkList from "./LinkList";
import NewsletterSignup from "./NewsletterSignup";
import PageTitle from "./PageTitle";
import RichTextSection from "./RichTextSection";
import SocialLinks from "./SocialLinks";

export type PageContext = {
  breadcrumbs: { label: string | null; href: string | null }[];
};

export const components = {
  accordion: Accordion,
  breadcrumbs: Breadcrumbs,
  button_link: ButtonLink,
  callout: Callout,
  cta_banner: CtaBanner,
  disclosure_list: DisclosureList,
  faq_question_list: FaqQuestionList,
  file_download_list: FileDownloadList,
  hero_banner: HeroBanner,
  image_block: ImageBlock,
  info_card_list: InfoCardList,
  link_list: LinkList,
  newsletter_signup: NewsletterSignup,
  page_title: PageTitle,
  rich_text_section: RichTextSection,
  social_links: SocialLinks,
};
