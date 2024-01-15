import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "token";
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

// iske aage ka code likho khud toh jyada samajh aayega

export const fetchDataFromApi = async (url, params) => {

  try {

    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,

    })

    return data;

  } catch (error) {
    console.log(error);

  }

  return null;
}

