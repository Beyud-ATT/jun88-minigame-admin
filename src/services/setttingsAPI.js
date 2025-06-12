import { toast } from "react-toastify";
import axoisBase from "./axiosBase";

const ENDPOINT = "/setting-question";

async function getSettings(params) {
  try {
    const response = await axoisBase.get(`${ENDPOINT}`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

async function updateSettings(body) {
  try {
    const response = await axoisBase.post(`${ENDPOINT}`, body);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

export { getSettings, updateSettings };
