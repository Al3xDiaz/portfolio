import type { GetStaticProps, NextPage } from 'next';
import TimeLine from '@/src/components/timeline';
import Layout from '@/src/components/layaut';
import { Course, IUser, TimeLineProfile } from '@/src/models';
import Head from 'next/head';
import { ModalImage } from '@/src/utils'
import portfolioData from '@/src/data/portfolio.json';
import { useSite } from '@/src/hooks/useSite';

interface iprops{
  user:IUser;
  timeline:TimeLineProfile[];
  courses: Course[];
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

  const timeline = data.timeline.map((item: any) => ({
    ...item,
    profile: 1
  }));

  const courses = data.courses.slice(0, 3);

  return {
    props: {
      user,
      timeline,
      courses
    }
  }
}) satisfies GetStaticProps<iprops>

const Home: NextPage<iprops> = ({user,timeline,courses}) => {
  const { getLocalizedValue, t } = useSite();

  if (!user)
    return <div>not found</div>

  const localizedBio = getLocalizedValue(user.profile.bio);
  const specialties = user.profile.specialties
    ? user.profile.specialties.split(',').map((s: string) => s.trim()).filter(Boolean)
    : [];

  return (
    <Layout user={user}>
      <Head>
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="any" />
        <title>{`${user.profile.firstName} ${user.profile.lastName}`}</title>
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="website" />
        <meta property="og:title" name="twitter:title" content={`web portfolio - ${user.profile.firstName} ${user.profile.lastName}`} />
        <meta property="og:description" name="twitter:description"
          content={typeof user.profile.bio === 'string' ? user.profile.bio : user.profile.bio['es-LA']} />
        <meta property="og:image" name="twitter:image" content={user.profile.photo} />
        <meta property="og:url" name="twitter:url" content={user.profile.website}></meta>
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero__avatar-wrapper animate-fade-up">
          <div className="hero__avatar-ring">
            <div className="hero__avatar" style={{
              backgroundImage: `url(${user.profile.photo})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top center',
            }} />
          </div>
        </div>

        <div className="hero__content">
          <div className="animate-fade-up delay-1">
            <h1 className="hero__name">
              {user.profile.firstName}{' '}
              <span className="hero__name--accent">{user.profile.lastName}</span>
            </h1>
          </div>

          <div className="animate-fade-up delay-2">
            {localizedBio.split('\n').map((text: string, i: number) => (
              text.trim() && <p key={i} className="hero__bio">{text}</p>
            ))}
          </div>

          {specialties.length > 0 && (
            <div className="hero__tags animate-fade-up delay-3">
              {specialties.map((tag: string, i: number) => (
                <span key={i} className="hero__tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Courses */}
      <div className="courses-section animate-fade-up delay-4">
        <h2 className="courses-title">{t('home.featuredCourses')}</h2>
        <p className="courses-desc">{t('home.featuredCoursesDesc')}</p>
      </div>
      <div className="course-row">
        {courses.map((course, index) => {
          const desc = course.description ? getLocalizedValue(course.description) : '';
          return (
            <div className="course-card" key={index} style={{ animationDelay: `${0.08 * index}s` }}>
              <div className="course-bg" style={{ backgroundImage: `url(${course.image})` }} />
              <div className="course-overlay" />
              <div className="course-content">
                {course.name && <span className="course-name">{course.name}</span>}
                {desc && <p className="course-desc">{desc}</p>}
              </div>
              <div className="course-trigger">
                <ModalImage small={course.image} large={course.image} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="timeline-section animate-fade-up">
        <h2 className="timeline-title">{t('home.timeline')}</h2>
        <p className="timeline-desc">{t('home.timelineDesc')}</p>
      </div>
      <TimeLine data={timeline} />

      <style jsx>{`
        .hero {
          display: grid;
          grid-template-columns: 10rem 1fr;
          gap: 2rem;
          align-items: center;
          padding: 2.5rem 0 2rem;
        }

        .hero__avatar-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero__avatar-ring {
          width: 9rem;
          height: 9rem;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, #6366f1, #22d3ee, #6366f1);
          background-size: 200% 200%;
          animation: avatarRingSpin 4s linear infinite;
          box-shadow: 0 0 32px rgba(99, 102, 241, 0.35);
        }

        @keyframes avatarRingSpin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero__avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 3px solid #060b17;
        }

        .hero__content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .hero__name {
          font-size: 2.2rem;
          font-weight: 800;
          color: #e2e8f0;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .hero__name--accent {
          background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero__bio {
          text-align: left;
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0;
        }

        .hero__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }

        .hero__tag {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 500;
          color: #a5b4fc;
          letter-spacing: 0.02em;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .hero__tag:hover {
          background: rgba(99, 102, 241, 0.22);
          border-color: rgba(99, 102, 241, 0.6);
        }

        .courses-section {
          margin: 1.5rem 0 0.75rem;
        }
        .courses-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #e2e8f0;
          letter-spacing: -0.01em;
          margin-bottom: 0.3rem;
        }
        .courses-desc {
          font-size: 0.875rem;
          color: #64748b;
          text-align: left;
          margin: 0;
          line-height: 1.6;
        }

        .course-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin: 0.75rem 0 2rem;
        }

        .course-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: #0d1224;
          opacity: 0;
          animation: cardIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .course-card:hover .course-bg {
          transform: scale(1.07);
          filter: brightness(0.45);
        }
        .course-card:hover .course-content {
          opacity: 1;
          transform: translateY(0);
        }
        .course-card:hover .course-desc {
          max-height: 5rem;
          opacity: 1;
        }

        .course-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s ease, filter 0.4s ease;
          filter: brightness(0.75);
        }

        .course-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(6,11,23,0.95) 0%, rgba(6,11,23,0.3) 60%, transparent 100%);
        }

        .course-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.85rem 1rem;
          z-index: 1;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .course-name {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: #e2e8f0;
          line-height: 1.3;
          margin-bottom: 0.3rem;
        }

        .course-desc {
          font-size: 0.72rem;
          color: #94a3b8;
          line-height: 1.5;
          text-align: left;
          margin: 0;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.35s ease, opacity 0.35s ease;
        }

        .course-trigger {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0;
        }
        .course-trigger :global(*) {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .timeline-section {
          margin: 0.5rem 0 0;
          padding-bottom: 0.25rem;
        }
        .timeline-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #e2e8f0;
          letter-spacing: -0.01em;
          margin-bottom: 0.3rem;
        }
        .timeline-desc {
          font-size: 0.875rem;
          color: #64748b;
          text-align: left;
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 870px) {
          .hero {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            padding: 1.5rem 1rem;
          }
          .hero__name {
            text-align: center;
          }
          .hero__bio {
            text-align: center;
          }
          .hero__tags {
            justify-content: center;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Home;
