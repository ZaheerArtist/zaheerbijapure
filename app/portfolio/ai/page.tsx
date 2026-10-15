'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaPlay, FaTimes } from 'react-icons/fa';
import s from './ai.module.css';

// Plain <img> paths need the GitHub Pages base path in production.
const BASE = process.env.NODE_ENV === 'production' ? '/zaheerbijapure' : '';

type Film = {
  id: string;
  title: string;
  genre: string;
  year: string;
  logline: string;
  tools: string;
};

const films: Film[] = [
  {
    id: 'koywWFCnhhg',
    title: 'Effortless Elegance, Redefined',
    genre: 'Fashion',
    year: '2025',
    logline:
      'A fashion spot inspired by ZARA. Versatile modern styles that move from day to night, with every look, fabric and light built with AI.',
    tools: 'Freepik · Runway · Premiere Pro',
  },
  {
    id: 'Ra4tNXg4hSI',
    title: 'Happy Noodles',
    genre: 'Food',
    year: '2025',
    logline: 'A comedy food ad with real character, comic timing and a punchline that lands.',
    tools: 'Vidu · Kling · Runway · Premiere Pro',
  },
  {
    id: 'P4x1BBZdlyU',
    title: 'The AI Film Showcase',
    genre: 'Short film',
    year: '2025',
    logline: 'Story-driven visuals that test how far AI filmmaking can go when it is directed like a real shoot.',
    tools: 'Runway · Vidu · Kling · MiniMax',
  },
  {
    id: 'Q1QOJ3eY4Fo',
    title: 'New York to Dubai',
    genre: 'Travel',
    year: '2025',
    logline: 'An airline-style travel offer, two free nights in Dubai, told with the polish of a premium carrier.',
    tools: 'Freepik · Runway · Premiere Pro',
  },
];

const posters = [
  { src: '/images/ai/johnsons-baby-poster1.jpg', title: 'Tear-free bath time', alt: 'AI-generated baby soap key visual: a smiling baby in bath foam on a soft pink background' },
  { src: '/images/ai/johnsons-baby-poster2.jpg', title: 'Gentle by nature', alt: 'Second AI-generated baby care key visual with soft colours and calm imagery' },
];

