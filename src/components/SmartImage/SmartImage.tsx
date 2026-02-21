"use client";

import Image, {ImageProps} from "next/image";
import {useState} from "react";
import {cn} from "@/lib/utils";

interface SmartImageProps extends ImageProps {
    variant?: "rounded" | "responsive";
    className?: string;
    fallbackSrc?: string;
}

function SmartImage({
                        variant = "responsive",
                        className,
                        src,
                        alt,
                        fallbackSrc = "/images/fallback.jpg",
                        ...props
                    }: SmartImageProps) {

    const initialSrc = src ? String(src) : fallbackSrc;

    const [imgSrc, setImgSrc] = useState(initialSrc);

    const handleError = () => {
        setImgSrc(fallbackSrc);
    };

    if (variant === "rounded") {
        return (
            <Image
                {...props}
                src={imgSrc}
                alt={alt}
                onError={handleError}
                className={cn("rounded-full object-cover", className)}
            />
        );
    }

    return (
        <div
            className = {
            cn(
                "relative w-full overflow-hidden shadow-lg aspect-[16/9] rounded-2xl",
                className
            )}
        >
            <Image
                {...props}
                src={imgSrc}
                alt={alt}
                fill
                onError={handleError}
                className={"object-cover"}
            />
        </div>
    );
}

export default SmartImage;