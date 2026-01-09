interface LoaderProps{
    color: string
}

export const Loader = (props:LoaderProps) => {
    return <div className={`h-5 w-5 border-2 border-${props.color} border-t-transparent rounded-full animate-spin`}/>
}