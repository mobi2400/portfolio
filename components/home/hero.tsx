import {EMAIL, SOCIAL_LINKS, TYPED_STRINGS, getMenuRef} from "../../constants";
import React, {MutableRefObject, useEffect, useRef} from "react";
import Image from "next/image";
import Typed from "typed.js";
import {gsap, Linear} from "gsap";
import Button, {ButtonTypes} from "../common/button";
import HeroImage from "./hero-image";

const HERO_STYLES = {
  SECTION:
    "w-full flex md:items-center py-8 section-container min-h-screen relative mb-24",
  CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
  SOCIAL_LINK:
    "link hover:opacity-80 duration-300 md:mr-4 mr-3 inline-flex items-center justify-center",
  BG_WRAPPER:
    "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
  TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
};

const SOCIAL_ICONS: Partial<Record<keyof typeof SOCIAL_LINKS, string>> = {
  linkedin: "/social/linkedin.svg",
  github: "/social/github.svg",
  instagram: "/social/instagram.svg",
  twitter: "/social/twitter.svg",
};

const HeroSection = React.memo(() => {
  const typedSpanElement: MutableRefObject<HTMLSpanElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const initTypeAnimation = (
    typedSpanElement: MutableRefObject<HTMLSpanElement>
  ): Typed => {
    return new Typed(typedSpanElement.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    });
  };

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): GSAPTimeline => {
    const revealTl = gsap.timeline({defaults: {ease: Linear.easeNone}});
    revealTl
      .to(targetSection.current, {opacity: 1, duration: 2})
      .from(
        targetSection.current.querySelectorAll(".seq"),
        {opacity: 0, duration: 0.5, stagger: 0.5},
        "<"
      );

    return revealTl;
  };

  useEffect(() => {
    const typed = initTypeAnimation(typedSpanElement);
    initRevealAnimation(targetSection);

    return typed.destroy;
  }, [typedSpanElement, targetSection]);

  const renderBackgroundImage = (): React.ReactNode => (
    <div className={HERO_STYLES.BG_WRAPPER} style={{maxHeight: "650px"}}>
      <HeroImage />
    </div>
  );

  const renderSocialLinks = (): React.ReactNode =>
    (Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>).map(
      (platform) => {
        const iconSrc = SOCIAL_ICONS[platform];

        return (
          <a
            href={SOCIAL_LINKS[platform]}
            key={platform}
            className={HERO_STYLES.SOCIAL_LINK}
            rel="noreferrer"
            target="_blank"
            aria-label={`${platform} profile`}
            title={platform}
          >
            {iconSrc ? (
              <Image src={iconSrc} alt={platform} width={32} height={32} />
            ) : (
              <span className="uppercase tracking-wide text-sm">
                {platform}
              </span>
            )}
          </a>
        );
      }
    );

  const renderHeroContent = (): React.ReactNode => (
    <div className={HERO_STYLES.CONTENT}>
      <div className="md:mb-4 mb-2">
        <h2 className="text-4xl seq">Hello 👋🏻</h2>
        <h1 className="text-3xl seq">I am Md Mobasshir Shakil Khan</h1>
      </div>
      <p className="mb-4 text-lg md:text-xl">
        Builder of reliable MERN products, campus hackathon tools, and
        data-driven learning experiences.
      </p>
      <p className="mb-4">
        <span className={HERO_STYLES.TYPED_SPAN} ref={typedSpanElement}></span>
      </p>
      <div className="flex seq mb-5">{renderSocialLinks()}</div>
      <div className="flex seq">
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="Resume"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href="/mobasshir-resume.pdf"
        ></Button>
        <Button
          classes="ml-3"
          type={ButtonTypes.PRIMARY}
          name="Let's Talk"
          href={`mailto:${EMAIL}`}
        ></Button>
      </div>
    </div>
  );

  return (
    <section
      className={HERO_STYLES.SECTION}
      id={getMenuRef("Home")}
      ref={targetSection}
      style={{opacity: 0}}
    >
      {renderHeroContent()}
      {renderBackgroundImage()}
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
