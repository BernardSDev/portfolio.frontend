import { IoIosArrowRoundBack } from "react-icons/io"
import SmartButton, { SmartButtonVariant } from "@/components/SmartButton/SmartButton"

interface Props {
    onClick: () => void
    label?: string
    variant?: SmartButtonVariant
}

function BackButton({
                        onClick,
                        label = "Go Back",
                        variant = "primary" // use an existing variant
                    }: Props) {
    return (
        <SmartButton variant={variant} onClick={onClick}>
            <IoIosArrowRoundBack size={28} />
            {label && <span>{label}</span>}
        </SmartButton>
    )
}

export default BackButton