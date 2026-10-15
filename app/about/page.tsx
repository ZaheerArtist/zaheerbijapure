'use client';

import { useState } from 'react';
import s from './about.module.css';

const BASE = process.env.NODE_ENV === 'production' ? '/zaheerbijapure' : '';
const POSTERS: Record<string, string> = {
  "Back in Action|2025": "Back in Action (2025).jpg",
  "Kraven the Hunter|2024": "Kraven the Hunter (2024).jpg",
  "Atlas|2024": "Atlas (2024).jpg",
  "Halo|2024": "Halo (2024).jpg",
  "Argylle|2024": "Argylle (2024).jpg",
  "Malaikottai Vaaliban|2024": "Malaikottai Vaaliban (2024).jpg",
  "Aquaman and the Lost Kingdom|2023": "Aquaman and the Lost Kingdom (2023).jpg",
  "Leo|2023": "Leo (2023).jpg",
  "Ferrari|2023": "Ferrari (2023).jpg",
  "The Flash|2023": "The Flash (2023).jpg",
  "Crater|2023": "Crater (2023).png",
  "Shazam! Fury of the Gods|2023": "Shazam! Fury of the Gods (2023).jpg",
  "Ant Man and the Wasp Quantumania|2023": "Ant Man and the Wasp Quantumania (2023).jpg",
  "The School for Good and Evil|2022": "The School for Good and Evil (2022).jpg",
  "Guillermo del Toro's Pinocchio|2022": "Guillermo del Toro's Pinocchio (2022).jpg",
  "Devotion|2022": "Devotion (2022).jpg",
  "Brahmastra Part One Shiva|2022": "Brahmastra Part One Shiva (2022).jpg",
  "The Matrix Resurrections|2021": "The Matrix Resurrections (2021).jpg",
  "Bell Bottom|2021": "Bell Bottom (2021).jpg",
  "Venom Let There Be Carnage|2021": "Venom Let There Be Carnage (2021).jpg",
  "No Time to Die|2021": "No Time to Die (2021).jpg",
  "Jungle Cruise|2021": "Jungle Cruise (2021).png",
  "Infinite|2021": "Infinite (2021).jpg",
  "Jupiter's Legacy|2021": "Jupiter's Legacy (2021).jpg",
  "Zack Snyder's Justice League|2021": "Zack Snyder's Justice League (2021).jpg",
  "The Flash|2021": "The Flash (2021).jpg",
  "Wonder Woman 1984|2020": "Wonder Woman 1984 (2020).png",
  "The Boys|2020": "The Boys (2020).jpg",
  "Greyhound|2020": "Greyhound Tom Hanks (2020).jpeg",
  "The Dark Crystal Age of Resistance|2019": "The Dark Crystal Age of Resistance (2019).jpg",
  "Curfew|2019": "Curfew (2019).jpg",
  "Fast & Furious: Hobbs & Shaw|2019": "Fast and Furious Hobbs and Shaw (2019).jpg",
  "Mission Impossible Fallout|2018": "Mission Impossible Fallout (2018).jpg",
  "Fantastic Beasts: The Crimes of Grindelwald|2018": "Fantastic Beasts The Crimes of Grindelwald (2018).jpg",
  "2.0|2018": "2Point0 (2018).jpg"
};
const posterSrc = (title: string, year: string) => {
  const file = POSTERS[`${title}|${year}`];
  return file ? `${BASE}/images/films/${encodeURIComponent(file)}` : `${BASE}/placeholder-movie.jpg`;
};

