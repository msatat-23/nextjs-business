import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';
import QueryClientProviderWrapper from '@/providers/query-client-provider';

export const metadata: Metadata = {
  title: 'Business Developer | Enterprise Growth Platform',
  description:
    'Enterprise growth platform delivering data-backed strategies, executive expansion frameworks, and modern market intelligence for high-scale organizations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body>
        <QueryClientProviderWrapper>
          <div className="min-h-screen flex flex-col bg-[#030712] text-[#f9fafb]">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
}

