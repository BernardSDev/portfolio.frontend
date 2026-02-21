"use client"

import {useRef, useState, useEffect} from "react"
import {MdOutlineNavigateNext} from "react-icons/md"
import {GrFormPrevious} from "react-icons/gr"
import {SkillData} from "@/data/SkillData"
import SkillCard from "@/components/SkillCard/SkillCard";
import CarouselControls from "@/components/CarouselControls/CarouselControls";

function Skills() {
    const containerRef = useRef<HTMLDivElement>(null)

    const [isAtStart, setIsAtStart] = useState(true)
    const [isAtEnd, setIsAtEnd] = useState(false)

    const checkScrollPosition = () => {
        const container = containerRef.current
        if (!container) return

        const { scrollLeft, scrollWidth, clientWidth } = container

        setIsAtStart(scrollLeft <= 5)
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5)
    }

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        checkScrollPosition()
        container.addEventListener("scroll", checkScrollPosition)

        return () => {
            container.removeEventListener("scroll", checkScrollPosition)
        }
    }, [])

    const scroll = (direction: "left" | "right") => {
        const container = containerRef.current
        if (!container) return

        const scrollAmount = container.offsetWidth

        container.scrollBy({
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth"
        })
    }

    return (
        <div className="w-full overflow-hidden">
            <div
                ref={containerRef}
                className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            >
                {
                    SkillData.map((slide) => (
                        <SkillCard
                            key = {slide.title}
                            title = {slide.title}
                            text = {slide.text}
                            image = {slide.image}
                            slug = {slide.slug}
                        />
                    ))
                }
            </div>

            <CarouselControls
                onLeft = {() => scroll("left")}
                onRight = {() => scroll("right")}
                disableLeft = {isAtStart}
                disableRight = {isAtEnd}
                leftIcon = {<GrFormPrevious size={28} />}
                rightIcon = {<MdOutlineNavigateNext size={28} />}
            />
        </div>
    )
}

export default Skills