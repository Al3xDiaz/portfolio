import React from 'react';
import { GetStaticProps } from 'next';
import { IProject, IUser } from '@/src/models';
import Layout from '@/src/components/layaut';
import Head from 'next/head';
import Link from 'next/link';
import portfolioData from '@/src/data/portfolio.json';
import { useSite } from '@/src/hooks/useSite';

interface IProjectsProps{
  projects: IProject[];
  user:IUser;
}

export const getStaticProps = (async () => {
  const data = portfolioData as any;
  const { profile } = data;

  const user: IUser = {
    id: 1,
    userName: 'al3xdiaz',
    email: profile.email,
    verified: true,
    profile: {
      firstName: profile.firstName,
      lastName: profile.lastName,
      photo: profile.photo,
      bio: profile.bio,
      jobs: profile.jobs,
      linkedin: profile.linkedin,
      github: profile.github,
      gitlab: profile.gitlab,
      discord: profile.discord,
      twitter: profile.twitter,
      facebook: profile.facebook,
      instagram: profile.instagram,
      youtube: profile.youtube,
      website: profile.website,
      images: [],
      time_line_profile: [],
      specialties: profile.specialties,
      skills: profile.skills,
      Languages: profile.languages,
      Hobbies: profile.hobbies,
      telephone: profile.telephone,
    }
  };

  const projects = data.projects.map((p: any) => ({
    ...p,
    startDate: p.startDate as any,
    endDate: p.endDate as any
  }));

  return { props: { projects, user } }
}) satisfies GetStaticProps<IProjectsProps>

export const ProjectsPage = ({projects, user}: IProjectsProps) => {
  const { t, getLocalizedValue } = useSite();

  return (
    <Layout user={user}>
      <Head><title>{t('projects.title')} - {user.profile.firstName} {user.profile.lastName}</title></Head>

      <div className="page-header animate-fade-up">
        <h2 className="page-title">{t('projects.title')}</h2>
        <p className="page-subtitle">{projects.length}</p>
      </div>

      {projects.length === 0 ? (
        <div className="empty-state animate-fade-up delay-1">
          <span className="empty-icon">🚀</span>
          <p>{t('projects.empty')}</p>
        </div>
      ) : (
        <div className="grid animate-fade-up delay-1">
          {projects.map((project, index) => {
            const title = getLocalizedValue(project.title);
            const description = project.description ? getLocalizedValue(project.description) : '';
            const num = String(index + 1).padStart(2, '0');
            const CardWrapper = project.url ? 'a' : 'div';
            const linkProps = project.url
              ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <CardWrapper
                key={index}
                className="card"
                style={{ animationDelay: `${0.08 * index}s` }}
                {...linkProps}
              >
                {/* Background image */}
                <div
                  className="card__bg"
                  style={{ backgroundImage: project.image ? `url(${project.image})` : undefined }}
                />

                {/* Gradient overlay */}
                <div className="card__overlay" />

                {/* Index badge */}
                <span className="card__num">{num}</span>

                {/* Content */}
                <div className="card__content">
                  {title && <h3 className="card__title">{title}</h3>}
                  {description && <p className="card__desc">{description}</p>}
                  <div className="card__footer">
                    {project.startDate && (
                      <span className="card__date">
                        {`${project.startDate}${project.endDate ? ` — ${project.endDate}` : ''}`}
                      </span>
                    )}
                    {project.url && (
                      <span className="card__link">{t('projects.viewProject')}</span>
                    )}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      )}

      <style jsx>{`
        .page-header {
          padding: 1.5rem 0 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: baseline;
          gap: 1rem;
        }
        .page-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #e2e8f0;
          letter-spacing: -0.02em;
        }
        .page-subtitle {
          font-size: 0.85rem;
          color: #94a3b8;
          text-align: left;
          margin: 0;
        }

        /* ── Grid ── */
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin: 0 0 2.5rem;
        }

        /* ── Card ── */
        .card {
          position: relative;
          display: block;
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          cursor: pointer;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.08);
          opacity: 0;
          animation: cardIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          background: #0d1224;
        }
        .card:hover .card__bg {
          transform: scale(1.06);
          filter: brightness(0.65);
        }
        .card:hover .card__overlay {
          opacity: 0.85;
        }
        .card:hover .card__content {
          transform: translateY(0);
        }
        .card:hover .card__desc {
          opacity: 1;
          max-height: 4rem;
        }
        .card:hover .card__link {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Card bg ── */
        .card__bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-color: #0d1224;
          transition: transform 0.45s ease, filter 0.45s ease;
          filter: brightness(0.55);
        }

        /* ── Gradient overlay ── */
        .card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(6, 11, 23, 0.97) 0%,
            rgba(6, 11, 23, 0.5) 50%,
            transparent 100%
          );
          transition: opacity 0.35s ease;
          opacity: 0.75;
        }

        /* ── Index number ── */
        .card__num {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.3);
          font-variant-numeric: tabular-nums;
        }

        /* ── Content ── */
        .card__content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.25rem 1.5rem;
          transform: translateY(0.5rem);
          transition: transform 0.35s ease;
        }
        .card__title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #f1f5f9;
          margin: 0 0 0.35rem;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }
        .card__desc {
          font-size: 0.82rem;
          color: #94a3b8;
          margin: 0 0 0.6rem;
          line-height: 1.5;
          text-align: left;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.3s ease, max-height 0.3s ease;
        }
        .card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .card__date {
          font-size: 0.72rem;
          color: #64748b;
          letter-spacing: 0.02em;
        }
        .card__link {
          font-size: 0.8rem;
          font-weight: 600;
          color: #a5b4fc;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        /* ── Empty state ── */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 4rem 2rem;
          color: #94a3b8;
        }
        .empty-icon { font-size: 3rem; }

        @media (max-width: 640px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Layout>
  );
}
export default ProjectsPage;
