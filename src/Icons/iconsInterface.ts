export interface IconProps {
    size : "sm" | "md" | "lg",
    onClick ?: () => void
}

export const iconSizeVarients = {
    "sm" : "size-2",
    "md" : "size-4",
    "lg" : "size-6"
}