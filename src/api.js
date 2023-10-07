import axios from "axios";
const SERVER_URL = //FIXME: this is temporary hack for deployment over netlify this can be tackeled with env variables
  window.location.href.includes("localhost") ||
  window.location.href.includes("127.0.0.1")
    ? "http://localhost:3000"
    : "https://raw.githubusercontent.com/mokshchadha/protex_ai/main/server";

console.log({ SERVER_URL });

export function getEventsDataJson() {
  const url = `${SERVER_URL}/eventData.json`;
  return axios
    .get(url)
    .then((response) => {
      const list = response.data.data.violations_list;
      return list;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
}
