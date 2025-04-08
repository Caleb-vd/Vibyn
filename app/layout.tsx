import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
