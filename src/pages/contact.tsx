import React from 'react';
import Layout from '@/src/components/layaut';
import { IUser } from '@/src/models';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Commentaries from '@/src/components/commetaries';
import portfolioData from '@/src/data/portfolio.json';
import { useSite } from '@/src/hooks/useSite';

interface IContactProps{
  user: IUser;
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

  return { props: { user } }
}) satisfies GetStaticProps<IContactProps>

const socialLinks = (user: IUser) => [
  {
    href: user.profile.linkedin ? `https://linkedin.com/in/${user.profile.linkedin}` : null,
    label: 'LinkedIn',
    username: user.profile.linkedin,
    color: '#0077B5',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    href: user.profile.github ? `https://github.com/${user.profile.github}` : null,
    label: 'GitHub',
    username: user.profile.github,
    color: '#e2e8f0',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    href: user.profile.gitlab ? `https://gitlab.com/${user.profile.gitlab}` : null,
    label: 'GitLab',
    username: user.profile.gitlab,
    color: '#FC6D26',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z"/>
      </svg>
    ),
  },
  {
    href: user.profile.twitter ? `https://twitter.com/@${user.profile.twitter}` : null,
    label: 'Twitter / X',
    username: user.profile.twitter,
    color: '#e2e8f0',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    href: user.profile.discord ? `https://discord.com/users/${user.profile.discord}` : null,
    label: 'Discord',
    username: 'Discord',
    color: '#7289DA',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
  {
    href: user.profile.youtube ? `https://www.youtube.com/@${user.profile.youtube}` : null,
    label: 'YouTube',
    username: user.profile.youtube,
    color: '#FF0000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
].filter(s => !!s.href);

export const ContactPage = (props: IContactProps) => {
  const { user } = props;
  const { t } = useSite();
  const links = socialLinks(user);

  return (
    <Layout user={user}>
      <Head><title>{t('contact.title')} - {user.profile.firstName} {user.profile.lastName}</title></Head>

      <div className="page-header animate-fade-up">
        <h2 className="page-title">{t('contact.title')}</h2>
      </div>

      <section className="social-section animate-fade-up delay-1">
        <h3 className="section-label">{t('contact.social')}</h3>
        <div className="social-grid">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href!}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{ animationDelay: `${0.06 * i}s` }}
            >
              <span className="social-icon" style={{ color: link.color }}>{link.icon}</span>
              <div className="social-info">
                <span className="social-label">{link.label}</span>
                {link.username && <span className="social-username">@{link.username}</span>}
              </div>
              <span className="social-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="comments-section animate-fade-up delay-2">
        <Commentaries />
      </section>

      <style jsx>{`
        .page-header {
          padding: 1.5rem 0 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          margin-bottom: 1.5rem;
        }
        .page-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #e2e8f0;
          letter-spacing: -0.02em;
        }
        .social-section {
          margin-bottom: 2rem;
        }
        .section-label {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #64748b;
          margin: 0 0 1rem;
        }
        .social-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }
        .social-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 1rem;
          background: rgba(99, 102, 241, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 10px;
          text-decoration: none;
          color: inherit;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
          opacity: 0;
          animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .social-card:hover {
          background: rgba(99, 102, 241, 0.12);
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateY(-2px);
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .social-icon {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .social-info {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          flex: 1;
          min-width: 0;
        }
        .social-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: #e2e8f0;
        }
        .social-username {
          font-size: 0.75rem;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .social-arrow {
          font-size: 0.85rem;
          color: #475569;
          flex-shrink: 0;
          transition: color 0.2s ease;
        }
        .social-card:hover .social-arrow {
          color: #a5b4fc;
        }
        .comments-section {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          padding-top: 1.5rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 640px) {
          .social-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 420px) {
          .social-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  )
}
export default ContactPage;
