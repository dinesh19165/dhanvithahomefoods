import { useEffect, useState, type ImgHTMLAttributes } from 'react'

interface ImageWithFallbackProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onError' | 'src'> {
  src: string
  fallbackSrc: string
}

export default function ImageWithFallback({ src, fallbackSrc, alt, className = '', onLoad, ...props }: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [loaded, setLoaded] = useState(false)
  const [fallbackFailed, setFallbackFailed] = useState(false)

  useEffect(() => {
    setCurrentSrc(src)
    setLoaded(false)
    setFallbackFailed(false)
  }, [src])

  if (fallbackFailed) {
    return <div className={`${className} image-fallback`} role="img" aria-label={alt}><span aria-hidden="true">*</span></div>
  }

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      className={`${className}${loaded ? '' : ' image-loading'}`}
      onLoad={(event) => {
        setLoaded(true)
        onLoad?.(event)
      }}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc)
          setLoaded(false)
          return
        }
        setFallbackFailed(true)
      }}
    />
  )
}