const allProjects = [
  // Upcoming Projects
  {
    title: "Back in Action",
    year: "2025",
    isRecent: true
  },
  // Recent Projects (2024)
  {
    title: "Kraven the Hunter",
    year: "2024",
    isRecent: true
  },
  {
    title: "Atlas",
    year: "2024",
    isRecent: true
  },
  {
    title: "Halo",
    year: "2024",
    isRecent: true
  },
  {
    title: "Argylle",
    year: "2024",
    isRecent: true
  },
  {
    title: "Malaikottai Vaaliban",
    year: "2024",
    isRecent: true
  },
  // Recent Projects (2023)
  {
    title: "Aquaman and the Lost Kingdom",
    year: "2023",
    isRecent: false
  },
  {
    title: "Leo",
    year: "2023",
    isRecent: false
  },
  {
    title: "Ferrari",
    year: "2023",
    isRecent: false
  },
  {
    title: "The Flash",
    year: "2023",
    isRecent: false
  },
  {
    title: "Crater",
    year: "2023",
    isRecent: false
  },
  {
    title: "Shazam! Fury of the Gods",
    year: "2023",
    isRecent: false
  },
  {
    title: "Ant Man and the Wasp Quantumania",
    year: "2023",
    isRecent: false
  },
  // Notable Projects (2022)
  {
    title: "The School for Good and Evil",
    year: "2022",
    isRecent: false
  },
  {
    title: "Guillermo del Toro's Pinocchio",
    year: "2022",
    isRecent: false
  },
  {
    title: "Devotion",
    year: "2022",
    isRecent: false
  },
  {
    title: "Brahmastra Part One Shiva",
    year: "2022",
    isRecent: false
  },
  // Notable Projects (2021)
  {
    title: "The Matrix Resurrections",
    year: "2021",
    isRecent: false
  },
  {
    title: "Bell Bottom",
    year: "2021",
    isRecent: false
  },
  {
    title: "Venom Let There Be Carnage",
    year: "2021",
    isRecent: false
  },
  {
    title: "No Time to Die",
    year: "2021",
    isRecent: false
  },
  {
    title: "Jungle Cruise",
    year: "2021",
    isRecent: false
  },
  {
    title: "Infinite",
    year: "2021",
    isRecent: false
  },
  {
    title: "Jupiter's Legacy",
    year: "2021",
    isRecent: false
  },
  {
    title: "Zack Snyder's Justice League",
    year: "2021",
    isRecent: false
  },
  {
    title: "The Flash",
    year: "2021",
    isRecent: false
  },
  // Notable Projects (2020)
  {
    title: "Wonder Woman 1984",
    year: "2020",
    isRecent: false
  },
  {
    title: "The Boys",
    year: "2020",
    isRecent: false
  },
  {
    title: "Greyhound",
    year: "2020",
    isRecent: false
  },
  // Notable Projects (2019)
  {
    title: "The Dark Crystal Age of Resistance",
    year: "2019",
    isRecent: false
  },
  {
    title: "Curfew",
    year: "2019",
    isRecent: false
  },
  {
    title: "Fast & Furious: Hobbs & Shaw",
    year: "2019",
    isRecent: false
  },
  // Notable Projects (2018)
  {
    title: "Mission Impossible Fallout",
    year: "2018",
    isRecent: false
  },
  {
    title: "Fantastic Beasts: The Crimes of Grindelwald",
    year: "2018",
    isRecent: false
  },
  {
    title: "2.0",
    year: "2018",
    isRecent: false
  }
];

const aiSkills = ['AI image and video generation', 'Prompt writing for film and brands', 'Character and product consistency', 'AI-led VFX workflows', 'Campaign concepts to final delivery'];
const vfxSkills = ['VFX layout and proxy creation', 'Cinematic camera animation', 'Camera and body tracking (matchmove)', 'Previz and techviz', 'Set dressing and master scenes', 'On-set VFX supervision'];
const tools = ['Runway', 'Kling', 'Seedance', 'Luma AI', 'Midjourney', 'Magnific', 'ComfyUI', 'Autodesk Maya', 'Blender', '3DEqualizer', 'Nuke', 'Houdini', 'Photoshop', 'After Effects', 'Premiere Pro'];
const awards = [
  { name: 'The Spotlight Award', date: 'Dec 2023', by: 'Technicolor Creative Studios · MPC', note: 'For exceptional hard work and technical expertise in Layout.' },
  { name: 'The Star Performer Award', date: 'Feb 2023', by: 'Technicolor Creative Studios · MPC', note: 'For consistently exceptional performance and contribution.' },
];
const certs = [
  { name: 'AI Filmmaking', by: 'Curious Refuge', date: 'Completed Sep 2025' },
  { name: 'AI Advertising', by: 'Curious Refuge', date: 'Completed' },
  { name: 'Prompt Engineering with ChatGPT 4 & Midjourney', by: 'Udemy', date: 'Completed Aug 2023' },
];
const education = [
  { name: 'Post-Graduate Diploma in Advertising & Media', by: 'University of Mumbai', date: '2016 – 2017' },
  { name: "Bachelor's Degree in Animation, Interactive Technology, Video Graphics and Special Effects", by: 'Sikkim Manipal University · Distance Education', date: '2010 – 2013' },
  { name: 'Animation & VFX course', by: 'Frameboxx', date: '2010 – 2013' },
  { name: 'Bachelor of Commerce', by: 'Savitribai Phule Pune University', date: '' },
];

function Laurel({ flip = false }: { flip?: boolean }) {
  return (
    <svg className={flip ? s.flip : undefined} viewBox="0 0 46 92" aria-hidden="true">
      <g fill="currentColor">
        <path d="M40 90C18 80 6 60 8 30" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="9" cy="24" rx="4" ry="9" transform="rotate(-10 9 24)" />
        <ellipse cx="6" cy="40" rx="4" ry="9" transform="rotate(-35 6 40)" />
        <ellipse cx="9" cy="56" rx="4" ry="9" transform="rotate(-55 9 56)" />
        <ellipse cx="17" cy="70" rx="4" ry="9" transform="rotate(-70 17 70)" />
        <ellipse cx="28" cy="81" rx="4" ry="9" transform="rotate(-82 28 81)" />
      </g>
    </svg>
  );
}

