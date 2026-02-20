import Image from "next/image";
import {FaGithub, FaWhatsapp, FaLinkedin} from "react-icons/fa"
import {RiTwitterXLine} from "react-icons/ri";

function Identity() {
    return(
        <div className={`text-6xl border-b border-border pb-12`}>
            <div className={"flex gap-4 items-center"}>
                <Image
                    src={"/bernard.png"}
                    alt={"Bernard"}
                    width={256}
                    height={256}
                    className={"rounded-full w-24 h-24"}
                />
                <div>
                    <h3 className={"text-3xl font-bold"}>Bernard S. Apoh</h3>
                    <p className={"text-base"}>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <p className={"text-lg mt-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sodales sollicitudin orci quis venenatis. Donec tempus lorem ut nisi scelerisque vestibulum.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris et consectetur turpis. Donec quis libero sagittis, suscipit justo et,
                commodo lectus.
            </p>
            <div className={"text-xl mt-4 flex items-center flex-wrap gap-2"}>
                <FaGithub size={32} className="text-primary" />
                <FaLinkedin size={32} className="text-primary" />
                <RiTwitterXLine size={32} className="text-primary" />
                <FaWhatsapp size={32} className="text-primary" />
                <input
                    placeholder={"Connect via mail"}
                    className={"w-1/4 border border-primary text-base text-foreground px-4 py-2 rounded-full"}
                />
            </div>
        </div>
    )
}

export default Identity;