import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

function loginUser(email: string, password: string) {
    return axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
    }).then(response => {
        const { token } = response.data;
        alert(`Login successful! Token: ${token}`);
        return token;
    }).catch(error => {
        throw error;
    });
}

export { loginUser };