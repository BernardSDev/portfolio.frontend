"use client"

import { useRef, useState, useEffect } from "react"
import { MdOutlineNavigateNext } from "react-icons/md";
import {GrFormPrevious} from "react-icons/gr";
import {SkillData} from "@/data/SkillData";
import Link from "next/link";
import SmartImage from "@/components/SmartImage/SmartImage";

function capText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text

    return text.slice(0, maxLength).trim() + "..."
}

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
            behavior: "smooth",
        })
    }

    return (
        <div className="w-full overflow-hidden">
            <div
                ref={containerRef}
                className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            >
                {
                    SkillData.map((slide, index) => (
                    <Link href={`/w/${slide.slug}`}
                        key={index}
                        className="snap-start shrink-0 w-[92%] sm:w-[48%] lg:w-[32%] flex flex-col gap-4"
                    >
                        <SmartImage
                            src={slide.image}
                            alt={slide.title}
                            className={"rounded-2xl h-56 w-full object-cover"}
                        />

                        <div className="space-y-2">
                            <h2 className="text-lg sm:text-xl font-semibold">
                                {slide.title}
                            </h2>

                            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                                {capText(slide.text, 47)}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-end gap-3 mt-6">
                <button
                    onClick={() => scroll("left")}
                    disabled={isAtStart}
                    className={`text-primary rounded-full transition flex items-center justify-center p-2
                        ${isAtStart
                        ? "bg-border/20 cursor-default"
                        : "bg-border hover:opacity-90 cursor-pointer"
                    }`}
                >
                    <GrFormPrevious size={28} />
                </button>

                <button
                    onClick={() => scroll("right")}
                    disabled={isAtEnd}
                    className={`text-primary rounded-full transition flex items-center justify-center p-2
                    ${isAtEnd
                        ? "bg-border/20 cursor-default"
                        : "bg-border hover:opacity-90 cursor-pointer"
                    }`}
                >
                    <MdOutlineNavigateNext size={28} />
                </button>
            </div>
        </div>
    )
}

export default Skills