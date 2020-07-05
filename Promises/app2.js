const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'},
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
        posts.push(post);
        
        const error = true;

        if(!error) {
            resolve();
        } else {
            reject('Error: Something Went wrong');
        }
    }, 2000);
  });
}

function getPosts() {
   setTimeout(function() {
       let output = '';
       posts.forEach(function(post) {
          output += `<li>${post.title}</li>`;
       });
       document.body.innerHTML = output;
   }, 6000);
}

createPost({title: 'Post three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});

