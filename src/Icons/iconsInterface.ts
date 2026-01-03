export interface IconProps {
    size : "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl",
    onClick ?: () => void,
    className ?: string
}

export const iconSizeVarients = {
    "sm" : "size-2",
    "md" : "size-4",
    "lg" : "size-5",
    "xl" : "size-6",
    "2xl" : "size-7",
    "3xl" : "size-8",
    "4xl" : "size-9"
}