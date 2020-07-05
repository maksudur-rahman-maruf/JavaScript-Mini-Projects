//Init Github
const github = new GitHub;
//Init UI
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
         .then(data => {
             if(data.profile.message ==='Not Found') {
                 ui.showAlert('User not found!!', 'alert alert-danger');
             } else {
                 ui.showProfile(data.profile);
                 ui.showRepos(data.repos);
             }
         })

    } else {
        // Clear Profile
        ui.clearProfile();
    }
});