import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import ProfileBio from "@/components/ProfileBio/ProfileBio";
import ProfileConnections from "@/components/ProfileConnections/ProfileConnections";

function Identity() {
    return (
        <div className={"border-b border-border pb-8"}>
            <ProfileHeader
                name={"Bernard S. Apoh"}
                tagline={"Building scalable, data-driven systems"}
                imageSrc={"/bernard.png"}
            />

            <ProfileBio
                bio={`I’m a fullstack developer and problem solver, passionate about building scalable 
                solutions with clarity and purpose. Beyond code, I’m a mentor and lifelong learner, growing 
                through teaching and building. I’m also developing my skills in data analytics, applying data-driven 
                thinking to real-world projects while pursuing my master’s degree.`}
            />

            <ProfileConnections />
        </div>
    )
}

export default Identity