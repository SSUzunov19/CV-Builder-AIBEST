const callAPI = () => {
    return fetch("http://localhost:9000/testAPI") // Fetch data from the API
        .then(res => res.text()) // Convert the response to text
        .catch(err => err); // Catch any errors
}

export default callAPI;
