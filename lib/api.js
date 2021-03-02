import axios from "axios";

export async function getAllPostsForHome() {
  const url = "/api/v1/posts";
  const { data } = await axios.get(url);
  return data;
}
