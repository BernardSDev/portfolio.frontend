import Skills from "@/components/Skills/Skills";

function Capabilities() {
    return (
        <div>
            <h2 className={"text-lg sm:text-xl font-semibold mt-12"}>Building systems with clarity and intention</h2>
            <p className={"text-base sm:text-lg mt-4 text-foreground/70 leading-relaxed"}>
                A collection of technologies, projects, and experiences that shape how I build reliable, scalable systems.
            </p>
            <div>
                <h2 className={"text-xl mt-6 mb-4 font-semibold"}>Skills</h2>
                <Skills />
            </div>
        </div>
    )
}

export default Capabilities