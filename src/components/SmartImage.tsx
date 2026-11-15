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
  const assetUrl = (path: string) => path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;
  const resolvedSrc = assetUrl(src);
  const resolvedWebpSrc = webpSrc ? assetUrl(webpSrc) : undefined;
  const useWebp = resolvedWebpSrc && failedWebp !== resolvedWebpSrc;
  return (
    <div className={`smart-image ${className}`}>
      {failedImage !== resolvedSrc ? (
        <picture>
          {useWebp && <source srcSet={resolvedWebpSrc} type="image/webp" />}
          <img key={useWebp ? resolvedWebpSrc : resolvedSrc} src={resolvedSrc} alt={alt} width={width} height={height} loading={loading} fetchPriority={fetchPriority} decoding="async" onError={() => useWebp ? setFailedWebp(resolvedWebpSrc) : setFailedImage(resolvedSrc)} />
        </picture>
      ) : (
        <div className="image-fallback" role="img" aria-label={alt}>
          <span>KMŠ / FOTO</span><small>{alt}</small>
        </div>
      )}
    </div>
  );
}
