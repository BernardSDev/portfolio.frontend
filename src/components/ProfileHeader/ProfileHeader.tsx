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
        <div className={"flex gap-4"}>
            <SmartImage
                variant={"rounded"}
                src={imageSrc}
                alt={name}
                width={96}
                height={96}
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