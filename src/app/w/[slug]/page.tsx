"use client"

import { useRouter, useParams } from "next/navigation"
import { SkillData } from "@/data/SkillData"
import Image from "next/image"
import { IoIosArrowRoundBack } from "react-icons/io";


export default function Page() {
    const router = useRouter()
    const params = useParams()

    const slug = params?.slug as string

    const skill = SkillData.find(item => item.slug === slug)

    if (!skill) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <p className="text-gray-500 mb-4">Content not found.</p>

                <button
                    onClick={() => router.back()}
                    className="text-blue-600 hover:underline cursor-pointer"
                >
                    <IoIosArrowRoundBack size={28} />
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

            <button
                onClick={() => router.back()}
                className="text-sm text-primary hover:underline mb-6 cursor-pointer flex items-center justify-center"
            >
                <IoIosArrowRoundBack size={28} /> Go Back
            </button>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
                {skill.title}
            </h1>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-4">
                <Image
                    src={skill.image}
                    alt={skill.title}
                    fill
                    className="object-cover"
                />
            </div>

            <p className="text-sm text-gray-500 mb-8">
                Photo credit: {skill.credit}
            </p>

            <div className="prose prose-neutral max-w-none text-base sm:text-lg leading-relaxed">
                {skill.text}
            </div>
        </div>
    )
}