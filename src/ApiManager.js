import Service, { baseURL } from "./axios";

class ApiManager {
  constructor() {
    this.Service = new Service();
  }
  updateService = () => {
    this.Service = new Service();
  };
  PromiseGenerator = async (method, path, value) => {
    switch (method) {
      case "get":
        return new Promise((response, reject) => {
          console.log("Value", value, "and Path", path);
          this.Service.get(path, value)
            .then((res) => response(res))
            .catch((e) => {
              reject(e);
            });
        });
      case "post":
        return new Promise((response, reject) => {
          console.log("Value", value, "and Path", path);
          this.Service.post(path, value)
            .then((res) => response(res))
            .catch((e) => {
              reject(e);
            });
        });
      case "put":
        return new Promise((response, reject) => {
          console.log("Value", value, "and Path", path);
          this.Service.put(path, value)
            .then((res) => response(res))
            .catch((e) => {
              reject(e);
            });
        });
      case "patch":
        return new Promise((response, reject) => {
          console.log("Value", value, "and Path", path);
          this.Service.patch(path, value)
            .then((res) => response(res))
            .catch((e) => {
              reject(e);
            });
        });
      case "delete":
        return new Promise((response, reject) => {
          console.log("Value", value, "and Path", path);
          this.Service.delete(path, value)
            .then((res) => response(res))
            .catch((e) => {
              reject(e);
            });
        });
    }
  };
  postTemplate = (value) => {
    return new this.PromiseGenerator("post", "endpoint", value);
  };
  getTemplate = (value) => {
    return new this.PromiseGenerator("get", "endpoint", value);
  };
  deleteTemplate = () => {
    return this.PromiseGenerator("delete", "endpoint");
  };
}

export default new ApiManager();
