export interface IconProps {
    size : "sm" | "md" | "lg" | "xl" | "2xl",
    onClick ?: () => void
}

export const iconSizeVarients = {
    "sm" : "size-2",
    "md" : "size-4",
    "lg" : "size-5",
    "xl" : "size-6",
    "2xl" : "size-7"
}