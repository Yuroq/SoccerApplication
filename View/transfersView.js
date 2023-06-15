const ApiSettings2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
      "X-RapidAPI-Host": "football98.p.rapidapi.com",
    },
  };
// await fetch(
//     `https://football98.p.rapidapi.com/premierleague/results`,
//     ApiSettings2
//   )
//     .then((response) => response.json())
//     .then(response => console.log(response))


//   fetch(
//         `https://football98.p.rapidapi.com/premierleague/transfers`,
//         ApiSettings2
//       )
//         .then((response) => response.json())
//         .then(response => console.log(response))

async function getData() {
const responses = await Promise.all([fetch(`https://football98.p.rapidapi.com/premierleague/transfers`,
ApiSettings2).then((response) => response.json())
    .then(response => console.log(response)),fetch(`https://football98.p.rapidapi.com/premierleague/results`,
    ApiSettings2).then((response) => response.json())
    .then(response => console.log(response))
])
const data1 = await responses[0].json()
const data2 = await responses[1].json()
}
getData()