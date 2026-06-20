type ImagePlaceholderProps = {
  alt: string;
  aspect?: 'video' | 'square' | 'portrait';
  className?: string;
  label?: string;
};

const aspectClass: Record<NonNullable<ImagePlaceholderProps['aspect']>, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
};

/**
 * Placeholder visual para imágenes aún no provistas por el instituto.
 * Reemplazar por <Image> de next/image apuntando al asset real cuando esté disponible.
 * El `alt` ya queda preparado para accesibilidad y SEO de imágenes.
 */
export default function ImagePlaceholder({
  alt,
  aspect = 'video',
  className = '',
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-violet-light text-center ${aspectClass[aspect]} ${className}`}
    >
      <span className="px-4 text-xs font-semibold text-violet opacity-60">
        {label ?? alt}
      </span>
    </div>
  );
}