export default function About() {
  const [showAll, setShowAll] = useState(false);
  const films = showAll ? allProjects : allProjects.filter((p) => p.isRecent);

  return (
    <div className={s.page}>
      {/* Opening */}
      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroGrid}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={s.photo} src={`${BASE}/zaheer-bijapure.jpg`} alt="Portrait of Zaheer Bijapure" width={900} height={1200} />
          <div className={s.heroText}>
            <p className={s.eyebrow}>About</p>
            <h1 className={s.name}>Zaheer Bijapure</h1>
            <p className={s.role}>AI Senior Designer</p>
            <p className={s.agency}>
              Saatchi &amp; Saatchi ME <span>Publicis Groupe · UAE</span>
            </p>
            <p className={s.lede}>
              A storyteller working across AI, VFX and content. I craft cinematic campaigns from concept to screen, built on more than a decade of
              making shots for Hollywood and Indian films.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={s.section}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <p className={s.eyebrow}>The story</p>
          <div className={s.story}>
            <p>
              I started in 2014 as a 3D animator on Indian TV and ads, then moved into body tracking on <i>Zero</i> at Red Chillies. At DNEG and MPC I
              worked in layout, matchmove, previz and techviz on films like <i>The Matrix Resurrections</i>, <i>Devotion</i>, <i>The Flash</i> and{' '}
              <i>Kraven the Hunter</i>, and trained teams as an upskill trainer along the way.
            </p>
            <p>
              In 2025 I took that craft into AI: first as AI VFX Lead at Studio Blo, and now as AI Senior Designer at Saatchi &amp; Saatchi ME, where I
              turn ideas into AI-driven images and films for brands, working closely with creative and strategy teams.
            </p>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className={s.section}>
        <div className={s.wrap}>
          <p className={`${s.eyebrow} ${s.center}`}>What I do</p>
          <h2 className={s.h2}>Two crafts, one eye</h2>
          <div className={s.two}>
            <div className={s.panel}>
              <h3>AI &amp; creative</h3>
              <ul>{aiSkills.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className={s.panel}>
              <h3>VFX &amp; animation</h3>
              <ul>{vfxSkills.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
          <div className={s.tools}>{tools.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
      </section>

      {/* Awards */}
      <section className={s.section}>
        <div className={s.wrap}>
          <p className={`${s.eyebrow} ${s.center}`}>Recognition</p>
          <h2 className={s.h2}>Awards</h2>
          <div className={s.laurels}>
            {awards.map((a) => (
              <div key={a.name} className={s.laurel}>
                <Laurel />
                <div>
                  <small>Winner · {a.date}</small>
                  <strong>{a.name}</strong>
                  <em>{a.by}</em>
                </div>
                <Laurel flip />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.two}>
            <div>
              <p className={s.eyebrow}>Certifications &amp; professional development</p>
              <ul className={s.list}>
                {certs.map((c) => (
                  <li key={c.name}><b>{c.name}</b><span>{[c.by, c.date].filter(Boolean).join(' · ')}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <p className={s.eyebrow}>Education</p>
              <ul className={s.list}>
                {education.map((e) => (
                  <li key={e.name}><b>{e.name}</b><span>{[e.by, e.date].filter(Boolean).join(' · ')}</span></li>
                ))}
              </ul>
              <p className={s.langs}>Languages: English (professional) · Hindi (full professional)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className={s.section}>
        <div className={s.wrap}>
          <p className={`${s.eyebrow} ${s.center}`}>Filmography</p>
          <h2 className={s.h2}>{showAll ? 'All films & series' : 'Recent films'}</h2>
          <div className={s.posters}>
            {films.map((f) => (
              <figure key={`${f.title}-${f.year}`} className={s.poster}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={posterSrc(f.title, f.year)} alt={`${f.title} (${f.year}) poster`} loading="lazy" />
                <figcaption><b>{f.title}</b><span>{f.year}</span></figcaption>
              </figure>
            ))}
          </div>
          <div className={s.actions}>
            <button type="button" className={s.btn} onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show recent only' : `Show all ${allProjects.length} titles`}
            </button>
            <a className={s.btn} href={`${BASE}/Zaheer-Bijapure-CV.pdf`} download>Download CV</a>
            <a className={s.btn} href="https://www.imdb.com/name/nm12429900/" target="_blank" rel="noopener noreferrer">IMDb ↗</a>
            <a className={s.btn} href="https://www.linkedin.com/in/zaheer-bijapure/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className={s.btn} href="https://www.instagram.com/zaheerbijapure/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
            <a className={s.btn} href="https://www.youtube.com/@ZaheerBijapure" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
          </div>
        </div>
      </section>

      {/* Close */}
      <section className={s.close}>
        <div className={`${s.wrap} ${s.narrow}`}>
          <h2 className={s.closeTitle}>Let&apos;s make the <em>next story</em>.</h2>
          <a className={`${s.btn} ${s.btnHot}`} href={`${BASE}/contact/`}>Get in touch</a>
        </div>
      </section>
    </div>
  );
}
