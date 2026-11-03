import { useState } from 'react';
export function SmartImage({src,alt,className=''}:{src:string;alt:string;className?:string}){
 const [error,setError] = useState(false);
 return <div className={'smart-image '+className}>{!error ? <img src={src} alt={alt} loading="lazy" onError={()=>setError(true)}/> : <div className="image-fallback" role="img" aria-label={alt}><span>KMŠ / FOTO</span><small>{alt}</small></div>}</div>;
}
