import axoisBase from "./axiosBase";
import { toast } from "react-toastify";

const ENDPOINT = "/questions";

async function getFullQuestions(params) {
  try {
    const response = await axoisBase.get(`${ENDPOINT}/full`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

async function insertQuestion(body) {
  try {
    const response = await axoisBase.post(`${ENDPOINT}`, body);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

async function updateQuestion({ id, body }) {
  try {
    console.log(id, body);
    const response = await axoisBase.put(`${ENDPOINT}/${id}`, body);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

async function deleteQuestion(id) {
  try {
    const response = await axoisBase.delete(`${ENDPOINT}/${id}`);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

async function bulkUploadQuestion(body) {
  try {
    const response = await axoisBase.post(`${ENDPOINT}/bulk-upload`, body);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

export {
  getFullQuestions,
  insertQuestion,
  updateQuestion,
  deleteQuestion,
  bulkUploadQuestion,
};
