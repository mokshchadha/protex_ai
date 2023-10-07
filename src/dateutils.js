export function formatDate(timestampString) {
  const timestamp = new Date(timestampString);

  const year = timestamp.getFullYear();
  const month = String(timestamp.getMonth() + 1).padStart(2, "0");
  const day = String(timestamp.getDate()).padStart(2, "0");
  const hours = String(timestamp.getHours()).padStart(2, "0");
  const minutes = String(timestamp.getMinutes()).padStart(2, "0");
  // const seconds = String(timestamp.getSeconds()).padStart(2, "0");
  const meridiem = hours >= 12 ? "PM" : "AM";

  const localTimeString = `${year}/${month}/${day} ${hours}:${minutes} ${meridiem}`;
  return localTimeString;
}
