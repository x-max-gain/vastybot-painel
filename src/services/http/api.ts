import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhkNTJhNjk3YTkyMjRmODUwZjE3MjkiLCJuYW1lIjoiTGVvZGV5bWlzb24iLCJlbWFpbCI6Imxlb2RleW1pc29uQGdtYWlsLmNvbSIsImlhdCI6MTczNzY4MzM4OSwiZXhwIjoxNzM4OTc5Mzg5fQ.1rrA7ZG9Ek9OnBo3D1aJi7_u-bZxtLjwhVYAVF4Hyn4";
export const API = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
