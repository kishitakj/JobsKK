import publicIp from "public-ip";
import axios from "axios";

export const getClientIp = async () =>
  await publicIp.v4({
    fallbackUrls: ["https://ifconfig.co/ip"],
  });
// export const baseURL = 'http://localhost:8080/api/';
export const baseURL = process.env.BASE_URL;
class Service {
  constructor() {
    const service = axios.create({ 
      baseURL,
    });
    // if (typeof window !== "undefined") {
    //   console.log("token component", window.localStorage.getItem("token"));
    //   const token = window.localStorage.getItem("token");
    //   service.interceptors.request.use((config) => {
    //     config.headers["Authorization"] = "Bearer " + token;
    //     return config;
    //   });
    // }
    service.interceptors.response.use(this.onSuccess, this.onError);
    this.service = service;
  }

  onSuccess = (response) => {
    console.log("Request Successful!", response.data);
    return response.data;
  };

  onError = (error) => {
    console.log("Request Failed:", error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
      console.log("Headers:", error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.log("Error Message:", error.message);
    }

    return error.response || error.message;
  };

  get(path, value) {
    return new Promise((response, reject) => {
      this.service
        .get(path, {
          params: value,
        })
        .then((data) => {
          response(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  patch(path, payload) {
    return new Promise((response, reject) => {
      if (!checkPayload(payload)) {
        console.log("here");
        reject("Please provide all fields");
      } else {
        this.service
          .request({
            method: "PATCH",
            url: path,
            responseType: "json",
            data: payload,
          })
          .then((res) => response(res))
          .catch((e) => reject(e));
      }
    });
  }

  post(path, payload) {
    return new Promise((response, reject) => {
      if (!checkPayload(payload)) {
        reject("Please provide all fields");
      } else {
        this.service
          .post(path, payload)
          .then((res) => {
            console.log(res);
            response(res);
          })
          .catch((e) => reject(e));
      }
    });
  }

  put(path, payload) {
    return new Promise((response, reject) => {
      if (!checkPayload(payload)) {
        reject("Please provide all fields");
      } else {
        this.service
          .request({
            method: "PUT",
            url: path,
            responseType: "json",
            data: payload,
          })
          .then((res) => response(res))
          .catch((e) => reject(e));
      }
    });
  }

  delete(path, payload) {
    console.log("delete", path);
    return new Promise((response, reject) => {
      this.service
        .request({
          method: "DELETE",
          url: path,
          responseType: "json",
          data: payload,
        })
        .then((res) => response(res))
        .catch((e) => reject(e));
    });
  }
}
const checkPayload = (payload) => {
  if (payload == undefined) return true;
  const keys = Object.keys(payload);
  for (let i = 0; i < keys.length; i++) {
    if (!payload[keys[i]] && isNaN(payload[keys[i]])) {
      return false;
    }
  }
  return true;
};
export default Service;
