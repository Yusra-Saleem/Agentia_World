"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MouseCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(147, 51, 234, 0.1)",
      mixBlendMode: "difference" as "difference",
    },
  }

  useEffect(() => {
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, button, a")

    const mouseEnter = () => setCursorVariant("text")
    const mouseLeave = () => setCursorVariant("default")

    textElements.forEach((elem) => {
      elem.addEventListener("mouseenter", mouseEnter)
      elem.addEventListener("mouseleave", mouseLeave)
    })

    return () => {
      textElements.forEach((elem) => {
        elem.removeEventListener("mouseenter", mouseEnter)
        elem.removeEventListener("mouseleave", mouseLeave)
      })
    }
  }, [])

  return (
    <motion.div
      className="glow fixed top-0 left-0 w-8 h-8 bg-cyan-600/0 rounded-full pointer-events-none z-50 mix-blend-screen"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  )
}

