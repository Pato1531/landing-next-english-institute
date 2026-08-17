import Nav from '@/components/Nav';
import HeroSlider from '@/components/HeroSlider';
import Stats from '@/components/Stats';
import Cursos from '@/components/Cursos';
import Nosotros from '@/components/Nosotros';
import Testimonios from '@/components/Testimonios';
import Faq from '@/components/Faq';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import NextELearning from '@/components/NextELearning';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto max-w-wrap">
        <HeroSlider />
        <Stats />

        <section className="border-b border-violet-border px-6 py-12">
          <div className="relative mx-auto max-w-wrap overflow-hidden rounded-3xl bg-gradient-to-br from-violet-darker via-violet-dark to-violet px-6 py-14 text-center">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-14 -top-20 h-56 w-56 rounded-full bg-white/10"
            />
            <h2 className="relative z-10 mb-2 text-xl font-bold text-white sm:text-2xl">
              ¿No sabés por dónde empezar?
            </h2>
            <p className="relative z-10 mx-auto mb-5 max-w-md text-sm leading-relaxed text-white/85">
              Hacé el test de nivel gratuito en línea — tarda 15 minutos — y te recomendamos el
              curso ideal para vos.
            </p>
            <a
              href="#contacto"
              className="relative z-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-violet-darker transition-transform hover:-translate-y-0.5"
            >
              Hacer el test gratis →
            </a>
          </div>
        </section>

        <Cursos />
        <Nosotros />
        <NextELearning />
        <Testimonios />
        <Faq />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
