import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjJlMzBiZTMwZmYyMzI1YzU2Y2JkY2QwN2EwNDUzYSIsInN1YiI6IjY1YTU3OTdjMDU4MjI0MDEyY2ZlMDkxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w_yEU38NwWLztpoi5wwN7dXnDSrJRI9dJusaRHlh_uY`;

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

