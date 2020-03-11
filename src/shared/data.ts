import axios from "axios";

import { Resource } from "./interfaces";

const getResources = async function(): Promise<Array<Resource>> {
  const response = await axios.get<Array<Resource>>("api/resources.json");
  return response.data;
};

export const data = {
  getResources
};
