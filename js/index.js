const URL = "https://api.github.com/users/";

//start by setting some variables to get elements from the html

const main =document.getElementById('main');
const form = document.getElementById('github-form');
const search =document.getElementById('search');

getUser(EvalyneMueke);

//make a function to geta user with a username parameter

function getUser(username) {
    fetch(URL + username)
    .then((response) =>response.json())
    .then(json)
    getUserRepos(username)
    
}

//function to get the repos of a user's repos

function getUserRepos(username){
    fetch (URL +username+"+/repos")
    .then((response) =>response.json())
    .then(response.json)

    addRepoToHTML(repos)
}
//function to add the usernames to 

function addRepoToHTML(repos){
    const repoLists=document.getElementById('repos-list')

    repos.forEach((repo) =>{
        const repoList=document.createElement("a")
        repoList.classList.add('repo')
        repoList.href =repo.html_url;
        repoList.target ="_blank"
        repoList.innerText = repo.name;
        repoLists.appendChild(repoList)
        })
}
//add an eventListenr 
form.addEventListener("submit",(e) =>{
    e.preventDefault();
const user = search.value;
if(user){
    getUser(user);
    search.value = "";
}

})
