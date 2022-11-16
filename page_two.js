// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => {
//     return res.json();
// })
// .then(data => {
//     //added this part just now

//     data.forEach(user => {
//         const markup = `<li>${user.name}</li>`;
//         document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
//     });
//     console.log(data);
// })
// .catch(error => console.log(error))

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    //added this part just now

    data.forEach((user) => {
      const displayUser = document.querySelector("#display");
      let div = document.createElement("div");
      div.classList.add("col-sm-12", "col-md-5", "g-4");

      const card = document.createElement("div");
      card.classList.add("card");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      cardBody.innerHTML = `
            <h2 class='card-title display-6 lead'>${user.name}</h2>
            <p class="card-text fs-5 fw-light"><strong>Email</strong>: ${user.email}</p>
            <p class="card-text fs-5 fw-light"><strong>Phone</strong>: ${user.phone}</p>
            <p class="card-text fs-5 fw-light"><strong>Website</strong>: ${user.website}</p>
            `;
      card.appendChild(cardBody);
      div.appendChild(card);
      displayUser.appendChild(div);
    });
    console.log(data);
  })
  .catch((error) => console.log(error));
