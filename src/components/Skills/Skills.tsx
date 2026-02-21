"use client"

import {useRef} from "react"
import {MdOutlineNavigateNext} from "react-icons/md"
import {GrFormPrevious} from "react-icons/gr"
import {SkillData} from "@/data/SkillData"
import SkillCard from "@/components/SkillCard/SkillCard";
import CarouselControls from "@/components/CarouselControls/CarouselControls";
import {useCarouselScroll} from "@/hooks/useCarouselScroll";

function Skills() {

    const containerRef = useRef<HTMLDivElement>(null)

    const {isAtStart, isAtEnd, scroll} = useCarouselScroll(containerRef)

    return (
        <div className="w-full overflow-hidden">
            <div
                ref={containerRef}
                className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            >
                {
                    SkillData.map((slide) => (
                        <SkillCard
                            key={slide.slug}
                            {...slide}
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