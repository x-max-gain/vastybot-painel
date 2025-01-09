import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVjYjQzZWIyNTU5ZGIyYjE5NDA5MGIiLCJuYW1lIjoiTGVvZGV5bWlzb24iLCJlbWFpbCI6Imxlb2RleW1pc29uMkBnbWFpbC5jb20iLCJpYXQiOjE3MzU5MjMzNTAsImV4cCI6MTczNzIxOTM1MH0.knE58BTRRVLJSwQBBkEFDcubFrQRXpYeVy0u84VkcqQ";
export const API = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
