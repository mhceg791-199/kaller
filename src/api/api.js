// import axios from "axios";

// const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// // Create axios instance
// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Submit application
// export const submitApplication = async (formData) => {
//   const submitData = new FormData();
  
//   submitData.append("name", formData.name);
//   submitData.append("email", formData.email);
//   submitData.append("phone", formData.phone);
//   submitData.append("position", formData.position);
//   submitData.append("experience", formData.experience);
//   submitData.append("portfolio", formData.portfolio || "");
//   submitData.append("coverLetter", formData.coverLetter);
//   submitData.append("resume", formData.resume);

//   const response = await api.post("/applications/apply", submitData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   return response.data;
// };

// export default api;