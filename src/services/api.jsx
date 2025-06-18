import axios from "axios";

const baseUrl = "https://merodictionary.com/api";

export const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getWordOfTheDay = async () => {
  return await api.get("/word-of-the-day");
};
