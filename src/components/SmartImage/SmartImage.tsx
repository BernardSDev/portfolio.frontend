"use client";

import Image, {ImageProps} from "next/image";
import {cn} from "@/lib/utils";

interface SmartImageProps extends ImageProps {
    variant?: "profile" | "feature";
    className?: string;
}

function SmartImage({
                       variant = "feature",
                       className,
                       alt,
                       src,
                       ...props
                   }: SmartImageProps) {
    if (!src) return null;

    if (variant === "profile") {
        return (
            <Image
                src={src}
                alt={alt}
                {...props}
                className={cn("rounded-full object-cover", className)}
            />
        );
    }

    return (
        <div
            className={cn(
                "relative w-full overflow-hidden shadow-lg aspect-[16/9] rounded-2xl",
                className
            )}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
            />
        </div>
    );
}

export default SmartImage;