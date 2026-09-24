import "./globals.css";

export const metadata = {
  title: "Sifana Shajahan | Full Stack Developer",
  description:
    "Portfolio of Sifana Shajahan, a Full Stack Developer specializing in React, Next.js, Python, Django, REST APIs, and PostgreSQL.",

  keywords: [
    "Sifana Shajahan",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Django Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Sifana Shajahan",
    },
  ],

  creator: "Sifana Shajahan",

  openGraph: {
    title: "Sifana Shajahan | Full Stack Developer",
    description:
      "Portfolio of Sifana Shajahan, a Full Stack Developer specializing in React, Next.js, Python, Django, REST APIs, and PostgreSQL.",
    type: "website",
    locale: "en_US",
    siteName: "Sifana Shajahan Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sifana Shajahan | Full Stack Developer",
    description:
      "Portfolio of Sifana Shajahan, a Full Stack Developer specializing in React, Next.js, Python, Django, REST APIs, and PostgreSQL.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}