import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export const ContactUs = () => {
  return (
    <div>
      <Header activeLink="contact-us" />
      <Hero
        backgroundImgName="contact-us-background.jpg"
        title="Contact Us"
        description="Do you have any questions, comments or queries? We're here to help. Contact us at us
        through our contact form or use the contact details provided to send us a message.
        details provided to send us a message. We'd love to hear your suggestions and We'd love
        to hear your suggestions and respond to your concerns, so don't hesitate to contact us!
        us!"
      />
      <Footer />
    </div>
  )
};