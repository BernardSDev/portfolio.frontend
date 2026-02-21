"use client";

import {ButtonHTMLAttributes, ReactNode} from "react";
import {cn} from "@/lib/utils";

export type SmartButtonVariant = "primary" | "ghost" | "circle";

export interface SmartButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: SmartButtonVariant;
    children?: ReactNode;
}

function SmartButton({
                         variant = "primary",
                         children,
                         className,
                         disabled,
                         ...props
                     }: SmartButtonProps) {

    const baseStyles = "inline-flex items-center justify-center transition duration-200";

    const variants: Record<SmartButtonVariant, string> = {
        primary: "text-sm text-primary hover:underline",
        ghost: "text-blue-600 hover:underline",
        circle: "rounded-full p-2 text-primary bg-border",
    };

    return (
        <button
            {...props}
            disabled={disabled}
            className={cn(
                baseStyles,
                variants[variant],
                disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer hover:opacity-90",
                className
            )}
        >
            {children}
        </button>
    );
}

export default SmartButton;