import SocialLinkItem from "@/components/SocialLink/SocialLinkItem"
import {SocialLinks} from "@/data/SocialLinks"
import ConnectCTA from "@/components/ConnectCTA/ConnectCTA";

function ProfileConnections() {
    return (
        <div className={"mt-6 flex flex-wrap items-center gap-3"}>
            {
                SocialLinks.map(({ href, icon: Icon }) => (
                    <SocialLinkItem
                        key={href}
                        href={href}
                    >
                        <Icon size={28} />
                    </SocialLinkItem>
                ))
            }

            <ConnectCTA />
        </div>
    )
}

export default ProfileConnections;