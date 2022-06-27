
const body = document.getElementById("body")


async function getUsers() {
    let res = await fetch("users.json")
    let users = await res.json()
    return users
}

getUsers().then(users => {
    // console.log(users);
    let userHtml = users.map(user => {
        return (
            `<div id="container" class="${user.name}">
                <div class="${user.name}" id="user-name">${user.username}</div>
                <div class="${user.name}" id="circle"></div>
            </div>`
        )
    }).join("")
    body.innerHTML = `
        <header><h1 class="header-text">My online friends</h1></header>
        <main id="main-container">
            <div id="main">${userHtml}</div>
            <div id="right-side"></div>
        </main>
        <footer><p class="footer-text">Copyright 2022</p></footer>`  
    let container = document.querySelectorAll("#container")
    container.forEach(item => {
        item.addEventListener("click", e => {
            console.log(e.target.className);
            users.map(myUser => {
                if (myUser.name == e.target.className) {
                    getUserInfo(myUser)
                }
            })
        })
    })  
})


function getUserInfo(user) {
    console.log(user);
    const userInfoDiv = document.getElementById("right-side")
    userInfoDiv.innerHTML = `
        <div id="user-container">
            <div id="profile-header">
                <h3>${user.icon} ${user.name}</h3>
                <h4>UserName: ${user.username}</h4> </div> 
            <div id="company">
                <p class="company-1">Company: ${user.company.name}</p>
                <p class="company-2">About: ${user.company.catchPhrase}</p>
            </div>             
            <div id="contact-details">
                <p>📧 ${user.email}</p>
                <p>📞 ${user.phone}</p>
                <p>💻 ${user.website}</p>
            </div>
            <div id="adress">
                <p class="address-1">📪 ${user.address.street}, ${user.address.suite}</p>
                <p class="address-2">&nbsp &nbsp ${user.address.city} ${user.address.zipcode}</p>
            </div>              
        </div>`
}





// getUsers().then(users => {
//     console.log(users);
//     let userHtml = users.map(user => {
//         return (
//             `<div id="user-container">
//                 <div id="profile-header">
//                     <h1>Name: ${user.name}</h1>
//                     <h3>UserName: ${user.username}</h3> </div> 
//                 <div id="company">
//                     <p>Company: ${user.company.name}</p>
//                     <p>About: ${user.company.catchPhrase}</p>
//                 </div>             
//                 <div id="contact-details">
//                     <p>Email: ${user.email}</p>
//                     <p>Phone Number: ${user.phone}</p>
//                     <p>Url: ${user.website}</p>
//                 </div>
//                 <div id="adress">
//                     <p>Address: ${user.address.suite} ${user.address.street} ${user .address.city}</p>
//                 </div>              
//             </div>`
//         )
//     }).join("")
//     main.innerHTML = userHtml
// })





