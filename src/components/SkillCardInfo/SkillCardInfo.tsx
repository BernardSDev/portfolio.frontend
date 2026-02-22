import {capText} from "@/helpers/capText"

interface Props {
    title: string
    text: string
}

function SkillCardInfo({title, text}: Props) {
    return (
        <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
                {title}
            </h2>

            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                {capText(text, 60)}
            </p>
        </div>
    )
}

export default SkillCardInfo