import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { setCookie } from 'cookies-next';
import { axiosInstance } from "../../utils/apicall/apicall";

const Login = () => {
    const router = useRouter()
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const urlString = 'login';
            let result = await axiosInstance.post(urlString, inputData);
            if (result?.data?.success === true) {
                const user = result.data.result.user;
                const userId = user._id;
                setCookie("userId", userId);
                router.push('/dashboard')
            }
        }
        catch(err){
            //setError("Unauthorized");
        }
    };
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    name="email"
                    placeholder="Password"
                    value={inputData.email}
                    onInput={handleChange}
                />
                <br/>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={inputData.password}
                    onInput={handleChange}
                />
                <br/>
                <button type="submit">login</button>
            </form>
        </div>
    );
};

export default Login;

// export  const getServerSideProps= async(context) =>{
//     const { req } = context;
//     if (req.headers.cookie) {
//         return {
//           redirect: {
//             permanent: false,
//             destination: '/dashboard',
//           },
//         };
//     }
//     return {
//       props: {}, // will be passed to the page component as props
//     }
// }
