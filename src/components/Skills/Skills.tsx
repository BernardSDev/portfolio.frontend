"use client"

import {useRef} from "react"
import Image from "next/image"

function Skills() {

    const slides = [
        {
            image: "/thinking.jpg",
            credit: "milad fakurian",
            title: "Thinking technical",
            text: "Donec quis libero sagittis, suscipit justo et, commodo lectus.",
        },
        {
            image: "/execution.jpg",
            credit: "vitaly gariev",
            title: "Execution and delivery",
            text: "Donec quis libero sagittis, suscipit justo et, commodo lectus.",
        },
        {
            image: "/adaptability.jpg",
            credit: "brett jordan",
            title: "Adaptability",
            text: "Donec quis libero sagittis, suscipit justo et, commodo lectus.",
        },
        {
            image: "/values.jpg",
            credit: "walls.io",
            title: "Values",
            text: "Donec quis libero sagittis, suscipit justo et, commodo lectus.",
        },
        {
            image: "/mentorship2.jpg",
            credit: "gilles roux",
            title: "Mentorship",
            text: "Donec quis libero sagittis, suscipit justo et, commodo lectus.",
        },
        {
            image: "/adaptability.jpg",
            credit: "brett jordan",
            title: "Adaptability",
            text: "Donec quis libero sagittis, suscipit justo et, commodo lectus.",
        },
    ]

    const containerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (!containerRef.current) return

        const container = containerRef.current
        const scrollAmount = container.offsetWidth

        container.scrollBy({
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        })
    }

    return (
        <div className="w-full">
            <div
                ref={containerRef}
                className={"flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 scrollbar-hide"}
            >
                {
                    slides.map((slide, index) => (
                    <div
                        key={index}
                        className={"snap-start flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[32%] h-[420px] flex flex-col gap-4"}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            width={500}
                            height={400}
                            className={"rounded-2xl h-56 w-full object-cover"}
                        />
                        <h2 className="text-xl font-semibold">
                            {slide.title}
                        </h2>
                        <p className="text-base text-muted-foreground">
                            {slide.text}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex justify-end gap-4 mt-6 px-4">
                <button
                    onClick={() => scroll("left")}
                    className="px-4 py-2 bg-primary text-white rounded"
                >
                    Prev
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="px-4 py-2 bg-primary text-white rounded"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Skills