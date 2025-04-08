import './globals.css';

export const metadata = {
  title: 'Vibyn',
  description: 'Now you can actually say you met them at a bar.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}