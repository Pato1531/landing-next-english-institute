import Image from 'next/image';

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
 * IMAGEN — Nosotros (imagen principal): resuelta con foto real (/images/nosotros/main.jpg).
 * IMAGEN — Galería (sede/aula vacía y alumnos en clase): resueltas en formato 4:3
 * (/images/nosotros/gallery-1.jpg, gallery-2.jpg). Formato 4:3 en vez de cuadrado: las fotos
 * originales son verticales (celular) y un recorte 1:1 quedaba demasiado agresivo.
 * Por decisión de Patricio (04/07) se sacó la tercera card de "equipo docente" en vez de
 * dejarla en placeholder — si en el futuro llega esa foto, se puede reincorporar como
 * tercer elemento del grid.
 */
export default function Nosotros() {
  return (
    <section id="nosotros" className="mx-auto max-w-wrap scroll-mt-20 border-b border-violet-border px-6 py-12">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-violet">Quiénes somos</p>
      <h2 className="mb-7 text-2xl font-bold text-violet-darker sm:text-3xl">
        NEXT English Institute
      </h2>

      <div className="relative mb-8 h-[220px] overflow-hidden rounded-2xl sm:h-[340px]">
        <Image
          src="/images/nosotros/main.jpg"
          alt="Recepción de la sede de Next English Institute en Av. El Trébol 31, La Unión, Ezeiza"
          fill
          sizes="(min-width: 1024px) 896px, 100vw"
          className="object-cover"
        />
      </div>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-ink-secondary">
        Desde hace más de <strong className="font-bold text-violet">3 años</strong> en La Unión,
        Ezeiza Sur, formamos alumnos de todas las edades combinando tradición académica con
        metodologías modernas. Nuestra misión es brindar educación de calidad en inglés mediante
        un método personalizado, preparando a cada estudiante para un mundo cada vez más
        globalizado.
      </p>

      <div className="mb-8 grid grid-cols-2 gap-4 sm:mx-auto sm:max-w-xl">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/images/nosotros/gallery-1.jpg"
            alt="Sede y aulas de Next English Institute"
            fill
            sizes="(min-width: 640px) 300px, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/images/nosotros/gallery-2.jpg"
            alt="Alumnos participando de una clase de inglés"
            fill
            sizes="(min-width: 640px) 300px, 50vw"
            className="object-cover"
          />
        </div>
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
