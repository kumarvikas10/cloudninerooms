import axios from "axios";

export const allPropertiesData = async (setPropertiesData) => {
  try {
    const { data } = await axios.get(`/db.json`);
    setPropertiesData(data.colivingSpaces);
    console.log(data)
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
