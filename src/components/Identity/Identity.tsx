import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import ProfileBio from "@/components/ProfileBio/ProfileBio";
import ProfileConnections from "@/components/ProfileConnections/ProfileConnections";

function Identity() {
    return (
        <div className={"border-b border-border pb-8"}>
            <ProfileHeader
                name={"Bernard S. Apoh"}
                tagline={"Lorem ipsum dolor sit amet."}
                imageSrc={"/bernard.png"}
            />

            <ProfileBio
                bio={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sodales sollicitudin orci quis venenatis. Donec tempus lorem ut nisi scelerisque vestibulum.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Mauris et consectetur turpis. Donec quis libero sagittis, suscipit justo et,
                commodo lectus.`}
            />

            <ProfileConnections />
        </div>
    )
}

export default Identity