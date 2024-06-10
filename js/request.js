import { loading } from "./loading.js";
const overlay = document.getElementById("overlay");

export const getData = async (url) => {
  try {
    // overlay.classList.add("loading");
    const request = await fetch(url);
    if (!request.ok) {
      throw new Error("Nimadir noto'g'ri ketdi? Oma Uzr!");
    }
    const response = await request.json();

    overlay.classList.remove("loading");
    return response;
  } catch (error) {
    overlay.classList.remove("loading");
    return error.message;
  }
};
