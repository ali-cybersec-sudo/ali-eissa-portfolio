import './globals.css';

// global metadata including Open Graph / Twitter cards
export const metadata = {
  title: 'ALI EISSA | Penetration Tester',
  description: 'Cybersecurity portfolio showcasing web and network security expertise.',
  metadataBase: new URL('https://ali-eissa-portfolio.vercel.app'),
  openGraph: {
    title: 'ALI EISSA | Penetration Tester',
    description: 'Cybersecurity portfolio showcasing web and network security expertise.',
    url: 'https://ali-eissa-portfolio.vercel.app',
    type: 'website',
    siteName: 'ALI EISSA Portfolio',
    images: [
      {
        url: 'https://ali-eissa-portfolio.vercel.app/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'ALI EISSA Cybersecurity Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALI EISSA | Penetration Tester',
    description: 'Cybersecurity portfolio showcasing web and network security expertise.'
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 antialiased selection:bg-accent selection:text-black">
        {children}
      </body>
    </html>
  );
}