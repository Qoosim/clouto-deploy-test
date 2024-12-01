import { API } from "../utils/api";
import { AxiosError } from "axios";
import { alertNotification } from "../auth/actions";
import { setIsLoading, setPrimer } from "./primerSlice";

export const getAllUsers = () => async (dispatch) => {
    dispatch(setIsLoading(true))

    try {
        const response = await API.get("/users")
        const jsonData = response.data
        if (jsonData) {
            dispatch(setPrimer(jsonData))
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            alertNotification(error?.response?.data.message || "Something went wrong", "error");
        } else {
            alertNotification("An unexpected error occurred. Please try again.", "error");
        }
    } finally {
        dispatch(setIsLoading(false))
    }
}