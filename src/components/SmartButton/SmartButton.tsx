"use client";

import {ButtonHTMLAttributes, ReactNode} from "react";
import {cn} from "@/lib/utils";

interface SmartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "ghost" | "circle";
    children?: ReactNode;
}

function SmartButton({
                        variant = "primary",
                        children,
                        className,
                        disabled,
                        ...props
                    }: SmartButtonProps) {

    const baseStyles = "transition flex items-center justify-center cursor-pointer";

    const variants = {
        primary: "text-sm text-primary hover:underline",
        ghost: "text-blue-600 hover:underline",
        circle: "rounded-full p-2 text-primary",
    };

    const disabledStyles = disabled ? "bg-border/20 cursor-default" : "hover:opacity-90";

    return (
        <button
            {...props}
            disabled={disabled}
            className={cn(
                baseStyles,
                variants[variant],
                variant === "circle" && "bg-border",
                disabledStyles,
                className
            )}
        >
            {children}
        </button>
    );
}

export default SmartButton;