import { Alert } from 'react-native'
import { request } from "../../utils/http"

export async function apiPost(endpoint, data) {
  try {
    console.log('apiPost :: calling ::', `${endpoint}`, 'with data', data)
    const postRes = await request.post(`${endpoint}`, data)
    if (postRes) {
      console.log(endpoint, '---res---:', postRes);
      return postRes
    }
  } catch (error) {
    console.log('API POST ERROR endpoint:', endpoint, ' || error:', error);
    return APIErrorHandler(error, endpoint);
  }
}


function APIErrorHandler(error, endpoint) {
  console.log('error', Object.assign({}, error));
  //handle general cases
  if (error.message == "Network Error") {
    Alert('No Internet', 'Please check your internet connection')
    return false;
  } else if (error.code && error.code == 'ECONNABORTED') {
    Alert('No Internet', 'Please check your internet connection')
    return false;
  } else {
    return { error };
  }
}

export const signupService = async (data) => {
  // { email, phone, password } = data
  return apiPost('/api/v1/signup/', data)
}

export const signinService = async (data) => {
  // { email, password } = data
  return apiPost('/api/v1/login/', data)
}

export const ssoAuthService = async (social, socialAccessToken, extraData = null) => {
  const url = `/api/v1/${social}/connect/`;
  const data = { access_token: socialAccessToken };
  if (extraData) {
    data['name'] = extraData['name']
  }
  return await apiPost(url, data);
}

export const resetPasswordEmailService = async (data) => {
  // { email } = data
  return apiPost('/rest-auth/password/reset/', data)
}

export const resetPasswordPhoneNumberService = async (data) => {
  // { to_number } = data
  return apiPost('/rest-auth/password/reset/phone/request/', data)
}

export const updatePasswordWithCodeService = async (data) => {
  //  { “to_number”: “+923062597306”,
  //   “code”: “850113",
  //   “new_password”:“123456"} = data

  return apiPost('/rest-auth/password/reset/phone/verify/', data)
}
