import type { ReactElement } from "react";
import { Loader } from "./Loader";


type varients = "primary" | "secondary";

interface ButtonProps{
    varient : varients,
    size : "sm" | "md" | "lg";
    text : string,
    startIcon ?: ReactElement,
    endIcon ?: ReactElement,
    onClick ?: () => void,
    loading ?: boolean
}

const varientStyles = {
    "primary" : "bg-primary text-white hover:bg-primary-hover cursor-pointer",
    "secondary" : "bg-secondary text-Secondary-buttonText cursor-pointer"
}

const defaultStyles = "rounded flex gap-2 items-center justify-center";

const sizeStyles = {
    "sm" : "px-2 py-1",
    "md" : "px-4 py-2",
    "lg" : "px-6 py-3"
}


export const Button = (props : ButtonProps) => {
    return <button
        className= {`${varientStyles[props.varient]} ${defaultStyles} ${sizeStyles[props.size]} `}
        onClick={props.onClick}
    >{props.startIcon} {props.loading ? <Loader /> : props.text} {props.endIcon} </button>
}

