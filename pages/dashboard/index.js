import { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/apicall/apicall";
import { deleteCookie } from "cookies-next";
import { useSelector, useDispatch } from "react-redux";
import { setExams } from "../../redux/questionSlice";

const MyPage = ({ data }) => {
    const dispatch = useDispatch();
    const exams = useSelector((state) => state.question.exams);
    useEffect(() => {
        dispatch(setExams(data));
    }, []);
    return (
        <div>
            {exams?.map((exam, i) => (
                <p>{exam?.name}</p>
            ))}
        </div>
    );
};

export default MyPage;

export const getServerSideProps = async ({ req, res }) => {
    let data = [];
    const myCookie = req?.headers?.cookie;
    try {
        const urlString = "exams";
        const result = await axiosInstance.get(urlString, {
            headers: {
                Cookie: myCookie,
            },
        });
        if (result?.data?.success === true) {
            const exams = result?.data?.result?.data;
            data = exams;
        }
    } catch (err) {
        if (err?.response?.status === 499) {
            deleteCookie("userId", { req, res });
            return {
                redirect: {
                    destination: "/login",
                    permanent: false,
                },
            };
        }
    }
    return {
        props: {
            data: data,
        },
    };
};
