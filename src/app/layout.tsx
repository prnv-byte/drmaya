import "./globals.css";

export const metadata = {
  title: "Dr. Maya Reynolds – Therapy with Character & Compassion",
  description: "Evidence-based therapy with a human touch. Specializing in anxiety, trauma, and finding your ground in Santa Monica.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&family=Nothing+You+Could+Do&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}