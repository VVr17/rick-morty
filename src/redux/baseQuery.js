import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "constants/api";

export default fetchBaseQuery({
  baseUrl: BASE_URL,
});
