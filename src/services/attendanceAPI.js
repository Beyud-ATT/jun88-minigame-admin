import { toast } from "react-toastify";
import axoisBase from "./axiosBase";

const ENDPOINT = "attendance";

async function getAttendance(params) {
  try {
    const response = await axoisBase.get(`${ENDPOINT}`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

export { getAttendance };
