import { useState } from 'react';
import type { ImgHTMLAttributes } from 'react';

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: ImgHTMLAttributes<HTMLImageElement>['loading'];
  fetchPriority?: ImgHTMLAttributes<HTMLImageElement>['fetchPriority'];
};

export function SmartImage({ src, alt, className = '', loading = 'lazy', fetchPriority = 'auto' }: SmartImageProps) {
  const [error, setError] = useState(false);
  return (
    <div className={`smart-image ${className}`}>
      {!error ? (
        <img src={src} alt={alt} loading={loading} fetchPriority={fetchPriority} decoding="async" onError={() => setError(true)} />
      ) : (
        <div className="image-fallback" role="img" aria-label={alt}>
          <span>KMŠ / FOTO</span><small>{alt}</small>
        </div>
      )}
    </div>
  );
}
