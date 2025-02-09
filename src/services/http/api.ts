import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhkNTJhNjk3YTkyMjRmODUwZjE3MjkiLCJuYW1lIjoiTGVvZGV5bWlzb24iLCJlbWFpbCI6Imxlb2RleW1pc29uQGdtYWlsLmNvbSIsImlhdCI6MTczOTExNzEzNCwiZXhwIjoxNzQwNDEzMTM0fQ.Bt3m_bs2YGLNjd--PlJDZDq5CgV6ofquCsQut7o22Rc";
export const API = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
