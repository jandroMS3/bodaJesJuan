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
import { wedding } from "@/content/wedding";

const information = [
  {
    icon: MapPin,
    index: "01",
    title: "Cómo llegar",
    body: "La ceremonia y la celebración tendrán lugar en Masía del Olivar, en Bétera.",
    detail: "Aparcamiento gratuito en el recinto.",
    action: { label: "Abrir en Maps", href: wedding.venue.mapsUrl },
  },
  {
    icon: Bus,
    index: "02",
    title: "Autobuses",
    body: "Habrá servicio de ida y vuelta desde Valencia y Vila-real.",
    detail: "Valencia 11:00 · Vila-real 10:30 · Regreso 00:00",
  },
  {
    icon: BedDouble,
    index: "03",
    title: "Alojamiento",
    body: wedding.hotel.name,
    detail: wedding.hotel.note,
    action: { label: "Ver hotel", href: wedding.hotel.mapsUrl },
  },
  {
    icon: Shirt,
    index: "04",
    title: "Vestimenta",
    body: "Formal · boda de día",
    detail: "Elegante, natural y preparada para disfrutar hasta el final.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <ScrollReveal />

      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <Image
            src="/images/fotoBicisAtardecer.jpg"
            alt="Jes y Juan en bicicleta al atardecer"
            fill
            priority
            sizes="100vw"
            className="hero__image"
          />
          <div className="hero__shade" aria-hidden="true" />
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">Guarda la fecha</p>
            <h1 id="hero-title">{wedding.couple}</h1>
            <p className="hero__date">{wedding.date.short}</p>
            <p className="hero__place">
              {wedding.venue.name} · Bétera
            </p>
          </div>
          <a className="hero__scroll" href="#anuncio">
            Descubre el día <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section className="announcement section" id="anuncio">
          <div className="announcement__rule" aria-hidden="true" />
          <p className="eyebrow" data-reveal>
            {wedding.date.weekday}
          </p>
          <h2 data-reveal>Nos casamos.</h2>
          <div className="announcement__details" data-reveal>
            <p>{wedding.date.long}</p>
            <span>{wedding.monogram}</span>
            <p>
              {wedding.venue.name}
              <br />
              {wedding.venue.city}
            </p>
          </div>
        </section>

        <section className="story section" id="nosotros">
          <div className="story__image" data-reveal>
            <Image
              src="/images/portrait.jpg"
              alt="Una pareja se abraza durante su sesión de preboda"
              fill
              sizes="(max-width: 760px) 90vw, 44vw"
            />
            <span className="image-index">01 / 05</span>
          </div>
          <div className="story__copy" data-reveal>
            <p className="eyebrow">Jes & Juan</p>
            <h2>
              Elegirnos.
              <br />
              Una y otra vez.
            </h2>
            <p>
              Muchos kilómetros, planes y recuerdos después, queremos celebrar
              con vosotros uno de los días más importantes de nuestro recorrido.
            </p>
            <p>Nos hará muchísima ilusión que forméis parte de él.</p>
          </div>
        </section>

        <section className="editorial section" aria-label="Recuerdos juntos">
          <div className="editorial__title" data-reveal>
            <p className="eyebrow">Nuestro recorrido</p>
            <h2>
              Juntos
              <br />
              es mejor.
            </h2>
          </div>
          <figure className="editorial__image editorial__image--one" data-reveal>
            <Image
              src="/images/editorial-one.jpg"
              alt="Pareja celebrando junta al aire libre"
              fill
              sizes="(max-width: 760px) 78vw, 38vw"
            />
            <figcaption>Valencia · Nuestro lugar</figcaption>
          </figure>
          <figure className="editorial__image editorial__image--two" data-reveal>
            <Image
              src="/images/editorial-two.jpg"
              alt="Un instante espontáneo de una celebración"
              fill
              sizes="(max-width: 760px) 88vw, 48vw"
            />
            <figcaption>Seguir avanzando · Siempre</figcaption>
          </figure>
          <p className="editorial__note" data-reveal>
            Dos caminos.
            <br />
            Una misma dirección.
          </p>
        </section>

        <section className="day section section--olive" id="el-dia">
          <div className="day__heading" data-reveal>
            <p className="eyebrow">El día</p>
            <p className="day__number">17</p>
            <h2>
              Abril
              <br />
              2027
            </h2>
          </div>
          <div className="day__content">
            <div className="day__venue" data-reveal>
              <MapPin aria-hidden="true" />
              <div>
                <h3>{wedding.venue.name}</h3>
                <p>{wedding.venue.city}</p>
              </div>
            </div>
            <ol className="timeline" aria-label="Horarios de la celebración">
              {wedding.schedule.map((event, index) => (
                <li key={event.label} data-reveal>
                  <span>0{index + 1}</span>
                  <time>{event.time}</time>
                  <p>
                    {event.label}
                    {"approximate" in event && event.approximate ? (
                      <small>aprox.</small>
                    ) : null}
                  </p>
                </li>
              ))}
            </ol>
            <a
              className="text-link text-link--light"
              href={wedding.venue.mapsUrl}
              target="_blank"
              rel="noreferrer"
              data-reveal
            >
              Cómo llegar <ArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </div>
        </section>

        <section className="information section" id="informacion">
          <header className="section-heading" data-reveal>
            <p className="eyebrow">Para que solo tengáis que disfrutar</p>
            <h2>Información práctica</h2>
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
                          {" "}(se abre en una pestaña nueva)
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
            {wedding.transport.map((route) => (
              <div key={route.origin}>
                <strong>{route.origin}</strong>
                <span>Salida {route.departure}</span>
                <span>Regreso {route.returnTime}</span>
              </div>
            ))}
            <Car aria-hidden="true" />
          </div>
        </section>

        <section className="transition-section" aria-label="Nuestro recorrido">
          <Image
            src="/images/transition.jpg"
            alt="Carretera abierta entre campos al atardecer"
            fill
            sizes="100vw"
          />
          <div className="transition-section__shade" aria-hidden="true" />
          <blockquote data-reveal>
            Seguimos sumando kilómetros.
            <br />
            <em>Este es uno de los importantes.</em>
          </blockquote>
        </section>

        <section className="rsvp section" id="rsvp">
          <div className="rsvp__intro" data-reveal>
            <p className="eyebrow">Confirmación</p>
            <h2>¿Vienes?</h2>
            <p>
              Nos hará muchísima ilusión celebrarlo contigo. Confirma antes del
              {" "}{wedding.rsvp.deadline}.
            </p>
          </div>
          <div className="rsvp__panel" data-reveal>
            <span className="rsvp__monogram">{wedding.monogram}</span>
            <div className="rsvp__facts">
              <p>
                <CalendarDays aria-hidden="true" />
                Una respuesta por persona
              </p>
              <p>
                <Bus aria-hidden="true" />
                Indica los trayectos que necesitas
              </p>
              <p>
                <Clock3 aria-hidden="true" />
                Te llevará menos de dos minutos
              </p>
            </div>
            <a
              className="primary-button"
              href={wedding.rsvp.url}
              target="_blank"
              rel="noreferrer"
            >
              Confirmar asistencia <ArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
            <p className="rsvp__help">
              Puedes enviar otra respuesta si estás ayudando a un familiar.
            </p>
          </div>
        </section>

        <section className="faq section" aria-labelledby="faq-title">
          <header className="section-heading" data-reveal>
            <p className="eyebrow">Lo que quizá quieras saber</p>
            <h2 id="faq-title">Antes del gran día</h2>
          </header>
          <div className="faq__list">
            {wedding.faq.map((item, index) => (
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

        <section className="closing" aria-label="Cierre">
          <Image
            src="/images/hero-field.jpg"
            alt="Pareja alejándose junta por el campo"
            fill
            sizes="100vw"
          />
          <div className="closing__shade" aria-hidden="true" />
          <div className="closing__content" data-reveal>
            <p>Nos vemos el 17.</p>
            <span>{wedding.monogram}</span>
            <time dateTime={wedding.date.iso}>{wedding.date.short}</time>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{wedding.monogram} · Bétera · 2027</p>
        <details>
          <summary>Privacidad</summary>
          <p>
            Los datos del formulario se utilizarán únicamente para organizar la
            boda y serán accesibles solo por la pareja y las personas autorizadas.
          </p>
        </details>
      </footer>

      <a className="mobile-rsvp" href="#rsvp">
        Confirmar asistencia
      </a>
    </>
  );
}