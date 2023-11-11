function displayComments(response) {
  console.log(response);
}

function displayEmail(response) {
  console.log(response.data[0].email);
}

// get all the comments and log the API response
let apiUrl = "https://jsonplaceholder.typicode.com/comments";
axios.get(apiUrl).then(displayComments);

//log the first comment email from the API response
// apiUrl = "https://jsonplaceholder.typicode.com/comments/1";
axios.get(apiUrl).then(displayEmail);
