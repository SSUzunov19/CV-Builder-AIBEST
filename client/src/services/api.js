import axios from 'axios';

export const fetchResumes = () => {
  return axios.get('/api/resumes');
}

export const createResume = (resume) => {
  return axios.post('/api/resumes', resume);
}

export const updateResume = (id, updatedResume) => {
  return axios.put(`/api/resumes/${id}`, updatedResume);
}

export const deleteResume = (id) => {
  return axios.delete(`/api/resumes/${id}`);
}