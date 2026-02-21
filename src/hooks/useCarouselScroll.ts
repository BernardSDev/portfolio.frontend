import { useEffect, useState, useCallback, RefObject } from "react"

export function useCarouselScroll(
    containerRef: RefObject<HTMLDivElement | null>,
    options: { threshold?: number } = {}
) {
    const { threshold = 5 } = options

    const [isAtStart, setIsAtStart] = useState(true)
    const [isAtEnd, setIsAtEnd] = useState(false)

    const checkScrollPosition = useCallback(() => {
        const container = containerRef.current
        if (!container) return

        const { scrollLeft, scrollWidth, clientWidth } = container

        setIsAtStart(scrollLeft <= threshold)
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - threshold)
    }, [containerRef, threshold])

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        checkScrollPosition()

        container.addEventListener("scroll", checkScrollPosition)
        window.addEventListener("resize", checkScrollPosition)

        return () => {
            container.removeEventListener("scroll", checkScrollPosition)
            window.removeEventListener("resize", checkScrollPosition)
        }
    }, [checkScrollPosition, containerRef])

    const scroll = (direction: "left" | "right") => {
        const container = containerRef.current
        if (!container) return

        const scrollAmount = container.offsetWidth

        container.scrollBy({
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth"
        })
    }

    return {
        isAtStart,
        isAtEnd,
        scroll
    }
}