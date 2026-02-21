import Link from "next/link"

function ConnectCTA() {
    return (
        <Link
            href={"/contact"}
            className={"w-full md:w-1/4 min-w-[180px] border border-primary px-4 py-2 rounded-full text-sm text-center hover:bg-primary hover:text-white transition"}
        >
            Connect via email
        </Link>
    )
}

export default ConnectCTA