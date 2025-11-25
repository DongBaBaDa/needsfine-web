"use client";

import React from "react";

export default function Button({
    children,
    className = "",
    onClick,
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-lg font-semibold transition ${className}`}
        >
            {children}
        </button>
    );
}
