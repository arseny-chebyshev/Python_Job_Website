import axios from "axios";

axios.defaults.withCredentials = true;

const config = {
	headers: {
		'Accept': 'application/json',
	}
}

const apiClient = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	withCredentials: true,
	headers: config.headers,
});

export default apiClient;