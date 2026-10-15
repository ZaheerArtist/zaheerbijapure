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

// AI films: { id: <YouTube id>, title, genre, year, logline, tools }. Empty fields are hidden.
const films: Film[] = [
  { id: 'xQ4nvfIa0vM', title: 'From Previz to Final Frame', genre: 'AI film', year: '', logline: '', tools: '' },
  { id: 'Qkfv8MbizyA', title: 'After Midnight', genre: 'AI film', year: '', logline: '', tools: '' },
  { id: 'VJ-GlgECLDs', title: 'Innocence', genre: 'AI film', year: '', logline: '', tools: '' },
  { id: 'Cze-4Sl6rqk', title: 'The Little Moment', genre: 'AI film', year: '', logline: '', tools: '' },
  { id: 'Xgi4iJWYF_w', title: 'The Look', genre: 'AI film', year: '', logline: '', tools: '' },
  { id: 'aCAQfk3F_4k', title: 'Through Young Eyes', genre: 'AI film', year: '', logline: '', tools: '' },
];
const meta = (...parts: string[]) => parts.filter(Boolean).join(' · ');

const posters: { src: string; title: string; alt: string }[] = [];

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
  const hasFilms = films.length > 0;

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
      {hasFilms && (
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
                {meta(lead.genre, lead.year)}
              </span>
              <span className={s.featureTitle}>{lead.title}</span>
              {lead.logline && <span className={s.featureLog}>{lead.logline}</span>}
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
                    {meta(f.genre, f.year)}
                  </span>
                  <span className={s.filmTitle}>{f.title}</span>
                  {f.logline && <span className={s.filmLog}>{f.logline}</span>}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Kit and credentials */}
      <section className={s.section}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <div className={s.head}>
            <p className={s.eyebrow}>The kit</p>
            <h2 className={s.title}>Behind the lens</h2>
          </div>
          <div className={s.kit}>
            {['Runway', 'Kling', 'Seedance', 'Luma AI', 'Vidu', 'MiniMax', 'Midjourney', 'Magnific', 'ComfyUI', 'Blender', 'Photoshop', 'After Effects', 'Premiere Pro'].map((k) => (
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
                {meta(film.genre, film.year, film.tools)}
              </span>
              {film.logline && <p>{film.logline}</p>}
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
