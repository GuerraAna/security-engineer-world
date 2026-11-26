import {useMemo, useRef} from 'react';
import type {
  CSSProperties,
  PointerEvent as ReactPointerEvent,
  ReactNode,
} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Segment = {
  level: string;
  title: string;
  to: string;
  focus: string;
  description: string;
  locked?: boolean;
};

const segments: Segment[] = [
  {
    level: 'LVL 01',
    title: 'Foundation',
    to: '/docs/foundation',
    focus: 'CIA · Redes · Sistemas',
    description: 'Os fundamentos: tríade CIA, modelo OSI/TCP-IP, sistemas operacionais e o mindset de segurança.',
  },
  {
    level: 'LVL 02',
    title: 'Trainee',
    to: '/docs/trainee',
    focus: '???',
    description: 'Segunda etapa do treinamento. Desbloqueia ao concluir a Foundation.',
    locked: true,
  },
  {
    level: 'LVL 03',
    title: 'Expert',
    to: '/docs/expert',
    focus: '???',
    description: 'Terceira etapa do treinamento. Desbloqueia ao concluir a Trainee.',
    locked: true,
  },
  {
    level: 'LVL 04',
    title: 'Master',
    to: '/docs/master',
    focus: '???',
    description: 'Etapa final do treinamento. Desbloqueia ao concluir a Expert.',
    locked: true,
  },
];

const RAY_COUNT = 72;

function SegmentCard({level, title, to, focus, description, locked}: Segment) {
  const body = (
    <>
      <span className={clsx(styles.levelBadge, locked && styles.levelBadgeLocked)}>
        {locked ? '🔒 ' : ''}{level}
      </span>
      <Heading as="h3">{title}</Heading>
      <p className={styles.cardEquivalent}>{focus}</p>
      <p>{description}</p>
      <div className={styles.xpBar} aria-hidden="true" />
    </>
  );

  if (locked) {
    return <div className={clsx(styles.card, styles.cardLocked)}>{body}</div>;
  }
  return (
    <Link to={to} className={styles.card}>
      {body}
    </Link>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const logoSrc = useBaseUrl('img/logo.svg');
  const heroRef = useRef<HTMLElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const rays = useMemo(
    () =>
      Array.from({length: RAY_COUNT}, (_, i) => {
        const angle = (360 / RAY_COUNT) * i;
        return {
          angle,
          // comprimento e opacidade variando de forma determinística
          length: 70 + ((i * 37) % 110),
          width: i % 6 === 0 ? 2 : 1,
          opacity: 0.15 + ((i * 53) % 60) / 100,
          // transição de cor seguindo o ângulo: vermelho -> azul
          hue: 345 - (angle / 360) * 130,
          twinkleDelay: -((i % 7) * 0.55),
        };
      }),
    [],
  );

  const handlePointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    if (driftRef.current) {
      driftRef.current.style.transform = `translate(${x * 18}px, ${y * 18}px) rotate(${x * 8}deg)`;
    }
    if (logoRef.current) {
      logoRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px) rotate(${x * -3}deg)`;
    }
  };

  const handlePointerLeave = () => {
    if (driftRef.current) driftRef.current.style.transform = '';
    if (logoRef.current) logoRef.current.style.transform = '';
  };

  return (
    <header
      ref={heroRef}
      className={clsx('hero', styles.heroBanner)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroText}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Começar a ler
            </Link>
          </div>
        </div>

        <div className={styles.burstWrap} aria-hidden="true">
          <div ref={driftRef} className={styles.drift}>
            <div className={clsx(styles.ring, styles.ringOuter)} />
            <div className={clsx(styles.ring, styles.ringInner)} />
            <div className={styles.rays}>
              {rays.map((ray, i) => (
                <span
                  key={i}
                  className={styles.ray}
                  style={
                    {
                      height: `${ray.length / 4.2}%`,
                      width: ray.width,
                      opacity: ray.opacity,
                      transform: `rotate(${ray.angle}deg)`,
                      background: `linear-gradient(to top, transparent, hsl(${ray.hue} 85% 65%))`,
                      animationDelay: `${ray.twinkleDelay}s`,
                      '--ray-hue': ray.hue,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          </div>
          <div ref={logoRef} className={styles.heroLogo}>
            <img src={logoSrc} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentação pessoal da trilha de Security Engineering: Foundation, Trainee, Expert e Master">
      <HomepageHeader />
      <main>
        <section className={styles.segments}>
          <div className="container">
            <div className="row">
              {segments.map((segment) => (
                <div key={segment.title} className="col col--4">
                  <SegmentCard {...segment} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
