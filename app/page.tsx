import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Industries } from '@/components/clients';
import { Leadership } from '@/components/leadership';
import { ContactFooter } from '@/components/contact-footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Leadership />
      <ContactFooter />
    </main>
  );
}
