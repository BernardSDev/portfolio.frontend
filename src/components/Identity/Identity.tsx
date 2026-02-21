import Image from "next/image";
import {FaGithub, FaWhatsapp, FaLinkedin} from "react-icons/fa"
import {RiTwitterXLine} from "react-icons/ri";

function Identity() {
    return(
        <div className={`border-b border-border pb-8`}>
            <div className={"flex flex-col sm:flex-row gap-4 sm:items-center"}>
                <Image
                    src={"/bernard.png"}
                    alt={"Bernard"}
                    width={256}
                    height={256}
                    className={"rounded-full w-24 h-24"}
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
                <a
                    href="https://github.com/BernardSDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                >
                    <FaGithub size={28} />
                </a>
                <a
                    href="https://www.linkedin.com/in/bernard-s-apoh-b04134230/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                >
                    <FaLinkedin size={28} />
                </a>
                <a
                    href="https://x.com/BernardSam_Apoh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                >
                    <RiTwitterXLine size={28} />
                </a>
                <a
                    href="https://wa.me/233248315982"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                >
                    <FaWhatsapp size={28} />
                </a>

                <input
                    placeholder={"Connect via mail"}
                    className={"w-full md:w-1/4 min-w-[180px] border border-primary px-4 py-2 rounded-full text-sm"}
                />
            </div>
        </div>
    )
}

export default Identity;