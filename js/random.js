const loadUser =()=>{
fetch('https://randomuser.me/api/?results=20')
.then(res=>res.json())
.then(data=>displayUser(data.results))
}

const displayUser =(users)=>{
const userContainer= document.getElementById('user-container');
for(const user of users){
   
    const userDiv = document.createElement('div');
    userDiv.innerHTML=`
    <h3> User Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
    <p> user info: ${user.email}</p>
    <p> user info: ${user.location.city} ${user.location.country}</p>
    `
    userContainer.appendChild(userDiv)
}
}
loadUser();