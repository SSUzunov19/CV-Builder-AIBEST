import axios from 'axios';
import LS from '../utils/browser.utils';

const api = axios.create({
  baseURL: 'http://localhost:9000',
});

export const fetchResumes = () => {
  return api.get('/api/resumes')
    .then((res) => {
      console.log(res.data); // Check the response data
      return res.data;
    })
    .catch((error) => {
      console.error('Error fetching resumes:', error);
      throw error;
    });
};

export const getResumeById = (id) => {
  return api.get(`/api/resumes/${id}`)
    .then((res) => {
      console.log(res.data); // Check the response data
      return res.data;
    })
    .catch((error) => {
      console.error(`Error fetching resume with id ${id}:`, error);
      throw error;
    });
};

export const createResume = (resume) => {
  return api.post('/api/resumes', resume)
    .then((response) => {
      console.log('createResume response', response.data);

      // Also save the resume data in localStorage
      LS.set({ key: 'resume', payload: response.data });

      return response.data;
    });
};


export const updateResume = (id, updatedResume) => {
  return api.put(`/api/resumes/${id}`, updatedResume);
}

export const deleteResume = (id) => {
  return api.delete(`/api/resumes/${id}`);
}

export const fetchSections = () => {
  return api.get('/api/sections');
}

export const createSection = (section) => {
  return api.post('/api/sections', section);
}

export const updateSection = (id, updatedSection) => {
  return api.put(`/api/sections/${id}`, updatedSection);
}

export const deleteSection = (id) => {
  return api.delete(`/api/sections/${id}`);
}
