import axios from "axios";
import { JSONResponseModel } from "./_models";

const API_URL = process.env.API_URL

export const SOCIAL_LOGIN_URL = `${API_URL}/user/social-login`

// export const SOCIAL_LOGIN_URL = `https://zapstaging.ceryxdigital.com/user/social-login`

export function googleLogin(googleCredential: string) {
    return axios.post<JSONResponseModel>(SOCIAL_LOGIN_URL, {
      "google_user_detail" : googleCredential
    })
  }