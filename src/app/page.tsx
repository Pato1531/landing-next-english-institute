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

const exploreLinks = [
  {
    href: '#cursos',
    tag: 'Academia',
    title: 'Cursos y talleres',
    desc: 'Conocé nuestros niveles, talleres temáticos y realizá el test de nivel gratuito.',
  },
  {
    href: '#nosotros',
    tag: 'Institucional',
    title: 'Quiénes somos',
    desc: 'Descubrí nuestra historia, misión y qué nos diferencia como instituto.',
  },
  {
    href: '#testimonios',
    tag: 'Opiniones',
    title: 'Testimonios',
    desc: 'Leé reseñas reales de Google y conocé qué piensan quiénes ya estudian en Next.',
  },
  {
    href: '#faq',
    tag: 'Ayuda',
    title: 'Preguntas frecuentes',
    desc: 'Encontrá respuestas sobre modalidades, edades, cuotas, certificaciones e inscripciones.',
  },
  {
    href: '#elearning',
    tag: 'Next E-Learning',
    title: 'Cursos online',
    desc: 'Aprendé inglés a tu ritmo con clases en video, subtítulos, material descargable y certificado.',
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto max-w-wrap">
        <HeroSlider />
        <Stats />

        <section className="mx-auto max-w-wrap border-b border-violet-border px-6 py-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Explorá</p>
          <h2 className="mb-1.5 text-2xl font-bold text-violet-darker sm:text-3xl">
            Todo lo que necesitás para empezar
          </h2>
          <p className="mb-7 text-sm text-ink-secondary">
            Conocé nuestros cursos, descubrí quiénes somos, leé experiencias de alumnos y resolvé
            todas tus dudas.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {exploreLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-2xl border border-violet-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet hover:shadow-lg hover:shadow-violet/10"
              >
                <span className="mb-2.5 inline-block rounded-full bg-violet-light px-3 py-1 text-xs font-bold text-violet">
                  {link.tag}
                </span>
                <p className="mb-1 text-base font-bold text-violet-darker">{link.title}</p>
                <p className="text-sm leading-relaxed text-ink-secondary">{link.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="border-b border-violet-border bg-violet-light px-6 py-14 text-center">
          <h2 className="mb-2 text-xl font-bold text-violet-darker sm:text-2xl">
            ¿No sabés por dónde empezar?
          </h2>
          <p className="mx-auto mb-5 max-w-md text-sm leading-relaxed text-ink-secondary">
            Hacé el test de nivel gratuito en línea — tarda 15 minutos — y te recomendamos el
            curso ideal para vos.
          </p>
          <a
            href="#contacto"
            className="inline-block rounded-xl bg-violet px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-violet-dark"
          >
            Hacer el test gratis →
          </a>
        </section>

        <Cursos />
        <NextELearning />
        <Nosotros />
        <Testimonios />
        <Faq />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
