import axios from "axios";

const baseUrl = "https://merodictionary.com/api";

export const api = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getWordOfTheDay = async () => {
  return await api.get("/word-of-the-day");
};
export const searchWord = async (Word) => {
  return await api.get(`/dictionaries?search_keyword=${Word}`);
};
