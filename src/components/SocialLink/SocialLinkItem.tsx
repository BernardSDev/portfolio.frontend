import { ReactNode } from "react"

interface SocialLinkProps {
    href: string
    children: ReactNode
}

export default function SocialLinkItem({href, children}: SocialLinkProps) {
    return (
        <a
            href={href}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={"text-primary hover:opacity-80 transition"}
        >
            {children}
        </a>
    )
}