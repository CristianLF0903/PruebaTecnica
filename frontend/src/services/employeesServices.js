import axios from "axios";

const API_URL =
  process.env.API_URL || "http://localhost:3001/employees";

const getAll = () => {
  const request = axios.get(API_URL);
  return request.then((response) => response.data).catch((e)=>e.response.data);
};

const create = (newEmployee) => {
  console.log(newEmployee)
  const request = axios.post(API_URL, newEmployee);
  return request.then((response) => response.data).catch((e)=>e.response.data);
};

const update = (id, updatedEmployee) => {
  const request = axios.put(`${API_URL}/${id}`, updatedEmployee);
  return request.then((response) => response.data).catch((e)=>e.response.data);
};

const remove = (id) => {
  const request = axios.delete(`${API_URL}/${id}`);
  return request.then((response) => response.data).catch((e)=>e.response.data);
};

export default { getAll, create, update, remove }