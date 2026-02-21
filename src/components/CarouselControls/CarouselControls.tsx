import {ReactNode} from "react"
import SmartButton from "@/components/SmartButton/SmartButton"

interface Props {
    onLeft: () => void
    onRight: () => void
    disableLeft: boolean
    disableRight: boolean
    leftIcon: ReactNode
    rightIcon: ReactNode
}

function CarouselControls({
                             onLeft,
                             onRight,
                             disableLeft,
                             disableRight,
                             leftIcon,
                             rightIcon
                         }: Props) {
    return (
        <div className="flex justify-end gap-3 mt-6">
            <SmartButton
                variant="circle"
                onClick={onLeft}
                disabled={disableLeft}
            >
                {leftIcon}
            </SmartButton>

            <SmartButton
                variant="circle"
                onClick={onRight}
                disabled={disableRight}
            >
                {rightIcon}
            </SmartButton>
        </div>
    )
}

export default CarouselControls;