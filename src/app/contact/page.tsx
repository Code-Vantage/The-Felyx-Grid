import type { Metadata } from "next";

import { ContactPage } from "../../components/contact/ContactPage";
import { Footer, Header } from "../../components/home";

export const metadata: Metadata = {
  title: "Contact | The Felyx Grid",
  description:
    "Contact The Felyx Grid to discuss a website, product interface, or brand identity project.",
};

export default function Contact() {
  return (
    <>
      <Header contactHref="#contact-form" hrefPrefix="/" startHref="#contact-form" />
      <ContactPage />
      <Footer hrefPrefix="/" />
    </>
  );
}
