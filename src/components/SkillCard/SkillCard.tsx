import Link from "next/link"
import SmartImage from "@/components/SmartImage/SmartImage"
import SkillCardInfo from "@/components/SkillCardInfo/SkillCardInfo";

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
            <SkillCardInfo
                title={title}
                text={text}
            />
        </Link>
    )
}

export default SkillCard;