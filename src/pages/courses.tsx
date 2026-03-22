import React from 'react';
import { ModalImage } from '@/src/utils'
import { GetStaticProps } from 'next';
import { Course, IUser } from '@/src/models';
import Layout from '@/src/components/layaut';
import Head from 'next/head';
import portfolioData from '@/src/data/portfolio.json';
import { useSite } from '@/src/hooks/useSite';

interface ICoursesProps{
  courses: Course[];
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

  const courses = data.courses;

  return { props: { courses, user } }
}) satisfies GetStaticProps<ICoursesProps>

export const Courses = ({courses, user}: ICoursesProps) => {
  const { t } = useSite();

  return (
    <Layout user={user}>
      <Head><title>{t('courses.title')} - {user.profile.firstName} {user.profile.lastName}</title></Head>

      <div className="page-header animate-fade-up">
        <h2 className="page-title">{t('courses.title')}</h2>
        <p className="page-subtitle">{courses.length}</p>
      </div>

      {courses.length === 0 ? (
        <div className="empty-state animate-fade-up delay-1">
          <span className="empty-icon">📚</span>
          <p>{t('courses.empty')}</p>
        </div>
      ) : (
        <div className="grid animate-fade-up delay-1">
          {courses.map(({image}, index) => (
            <div className="card" key={index} style={{ animationDelay: `${0.05 * index}s` }}>
              <ModalImage small={image} large={image} width={300} height={200} />
            </div>
          ))}
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
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin: 0 0 2rem;
        }
        .card {
          background: rgba(99, 102, 241, 0.06);
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 10px;
          overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
          opacity: 0;
          animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .card:hover {
          border-color: rgba(99, 102, 241, 0.45);
          box-shadow: 0 6px 24px rgba(99, 102, 241, 0.18);
          transform: translateY(-3px);
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 4rem 2rem;
          color: #94a3b8;
        }
        .empty-icon {
          font-size: 3rem;
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  )
}
export default Courses;
