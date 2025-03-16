
let div = document.getElementById("maind")

fetch('https://jsonplaceholder.typicode.com/users',{

    method: 'GET'

})
    



.then(function (responsOBj) {
    return responsOBj.json()
})

.then(function (finish){
    console.log(finish);
    let ul =document.createElement("ul")
    div.appendChild(ul)

    finish.forEach(element => {
        let li = document.createElement('li')
        ul.appendChild(li)

        li.textContent = element.name
    });
})

.catch(function (error){
    console.log(error);
})