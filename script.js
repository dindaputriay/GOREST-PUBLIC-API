let listUser = document.getElementById("listUser")

fetch("https://gorest.co.in/public/v2/users")
.then(Response => Response.json())
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})

function showUser(value,index){
    listUser.innerHTML += `<tr><td></td>&{value.name</tr>}`
}