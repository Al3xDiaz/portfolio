import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Portafolio</title>
        <link
          rel="icon"
          href="/icon.svg"
          type="image/svg"
          sizes="any"
        />

        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta property="og:title" name="twitter:title" content="web portfolio - Alex Diaz" />
        <meta property="og:description" name="twitter:description"
          content="Hello! I am Alex Diaz, a DevOps engineer deeply passionate about the automation and refinement of processes within the realm of technology. My web portfolio serves as a portal into my professional journey, showcasing the projects I have undertaken to craft robust and efficient solutions in the domain of development and operations engineering." />
        <meta property="og:image" name="twitter:image"
          content="https://res.cloudinary.com/dd7jrtxu5/image/upload/v1644296138/media/images/users/profile/imgs_extra/imagen_cjbso3_itah5l.jpg" />
        <meta property="og:url" name="twitter:url" content="https://alex.chaoticteam.com/"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}