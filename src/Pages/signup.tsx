import { Button } from "../Components/Ui/Button"
import { Input } from "../Components/Ui/InputBox"

export const Signup = () => {
    return <div className="flex w-screen h-screen justify-center items-center bg-gray-300">
        
        <div className="bg-white rounded-xl min-w-48 flex flex-col gap-3 p-8 shadow-2xl">
            <div className="flex justify-center font-medium text-xl text-primary">Signup</div>
            <Input type="text" placeholder="Enter Username" onChange={() => console.log("Username signup input")} className="border rounded" />
            <Input type={"password"} placeholder="Enter Password" onChange={() => console.log("Password signup input")} className="border rounded" />
            <Button varient="primary" size="md" text="Signup" />
        </div>

    </div>
}