import Link from "next/link"

function ConnectCTA() {
    return (
        <Link
            href={"/contact"}
            className={"w-40 md:w-50 border border-primary px-4 py-2 rounded-full text-sm text-center hover:bg-primary hover:text-white transition"}
        >
            Get in Touch
        </Link>
    )
}

export default ConnectCTA