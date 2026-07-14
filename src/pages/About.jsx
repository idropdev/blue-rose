import { useRef } from 'react';
import PetalField from '../components/PetalField';
import RoseMark from '../components/RoseMark';
import { useReveal } from '../hooks/useReveal';
import { CONTACT, STORY_QUOTE } from '../data/content';
import './About.css';

const STORY = [
  'My journey in healthcare began at just 15 years old, taking care of ill family members and working in the CT and radiology department as a summer job at what was then Thomason Hospital. Those early years sparked a passion for patient care that shaped the rest of my life. I went on to become a CNA, then an RN, and eventually a board-certified Family Nurse Practitioner — each step driven by a desire to learn more, serve more, and elevate the level of care I could provide. Today, I am continuing that path by pursuing my Doctor of Nursing Practice, committed to advancing both my clinical expertise and the impact I have on my community.',
  'As a teenage mother, I learned early what strength, resilience, and determination truly mean. I carried those lessons into every chapter of my career and into the way I raised my children — teaching them that no matter what life places in front of you, you can rise, grow, and succeed. That same belief is at the heart of my work and the foundation of my clinic.',
  'Blue Rose Aesthetics & Wellness was named with intention. Blue roses do not occur naturally; they are created through vision, persistence, and the belief that beauty can be shaped even when it doesn’t exist yet. My clinic represents that same spirit — the idea that with knowledge, care, and intention, we can create confidence, wellness, and transformation where it once felt out of reach.',
  'This is the story behind my practice and the purpose that guides every patient I meet. It is a privilege to serve, to teach, and to walk alongside others on their journey to feeling healthy, confident, and empowered in their own skin.',
];

export default function About() {
  const scope = useRef(null);
  useReveal(scope);

  return (
    <main ref={scope} className="about-page">
      <header className="page-hero about-hero">
        <PetalField className="about-hero__petals" density={0.45} />
        <div className="container about-hero__inner">
          <span className="eyebrow rv">Our Provider</span>
          <h1 className="h-display rv" data-rv-delay="0.08">
            Hello, <em>I’m so glad you’re here</em>
          </h1>
          <p className="lede rv" data-rv-delay="0.16">
            I’m a wife, mother, educator, and Certified Family Nurse Practitioner
            who has always believed that caring for others is both a calling and
            a privilege. I graduated from a local high school (Go Silver Foxes!)
            and continued my education at UTEP, where I’m now completing my
            Doctorate of Nursing Practice.
          </p>
          <p className="lede rv" data-rv-delay="0.22">
            Whether I’m teaching future nurses or caring for individuals in the
            clinic, my goal is always the same: to listen, to support, and to
            help people feel seen, valued, and truly cared for.
          </p>
        </div>
      </header>

      <section className="section about-story">
        <div className="container about-story__grid">
          <aside className="about-story__side rv">
            <RoseMark size={80} color="var(--cobalt)" />
            <blockquote>“{STORY_QUOTE}”</blockquote>
          </aside>
          <div className="about-story__body">
            <h2 className="rv">My story</h2>
            {STORY.map((p, i) => (
              <p className="rv" data-rv-delay={i * 0.04} key={i}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-connect">
        <div className="container">
          <div className="shell rv">
            <div className="shell__core about-connect__core">
              <span className="eyebrow">Contact</span>
              <h2>Let’s connect</h2>
              <p>
                I’m always looking for new and exciting opportunities that
                benefit my patients.
              </p>
              <div className="about-connect__links">
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
                <i />
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
