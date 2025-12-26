interface InputProps{
    type : "text" | "number" | "email" | "color",
    placeholder : string,
    className : string,
    onChange : () => void
}

const defaultStyles = "px-4 py-2"


export const Input = (props : InputProps) => {
    return <input type={props.type} placeholder={props.placeholder} className={`${props.className} ${defaultStyles}`} onChange={props.onChange}/>
}