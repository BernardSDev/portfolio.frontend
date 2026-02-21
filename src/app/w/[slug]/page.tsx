"use client"

import {useRouter, useParams} from "next/navigation"
import {SkillData} from "@/data/SkillData"
import SkillDetailContent from "@/components/SkillDetailContent/SkillDetailContent";
import BackButton from "@/components/BackButton/BackButton";
import SkillNotFound from "@/components/SkillNotFound/SkillNotFound";

export default function SkillDetailPage() {
    const router = useRouter()
    const params = useParams()

    const slug = params?.slug as string
    const skill = SkillData.find(item => item.slug === slug)

    if (!skill) return <SkillNotFound onBack={() => router.back()} />

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <BackButton onClick={() => router.back()} />

            <SkillDetailContent {...skill} />
        </div>
    )
}