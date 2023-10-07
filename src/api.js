import axios from "axios";
const SERVER_URL = process.env.SERVER_URL || "http://localhost:3000";

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
