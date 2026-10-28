import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BedDouble,
  Bus,
  CalendarDays,
  Car,
  Clock3,
  MapPin,
  Shirt,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteHeader } from "@/components/site-header";
import { texts } from "@/content/texts";

const information = [
  {
    icon: MapPin,
    index: "01",
    ...texts.information.items[0],
    action: { label: texts.information.items[0].actionLabel, href: texts.venue.mapsUrl },
  },
  {
    icon: Bus,
    index: "02",
    ...texts.information.items[1],
    action: undefined,
  },
  {
    icon: BedDouble,
    index: "03",
    ...texts.information.items[2],
    body: texts.hotel.name,
    detail: texts.hotel.note,
    action: { label: texts.information.items[2].actionLabel, href: texts.hotel.mapsUrl },
  },
  {
    icon: Shirt,
    index: "04",
    ...texts.information.items[3],
    action: undefined,
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
            <span>{texts.monogram}</span>
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
              src="/images/portrait.jpg"
              alt={texts.story.imageAlt}
              fill
              sizes="(max-width: 760px) 90vw, 44vw"
            />
            <span className="image-index">{texts.story.imageIndex}</span>
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
              src="/images/editorial-one.jpg"
              alt={texts.editorial.firstImageAlt}
              fill
              sizes="(max-width: 760px) 78vw, 38vw"
            />
            <figcaption>{texts.editorial.firstCaption}</figcaption>
          </figure>
          <figure className="editorial__image editorial__image--two" data-reveal>
            <Image
              src="/images/editorial-two.jpg"
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

        <section className="day section section--olive" id="el-dia">
          <div className="day__heading" data-reveal>
            <p className="eyebrow">{texts.day.heading}</p>
            <p className="day__number">{texts.date.day}</p>
            <h2>
              {texts.date.month}
              <br />
              {texts.date.year}
            </h2>
          </div>
          <div className="day__content">
            <div className="day__venue" data-reveal>
              <MapPin aria-hidden="true" />
              <div>
                <h3>{texts.venue.name}</h3>
                <p>{texts.venue.city}</p>
              </div>
            </div>
            <ol className="timeline" aria-label={texts.day.scheduleAriaLabel}>
              {texts.schedule.map((event, index) => (
                <li key={event.label} data-reveal>
                  <span>0{index + 1}</span>
                  <time>{event.time}</time>
                  <p>
                    {event.label}
                    {"approximate" in event && event.approximate ? (
                      <small>{texts.day.approximate}</small>
                    ) : null}
                  </p>
                </li>
              ))}
            </ol>
            <a
              className="text-link text-link--light"
              href={texts.venue.mapsUrl}
              target="_blank"
              rel="noreferrer"
              data-reveal
            >
              {texts.day.directionsLink} <ArrowUpRight aria-hidden="true" />
              <span className="sr-only">{texts.externalLinkNote}</span>
            </a>
          </div>
        </section>

        <section className="information section" id="informacion">
          <header className="section-heading" data-reveal>
            <p className="eyebrow">{texts.information.eyebrow}</p>
            <h2>{texts.information.title}</h2>
          </header>
          <div className="information__list">
            {information.map((item) => {
              const Icon = item.icon;
              return (
                <article className="information__item" key={item.title} data-reveal>
                  <span className="information__index">{item.index}</span>
                  <Icon className="information__icon" aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p className="information__body">{item.body}</p>
                    <p className="information__detail">{item.detail}</p>
                    {item.action ? (
                      <a
                        className="text-link"
                        href={item.action.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.action.label} <ArrowUpRight aria-hidden="true" />
                        <span className="sr-only">
                          {texts.externalLinkNote}
                        </span>
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
          <div className="transport-strip" data-reveal>
            <Bus aria-hidden="true" />
            {texts.transport.map((route) => (
              <div key={route.origin}>
                <strong>{route.origin}</strong>
                <span>{texts.transportLabels.departure} {route.departure}</span>
                <span>{texts.transportLabels.return} {route.returnTime}</span>
              </div>
            ))}
            <Car aria-hidden="true" />
          </div>
        </section>

        <section className="transition-section" aria-label={texts.transition.ariaLabel}>
          <Image
            src="/images/transition.jpg"
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

        <section className="faq section" aria-labelledby="faq-title">
          <header className="section-heading" data-reveal>
            <p className="eyebrow">{texts.faq.eyebrow}</p>
            <h2 id="faq-title">{texts.faq.title}</h2>
          </header>
          <div className="faq__list">
            {texts.faq.items.map((item, index) => (
              <details key={item.question} data-reveal>
                <summary>
                  <span>0{index + 1}</span>
                  {item.question}
                  <i aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing" aria-label={texts.closing.ariaLabel}>
          <Image
            src="/images/hero-field.jpg"
            alt={texts.closing.imageAlt}
            fill
            sizes="100vw"
          />
          <div className="closing__shade" aria-hidden="true" />
          <div className="closing__content" data-reveal>
            <p>{texts.closing.message}</p>
            <span>{texts.monogram}</span>
            <time dateTime={texts.date.iso}>{texts.date.short}</time>
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

      <a className="mobile-rsvp" href="#rsvp">
        {texts.rsvpSection.button}
      </a>
    </>
  );
}