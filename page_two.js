fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => {
  // console.log(data)
  return data.json();
}).then((objectData)=> {
  console.log(objectData[0].title)
  let tableData = "";
  objectData.map((values)=> {
    tableData += `
  <tr>
    <td>${values.name}</td>
    <td>${values.username}</td>
    <td>${values.website}</td>
    <td>${values.street}</td>
  </tr>
    `
  })
  document.getElementById('table_body').innerHTML=tableData
}).catch((err)=> {
  console.log("error")
})
