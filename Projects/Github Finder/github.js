class GitHub{
    constructor() {
        this.client_id = '63696c2a5f28a384a40d';
        this.client_secret = '30828a6b2a42a5be636a4085e6f47b7af6c97967';
        this.repos_count = 5;
        this.repos_sort = 'created asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile: profile, // return profile, repos also works
            repos: repos
        }
    }
}