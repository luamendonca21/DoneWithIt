import client from "./client";

const endpoint = "/lstings";
const getListings = () => client.get(endpoint);

export default {
  getListings,
};
