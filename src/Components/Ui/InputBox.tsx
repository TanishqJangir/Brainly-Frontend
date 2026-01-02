interface InputProps{
    type : "text" | "number" | "email" | "color" | "password",
    placeholder : string,
    className ?: string,
    onChange : () => void,
    ref ?: any
}

const defaultStyles = "px-4 py-2"


export const Input = (props : InputProps) => {
    return <input type={props.type} ref={props.ref} placeholder={props.placeholder} className={`${props.className} ${defaultStyles}`} onChange={props.onChange}/>
}