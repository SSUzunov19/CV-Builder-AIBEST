import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000',
});

export const fetchUsers = () => {
  return api.get('/api/users')
  .then((res) => {
    console.log('Fetched users:', res.data);
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