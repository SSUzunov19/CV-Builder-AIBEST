import axios from 'axios';
import LS from '../utils/browser.utils';


const api = axios.create({
  baseURL: 'http://localhost:9000',
});

export const fetchUsers = () => {
  return api.get('/api/users')
  .then((res) => {
    return res.data;
  })
  .catch((error) => {
    console.error('Error fetching users:', error);
    throw error;
  });
}
  
export const createUser = (user) => {
  return api.post('/api/users', user)
  .then((res) => {
    console.log('User created', res.data);
    return res.data;
  })
  .catch((error) => {
    console.error('Error creating user:', error);
    throw error;
  });
};
  
export const updateUser = (id, updatedUser) => {
  return api.put(`/api/users/${id}`, updatedUser);
}

export const deleteUser = (id) => {
  return api.delete(`/api/users/${id}`);
}

export const enhanceAboutText = (text) => {
  return api.post('/api/magic', { text })
    .then((response) => {
      return response.data.magicText;
    })
    .catch((error) => {
      console.error('Error enhancing about text:', error);
      throw error;
    });
};

export const analyseResume = (resume) => {
  return api.post('/api/analyse', { resume })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Error analyzing resume:', error);
      throw error;
    });
};

export const fetchResumes = () => {
  return api.get('/api/resumes')
    .then((res) => {
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