import Link from "next/link"
import SmartImage from "@/components/SmartImage/SmartImage"
import {capText} from "@/helpers/capText"

interface Props {
    title: string
    text: string
    image: string
    slug: string
}

function SkillCard({title, text, image, slug}: Props) {
    return (
        <Link
            href={`/w/${slug}`}
            className="snap-start shrink-0 w-[92%] sm:w-[48%] lg:w-[32%] flex flex-col gap-4"
        >
            <SmartImage
                src={image}
                alt={title}
                className="rounded-2xl h-56 w-full object-cover"
            />

            <div className="space-y-2">
                <h2 className="text-lg sm:text-xl font-semibold">
                    {title}
                </h2>

                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    {capText(text, 47)}
                </p>
            </div>
        </Link>
    )
}

export default SkillCard;