const method = [
  { slug: 'Shot 01', name: 'The Brief', text: 'Every film starts with the brand: who it speaks to, what it should feel like, and the one idea it must land.' },
  { slug: 'Shot 02', name: 'The Prompt', text: 'Written like a camera brief. Lens, light, framing and movement, so every frame is directed rather than left to chance.' },
  { slug: 'Shot 03', name: 'The Generation', text: 'Images and motion built across Runway, Kling, Vidu and Midjourney, keeping faces, products and style consistent from shot to shot.' },
  { slug: 'Shot 04', name: 'The Finish', text: 'Composited, graded and cut in Photoshop, After Effects and Premiere, with the same care as a VFX shot for film.' },
];

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export default function AIPortfolio() {
  const [film, setFilm] = useState<Film | null>(null);
  const [poster, setPoster] = useState<(typeof posters)[0] | null>(null);
  const open = film || poster;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFilm(null);
        setPoster(null);
      }
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const [lead, ...rest] = films;

  return (
    <div className={s.page}>
      {/* Opening */}
      <section className={s.hero}>
        <div className={s.heroTop} aria-hidden="true" />
        <div className={`${s.wrap} ${s.heroInner}`}>
          <p className={s.eyebrow}>AI Portfolio · Reel Four</p>
          <h1 className={`${s.title} ${s.heroTitle}`}>
            From Prompt <br />
            to <span>Picture</span>
          </h1>
          <p className={s.logline}>
            For ten years I placed cameras for Hollywood. Now the camera is a sentence, and the craft is exactly the same.
          </p>
          <p className={`${s.slug} ${s.heroSlug}`}>Int. Saatchi &amp; Saatchi ME · Publicis Groupe — UAE — Now</p>
          <div className={s.heroActions}>
            <a className={`${s.btn} ${s.btnHot}`} href="#films">
              ▶ Watch the films
            </a>
            <Link className={s.btn} href="/contact/">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* The method */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.head}>
            <p className={s.eyebrow}>The method</p>
            <h2 className={s.title}>Directed, not generated</h2>
            <p>AI is the newest camera in the kit. Here is how each film moves from idea to screen.</p>
          </div>
          <div className={s.method}>
            {method.map((m) => (
              <div key={m.slug} className={s.panel}>
                <p className={s.slug}>{m.slug}</p>
                <h3>{m.name}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature presentation */}
      <section className={s.section} id="films" style={{ scrollMarginTop: 80 }}>
        <div className={s.wrap}>
          <div className={s.head}>
            <p className={s.eyebrow}>Feature presentation</p>
            <h2 className={s.title}>The AI Films</h2>
            <p>Brand films and ads made with generative AI and finished like VFX. Tap any film to watch it here.</p>
          </div>

          <button type="button" className={s.feature} onClick={() => setFilm(lead)} aria-label={`Play ${lead.title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={thumb(lead.id)} alt="" />
            <span className={s.featureText}>
              <span className={s.meta}>
                {lead.genre} · {lead.year}
              </span>
              <span className={s.featureTitle}>{lead.title}</span>
              <span className={s.featureLog}>{lead.logline}</span>
              <span className={s.playTag}>
                <FaPlay aria-hidden="true" /> Play film
              </span>
            </span>
          </button>

          <div className={s.films}>
            {rest.map((f) => (
              <button key={f.id} type="button" className={s.film} onClick={() => setFilm(f)} aria-label={`Play ${f.title}`}>
                <span className={s.filmPic}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={thumb(f.id)} alt="" loading="lazy" />
                  <span className={s.playTag}>
                    <FaPlay aria-hidden="true" /> Play
                  </span>
                </span>
                <span className={s.filmBody}>
                  <span className={s.meta}>
                    {f.genre} · {f.year}
                  </span>
                  <span className={s.filmTitle}>{f.title}</span>
                  <span className={s.filmLog}>{f.logline}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Key visuals */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.head}>
            <p className={s.eyebrow}>Key visuals</p>
            <h2 className={s.title}>Stills that sell</h2>
            <p>Concept campaign for a baby-care brand. Generated in Freepik AI, then retouched and laid out in Photoshop.</p>
          </div>
          <div className={s.posters}>
            {posters.map((p) => (
              <figure key={p.src} style={{ margin: 0 }}>
                <button type="button" className={s.poster} onClick={() => setPoster(p)} aria-label={`Enlarge ${p.title}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={BASE + p.src} alt={p.alt} loading="lazy" />
                </button>
                <figcaption className={s.posterCap}>{p.title} · Freepik AI + Photoshop</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Kit and credentials */}
      <section className={s.section}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <div className={s.head}>
            <p className={s.eyebrow}>The kit</p>
            <h2 className={s.title}>Behind the lens</h2>
          </div>
          <div className={s.kit}>
            {['Runway', 'Kling', 'Vidu', 'MiniMax', 'Midjourney', 'Freepik', 'Photoshop', 'After Effects', 'Premiere Pro'].map((k) => (
              <span key={k}>{k}</span>
            ))}
          </div>
          <div className={s.creds}>
            <div className={s.cred}>
              <b>AI Senior Designer</b>
              <span>Saatchi &amp; Saatchi ME · Publicis Groupe · 2025 – now</span>
            </div>
            <div className={s.cred}>
              <b>AI VFX Lead</b>
              <span>Studio Blo · 2025</span>
            </div>
            <div className={s.cred}>
              <b>AI Filmmaking · AI Advertising</b>
              <span>Curious Refuge · 2025</span>
            </div>
            <div className={s.cred}>
              <b>Prompt Engineering</b>
              <span>Udemy · 2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className={s.close}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={`${s.slug} ${s.heroSlug}`}>Fade in. Ext. Your brand — Anywhere — Next</p>
          <h2 className={s.title}>
            Your brand is the <span>next story</span>.
          </h2>
          <p>Ads, brand films and key visuals, directed with a filmmaker&apos;s eye and made at the speed of AI.</p>
          <Link className={`${s.btn} ${s.btnHot}`} href="/contact/">
            Let&apos;s talk
          </Link>
        </div>
      </section>

      {/* Film player */}
      {film && (
        <div className={s.modal} role="dialog" aria-modal="true" aria-label={film.title} onClick={() => setFilm(null)}>
          <div className={s.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={s.modalBar}>
              <h3>{film.title}</h3>
              <button type="button" className={s.btn} onClick={() => setFilm(null)} aria-label="Close">
                <FaTimes aria-hidden="true" />
              </button>
            </div>
            <div className={s.video}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${film.id}?autoplay=1&rel=0`}
                title={film.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
            <div className={s.modalBody}>
              <span className={s.meta}>
                {film.genre} · {film.year} · {film.tools}
              </span>
              <p>{film.logline}</p>
              <a className={s.btn} style={{ width: 'fit-content' }} href={`https://youtu.be/${film.id}`} target="_blank" rel="noopener noreferrer">
                Open on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Poster viewer */}
      {poster && (
        <div className={s.modal} role="dialog" aria-modal="true" aria-label={poster.title} onClick={() => setPoster(null)}>
          <div className={s.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={s.modalBar}>
              <h3>{poster.title}</h3>
              <button type="button" className={s.btn} onClick={() => setPoster(null)} aria-label="Close">
                <FaTimes aria-hidden="true" />
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={s.modalImg} src={BASE + poster.src} alt={poster.alt} />
          </div>
        </div>
      )}
    </div>
  );
}
