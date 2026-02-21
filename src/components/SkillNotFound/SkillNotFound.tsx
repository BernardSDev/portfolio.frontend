import BackButton from "@/components/BackButton/BackButton";

interface Props {
    onBack: () => void
}

function SkillNotFound({ onBack }: Props) {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <p className="text-gray-500 mb-4">Content not found.</p>

            <BackButton
                onClick={onBack}
                variant="ghost"
                label=""
            />
        </div>
    )
}

export default SkillNotFound