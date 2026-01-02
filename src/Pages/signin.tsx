import { Button } from "../Components/Ui/Button"
import { Input } from "../Components/Ui/InputBox"
import { useState } from "react";

export const Signin = () => {


    const [loading, setLoading] = useState(false);


    async function handleSignup() {
        setLoading(true);
        await new Promise((res) => setTimeout(res, 2000));

        setLoading(false);

    }




    return <div className="flex w-screen h-screen justify-center items-center bg-gray-300">
        
        <div className="bg-white rounded-xl min-w-48 flex flex-col gap-3 p-8 shadow-2xl">
            <div className="flex justify-center font-medium text-xl text-primary">Signin</div>
            <Input type="text" placeholder="Enter Username" onChange={() => console.log("Username signup input")} className="border rounded" />
            <Input type={"password"} placeholder="Enter Password" onChange={() => console.log("Password signup input")} className="border rounded" />


            <Button varient="primary" size="md" text="Signin" loading={loading} onClick={handleSignup}/>

            <div className="text-gray-400 text-xs">Register a new user : <a href="http://www.localhost:5173/signup" className="text-primary underline">Signup</a></div>
        </div>

    </div>
}