import { API } from "../utils/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { store } from "../store";
import { setIsLoading, setUser } from "./authSlice";
import Cookies from "js-cookie";

export const signUp = async (data, reset, router) => {
   const dispatch = store.dispatch
   dispatch(setIsLoading(true))
   const userData = {
    email: data.email
   };

   try {
        const response = await API.post("/auth/register", userData)
        const jsonData = response?.data  
        if (jsonData) {
            reset()
            alertNotification(jsonData?.message, "success")
            localStorage.setItem("regEmail", userData.email)
            router.push("/Verification?type=signup")
        } else {
            alertNotification("Registration failed. Please try again.", "error")
        }
   } catch (error) {
        if (error instanceof AxiosError) {
            alertNotification(error?.response?.data.message, "error")
        }
   } finally {
    dispatch(setIsLoading(false))
   }
}

export const verifyEmail = async ({ email, otp, type, router }) => {
    const dispatch = store.dispatch
    dispatch(setIsLoading(true))
    
    const endpoint = type === "signup"
        ? "/auth/verify-email"
        : "/auth/verify-login"

    try {
        const response = await API.post(endpoint, { email, otp })
        
        const userData = response.data
        if (type === "signup") {
            dispatch(setUser(userData))
            alertNotification("Account verified successfully.", "success")
            router.push("/Primer")
            // router.push("/SignIn")
        } else {
            console.log("Logged in data: ", userData);
            dispatch(setUser(userData))
            alertNotification("Logged in successfully.", "success")

            const { access_token } = userData
            if (access_token) {
                saveCookie("accessToken", access_token)
                console.log("Access Token: ", access_token);
            } else {
                console.log("Access token missing from response");
            }
            router.push("/dashboard")
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            alertNotification(error?.response?.data.message, "error")
        }
    } finally {        
        dispatch(setIsLoading(false))
    }
}

export const login = async (data, router) => {
    const dispatch = store.dispatch
    dispatch(setIsLoading(true))
    const loginData = {
        email: data.email
    }

    try {
        const response = await API.post("/auth/login", loginData)
        const jsonData = response?.data
        if (jsonData) {
            dispatch(setIsLoading(false))
            alertNotification("A login OTP has been sent to your email. Please check your inbox to proceed.", "success")
            localStorage.setItem("loginEmail", loginData.email)
            router.push("/Verification?type=login")
        } else {
            dispatch(setIsLoading(false))
            alertNotification("Failed to login, please try again.", "error")
        }
    } catch (error) {
        dispatch(setIsLoading(false))
        if (error instanceof AxiosError) {
            alertNotification(error?.response?.data.message, "error")
        }
    }
}
export const resendOtp = async ({ email, type }) => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));

    try {
        const response = await API.post("/auth/resend-otp", { email });
        const jsonData = response.data;

        if (jsonData) {
            const userType = type === "signup" ? "signup user" : "login user";
            alertNotification(`New OTP sent to the ${userType}'s email.`, "success");
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            alertNotification(error?.response?.data.message || "Something went wrong!", "error");
        } else {
            alertNotification("An unexpected error occurred.", "error");
        }
    } finally {
        dispatch(setIsLoading(false));
    }
};


export const alertNotification = (message, type) => {
    toast(message, {
      type: type,
    });
  };
  
export const saveCookie = (name, value) => {
    if (typeof value !== "string") {
      const newVale = JSON.stringify(value);
      Cookies.set(name, newVale);
    } else {
      Cookies.set(name, value);
    }
};

export const getCookie = (name) => {
    let value;
    const jsonString = Cookies.get(name);
    try {
      if (typeof jsonString === "string") {
        const jsonObject = JSON.parse(jsonString);
        value = jsonObject;
      }
    } catch (error) {
      value = jsonString;
    }
    return value;
};

export const signOut = () => {
    return async (dispatch) => {
        dispatch(store.dispatch({ type: "RESET"}));
        Cookies.remove("userData")
        Cookies.remove("accessToken")
    }
}
