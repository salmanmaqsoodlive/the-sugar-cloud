'use client'

import { useEffect, useRef } from 'react'

export default function SparkleEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createSparkle = () => {
      const sparkle = document.createElement('div')
      sparkle.style.cssText = `
        position: absolute;
        width: ${4 + Math.random() * 6}px;
        height: ${4 + Math.random() * 6}px;
        background: radial-gradient(circle, #ffd6e0, #f9a8d4);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
        animation: sparkle-fade ${1 + Math.random() * 2}s ease-out forwards;
      `
      container.appendChild(sparkle)
      setTimeout(() => sparkle.remove(), 3000)
    }

    const style = document.createElement('style')
    style.textContent = `
      @keyframes sparkle-fade {
        0% { opacity: 0; transform: scale(0) translateY(0); }
        50% { opacity: 1; transform: scale(1) translateY(-10px); }
        100% { opacity: 0; transform: scale(0.5) translateY(-20px); }
      }
    `
    document.head.appendChild(style)

    const interval = setInterval(createSparkle, 300)
    return () => {
      clearInterval(interval)
      style.remove()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
}
