import SmartImage from "@/components/SmartImage/SmartImage"

interface Props {
    title: string
    image: string
    credit: string
    text: string
}

function SkillDetailContent({
                                title,
                                image,
                                credit,
                                text
}: Props) {
    return (
        <>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
                {title}
            </h1>

            <SmartImage
                src={image}
                alt={title}
            />

            <p className="text-sm text-gray-500 mb-8">
                Photo credit: {credit}
            </p>

            <div className="prose prose-neutral max-w-none text-base sm:text-lg leading-relaxed">
                {text}
            </div>
        </>
    )
}

export default SkillDetailContent