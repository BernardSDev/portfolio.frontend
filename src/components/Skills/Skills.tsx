"use client"

import { useState, useEffect } from "react"
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
            image: "/mentorship.jpg",
            credit: "gilles roux",
            title: "Mentorship and coaching",
            text: "I guide junior developers with code reviews"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleSlides, setVisibleSlides] = useState(3)

    useEffect(() => {
        const updateVisibleSlides = () => {
            const width = window.innerWidth
            if (width < 640) setVisibleSlides(1)
            else if (width < 1024) setVisibleSlides(2)
            else setVisibleSlides(3)
        }

        updateVisibleSlides()
        window.addEventListener("resize", updateVisibleSlides)
        return () => window.removeEventListener("resize", updateVisibleSlides)
    }, [])

    const maxIndex = slides.length - visibleSlides

    const goToPrev = () => {
        if (currentIndex > 0) setCurrentIndex((prev) => prev - 1)
    }

    const goToNext = () => {
        if (currentIndex < maxIndex) setCurrentIndex((prev) => prev + 1)
    }

    return (
        <div className="w-full">
            <div className="overflow-hidden w-full">
                <div
                    className="flex gap-4 transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
                    }}
                >
                    {
                        slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 h-[400px] text-white flex flex-col gap-6`}
                            style={{ width: `${100 / visibleSlides}%` }}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={500}
                                height={400}
                                className="rounded-2xl h-64 w-full object-cover"
                            />
                            <h2 className={"text-xl text-foreground font-semibold"}>{slide.title}</h2>
                            <p className={"text-lg text-foreground"}>{slide.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end gap-4 mt-4">
                <button
                    onClick={goToPrev}
                    disabled={currentIndex === 0}
                    className="px-4 py-2 bg-primary cursor-pointer text-white rounded disabled:opacity-50 disabled:cursor-default"
                >
                    Prev
                </button>

                <button
                    onClick={goToNext}
                    disabled={currentIndex >= maxIndex}
                    className="px-4 py-2 bg-primary cursor-pointer text-white rounded disabled:opacity-50 disabled:cursor-default"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Skills
