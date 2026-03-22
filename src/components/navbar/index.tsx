import { IUser } from "@/src/models";
import Link from "next/link";
import { useSite } from "@/src/hooks";
import { useRouter } from "next/router";

interface iprops {
  user?: IUser;
}

export const Navbar = ({ user }: iprops) => {
  const router = useRouter();
  const { t } = useSite();

  if (!user) return null;

  const links = [
    { href: '/courses',  label: t('nav.courses')  },
    { href: '/gallery',  label: t('nav.gallery')   },
    { href: '/projects', label: t('nav.projects')  },
  ];

  return (
    <nav className="navbar">
      <div className="pill">

        <Link href="/" legacyBehavior>
          <a className="pill-avatar" style={{ backgroundImage: `url(${user.profile.photo})` }} aria-label="Home" />
        </Link>

        <menu className="pill-menu">
          {links.map(({ href, label }) => (
            <Link legacyBehavior href={href} key={href}>
              <a className={router.pathname === href ? 'active' : ''}>{label}</a>
            </Link>
          ))}
        </menu>

        <span className="sep" />

        <Link href="/contact" legacyBehavior>
          <a className={`pill-cta${router.pathname === '/contact' ? ' cta-active' : ''}`}>
            {t('contact.cta')}
          </a>
        </Link>
      </div>

      <style jsx>{`
        .pill {
          display: flex;
          align-items: center;
          width: 100%;
          gap: 0;
          background: rgba(8, 12, 28, 0.9);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          padding: 0.3rem;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.55),
            0 0 0 1px rgba(99, 102, 241, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .sep {
          display: block;
          width: 1px;
          height: 1.1rem;
          background: rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
          margin: 0 0.2rem;
        }

        .pill-avatar {
          display: block;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          flex-shrink: 0;
          background-size: cover;
          background-position: top center;
          border: 1.5px solid rgba(99, 102, 241, 0.5);
          cursor: pointer;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .pill-avatar:hover {
          border-color: #6366f1;
          transform: scale(1.07);
        }

        .pill-menu {
          display: flex;
          align-items: center;
          gap: 0;
          margin: 0 0 0 auto;
          padding: 0;
          list-style: none;
        }
        .pill-menu :global(a) {
          display: block;
          padding: 0.4rem 0.55rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #94a3b8;
          white-space: nowrap;
          transition: background 0.15s ease, color 0.15s ease;
          cursor: pointer;
          letter-spacing: 0.01em;
        }
        .pill-menu :global(a:hover) {
          background: rgba(255, 255, 255, 0.07);
          color: #e2e8f0;
        }
        .pill-menu :global(a.active) {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-weight: 600;
        }

        .pill-cta {
          display: block;
          padding: 0.4rem 1.1rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #a5b4fc;
          white-space: nowrap;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .pill-cta:hover {
          background: rgba(99, 102, 241, 0.15);
          color: #c7d2fe;
        }
        .pill-cta.cta-active {
          background: rgba(99, 102, 241, 0.2);
          color: #c7d2fe;
        }

        @media (max-width: 640px) {
          .pill-cta { display: none; }
          .sep:last-of-type { display: none; }
          .pill-menu :global(a) {
            padding: 0.35rem 0.7rem;
            font-size: 0.82rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
