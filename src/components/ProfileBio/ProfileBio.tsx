interface Props {
    bio: string
}

function ProfileBio({ bio }: Props) {
    return (
        <p className={"text-base sm:text-lg mt-4 text-foreground/70 leading-relaxed"}>
            {bio}
        </p>
    )
}

export default ProfileBio