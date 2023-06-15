// import { leagueAmount } from "../script";

const result = document.querySelector(".Results");
const fixtures = document.querySelector(".fixtures");
const viewRecentMatches = document.querySelector(".recent-matches");
const prem = document.querySelector('.Prem')
const mls = document.querySelector('.mls')
const liga = document.querySelector('.la-liga')
const championsleague = document.querySelector('.Champions-league')
const bundesliga = document.querySelector('.bundesliga')
const stand = document.querySelector('.fixture-location')
const RecentGamesSeciton = document.querySelector('.league-standings')

function getSelectedBookmark() {
       
}
// Laliga id = 140

// Champions league id = 2

//mls id = 253

let league = ''
document.addEventListener('click', function(e){
  if (e.target == prem) {
league = 39
console.log(league);
  } if(e.target == liga) {
    league = 140
    console.log(league);
  } if(e.target == mls) {
    league = 253
  } if(e.target == championsleague) {
    league = 2
  } if(e.target == bundesliga) {
    league = 78
  }
})
// document.addEventListener('keydown', function(e) {
//   if(e.key == 'Enter'){
//     console.log(league);
//   }
// })

const options3 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};


viewRecentMatches.addEventListener("click", function () {
  
  

  fetch(
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2022&from=2023-03-25&to=2023-04-04`,
    options3
  )
    .then((response) => response.json())

    .then((response) =>
      response.response.forEach((g) => {
        // const homeScore = document.querySelector('#home-score')
        // const teamArr = []
        // teamArr.push(g)
    
        const recentMatchupmockup = `


<section class="Standings-list">

<input id="star" class ="yo" type="checkbox" title="bookmark page"/>
<span class ="home-team" >${g.teams.home.name} 
<img src="${g.teams.home.logo}" class="home-logo"
><div id="rectangle"><h5 class="home-score">${g.goals.home}</h5> : <h5 id="away-score">
${g.goals.away}</h5></div>
<img src="${g.teams.away.logo}" class="away-logo"> 
<p style="margin-left: 100px;">
${g.teams.away.name}</p>
<h6 class="fixture-location">
${g.fixture.venue.name} ${g.fixture.venue.city} </h6></span>
</section>
<hr>
</div>

`;
RecentGamesSeciton.insertAdjacentHTML("beforeend", recentMatchupmockup);
//         document.addEventListener('click', function(e) {

//         const dataArr = [e.target.closest('.Standings-list')]
//         console.log(dataArr[0]);
//         const y = `
  
//         <h3>${e.target.closest('.Standings-list')}</h3>
//         `
        
//         fixtures.insertAdjacentHTML("beforeend", y);
//         })
//       })
//     )
          
    
//     document.addEventListener('click', function(e) {
 
//       // dataArr.push(response.response)
//       // console.log(dataArr);
//       dataArr.push(e.target.closest('#star'))
     
// const yossss = Array.from(e.target.closest('.Standings-list'))
// console.log(yossss[0]);
    
          
//     })
// console.log(dataArr);
// dataArr.forEach((yo) => {
//   const y = `
  
//   <h3>${yo[1]}</h3>
//   `
  
//   fixtures.insertAdjacentHTML("beforeend", y);
      
// })
     })
     

    .catch((err) => console.error(err)))
});
