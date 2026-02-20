import Skills from "@/components/Skills/Skills";

function Capabilities() {
    return (
        <div>
            <h2 className={"text-lg sm:text-xl font-semibold mt-12"}>Lorem ipsum dolor sit amet.</h2>
            <p className={"text-base sm:text-lg mt-4 text-foreground/70 leading-relaxed"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div>
                <h2 className={"text-xl mt-6 mb-4 font-semibold"}>Capabilities</h2>
                <Skills />
            </div>
        </div>
    )
}

export default Capabilities