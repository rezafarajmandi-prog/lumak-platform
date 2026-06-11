"use client";

import Link from "next/link";
import { families } from "@/data/families";
import { useLanguage, useTranslation } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import { translateField } from "@/lib/i18n";

function MailIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.15 7-12A7 7 0 1 0 5 9c0 6.85 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.095 10.316 22.286 1h-1.941l-7.115 8.088L7.551 1H1l8.589 12.231L1 23h1.941l7.509-8.543L16.449 23H23l-8.905-12.684Zm-2.658 3.022-.872-1.219-6.924-9.688h2.981l5.59 7.822.868 1.219 7.265 10.166h-2.981l-5.927-8.3Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M116.504 500.219V170.654H6.975v329.565h109.529ZM61.751 125.674c38.183 0 61.968-25.328 61.968-56.953C122.997 36.393 99.934 11.78 62.467 11.78 24.994 11.781.5 36.394.5 68.722c0 31.625 23.772 56.953 60.53 56.953h.721ZM177.124 500.219s1.437-298.643 0-329.564H286.67v47.794h-.727c14.404-22.49 40.354-55.533 99.44-55.533 72.085 0 126.116 47.103 126.116 148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531-30.254 0-48.284 20.38-56.202 40.08-2.897 7.012-3.602 16.861-3.602 26.711v184.047H177.124Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="currentColor"
      />
      <path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.041.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.041 0 6.324-.654a6 6 0 0 0 2.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.041-.654-6.324a6 6 0 0 0-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8C7.24 1 5.559 1 4.276 1.654a6 6 0 0 0-2.622 2.622ZM13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 0 0-1.748 1.748c-.159.313-.289.761-.361 1.638C3.002 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 0 0 1.748 1.748c.313.159.761.289 1.638.361.9.073 2.065.075 3.778.075h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 0 0 1.748-1.748c.159-.313.289-.761.361-1.638.073-.9.075-2.065.075-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 0 0-1.748-1.748c-.313-.159-.761-.289-1.638-.361C16.278 3.002 15.113 3 13.4 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.74.46 3.44 1.33 4.94L2 22l5.28-1.39a9.85 9.85 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.44 9.9-9.9C21.95 6.45 17.51 2 12.04 2Zm0 18.12h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.17 8.17 0 0 1-1.25-4.35c0-4.54 3.7-8.23 8.24-8.23a8.24 8.24 0 0 1 8.24 8.24c0 4.53-3.7 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.01-.38.11-.5.11-.11.25-.3.37-.45.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.37-.78-1.88-.21-.49-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.02 2.59.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.94 4.16c.28-1.24-.93-2.28-2.1-1.8L2.92 9.23C1.66 9.74 1.72 11.55 3 11.98l4.27 1.42 1.65 5.23c.39 1.23 1.94 1.62 2.86.72l2.4-2.35 4.32 3.15c1.12.82 2.72.2 3.03-1.16l2.41-14.83Zm-4.02.84L9.08 12.9l-.3 3.82-1.08-3.42L17.92 5Zm-7.2 12.72.2-2.51 1.75 1.28-1.95 1.23Z" />
    </svg>
  );
}

function FooterLogo() {
  return (
    <span className="inline-flex items-center gap-3 text-graphite dark:text-warmwhite">
      <svg className="h-8 w-9 shrink-0" viewBox="0 0 44 36" fill="none" aria-hidden="true">
        <path d="M4 32V4h8v20h12v8H4Z" fill="currentColor" />
        <path d="M20 4h8v12h12v8H20V4Z" fill="currentColor" opacity="0.55" />
      </svg>
      <span className="text-2xl font-bold tracking-normal">LUMAK</span>
    </span>
  );
}

function ThemeIcon({ theme }: { theme: string }) {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {theme === "dark" ? (
        <path d="M21 14.3A8 8 0 0 1 9.7 3 9 9 0 1 0 21 14.3Z" fill="currentColor" />
      ) : (
        <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657 1.414-1.414M4.929 19.071l1.414-1.414m0-11.314L4.929 4.929m14.142 14.142-1.414-1.414M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      )}
    </svg>
  );
}

