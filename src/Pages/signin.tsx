import { Button } from "../Components/Ui/Button"
import { Input } from "../Components/Ui/InputBox"
import { useState, useRef } from "react";
import axios from "axios";
import { Backend_URL } from "../utils/config";
import { EyeSlashIcon } from "../Icons/EyeSlashIcon";
import { EyeIcon } from "../Icons/EyeIcon";
import { Link, useNavigate } from "react-router-dom";

export const Signin = () => {


    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();



    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            alert("Username and password required.");
            return;
        }

        try {
            setLoading(true);

            const response = await axios.post(`${Backend_URL}/api/v1/signin`, {
                username,
                password,
            });

            const jwt = response.data.token;

            if(!jwt){
                throw new Error("Token missing from response");
            }

            localStorage.setItem("token", jwt)


            alert("Signin successful");
            navigate("/dashboard")
        } catch (error: any) {
            console.log("FULL ERROR:", error);

            if (error.response) {
                console.log("STATUS:", error.response.status);
                console.log("DATA:", error.response.data);
                alert(error.response.data.message || "Signin failed");
            } else{
                alert("Network or server error");
            }
        } finally {
            setLoading(false);
        }
    }




    return <div className="flex w-screen h-screen justify-center items-center bg-gray-300">
        
        <div className="bg-white rounded-xl min-w-48 flex flex-col gap-3 p-8 shadow-2xl">
            {/* Box Heading */}
            <div className="flex justify-center font-medium text-xl text-primary select-none">Signin</div>

            {/* Input boxes of usename and password */}
            <Input type={"text"} reference={usernameRef} placeholder="Enter Username"  className="border rounded" />
            <div className="relative">
                <Input
                    type={showPassword ? "text" : "password"}
                    reference={passwordRef}
                    placeholder="Enter Password"
                    className="border rounded pr-10"
                />

                <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer select-none" onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? (
                        <EyeSlashIcon size="md" />
                    ) : (
                        <EyeIcon size="md" />
                    )}
                </div>
            </div>

            {/* Submit button */}
            <Button varient="primary" size="md" text="Signin" loading={loading} onClick={signin}/>

            {/* Last line of the box */}
            <div className="text-gray-400 text-xs select-none pl-1">Register a new user : <Link to="/signup" className="text-primary underline">Signup</Link></div>
        </div>

    </div>
}