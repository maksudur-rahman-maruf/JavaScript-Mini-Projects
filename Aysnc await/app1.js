async function getUsers() {

    const response = await fetch('http://jsonplaceholder.typicode.com/users');

    const data = await response.json();
    return data;
}

getUsers().then(users => console.log(users));

