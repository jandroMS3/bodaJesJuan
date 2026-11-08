import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Bus,
  CalendarDays,
  Clock3,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CopyAccountButton } from "@/components/copy-account-button";
import { Countdown } from "@/components/countdown";
import { SiteHeader } from "@/components/site-header";
import { texts } from "@/content/texts";

const information = [
  {
    ...texts.information.items[0],
    map: { src: texts.venue.mapsEmbedUrl, title: texts.venue.mapTitle },
  },
  {
    ...texts.information.items[1],
    map: null,
    routes: texts.transport,
  },
  {
    ...texts.information.items[2],
    body: texts.hotel.name,
    detail: texts.hotel.note,
    map: { src: texts.hotel.mapsEmbedUrl, title: texts.hotel.mapTitle },
  },
  {
    ...texts.information.items[3],
    map: null,
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        {texts.navigation.skipToContent}
      </a>
      <SiteHeader />
      <ScrollReveal />

      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <Image
            src="/images/fotoBicisAtardecer.jpg"
            alt={texts.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="hero__image"
          />
          <div className="hero__shade" aria-hidden="true" />
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">{texts.hero.eyebrow}</p>
            <h1 id="hero-title">{texts.couple}</h1>
            <p className="hero__date">{texts.date.short}</p>
            <p className="hero__place">
              {texts.venue.name} · {texts.venue.location}
            </p>
          </div>
          <a className="hero__scroll" href="#anuncio">
            {texts.hero.scrollLink} <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section className="announcement section" id="anuncio">
          <div className="announcement__rule" aria-hidden="true" />
          <p className="eyebrow" data-reveal>
            {texts.date.weekday}
          </p>
          <h2 data-reveal>{texts.announcement.title}</h2>
          <div className="announcement__details" data-reveal>
            <p>{texts.date.long}</p>
            <div className="announcement__monogram">
              <Image
                src="/images/logoBodaNegro.png"
                alt="Logotipo de Jesica y Juan"
                width={135}
                height={90}
              />
            </div>
            <p>
              {texts.venue.name}
              <br />
              {texts.venue.city}
            </p>
          </div>
        </section>

        <section className="story section" id="nosotros">
          <div className="story__image" data-reveal>
            <Image
              src="/images/fotoAbrazadosBlancoNegro.jpeg"
              alt={texts.story.imageAlt}
              fill
              sizes="(max-width: 760px) 90vw, 44vw"
            />
          </div>
          <div className="story__copy" data-reveal>
            <p className="eyebrow">{texts.story.eyebrow}</p>
            <h2>
              {texts.story.titleFirstLine}
              <br />
              {texts.story.titleSecondLine}
            </h2>
            <p>
              {texts.story.paragraph}
            </p>
            <p>{texts.story.closing}</p>
          </div>
        </section>

        <section className="editorial section" aria-label={texts.editorial.ariaLabel}>
          <div className="editorial__title" data-reveal>
            <p className="eyebrow">{texts.editorial.eyebrow}</p>
            <h2>
              {texts.editorial.titleFirstLine}
              <br />
              {texts.editorial.titleSecondLine}
            </h2>
          </div>
          <figure className="editorial__image editorial__image--one" data-reveal>
            <Image
              src="/images/fotoCorriendoAYC.jpg"
              alt={texts.editorial.firstImageAlt}
              fill
              sizes="(max-width: 760px) 78vw, 38vw"
            />
            <figcaption>{texts.editorial.firstCaption}</figcaption>
          </figure>
          <figure className="editorial__image editorial__image--two" data-reveal>
            <Image
              src="/images/fotoAbrazadosAYC.jpeg"
              alt={texts.editorial.secondImageAlt}
              fill
              sizes="(max-width: 760px) 88vw, 48vw"
            />
            <figcaption>{texts.editorial.secondCaption}</figcaption>
          </figure>
          <p className="editorial__note" data-reveal>
            {texts.editorial.noteFirstLine}
            <br />
            {texts.editorial.noteSecondLine}
          </p>
        </section>

        <section className="day section section--olive" id="el-dia" aria-labelledby="day-title">
          <h2 className="day__title" id="day-title" data-reveal>
            {texts.date.long}
          </h2>
          <div className="day__images">
            <figure className="day__image" data-reveal>
              <Image
                src="/images/Planning1.png"
                alt="Planificación de la boda, parte 1"
                width={370}
                height={439}
                sizes="(max-width: 759px) 90vw, 42vw"
              />
            </figure>
            <figure className="day__image" data-reveal>
              <Image
                src="/images/Planning2.png"
                alt="Planificación de la boda, parte 2"
                width={313}
                height={435}
                sizes="(max-width: 759px) 90vw, 42vw"
              />
            </figure>
          </div>
        </section>

        <section className="information section" id="informacion">
          <header className="section-heading" data-reveal>
            <p className="eyebrow">{texts.information.eyebrow}</p>
            <h2>{texts.information.title}</h2>
          </header>
          <div className="information__list">
            {information.map((item) => {
              return (
                <article className="information__item" key={item.title} data-reveal>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="information__body">{item.body}</p>
                    <p className="information__detail">{item.detail}</p>
                    {item.map ? (
                      <iframe
                        className="information__map"
                        title={item.map.title}
                        src={item.map.src}
                        width="600"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    ) : null}
                  </div>
                  {"routes" in item ? (
                    <>
                      <div className="transport-strip">
                        <Bus aria-hidden="true" />
                        {item.routes.map((route) => (
                          <div key={route.origin}>
                            <strong>{route.origin}</strong>
                            <span>{texts.transportLabels.departure} {route.departure}</span>
                            <span>{texts.transportLabels.return} {route.returnTime}</span>
                          </div>
                        ))}
                        <Bus aria-hidden="true" />
                      </div>
                      {"note" in item ? (
                        <p className="information__detail">* {item.note}</p>
                      ) : null}
                    </>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <section className="transition-section" aria-label={texts.transition.ariaLabel}>
          <Image
            src="/images/fotoElevacionAtardecer.jpeg"
            alt={texts.transition.imageAlt}
            fill
            sizes="100vw"
          />
          <div className="transition-section__shade" aria-hidden="true" />
          <blockquote data-reveal>
            {texts.transition.quoteFirstLine}
            <br />
            <em>{texts.transition.quoteSecondLine}</em>
          </blockquote>
        </section>

        <section className="rsvp section" id="rsvp">
          <div className="rsvp__intro" data-reveal>
            <p className="eyebrow">{texts.rsvpSection.eyebrow}</p>
            <h2>{texts.rsvpSection.title}</h2>
            <p>
              {texts.rsvpSection.invitation} {texts.rsvp.deadline}.
            </p>
          </div>
          <div className="rsvp__panel" data-reveal>
            <span className="rsvp__monogram">{texts.monogram}</span>
            <div className="rsvp__facts">
              <p>
                <CalendarDays aria-hidden="true" />
                {texts.rsvpSection.facts[0]}
              </p>
              <p>
                <Bus aria-hidden="true" />
                {texts.rsvpSection.facts[1]}
              </p>
              <p>
                <Clock3 aria-hidden="true" />
                {texts.rsvpSection.facts[2]}
              </p>
            </div>
            <a
              className="primary-button"
              href={texts.rsvp.url}
              target="_blank"
              rel="noreferrer"
            >
              {texts.rsvpSection.button} <ArrowUpRight aria-hidden="true" />
              <span className="sr-only">{texts.externalLinkNote}</span>
            </a>
            <p className="rsvp__help">
              {texts.rsvpSection.help}
            </p>
          </div>
        </section>

        <section className="gift section section--olive" aria-labelledby="gift-title">
          <div className="gift__intro" data-reveal>
            <h2 id="gift-title">{texts.gift.title}</h2>
            <div className="gift__description">
              {texts.gift.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="gift__signoff">
                {texts.gift.signoff}
                <br />
                <em>{texts.gift.signature}</em> {texts.gift.heart}
              </p>
            </div>
          </div>
          <div className="gift__account" data-reveal>
            <span className="gift__account-label">{texts.gift.accountLabel}</span>
            <p className="gift__iban">{texts.gift.iban}</p>
            <CopyAccountButton value={texts.gift.iban} />
          </div>
        </section>

        <section className="closing" aria-label={texts.closing.ariaLabel}>
          <Image
            src="/images/fotoPruebaFinal3.jpg"
            alt={texts.closing.imageAlt}
            fill
            sizes="100vw"
          />
          <div className="closing__shade" aria-hidden="true" />
          <div className="closing__content" data-reveal>
            <p>{texts.closing.message}</p>
            <Countdown targetDateTime={texts.date.countdownTarget} />
            <span>{texts.monogram}</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{texts.monogram} · {texts.footer.location} · {texts.date.year}</p>
        <details>
          <summary>{texts.footer.privacyTitle}</summary>
          <p>{texts.footer.privacy}</p>
        </details>
      </footer>
    </>
  );
}