const footerLinkClass = "text-sm leading-6 text-steel hover:text-graphite dark:hover:text-warmwhite transition-colors";
const footerHeadingClass = "text-sm font-semibold leading-6 text-graphite dark:text-warmwhite";
const socialClass = "inline-flex h-8 w-8 items-center justify-center text-steel hover:text-bronze transition-colors";

export default function Footer() {
  const t = useTranslation();
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const tFooter = t.footer as Record<string, string>;
  const tNav = t.nav as Record<string, string>;

  const familiesHeading = tFooter.familiesHeading || tFooter.productFamilies || "Product families";
  const copyrightText = tFooter.copyright || "Copyright 2024 LUMAK. All rights reserved.";

  return (
    <footer aria-labelledby="footer-heading" className="bg-panel pb-10 pt-16 sm:pt-24 lg:pt-28 border-t border-steel/15 dark:border-bronze/20">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="LUMAK home">
              <FooterLogo />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-6 text-steel">
              {tFooter.brandLine || "Architectural lighting systems for precise, calm, and durable spaces."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className={footerHeadingClass}>{familiesHeading}</h3>
              <ul role="list" className="mt-6 space-y-4">
                {families.slice(0, 5).map((family) => (
                  <li key={family.slug}>
                    <Link href={`/families/${family.slug}`} className={footerLinkClass}>
                      {translateField(family.name, language)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={footerHeadingClass}>{tFooter.company || "Company"}</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link href="/about" className={footerLinkClass}>
                    {tNav.about || "About"}
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className={footerLinkClass}>
                    {tNav.projects}
                  </Link>
                </li>
                <li>
                  <Link href="/downloads" className={footerLinkClass}>
                    {tNav.downloads || "Downloads"}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={footerLinkClass}>
                    {tNav.contact}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className={footerHeadingClass}>{tFooter.contact || "Contact"}</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="mailto:info@lumak.com" className={`inline-flex gap-2 ${footerLinkClass}`}>
                    <MailIcon />
                    info@lumak.com
                  </a>
                </li>
                <li>
                  <a href="tel:+982100000000" className={`inline-flex gap-2 ${footerLinkClass}`}>
                    <PhoneIcon />
                    +98 21 0000 0000
                  </a>
                </li>
                <li>
                  <span className={`inline-flex gap-2 ${footerLinkClass}`}>
                    <PinIcon />
                    Tehran, Iran
                  </span>
                </li>
              </ul>

              <div className="mt-7 flex items-center gap-3">
                <a className={socialClass} href="#" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a className={socialClass} href="#" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a className={socialClass} href="#" aria-label="WhatsApp">
                  <WhatsAppIcon />
                </a>
                <a className={socialClass} href="#" aria-label="Telegram">
                  <TelegramIcon />
                </a>
                <a className={socialClass} href="#" aria-label="X">
                  <XIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-steel/15 pt-7 sm:mt-18 lg:mt-20">
          <div className="flex flex-col gap-5 text-sm leading-6 text-steel md:flex-row md:items-center md:justify-between">
            <p>{copyrightText}</p>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/privacy" className={footerLinkClass}>
                {tFooter.privacy || "Privacy"}
              </Link>
              <Link href="/terms" className={footerLinkClass}>
                {tFooter.terms || "Terms"}
              </Link>

              <button
                onClick={() => setLanguage(language === "fa" ? "en" : "fa")}
                className="inline-flex h-9 items-center rounded-full border border-steel/15 px-3 text-sm text-steel hover:border-bronze/40 hover:text-bronze transition-colors"
                aria-label={tNav.languageToggle || "Toggle language"}
              >
                {tNav.languageButton || language.toUpperCase()}
              </button>

              <button
                onClick={toggleTheme}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-steel/15 text-steel hover:border-bronze/40 hover:text-bronze transition-colors"
                aria-label="Toggle theme"
              >
                <ThemeIcon theme={theme} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
