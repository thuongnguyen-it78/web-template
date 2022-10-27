import axiosClient from "./axiosClient";

const userAPI = {
  getList(params) {
    const url = "/users";
    return axiosClient.get(url, { params });
  },

  getById(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  create(payload) {
    const url = "/users";
    return axiosClient.post(url, payload);
  },

  update(id, payload) {
    const url = `/users/${id}`;
    return axiosClient.patch(url, payload);
  },

  delete(id) {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },

  exportList(params) {
    const url = "/users";
    return axiosClient.get(url, {
      params: { ...params, download: true },
      responseType: "blob",
    });
  },
};

export default userAPI;
