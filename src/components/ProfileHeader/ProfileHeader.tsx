import SmartImage from "@/components/SmartImage/SmartImage"

interface Props {
    name: string
    tagline: string
    imageSrc: string
}

function ProfileHeader({
                           name,
                           tagline,
                           imageSrc
}: Props) {
    return (
        <div className={"flex flex-col sm:flex-row gap-4 sm:items-center"}>
            <SmartImage
                variant={"rounded"}
                src={imageSrc}
                alt={name}
                width={96}
                height={96}
                className={"w-24 h-24"}
            />

            <div>
                <h3 className={"text-2xl sm:text-3xl font-bold"}>
                    {name}
                </h3>
                <p className={"text-base text-foreground/70 leading-relaxed"}>
                    {tagline}
                </p>
            </div>
        </div>
    )
}

export default ProfileHeader