"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Nonni G"
      button={{
        text: "Book Table",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Authentic Flavors, Timeless Memories"
      description="Experience the warmth of Nonni G by Carmens. Where tradition meets culinary excellence in every bite."
      testimonials={[
        {
          name: "Jane D.",
          handle: "@janed",
          testimonial: "The best authentic pasta I have had in years!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/classic-luxury-restaurant-with-tables-chairs_140725-9388.jpg?_wi=1",
          imageAlt: "elegant italian restaurant interior",
        },
        {
          name: "Mark S.",
          handle: "@marks",
          testimonial: "Exquisite service and even better food.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/two-leather-yellow-armchairs-coffee-table-restaurant_140725-8902.jpg",
          imageAlt: "elegant italian restaurant interior",
        },
        {
          name: "Lisa K.",
          handle: "@lisak",
          testimonial: "Nonni G feels just like home.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/glasses-various-dry-uncooked-pasta-blue-background_114579-45677.jpg?_wi=1",
          imageAlt: "elegant italian restaurant interior",
        },
        {
          name: "David P.",
          handle: "@davidp",
          testimonial: "A must-visit for any Italian food enthusiast.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-plate-italian-pasta_23-2148189927.jpg?_wi=1",
          imageAlt: "elegant italian restaurant interior",
        },
        {
          name: "Sarah W.",
          handle: "@sarahw",
          testimonial: "Simply wonderful, five stars all the way.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-fried-shrimps_140725-44339.jpg?_wi=1",
          imageAlt: "elegant italian restaurant interior",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/classic-luxury-restaurant-with-tables-chairs_140725-9388.jpg?_wi=2"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-people-spending-time-together_23-2149152906.jpg",
          alt: "Diner portrait 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-friends-chatting-table_23-2149213369.jpg",
          alt: "Diner portrait 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-couple-holding-hands-table_23-2148014499.jpg",
          alt: "Diner portrait 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-woman-eating-donut-talking-her-boyfriend-cafe_637285-9080.jpg",
          alt: "Diner portrait 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-smiley-people-with-food_23-2149152879.jpg",
          alt: "Diner portrait 5",
        },
      ]}
      avatarText="Loved by over 1,000+ happy diners"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Our Story"
      description={[
        "Inspired by family recipes passed down through generations, Nonni G by Carmens brings the soul of Italy to your table.",
        "We believe that the best meals are shared with loved ones in an environment that feels like home.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Handmade Pasta",
          tags: [
            "Tradition",
            "Fresh",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/glasses-various-dry-uncooked-pasta-blue-background_114579-45677.jpg?_wi=2",
        },
        {
          id: "f2",
          title: "Wood Fired Pizza",
          tags: [
            "Authentic",
            "Crispy",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-plate-italian-pasta_23-2148189927.jpg?_wi=2",
        },
        {
          id: "f3",
          title: "Chef Speciality",
          tags: [
            "Seasoned",
            "Chef",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-fried-shrimps_140725-44339.jpg?_wi=2",
        },
      ]}
      title="Signature Dishes"
      description="Explore our chef-curated selection of traditional Italian favorites."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Robert B.",
          role: "Foodie",
          testimonial: "The atmosphere is unmatched.",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-friends-shaking-hands_23-2148395404.jpg",
        },
        {
          id: "2",
          name: "Emma R.",
          role: "Local",
          testimonial: "Best pasta in the neighborhood.",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-couple-clinking-with-glasses-having-dinner_23-2147736705.jpg",
        },
        {
          id: "3",
          name: "James C.",
          role: "Diner",
          testimonial: "Absolutely delicious dinner.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-people-table_23-2149213367.jpg",
        },
        {
          id: "4",
          name: "Sarah H.",
          role: "Regular",
          testimonial: "Nonni G never disappoints.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-woman-having-fun-while-eating-dinner-communicating-with-friends-dining-table_637285-3342.jpg",
        },
        {
          id: "5",
          name: "Alex T.",
          role: "New Fan",
          testimonial: "Fantastic dining adventure.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-dining-table-while-communicating-with-her-husband_637285-3516.jpg",
        },
      ]}
      title="Guest Experiences"
      description="See why our guests return time and time again."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you accept reservations?",
          content: "Yes, we encourage booking online.",
        },
        {
          id: "q2",
          title: "Is parking available?",
          content: "Street parking is available nearby.",
        },
        {
          id: "q3",
          title: "Do you have vegan options?",
          content: "We offer several plant-based dishes.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/dining-table-background-zoom-calls_23-2149684444.jpg"
      mediaAnimation="slide-up"
      title="Frequently Asked"
      description="Have questions about our dining experience?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Ready to dine with us?"
      description="We look forward to welcoming you soon. Make your reservation today."
      buttons={[
        {
          text: "Reserve Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#features",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Nonni G"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
