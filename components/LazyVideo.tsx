"use client"

import { useInterval } from '@/lib/use-interval';
import useIntersectionObserver from '@react-hook/intersection-observer'
import { useEffect, useRef } from 'react'

interface LazyVideoProps {
    src: string;
    height?: number;
    restartAfter?: number;
    loop?: boolean;
}

export default function LazyVideo ({src, height, restartAfter, loop}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lockRef = useRef(false)
    const vidRef = useRef<HTMLVideoElement>(null)

  useInterval(() => {
    if (vidRef.current) {
        vidRef.current.play()
    }
    }, restartAfter ? restartAfter * 1000 :  60 * 1000)

  const { isIntersecting } = useIntersectionObserver(containerRef)
  if (isIntersecting) {
    lockRef.current = true
  }
  return (
    <div
    ref={containerRef} className={`w-full relative overflow-hidden ${height ? `h-[${height}%}]` : "h-full"}`}>
    {/* <div className="-translate-y-[1000px] w-1 h-1 absolute bg-red-200 top-0"></div> */}
      {lockRef.current && (
        <video
        ref={vidRef}
        className="object-cover h-full w-full"
        src={src}
        autoPlay
        playsInline
        muted
        loop={loop}
        ></video>
      )}
    </div>
  )
}