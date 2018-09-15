const http = new EasyHTTP;

// Get users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User data
const data = {
  name: 'Pasha',
  username: 'Surok',
  email: 'Surok@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// Update Post
http.put('https://jsonplaceholder.typicode.com/users/3', data)
 .then(data => console.log(data))
 .catch(err => console.log(err));

// // Delete Post
// http.delete('https://jsonplaceholder.typicode.com/users/3')
//  .then(data => console.log(data))
//  .catch(err => console.log(err));