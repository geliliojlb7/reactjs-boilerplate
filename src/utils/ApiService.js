import axios from "axios";
import qs from "query-string";

// SUCCESS
const handleSuccess = (response) => response.data;

// FAILED
const handleError = (error) => Promise.reject(error);

// SERVICE
const ApiService = (service) => {
    // base url
    // eslint-disable-next-line prefer-destructuring
    const env = process.env;
    const URL = `${env.REACT_APP_URL_TEST}`;

    // this will return "" if this cookie does not exist.
    const token = `Bearer ${localStorage.getItem("accessToken")}`;

    // Set HEADERS here 🔻
    let headers = {
        "Content-Type": "application/json",
        Authorization: token,
    };

    // dynamically set token to headers.
    // if the token does exist then pass it the headers.
    if (token) {
        headers = { ...headers, Authorization: token };
    }

    // New instance of axios will be created.
    // with the following options below.
    const instance = service.create({
        baseURL: URL,
        timeout: 0,
        maxRedirects: 5,
        paramsSerializer(params) {
            // this will convert the params object to string format
            /*
                e.g (
                    params = {
                        page: 2,
                        limit: 10
                    }
                )
            */
            return qs.stringify(params);
            // output: params = 'page=2&limit=10'
        },
        headers,
    });

    instance.interceptors.response.use(handleSuccess, handleError);

    // return instance with handlers.
    return instance;
};

/*
API CALL ☄
*/
const apiCall = (method, path, options) =>
    ApiService(axios).request({
        method,
        url: path,
        responseType: "json",
        ...options,
    });

export default apiCall;
