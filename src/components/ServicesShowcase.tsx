import React, { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

import laptopImg from '../assets/Our Doorstep Services/laptop tech support.jpg'
import desktopImg from '../assets/Our Doorstep Services/desktop support.jpg'
import networkingImg from '../assets/Our Doorstep Services/Networking support.jpg'

interface Service {
  title: string
  description: string
  badge: string
  link: string
  image: string
}

const services: Service[] = [
  {
    title: "Laptop Tech Support",
    description: "Screen replacement, hardware upgrades, virus removal, data recovery.",
    badge: "FAST",
    link: "/services",
    image: laptopImg,
  },
  {
    title: "Desktop Support",
    description: "Motherboard repair, power supply fixes, custom PC building, OS installation.",
    badge: "PRO",
    link: "/services",
    image: desktopImg,
  },
  {
    title: "Networking Support",
    description: "WiFi setup, router configuration, LAN networking, CCTV installation.",
    badge: "24/7",
    link: "/services",
    image: networkingImg,
  },
  {
    title: "Printer & Scanner",
    description: "Printer troubleshooting, driver installation, complete office setup support.",
    badge: "RELIABLE",
    link: "/services",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2670&auto=format&fit=crop",
  },
]

export function ServicesShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Doorstep Services</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Comprehensive tech solutions tailored for your home and business needs.</p>
      </div>

      {/* Floating Image Container */}
      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl hidden md:block"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[320px] h-[200px] bg-gray-100 dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {services.map((service, index) => (
            <img
              key={service.title}
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.1,
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50" />
        </div>
      </div>

      <div className="space-y-0">
        <div className="border-t border-gray-200 dark:border-gray-800" />
        
        {services.map((service, index) => (
          <a
            key={service.title}
            href={service.link}
            className="group block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-6 md:py-8 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-out">
              {/* Background highlight on hover */}
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              />

              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1 min-w-0 w-full">
                  {/* Title with animated underline */}
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-gray-900 dark:text-white font-semibold text-xl tracking-tight">
                      <span className="relative">
                        {service.title}
                        {/* Animated underline */}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-px bg-brand-electricBlue
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>

                    {/* Arrow that slides in */}
                    <ArrowUpRight
                      className={`
                        w-5 h-5 text-brand-electricBlue
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-100 sm:opacity-0 -translate-x-2 translate-y-2 sm:-translate-x-2 sm:translate-y-2"
                        }
                      `}
                    />
                  </div>

                  {/* Description with fade effect */}
                  <p
                    className={`
                      text-sm md:text-base mt-2 leading-relaxed
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-gray-800 dark:text-gray-300" : "text-gray-500 dark:text-gray-400"}
                    `}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Badge */}
                <span
                  className={`
                    w-max inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase
                    transition-all duration-300 ease-out mt-2 sm:mt-0
                    ${hoveredIndex === index 
                      ? "bg-brand-electricBlue text-white shadow-md shadow-brand-electricBlue/20" 
                      : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"}
                  `}
                >
                  {service.badge}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
