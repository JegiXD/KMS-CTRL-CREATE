import { useState } from 'react';
import type { ImgHTMLAttributes } from 'react';

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: ImgHTMLAttributes<HTMLImageElement>['loading'];
  fetchPriority?: ImgHTMLAttributes<HTMLImageElement>['fetchPriority'];
  webpSrc?: string;
  width?: number;
  height?: number;
};

export function SmartImage({ src, webpSrc, alt, className = '', loading = 'lazy', fetchPriority = 'auto', width, height }: SmartImageProps) {
  const [failedWebp, setFailedWebp] = useState<string>();
  const [failedImage, setFailedImage] = useState<string>();
  const useWebp = webpSrc && failedWebp !== webpSrc;
  return (
    <div className={`smart-image ${className}`}>
      {failedImage !== src ? (
        <picture>
          {useWebp && <source srcSet={webpSrc} type="image/webp" />}
          <img key={useWebp ? webpSrc : src} src={src} alt={alt} width={width} height={height} loading={loading} fetchPriority={fetchPriority} decoding="async" onError={() => useWebp ? setFailedWebp(webpSrc) : setFailedImage(src)} />
        </picture>
      ) : (
        <div className="image-fallback" role="img" aria-label={alt}>
          <span>KMŠ / FOTO</span><small>{alt}</small>
        </div>
      )}
    </div>
  );
}
