"use client"

import {useRouter, useParams} from "next/navigation"
import {SkillData} from "@/data/SkillData"
import {IoIosArrowRoundBack} from "react-icons/io";
import SmartImage from "@/components/SmartImage/SmartImage";
import SmartButton from "@/components/SmartButton/SmartButton";


export default function Page() {
    const router = useRouter()
    const params = useParams()

    const slug = params?.slug as string

    const skill = SkillData.find(item => item.slug === slug)

    if (!skill) {
        return (
            <div className={"max-w-4xl mx-auto px-4 py-16 text-center"}>
                <p className={"text-gray-500 mb-4"}>Content not found.</p>

                <SmartButton
                    variant="ghost"
                    onClick={() => router.back()}
                >
                    <IoIosArrowRoundBack size={28} />
                </SmartButton>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <SmartButton onClick={() => router.back()}>
                <IoIosArrowRoundBack size={28} /> Go Back
            </SmartButton>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
                {skill.title}
            </h1>

            <SmartImage
                src={skill.image}
                alt={skill.title}
            />

            <p className="text-sm text-gray-500 mb-8">
                Photo credit: {skill.credit}
            </p>

            <div className="prose prose-neutral max-w-none text-base sm:text-lg leading-relaxed">
                {skill.text}
            </div>
        </div>
    )
}