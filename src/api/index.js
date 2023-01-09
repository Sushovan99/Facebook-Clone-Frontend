import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env;

export const postApi = async (resourcePath, payload) => {
    try {
        const response = await axios.post(
            VITE_BACKEND_URL + resourcePath,
            payload
        );
        if (response.data.status === "success") {
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            console.log("-------- Error Response --------");
            console.log(error.response.data);
            console.log("-------- Error Response --------");
            return error.response.data;
        } else if (error.request) {
            console.log("-------- Error Request --------");
            console.log(error.request);
            console.log("-------- Error Request --------");
            return error.request;
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
    }
};

export const getApi = (resourcePath) => {};
