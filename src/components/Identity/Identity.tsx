import SocialLinkItem from "@/components/SocialLink/SocialLinkItem";
import {SocialLinks} from "@/data/SocialLinks";
import SmartImage from "@/components/SmartImage/SmartImage";

function Identity() {
    return(
        <div className={`border-b border-border pb-8`}>
            <div className={"flex flex-col sm:flex-row gap-4 sm:items-center"}>
                <SmartImage
                    variant={"profile"}
                    src={"/images/fallback.jpg"}
                    alt={"Bernard"}
                    width={96}
                    height={96}
                    className={"w-24 h-24"}
                />
                <div>
                    <h3 className={"text-2xl sm:text-3xl font-bold"}>Bernard S. Apoh</h3>
                    <p className={"text-base text-foreground/70 leading-relaxed"}>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <p className={"text-base sm:text-lg mt-4 text-foreground/70 leading-relaxed"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sodales sollicitudin orci quis venenatis. Donec tempus lorem ut nisi scelerisque vestibulum.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Mauris et consectetur turpis. Donec quis libero sagittis, suscipit justo et,
                commodo lectus.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
                {
                    SocialLinks.map(({href, icon: Icon}) => (
                        <SocialLinkItem
                            key={href}
                            href={href}
                        >
                            <Icon size={28} />
                        </SocialLinkItem>
                    ))
                }

                <input
                    placeholder={"Connect via mail"}
                    className={"w-full md:w-1/4 min-w-[180px] border border-primary px-4 py-2 rounded-full text-sm"}
                />
            </div>
        </div>
    )
}

export default Identity;