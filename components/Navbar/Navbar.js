import Link from "next/link";
import style from "../../styles/Navbar.module.css";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { axiosInstance } from "../../utils/apicall/apicall";

const Navbar = () => {
    const userId = getCookie("userId");
    const router = useRouter();
    const handleLogout = async () => {
        try {
            const urlString = "logout";
            let result = await axiosInstance.post(urlString);
            if (result?.data?.success === true) {
                deleteCookie("userId");
                router.push("/login");
            }
        } catch (err) {
            if(err?.response?.status===499){
                router.push("/login");
            }
        }
    };
    return (
        <div className={style.navbar}>
            {userId ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </div>
    );
};

export default Navbar;
