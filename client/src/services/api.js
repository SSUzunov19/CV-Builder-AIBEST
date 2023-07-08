const callAPI = () => {
    return fetch("http://localhost:9000/testAPI") // Fetch data from the API
        .then(res => res.text()) // Convert the response to text
        .catch(err => err); // Catch any errors
}

export const fetchUsers = () => {
    return api.get('/users')
    .then((res) => {
      console.log(res.data); // Check the response data
      return res.data;
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
      throw error;
    });
  }
  
  export const createUser = (user) => {
    return api.post('/users', user);
  }
  
  export const updateUser = (id, updatedUser) => {
    return api.put(`/users/${id}`, updatedUser);
  }
  
  export const deleteUser = (id) => {
    return api.delete(`/users/${id}`);
  }

export default callAPI;
