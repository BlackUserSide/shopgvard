import axios from "axios";

const url = "http://192.168.0.123:8080/api";
const instance = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {},
});
export const request = (params: any, allowStatus: number[] = [200]) =>
  instance(params).catch((e) => {});
