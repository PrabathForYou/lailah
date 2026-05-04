import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

function loginUser(email: string, password: string) {
    return axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
    }).then(response => {
        const { access_token } = response.data;
        storeAuthToken(access_token);
        return access_token;
    }).catch(error => {
        throw error;
    });
}

function storeAuthToken(token: string) {
    Cookies.set('bearerToken', token, { expires: 7 });
}

function getAuthToken() {
    alert("Retrieving auth token from cookies.");
    return Cookies.get('bearerToken');
}

export { loginUser, storeAuthToken, getAuthToken };