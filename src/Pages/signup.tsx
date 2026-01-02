import { Button } from "../Components/Ui/Button"
import { Input } from "../Components/Ui/InputBox"
import { useState, useRef } from "react";
import { Backend_URL } from "../utils/config";
import axios from "axios";


export const Signup = () => {


    const [loading, setLoading] = useState(false);


    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            alert("Username and password required.");
            return;
        }

        try {
            setLoading(true);

            await axios.post(`${Backend_URL}/api/v1/signup`, {
                username,
                password,
            });

            alert("Signup successful");
        } catch (error: any) {
            console.log("FULL ERROR:", error);

            if (error.response) {
                console.log("STATUS:", error.response.status);
                console.log("DATA:", error.response.data);
                alert(error.response.data.message || "Signup failed");
            } else {
                alert("Network or server error");
            }
        } finally {
            setLoading(false);
        }
    }



    return <div className="flex w-screen h-screen justify-center items-center bg-gray-300">

        <div className="bg-white rounded-xl min-w-48 flex flex-col gap-3 p-8 shadow-2xl">
            <div className="flex justify-center font-medium text-xl text-primary">Signup</div>
            <Input type="text" reference={usernameRef} placeholder="Enter Username" className="border rounded" />
            <Input type={"password"} reference={passwordRef} placeholder="Enter Password" className="border rounded" />

            <Button varient="primary" size="md" text="Signup" loading={loading} onClick={signup} />

            <div className="text-gray-400 text-xs">Already have a account : <a href="http://localhost:5173/signin" className="text-primary underline">Signin</a></div>
        </div>

    </div>
}