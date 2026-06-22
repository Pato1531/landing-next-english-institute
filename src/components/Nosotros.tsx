import ImagePlaceholder from './ImagePlaceholder';

const features = [
  {
    title: 'Docentes calificados',
    desc: 'Profesores preparados y con experiencia en la enseñanza del idioma.',
  },
  {
    title: 'Grupos reducidos',
    desc: 'Limitamos las inscripciones para garantizar atención personalizada y mejor aprendizaje.',
  },
  {
    title: 'Presencial y online',
    desc: 'Clases en nuestra sede o desde donde estés, con horarios flexibles para adaptarse a tu semana.',
  },
  {
    title: 'Certificaciones',
    desc: 'Nuestro programa esta avalado por el C.I.O.L ( Instituto linguistico del Reino Unido ), tiene reconocimiento internacional.',
  },
];

/**
 * IMAGEN — Nosotros (imagen principal)
 * Foto real. Escenario: fachada o recepción de la sede en Av. El Trébol 31, La Unión, Ezeiza.
 * Sujetos: ninguno o personal de recepción saludando.
 * Estilo: natural, cálido, premium, espontáneo, evitar fotos stock.
 * Orientación: 16:9 — Tamaño: 1600x900.
 *
 * IMAGEN — Galería 1: sede / aula vacía mostrando el espacio.
 * IMAGEN — Galería 2: alumnos en clase, dinámica grupal real.
 * IMAGEN — Galería 3: equipo docente, retrato grupal cálido.
 * Estilo para las tres: natural, iluminación cálida, premium, candid. Tamaño: 800x600 cada una.
 */
export default function Nosotros() {
  return (
    <section id="nosotros" className="mx-auto max-w-wrap scroll-mt-20 border-b border-violet-border px-6 py-12">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Quiénes somos</p>
      <h2 className="mb-7 text-2xl font-bold text-violet-darker sm:text-3xl">
        NEXT English Institute
      </h2>

      <div className="mb-8 overflow-hidden rounded-2xl">
        <ImagePlaceholder
          alt="Fachada de la sede de Next English Institute en Av. El Trébol 31, La Unión, Ezeiza"
          aspect="video"
          className="h-[220px] sm:h-[340px]"
        />
      </div>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-ink-secondary">
        Desde hace más de <strong className="font-bold text-violet">3 años</strong> en La Unión,
        Ezeiza Sur, formamos alumnos de todas las edades combinando tradición académica con
        metodologías modernas. Nuestra misión es brindar educación de calidad en inglés mediante
        un método personalizado, preparando a cada estudiante para un mundo cada vez más
        globalizado.
      </p>

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <ImagePlaceholder alt="Sede y aulas de Next English Institute" aspect="square" className="rounded-xl h-[140px]" />
        <ImagePlaceholder alt="Alumnos participando de una clase de inglés" aspect="square" className="rounded-xl h-[140px]" />
        <ImagePlaceholder alt="Equipo docente de Next English Institute" aspect="square" className="rounded-xl h-[140px] col-span-2 sm:col-span-1" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="border-t-2 border-violet px-1 py-5">
            <h3 className="mb-1.5 text-[15px] font-bold text-violet-darker">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-ink-secondary">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
    
  );
}
