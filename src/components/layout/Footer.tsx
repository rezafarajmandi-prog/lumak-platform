"use client";

import Link from "next/link";
import { useTranslation, useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import { translateField } from "@/lib/i18n";
import { families } from "@/data/families";

export default function Footer() {
  const t = useTranslation();
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // کلیدهای ترجمه با fallback برای سازگاری با هر دو زبان
  const tFooter = t.footer as Record<string, string>;
  const familiesHeading =
    tFooter.familiesHeading || tFooter.productFamilies || "Product Families";
  const copyrightText =
    tFooter.copyright || "© 2024 LUMAK. All rights reserved.";

  return (
    <footer className="bg-panel pt-16 pb-8 px-4 md:px-8 border-t border-steel/20 dark:border-bronze/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ستون ۱: برند + شبکه‌های اجتماعی */}
        <div>
          <h3 className="text-graphite dark:text-warmwhite font-bold text-lg">
            LUMAK
          </h3>
          <p className="text-steel text-sm mt-1">{t.footer.brandLine}</p>

          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel hover:text-graphite dark:hover:text-warmwhite transition-colors text-xl"
              aria-label="Instagram"
            >
              📸
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel hover:text-graphite dark:hover:text-warmwhite transition-colors text-xl"
              aria-label="X"
            >
              𝕏
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel hover:text-graphite dark:hover:text-warmwhite transition-colors text-xl"
              aria-label="WhatsApp"
            >
              💬
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel hover:text-graphite dark:hover:text-warmwhite transition-colors text-xl"
              aria-label="YouTube"
            >
              ▶️
            </a>
          </div>
        </div>

        {/* ستون ۲: خانواده محصولات */}
        <div>
          <h4 className="text-graphite dark:text-warmwhite text-sm font-semibold mb-3">
            {familiesHeading}
          </h4>
          <ul className="space-y-2 text-steel text-sm">
            {families.map((family) => (
              <li key={family.slug}>
                <Link
                  href={`/families/${family.slug}`}
                  className="hover:text-graphite dark:hover:text-warmwhite transition-colors"
                >
                  {translateField(family.name, language)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ستون ۳: شرکت */}
        <div>
          <h4 className="text-graphite dark:text-warmwhite text-sm font-semibold mb-3">
            {t.footer.company}
          </h4>
          <ul className="space-y-2 text-steel text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-graphite dark:hover:text-warmwhite transition-colors"
              >
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-graphite dark:hover:text-warmwhite transition-colors"
              >
                {t.nav.projects}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-graphite dark:hover:text-warmwhite transition-colors"
              >
                {t.nav.contact}
              </Link>
            </li>
            <li>
              <Link
                href="/dealers"
                className="hover:text-graphite dark:hover:text-warmwhite transition-colors"
              >
                نمایندگی‌ها
              </Link>
            </li>
          </ul>
        </div>

        {/* ستون ۴: منابع فنی */}
        <div>
          <h4 className="text-graphite dark:text-warmwhite text-sm font-semibold mb-3">
            {t.footer.resources}
          </h4>
          <ul className="space-y-2 text-steel text-sm">
            <li>
              <Link
                href="/downloads"
                className="hover:text-graphite dark:hover:text-warmwhite transition-colors"
              >
                IES
              </Link>
            </li>
            <li>
              <Link
                href="/downloads"
                className="hover:text-graphite dark:hover:text-warmwhite transition-colors"
              >
                BIM
              </Link>
            </li>
            <li>
              <Link
                href="/downloads"
                className="hover:text-graphite dark:hover:text-warmwhite transition-colors"
              >
                {t.downloadTypes.Datasheet}
              </Link>
            </li>
            <li>
              <Link
                href="/downloads"
                className="hover:text-graphite dark:hover:text-warmwhite transition-colors"
              >
                {t.downloadTypes.Catalog}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* نوار پایین */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-steel/20 dark:border-steel/20 flex flex-col md:flex-row justify-between text-steel text-xs">
        <span>{copyrightText}</span>
        <div className="flex gap-4 mt-2 md:mt-0 items-center">
          <Link
            href="#"
            className="hover:text-graphite dark:hover:text-warmwhite"
          >
            {t.footer.privacy}
          </Link>
          <Link
            href="#"
            className="hover:text-graphite dark:hover:text-warmwhite"
          >
            {t.footer.terms}
          </Link>

          <button
            onClick={() => setLanguage(language === "fa" ? "en" : "fa")}
            className="px-3 py-2 rounded-full border border-steel/15 text-steel dark:text-warmwhite hover:bg-surface/80 transition-colors text-sm"
            aria-label={t.nav.languageToggle}
          >
            {t.nav.languageButton}
          </button>

          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-steel/15 text-steel dark:text-warmwhite hover:bg-surface/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </footer>
  );
}
