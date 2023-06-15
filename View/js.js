// // import { searchvalue } from "../script.js";
// const searchInput = document.querySelector("#userInput");
// const fixtureViewSection = document.querySelector(".Search-recent-fixture");
// const timeScore = document.querySelector(".time-score");
// const teamInfoPics = document.querySelector(".Team-Info-Pics");
// const searchInputstext = document.querySelector("#userInput");
// const playersSection = document.querySelector(".players-grid");
// const GridContainer = document.querySelector(".grid-container");
// const teamStats = document.querySelector(".team-stats");
// const topSection = document.querySelector(".top-section");
// const bottomSection = document.querySelector(".gfg2");
// const spinner = document.getElementById("spinner");
// const dataContainer = document.getElementById("data");
// const spiner = document.querySelector('.lds-hourglass')

// // function showSpinner() {
// //   spinner.style.display = 'block';
// // }

// // function hideSpinner() {
// //   spinner.style.display = 'none';
// // }

// let team = ''
// document.querySelector('.accordion-header').addEventListener('click', function() {
//   location.href = "index.html"
// })
// document.querySelector(".logo_name").addEventListener("click", function () {
//   location.href = "index.html";
// });
// document.querySelector('#log_out').addEventListener('click', function() {
//   location.href = "LogInPage.html"; 
// })
// const ApiSettings = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
//     "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//   },
// };
// const newsSettings = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
//     "X-RapidAPI-Host": "football98.p.rapidapi.com",
//   },
// };
// function ShowSpinner() {
//   spiner.classList.add('show')
//   // spiner.style.opacity = 1
//   }
//   function HideSpinner() {
//     spiner.classList.remove('show')
//     // spiner.style.opacity = 0
//   }


// searchInputstext.addEventListener("keydown", function (e) {
//   if (e.key == "Enter") {
  
//     GridContainer.innerHTML = "";
//     teamStats.innerHTML = "";
//     topSection.innerHTML = "";
//     bottomSection.innerHTML = "";
//     fixtureViewSection.innerHTML = "";
//     document.querySelector(".players-grid").innerHTML = "";
//     document.querySelector(".stadium-name2").innerHTML = "";

//     ShowSpinner()
 
//     fetch(
//       `https://api-football-v1.p.rapidapi.com/v3/teams?search=${searchInput.value}`,
//       ApiSettings
//     )
//       .then((response) => response.json())

//       .then((response) => {
//         searchInput.value = ''
//         team = `${response.response[0].team.id}`
     
//         const teamInfoPicsHtml = `
//         <div class="test">
//         <img src="images/download (3).png" class="header-image">
//         <h3 class="first-txt">
//         <img src="${response.response[0].venue.image}" class="stadium-logo" />
//       </div>
//       </h3> 
//     </section>

//   `;
//         topSection.insertAdjacentHTML("beforeend", teamInfoPicsHtml);

//         const stadiumName = `
//         <img src="images/stadium.png"><p>${response.response[0].venue.name}</p>
    
//         `;
//         document
//           .querySelector(".stadium-name2")
//           .insertAdjacentHTML("beforeend", stadiumName);
//         // ${response.response[0].team.id}
//         fetch(`https://api-football-v1.p.rapidapi.com/v3/leagues?team=${team}`
//         ,ApiSettings)
//         .then((response) => response.json())
     
//         .then((response) => 
//         fetch(
//           `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=${response.response[0].league.id}&season=2022&team=${team}`,
//           ApiSettings
//         )
//           .then((response) => response.json())

//           .then((response) => {
//             const Yellowarr = []
//             const Yellow = Object.values(response.response.cards.yellow)
//             Yellow.forEach((num) => Yellowarr.push(num.total))
//             const arrayReduceYellow = Yellowarr.reduce((amm,amount) => amm + amount)
           
//             const Redarr = []
//             const Red = Object.values(response.response.cards.red)
//             Red.forEach((num) => Redarr.push(num.total))
//             const arrayReduceRed = Redarr.reduce((amm,amount) => amm + amount)
//             const teamImageInfo = `
     
//        <h3 class="second-txt">
//         <img src="images/pngtree-white-circle-background-png-image_2975665-removebg-preview.png" class="team-emblem-background">
//         <img src="${response.response.team.logo}" class="team-logo" />
//                 </h3>
       
//                <h3 class="team-name">${response.response.team.name}</h3>
//              <div class="stadium-name2">
          
//              </div>
              
//              <div class="league-name2">
//               <i class="fa-solid fa-trophy" style="color: #ffffff; font-size: 20px;"></i><p>${
//                 response.response.league.name
//               }</p>
//              </div>
//              <div class="Recent-form2">
//               <i class="fa-regular fa-futbol" style="color: #ffffff;font-size: 20px;"></i><p>${response.response.form.slice(
//                 -9
//               )}</p>
//              </div>
//                   `;

//             bottomSection.insertAdjacentHTML("beforeend", teamImageInfo);

//             const topstats = `
//       <i class="fa-solid fa-handshake" style="position:absolute;left: 99; font-size: 25px;top:12px;"></i>
//                   <h2 class="stats-1">19</h2>
//                   <h2 class="stats-Played">Matches Played</h2>
//                   <div class="line-1"></div>
//                   <div class="line-2"></div>
//                   <i class="fa-regular fa-futbol" style="position:absolute;left: 275; font-size: 25px;top:12px;"></i>
//                   <h2 class="stats-2">${response.response.fixtures.wins.total}</h2>
//                   <h2 class="stats-Wins">Wins</h2>
//                   <div class="line-3"></div>
//                   <i class="fa-solid fa-arrow-down" style="position:absolute;left: 435; font-size: 25px;top:12px;"></i>
//                   <h2 class="stats-3">${response.response.fixtures.loses.total}</h2>
//                   <h2 class="stats-Losses">Losses</h2>
//                   <div class="line-4"></div>
//                   <i class="fa-solid fa-mitten" style="position:absolute;left: 685; font-size: 25px;top:12px;"></i>
//                   <h2 class="stats-4">${response.response.goals.against.total.total}</h2>
//                   <h2 class="stats-Goals-conceeded">Goals Conceeded</h2>
//                   <i class="fa-solid fa-shield" style="position:absolute;left: 978; font-size: 25px;top:12px;"></i>
//                   <h2 class="stats-5">${response.response.clean_sheet.total}</h2>
//                   <h2 class="stats-clean-sheets">Clean Sheets</h2>
//       `;

//             teamStats.insertAdjacentHTML("beforeend", topstats);
//             const teamstats = `
        
//         <div class="grid-item">
//         <div class="info">
//           <hr style="background-color: purple; height: 10px;">
//           <h2 style="margin-top:0px;">Attack</h2>
//       <hr>
//           <span>Goals:<p>${response.response.goals.for.total.total}</p></span>
//           <hr style="height: 2px;background-color: grey;">
//           <span>Goals Per Match:<p>${response.response.goals.for.average.total}</p></span>
//           <hr style="height: 2px;background-color: grey;">
//           <span>Games failed to score:<p>${response.response.failed_to_score.total}</p></span>
//           <hr style="height: 2px;background-color: grey;">
//           <span>Penalties scored:<p>${response.response.penalty.scored.total}</p></span>
//         </div>
//       </div>
//       <div class="grid-item">
//         <div class="info">
//           <hr style="background-color: purple; height: 10px;">
//           <h2>Team Play</h2>
//           <hr>
//           <span>Yellow Cards:<p>${arrayReduceYellow}</p></span>
//           <hr style="height: 2px;background-color: grey;">
//           <span>Red Cards:<p>${arrayReduceRed}</p></span>
//           <hr style="height: 2px;background-color: grey;">
//           <span>Largest win streak<p>${response.response.biggest.streak.wins}</p></span>
//           <hr style="height: 2px;background-color: grey;">
//           <span>Largest losing streak<p>${response.response.biggest.streak.loses}</p></span>
//         </div>
//       </div>
      
//       <div class="grid-item">
//         <div class="info">
//           <hr style="background-color: purple; height: 10px;">
//           <h2>Defense</h2>
//           <hr>
//           <span>Passes per match:<p>${response.response.goals.against.total.total}</p></span>
//           <hr style="height: 2px;background-color: grey;">
//           <span>Goals Conceded:<p>${response.response.goals.against.total.total}</p></span>
//           <hr style="height: 2px;background-color: grey;">
//           <span>Total Clean Sheets:<p>${response.response.clean_sheet.total}</p></span>
//           <hr style="height: 2px;background-color: grey;">
//           <span>Home Clean Sheets:<p>${response.response.clean_sheet.home}</p></span>
//           <hr style="height: 2px;background-color: grey;">
//           <span>Away Clean Sheets:<p>${response.response.clean_sheet.away}</p></span>
          
//         </div>
//       </div>
       
      
//       </div>
//       </div>`;

//             GridContainer.insertAdjacentHTML("beforeend", teamstats);

//             fetch(
//               `https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2022&team=${team}`,
//               ApiSettings
//             )
//               .then((response) => response.json())

//               .then((response) =>
//                 response.response.slice(-9,-1).forEach((fixtures) => {
//                   let time = fixtures.fixture.timestamp;
//                   let date = new Date(time * 1000);
//                   let hours = date.getHours();
//                   let min = "0" + date.getMinutes();
//                   let sec = "0" + date.getSeconds();
//                   let times = `${hours}:${min.substring(-2)}`;
//                   // const homeScore = document.querySelector('#home-score')
//                   let classes;
//                   let classes2;

               
//                     classes = `${fixtures.score.fulltime.home}`;
           
//                   if (`${fixtures.score.fulltime.away}` == "null") {
//                     classes2 = ``;
//                   } else {
//                     classes2 = `${fixtures.score.fulltime.away}`;
//                   }
//                   const recentMatchupmockup = `
		  

//                 <div class ="search-recent-fixtures">
//               <span class="search-recent-fixtures-home-team"
              
//                 ><h2 style="position: absolute;left: 25px;
//                 font-size: 30px;top: 60px;">${fixtures.teams.home.name.slice(0, 3)}</h2><img src="${
//                         fixtures.teams.home.logo
//                       }" 
//                 class="home-logo2" />
//                 <div class="Time"><h5 class="time-score">${classes} 
//                   <div class="vertical-line2"></div>
//                    ${classes2} </h5></div>
//                 <p class="search-Recent-fixtures-away">${fixtures.teams.away.name.slice(0, 3)}</p>
//                 <img src="${fixtures.teams.away.logo}" class="away-logo2"/></span
//               >
            
              
//           </div>

		  
// 		  `;
     
//                   fixtureViewSection.insertAdjacentHTML(
//                     "beforeend",
//                     recentMatchupmockup
//                   );

//                   // ${response.parameters.team}
//                   // if(document.querySelector('time-score').includes(':')){
//                   //   console.log('true');
//                   // }
//                 })
//               );
//             fetch(
//               `https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${team}`,
//               ApiSettings
//             )
//               .then((response) => response.json())
//               .then((response) => {
               
//                 response.response[0].players
//                   .forEach((player) => {
                  
//                     if (`${player.number}` == "null") {
//                       console.log("yo");
//                     }

//                     const playerInfoHtml = `
                  
//           <div class="player-grid">           
// <div class="squad">
// <img src="images/abstract-geometric-white-and-gray-on-light-silver-gradient-background-modern-banner-design-illustration-free-vector.jpg" class="player-background-image">
// <h2 class="player-number">${player.number}</h2>
// <h2 class="player-name">${player.name}</h2>
// <h2 class="player-position">${player.position}</h2>
// <h3 class="player-info">

// <img src="${player.photo}" class="player-picture">
// </h3>
// </div></div>


        

  
//     `;

//                     playersSection.insertAdjacentHTML(
//                       "beforeend",
//                       playerInfoHtml
//                     );

//                     //
//                   })
//                   HideSpinner()
//                   if(spiner.classList.add('show')) {
//                     location.reload()
//                   }
//               });
           
//           })) .catch((err) => console.error(err));
//       });
//   }
// }); 



// ///////////////////////////////////////////////

// // fetch('https://football98.p.rapidapi.com/premierleague/news', newsSettings)
// // .then(response => response.json())
// // .then(response => console.log(response))
// // .catch(err => console.error(err));

// const acc_btns = document.querySelectorAll(".accordion-header");
// const acc_contents = document.querySelectorAll(".accordion-body");

// acc_btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     acc_contents.forEach((acc) => {
//       if (
//         e.target.nextElementSibling !== acc &&
//         acc.classList.contains("active")
//       ) {
//         acc.classList.remove("active");
//         acc_btns.forEach((btn) => btn.classList.remove("active"));
//       }
//     });

//     const panel = btn.nextElementSibling;
//     panel.classList.toggle("active");
//     btn.classList.toggle("active");
//   });
// });

// window.onclick = (e) => {
//   if (!e.target.matches(".accordion-header")) {
//     acc_btns.forEach((btn) => btn.classList.remove("active"));
//     acc_contents.forEach((acc) => acc.classList.remove("active"));
//   }
// };

// let sidebar = document.querySelector(".sidebar");
// let closeBtn = document.querySelector("#btn");
// let searchBtn = document.querySelector(".bx-search");

// closeBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("open");
//   menuBtnChange(); //calling the function(optional)
// });

// searchBtn.addEventListener("click", () => {
//   // Sidebar open when you click on the search iocn
//   sidebar.classList.toggle("open");
//   menuBtnChange(); //calling the function(optional)
// });

// // following are the code to change sidebar button(optional)
// function menuBtnChange() {
//   if (sidebar.classList.contains("open")) {
//     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
//   } else {
//     closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
//   }
// }










// {/* <input id="heart" type="checkbox" />
// <label for="heart">❤</label> */}






// const text = document.querySelector(".Text");
// const stats = document.querySelector(".stats");
// const news = document.querySelector(".Results2");
// const results = document.querySelector(".fixtures");
// const topScorersSection = document.querySelector(".top-scorers-standings");
// const Leagues = document.querySelectorAll("h6");
// const searchInputs = document.querySelector("#userInput");
// const leaguestandings = document.querySelector(".league-standings");
// const playerCard = document.querySelector('.swiper-wrapper')
// const prem = document.querySelector('.Prem')
// const mls = document.querySelector('.mls')
// const liga = document.querySelector('.la-liga')
// const bundesliga = document.querySelector('.bundesliga')
// const navStandings = document.querySelector('.nav-standings')
// const navUpcomingFixtures = document.querySelector('.nav-Upcoming-Fixtures')
// const RecentFxtures = document.querySelector('.league-standings-recent-fixtures')
// const navRecentFixtures = document.querySelector('.nav-Recent-Fixtures')
// const spiner = document.querySelector('.lds-hourglass')
// const savedGamesSection = document.querySelector('.saved-Games')
// const savedGamesBTN = document.querySelector('.saved-games')

// let league = ''
// searchInputs.addEventListener('click', function(){
//   location.href = "searchViewPage.html";
// })

// // Catch User Text In Search Bar //
// document.querySelector("#userInput").addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     searchvalue = searchInputs.value;
//     location.href = "searchViewPage.html";
//   }
// });
// document.querySelector('#log_out').addEventListener('click', function() {
//   location.href = "LogInPage.html"; 
// })
// const data = null;

// // API Settings //
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
//     "X-RapidAPI-Host": "football98.p.rapidapi.com",
//   },
// };

// const StatsSettings = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
//     "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//   },
// };
// let matchday = ''
// let leagueSelected = ''
// document.addEventListener('click', function(e){
// if(e.target == prem) {
//   leagueSelected = 'premierleague'
//   matchday = '37'

// } if(e.target == liga) {
//   leagueSelected = 'laliga'
//   matchday = '37'
// } if(e.target == bundesliga) {
//   leagueSelected = 'bundesliga'
//   matchday = '34'
// } if(e.target == mls) {
//   leagueSelected = 'majorleaguesoccer'
//   matchday = '14'
// }
// })


 
// function resetAllData() {
//   playerCard.innerHTML = ''
//   topScorersSection.innerHTML = ''
//   leaguestandings.innerHTML = ''
// }
// function resetStandingsData() {
//   leaguestandings.innerHTML = ''
// }
// function HideFixInfo() {
//   document.querySelector(".fixtures-info").style.opacity = 0;
// }

// function ShowFixInfo() {
//   document.querySelector(".fixtures-info").style.opacity = 1;
// }
// function HideRecentFixInfo() {
//   document.querySelector(".recent-fixtures-info").style.opacity = 0;
// }
// function ShowRecentFixInfo() {
//   document.querySelector(".recent-fixtures-info").style.opacity = 1;
// }
// function HideUpcomingFixInfo() {
//   document.querySelector('.upcoming-fixtures-info').style.opacity = 0
// }

// function ShowUpcomingFixInfo() {
//   document.querySelector('.upcoming-fixtures-info').style.opacity = 1
// }
// function ShowSpinner() {
// spiner.classList.add('show')
// // spiner.style.opacity = 1
// }
// function HideSpinner() {
//   spiner.classList.remove('show')
//   // spiner.style.opacity = 0
// }
 
// function showSavedGames() {
// document.querySelector('.saved-Games').style.display = 'flex'
// }
// function hideSavedGames() {
//   document.querySelector('.saved-Games').style.display = 'none'
// }
// document.querySelectorAll("h6").forEach((leg) =>
//   leg.addEventListener("click", function (e) {
// resetAllData()
// if (e.target == prem) {
//   league = 39
//     } if(e.target == liga) {
//       league = 140
//    } if(e.target == mls) {
//       league = 253
//     }  if(e.target == bundesliga) {
//       league = 78
//     }
    
    

//  fetch(
//       `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${league}&season=2022`,
//       StatsSettings
//     )
//       .then((response) => response.json())

//       .then((data) => {
//         document.querySelector('.Results').style.display = 'flex'
//         hideSavedGames()
//         data.response.slice(0,10).forEach((player) => {
//           const topScorersSliderHTML = `

 
//           <div class="swiper-slide"><img src="images/Capture.white-background.PNG" class="player-card-background"
//             style="width: 100%; height: 240px;">
//             <div class="player-card">
              
//             <img src="${player.player.photo}" class="player-card-image">

//             <h3>10</h3>
//             <h5>${player.statistics[0].games.position}</h5>
//             <img src="${player.statistics[0].league.flag}" class="player-card-flagLogo">
//             <img src="${player.statistics[0].team.logo}" class="player-card-teamLogo">
//             <!-- <img src="${player.statistics[0].league.flag}" class="player-card-flagLogo">
//             <img src="${player.statistics[0].team.logo}" class="player-card-teamLogo"> -->
//           </div>
//           <h2 style="text-align: center;">${player.player.name}</h2>
//           <div class="container2">
            
//             <div class="section">
             
//               <h2 style="font-size: 22px;margin-left: 33px;">Goals:<span style="position: absolute;left:140px;">${player.statistics[0].goals.total}</span></h2>
//             <h2 style="font-size: 22px;margin-left: 33px;">Assists:<span style="position: absolute;left:140px;">${player.statistics[0].goals.assists}</span></h2>
//             <h2 style="font-size: 22px;margin-left: 33px;">Rating:<span style="position: absolute;left:140px;">${player.statistics[0].games.rating.slice(0,3)}</span></h2>
//             </div>
//             <div class="section">
//             <h2 style="font-size: 22px;margin-left: 33px;">Shots: <span style="position: absolute;left:340px;">${player.statistics[0].shots.total}</span></h2>
//               <h2 style="font-size: 22px;margin-left: 33px;">Apps:<span style="position: absolute;left:340px;">${player.statistics[0].games.appearences}</span></h2>
//             <h2 style="font-size: 22px;margin-left: 33px;">Cards:<span style="position: absolute;left:340px;">${player.statistics[0].cards.yellow}</span></h2>

//             </div>
//           </div>
           
          
//           </div>
// </div>


      
//       `;
//           playerCard.insertAdjacentHTML("beforeend", topScorersSliderHTML);

//           const topScorersHTML = `
//           <li class ="scorersList">
//           <div class="goal-standings">
            
//           <h2 style="color:white">${player.player.name}</h2>
//           <img src="${player.statistics[0].team.logo}" class="Goal-standings-team-logo">
//           <p class="goal-standings-team">${player.statistics[0].team.name}</p>
//           <img src="${player.statistics[0].league.flag}" class="Goal-standings-country-logo">
//           <p class="goal-standings-country">${player.player.nationality}</p>
//           <p class="goal-standings-goals">${player.statistics[0].goals.total}</p>
   
//         </div>
//         </li>
//         <hr class="goal-standings-line">
//           `
//           topScorersSection.insertAdjacentHTML('beforeend',topScorersHTML)  
          
//         });
   
//       })
      
  

//   navStandings.addEventListener('click', function() {
//     ShowSpinner()
//     HideUpcomingFixInfo()
//     HideRecentFixInfo()
// ShowFixInfo()
// resetStandingsData()

//     fetch(
//       `https://football98.p.rapidapi.com/${leagueSelected}/table`,
//       options
//     )
//       .then((response) => response.json())

//       .then((data) => {
//         HideSpinner()
//         const yo = data.forEach((team) => {
         
//           ///// Solution to finding index of arr
      
//           const markup = ` 
  
//   <li class="Standings-list">
//   <div class ="Li-styling">
  
// <input id="star" type="checkbox" title="bookmark page"/>
//    <img src="${team.SquadLogo}"><p class="standings-list-team-name">${team.Name}</p></a>
  
//   <div class="aligned">
//   <p class="games-played">${team.Played}</p>
//   <p class="games-Winned">${team.Winned}</p>
//   <p class="games-Tie">${team.Tie}</p>
//   <p class="games-Loosed">${team.Loosed}</p>
//   <p class="games-Gd">${team["Goal Difference"]}</p>
//   <p class="games-Points">${team.Points}</p>
// </div>

// </li>
// <hr>
//   `;
 
    
//           leaguestandings.insertAdjacentHTML("beforeend", markup);
          
//         }) 
//      }).catch((err) => console.error(err));

//   })  

// })) 


  



  
 

// const savedGames = [];


// navUpcomingFixtures.addEventListener('click', function() {
//   ShowSpinner()
//   HideFixInfo()
//   HideRecentFixInfo()
//   ShowUpcomingFixInfo()
//   resetStandingsData()
//   document.querySelector(".fixtures-info").style.opacity = 0;

//   fetch(`https://football98.p.rapidapi.com/${leagueSelected}/fixtures`, options)
//     .then((response) => response.json())
//     .then((data) => {
//       data[0][` Matchday ${matchday} `].forEach((fix) => {
//         const upcomingFixturesHTML = `
//           <div class="selected-game" data-home-team="${fix.homeTeam}" data-away-team="${fix.awayTeam}" data-match-day="${fix.MatchDay}" data-home-logo="${fix.homeLogo}" data-away-logo="${fix.awayLogo}">
//             <img src="${fix.awayLogo}" class="fixtures-home-logo">
//             <h3 class="fixtures-home">${fix.awayTeam}</h3>
//             <div class="square"><p>${fix.MatchDay}</p></div>
//             <img src="${fix.homeLogo}" class="fixtures-away-logo">
//             <h3 class="fixtures-away">${fix.homeTeam}</h3>
//             <input type="checkbox" class="save2" ${isGameSaved(fix) ? 'checked' : ''}>
//             <!-- add save button here -->
//             <hr>
//           </div>
//         `;
//         leaguestandings.insertAdjacentHTML('beforeend', upcomingFixturesHTML);
        
//       });

//       // add event listener to save button
//       function saveGame(game) {
//         const savedGameIndex = savedGames.findIndex(savedGame => (
//           savedGame.homeTeam === game.homeTeam &&
//           savedGame.awayTeam === game.awayTeam &&
//           savedGame.matchDay === game.matchDay &&
//           savedGame.homeLogo === game.homeLogo &&
//           savedGame.awayLogo === game.awayLogo
//         ));
      
//         if (game.checked && savedGameIndex === -1) {
//           savedGames.push(game);
//         } else if (!game.checked && savedGameIndex !== -1) {
//           savedGames.splice(savedGameIndex, 1);
//         } else {
//           savedGames[savedGameIndex].checked = game.checked;
//         }
      
//         localStorage.setItem('savedGames', JSON.stringify(savedGames));
//       }
//       function isGameSaved(game) {
//         const savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];
//         const savedGame = savedGames.find(savedGame => (
//           savedGame.homeTeam === game.homeTeam &&
//           savedGame.awayTeam === game.awayTeam &&
//           savedGame.matchDay === game.MatchDay &&
//           savedGame.homeLogo === game.homeLogo &&
//           savedGame.awayLogo === game.awayLogo
//         ));

//         return savedGame ? savedGame.checked : false;
//       }

//       const saveButtons = document.querySelectorAll('.save2');
     
//       saveButtons.forEach(function(saveButton) {
//         saveButton.addEventListener('change', function() {
//           const selectedGame = this.parentNode;
//           if (selectedGame) {
//             const gameData = selectedGame.dataset;
//             const game = {
//               homeTeam: gameData.homeTeam,
//               awayTeam: gameData.awayTeam,
//               matchDay: gameData.matchDay,
//               homeLogo: gameData.homeLogo,
//               awayLogo: gameData.awayLogo,
//               checked: this.checked
//             };
//             saveGame(game);
//             console.log(game);
//             console.log(savedGames);
//           }
//         });
//       });

//       HideSpinner();
//     });
// });


// navRecentFixtures.addEventListener('click', function() {
//   ShowSpinner()
// HideFixInfo()
// HideUpcomingFixInfo()
// ShowRecentFixInfo()
//   resetStandingsData()
  

//       fetch(
//         `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${league}&season=2022&from=2023-04-10&to=2023-04-28`,
//        StatsSettings
//       ).then((response) => response.json())

//     .then((data) => {
//       console.log(savedGames);
//       HideSpinner()
//       data.response.forEach((recentFixture) => {
//         const recentFixturesHTML = `


//  <div class="recent-Fixture">
//  <h2 class="recent-fixtures-home">${recentFixture.teams.home.name}</h2>
//  <img src="${recentFixture.teams.home.logo}" class="recent-fixtures-home-img">
//  <div class="recent-fixtures-scoreboard"><p style="margin-left: 11px;">${recentFixture.goals.home}</p><div class="vertical-line"></div> 
//  <p class="goals-away">${recentFixture.goals.away}</p></div>
//  <img src="${recentFixture.teams.away.logo}" class="recent-fixtures-away-img">
//  <h2 class="recent-fixtures-away">${recentFixture.teams.away.name}</h2>
//    <img src="images/oval-football-stadium-black-icon-vector-7508978-removebg-preview.png" class="recent-fixtures-venue-icon">
//  <h5 class="recent-fixtures-venue">${recentFixture.fixture.venue.name},  ${recentFixture.fixture.venue.city}</h5>
//  <img src="${recentFixture.league.logo}" class="recent-fixtures-league-img">
//  <hr>
// </div>

//         `
//         leaguestandings.insertAdjacentHTML('beforeend',recentFixturesHTML)
      
//       })
//     })
//   })
//   const storedGames = JSON.parse(localStorage.getItem('savedGames'))
//   savedGamesBTN.addEventListener('click', function() {
//     document.querySelector('.Results').style.display = 'none';
//     showSavedGames();
//     resetStandingsData();
//     savedGamesSection.innerHTML = '';
//     storedGames.forEach((saved) => {
//       const savedUpcomingGamesHTML = `
//         <div class="selected-game" style="color:white" data-home-team="${saved.homeTeam}" data-away-team="${saved.awayTeam}"
//           data-match-day="${saved.matchDay}" data-home-logo="${saved.homeLogo}" data-away-logo="${saved.awayLogo}">
//           <img src="${saved.awayLogo}" class="fixtures-home-logo">
//           <h3 class="fixtures-home">${saved.awayTeam}</h3>
//           <div class="square"><p>${saved.matchDay}</p></div>
//           <img src="${saved.homeLogo}" class="fixtures-away-logo">
//           <h3 class="fixtures-away">${saved.homeTeam}</h3>
//           <hr style="margin-top:20px;">
//         </div>
//       `;
//       savedGamesSection.insertAdjacentHTML('beforeend', savedUpcomingGamesHTML);
//     });
//   });
  
//   window.onload = function() {
//     const storedGames = JSON.parse(localStorage.getItem('savedGames'));
//     if (storedGames) {
//       savedGames.push(...storedGames);
//     }
//   };
// console.log(storedGames);
// // Side-Bar Navigation Script //
// const acc_btns = document.querySelectorAll(".accordion-header");
// const acc_contents = document.querySelectorAll(".accordion-body");

// acc_btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     acc_contents.forEach((acc) => {
//       if (
//         e.target.nextElementSibling !== acc &&
//         acc.classList.contains("active")
//       ) {
//         acc.classList.remove("active");
//         acc_btns.forEach((btn) => btn.classList.remove("active"));
//       }
//     });

//     const panel = btn.nextElementSibling;
//     panel.classList.toggle("active");
//     btn.classList.toggle("active");
//   });
// });

// window.onclick = (e) => {
//   if (!e.target.matches(".accordion-header")) {
//     acc_btns.forEach((btn) => btn.classList.remove("active"));
//     acc_contents.forEach((acc) => acc.classList.remove("active"));
//   }
// };

// let sidebar = document.querySelector(".sidebar");
// let closeBtn = document.querySelector("#btn");
// let searchBtn = document.querySelector(".bx-search");

// closeBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("open");
//   menuBtnChange(); //calling the function(optional)
// });

// searchBtn.addEventListener("click", () => {
//   // Sidebar open when you click on the search iocn
//   sidebar.classList.toggle("open");
//   menuBtnChange(); //calling the function(optional)
// });

// // following are the code to change sidebar button(optional)
// function menuBtnChange() {
//   if (sidebar.classList.contains("open")) {
//     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
//   } else {
//     closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
//    }
// }





















// const text = document.querySelector(".Text");
// const stats = document.querySelector(".stats");
// const news = document.querySelector(".Results2");
// const results = document.querySelector(".fixtures");
// const topScorersSection = document.querySelector(".top-scorers-standings");
// const Leagues = document.querySelectorAll("h6");
// const searchInputs = document.querySelector("#userInput");
// const leaguestandings = document.querySelector(".league-standings");
// const playerCard = document.querySelector('.swiper-wrapper')
// const prem = document.querySelector('.Prem')
// const mls = document.querySelector('.mls')
// const liga = document.querySelector('.la-liga')
// const bundesliga = document.querySelector('.bundesliga')
// const navStandings = document.querySelector('.nav-standings')
// const navUpcomingFixtures = document.querySelector('.nav-Upcoming-Fixtures')
// const RecentFxtures = document.querySelector('.league-standings-recent-fixtures')
// const navRecentFixtures = document.querySelector('.nav-Recent-Fixtures')
// const spiner = document.querySelector('.lds-hourglass')
// const savedGamesSection = document.querySelector('.saved-Games')
// const savedGamesBTN = document.querySelector('.saved-games')

// let league = ''
// searchInputs.addEventListener('click', function(){
//   location.href = "searchViewPage.html";
// })

// // Catch User Text In Search Bar //
// document.querySelector("#userInput").addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     searchvalue = searchInputs.value;
//     location.href = "searchViewPage.html";
//   }
// });
// document.querySelector('#log_out').addEventListener('click', function() {
//   location.href = "LogInPage.html"; 
// })
// const data = null;

// // API Settings //
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
//     "X-RapidAPI-Host": "football98.p.rapidapi.com",
//   },
// };

// const StatsSettings = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
//     "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//   },
// };
// let matchday = ''
// let leagueSelected = ''
// document.addEventListener('click', function(e){
// if(e.target == prem) {
//   leagueSelected = 'premierleague'
//   matchday = '37'

// } if(e.target == liga) {
//   leagueSelected = 'laliga'
//   matchday = '37'
// } if(e.target == bundesliga) {
//   leagueSelected = 'bundesliga'
//   matchday = '34'
// } if(e.target == mls) {
//   leagueSelected = 'majorleaguesoccer'
//   matchday = '14'
// }
// })


 
// function resetAllData() {
//   playerCard.innerHTML = ''
//   topScorersSection.innerHTML = ''
//   leaguestandings.innerHTML = ''
// }
// function resetStandingsData() {
//   leaguestandings.innerHTML = ''
// }
// function HideFixInfo() {
//   document.querySelector(".fixtures-info").style.opacity = 0;
// }

// function ShowFixInfo() {
//   document.querySelector(".fixtures-info").style.opacity = 1;
// }
// function HideRecentFixInfo() {
//   document.querySelector(".recent-fixtures-info").style.opacity = 0;
// }
// function ShowRecentFixInfo() {
//   document.querySelector(".recent-fixtures-info").style.opacity = 1;
// }
// function HideUpcomingFixInfo() {
//   document.querySelector('.upcoming-fixtures-info').style.opacity = 0
// }

// function ShowUpcomingFixInfo() {
//   document.querySelector('.upcoming-fixtures-info').style.opacity = 1
// }
// function ShowSpinner() {
// spiner.classList.add('show')
// // spiner.style.opacity = 1
// }
// function HideSpinner() {
//   spiner.classList.remove('show')
//   // spiner.style.opacity = 0
// }
 
// function showSavedGames() {
// document.querySelector('.saved-Games').style.display = 'flex'
// }
// function hideSavedGames() {
//   document.querySelector('.saved-Games').style.display = 'none'
// }
// document.querySelectorAll("h6").forEach((leg) =>
//   leg.addEventListener("click", function (e) {
// resetAllData()
// if (e.target == prem) {
//   league = 39
//     } if(e.target == liga) {
//       league = 140
//    } if(e.target == mls) {
//       league = 253
//     }  if(e.target == bundesliga) {
//       league = 78
//     }
    
    

//  fetch(
//       `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${league}&season=2022`,
//       StatsSettings
//     )
//       .then((response) => response.json())

//       .then((data) => {
//         document.querySelector('.Results').style.display = 'flex'
//         hideSavedGames()
//         data.response.slice(0,10).forEach((player) => {
//           const topScorersSliderHTML = `

 
//           <div class="swiper-slide"><img src="images/Capture.white-background.PNG" class="player-card-background"
//             style="width: 100%; height: 240px;">
//             <div class="player-card">
              
//             <img src="${player.player.photo}" class="player-card-image">

//             <h3>10</h3>
//             <h5>${player.statistics[0].games.position}</h5>
//             <img src="${player.statistics[0].league.flag}" class="player-card-flagLogo">
//             <img src="${player.statistics[0].team.logo}" class="player-card-teamLogo">
//             <!-- <img src="${player.statistics[0].league.flag}" class="player-card-flagLogo">
//             <img src="${player.statistics[0].team.logo}" class="player-card-teamLogo"> -->
//           </div>
//           <h2 style="text-align: center;">${player.player.name}</h2>
//           <div class="container2">
            
//             <div class="section">
             
//               <h2 style="font-size: 22px;margin-left: 33px;">Goals:<span style="position: absolute;left:140px;">${player.statistics[0].goals.total}</span></h2>
//             <h2 style="font-size: 22px;margin-left: 33px;">Assists:<span style="position: absolute;left:140px;">${player.statistics[0].goals.assists}</span></h2>
//             <h2 style="font-size: 22px;margin-left: 33px;">Rating:<span style="position: absolute;left:140px;">${player.statistics[0].games.rating.slice(0,3)}</span></h2>
//             </div>
//             <div class="section">
//             <h2 style="font-size: 22px;margin-left: 33px;">Shots: <span style="position: absolute;left:340px;">${player.statistics[0].shots.total}</span></h2>
//               <h2 style="font-size: 22px;margin-left: 33px;">Apps:<span style="position: absolute;left:340px;">${player.statistics[0].games.appearences}</span></h2>
//             <h2 style="font-size: 22px;margin-left: 33px;">Cards:<span style="position: absolute;left:340px;">${player.statistics[0].cards.yellow}</span></h2>

//             </div>
//           </div>
           
          
//           </div>
// </div>


      
//       `;
//           playerCard.insertAdjacentHTML("beforeend", topScorersSliderHTML);

//           const topScorersHTML = `
//           <li class ="scorersList">
//           <div class="goal-standings">
            
//           <h2 style="color:white">${player.player.name}</h2>
//           <img src="${player.statistics[0].team.logo}" class="Goal-standings-team-logo">
//           <p class="goal-standings-team">${player.statistics[0].team.name}</p>
//           <img src="${player.statistics[0].league.flag}" class="Goal-standings-country-logo">
//           <p class="goal-standings-country">${player.player.nationality}</p>
//           <p class="goal-standings-goals">${player.statistics[0].goals.total}</p>
   
//         </div>
//         </li>
//         <hr class="goal-standings-line">
//           `
//           topScorersSection.insertAdjacentHTML('beforeend',topScorersHTML)  
          
//         });
   
//       })
      
  

//   navStandings.addEventListener('click', function() {
//     ShowSpinner()
//     HideUpcomingFixInfo()
//     HideRecentFixInfo()
// ShowFixInfo()
// resetStandingsData()

//     fetch(
//       `https://football98.p.rapidapi.com/${leagueSelected}/table`,
//       options
//     )
//       .then((response) => response.json())

//       .then((data) => {
//         HideSpinner()
//         const yo = data.forEach((team) => {
         
//           ///// Solution to finding index of arr
      
//           const markup = ` 
  
//   <li class="Standings-list">
//   <div class ="Li-styling">
  
// <input id="star" type="checkbox" title="bookmark page"/>
//    <img src="${team.SquadLogo}"><p class="standings-list-team-name">${team.Name}</p></a>
  
//   <div class="aligned">
//   <p class="games-played">${team.Played}</p>
//   <p class="games-Winned">${team.Winned}</p>
//   <p class="games-Tie">${team.Tie}</p>
//   <p class="games-Loosed">${team.Loosed}</p>
//   <p class="games-Gd">${team["Goal Difference"]}</p>
//   <p class="games-Points">${team.Points}</p>
// </div>

// </li>
// <hr>
//   `;
 
    
//           leaguestandings.insertAdjacentHTML("beforeend", markup);
          
//         }) 
//      }).catch((err) => console.error(err));

//   })  

// })) 


  



  
 

// const savedGames = [];


// navUpcomingFixtures.addEventListener('click', function() {
//   ShowSpinner()
//   HideFixInfo()
//   HideRecentFixInfo()
//   ShowUpcomingFixInfo()
//   resetStandingsData()
//   document.querySelector(".fixtures-info").style.opacity = 0;

//   fetch(`https://football98.p.rapidapi.com/${leagueSelected}/fixtures`, options)
//     .then((response) => response.json())
//     .then((data) => {
//       data[0][` Matchday ${matchday} `].forEach((fix) => {
//         const upcomingFixturesHTML = `
//           <div class="selected-game" data-home-team="${fix.homeTeam}" data-away-team="${fix.awayTeam}" data-match-day="${fix.MatchDay}" data-home-logo="${fix.homeLogo}" data-away-logo="${fix.awayLogo}">
//             <img src="${fix.awayLogo}" class="fixtures-home-logo">
//             <h3 class="fixtures-home">${fix.awayTeam}</h3>
//             <div class="square"><p>${fix.MatchDay}</p></div>
//             <img src="${fix.homeLogo}" class="fixtures-away-logo">
//             <h3 class="fixtures-away">${fix.homeTeam}</h3>
//             <input type="checkbox" class="save2" ${isGameSaved(fix) ? 'checked' : ''}>
//             <!-- add save button here -->
//             <hr>
//           </div>
//         `;
//         leaguestandings.insertAdjacentHTML('beforeend', upcomingFixturesHTML);
        
//       });

//       // add event listener to save button
//       function saveGame(game) {
//         const savedGameIndex = savedGames.findIndex(savedGame => (
//           savedGame.homeTeam === game.homeTeam &&
//           savedGame.awayTeam === game.awayTeam &&
//           savedGame.matchDay === game.matchDay &&
//           savedGame.homeLogo === game.homeLogo &&
//           savedGame.awayLogo === game.awayLogo
//         ));
      
//         if (game.checked && savedGameIndex === -1) {
//           savedGames.push(game);
//         } else if (!game.checked && savedGameIndex !== -1) {
//           savedGames.splice(savedGameIndex, 1);
//         } else {
//           savedGames[savedGameIndex].checked = game.checked;
//         }
      
//         localStorage.setItem('savedGames', JSON.stringify(savedGames));
//       }
//       function isGameSaved(game) {
//         const savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];
//         const savedGame = savedGames.find(savedGame => (
//           savedGame.homeTeam === game.homeTeam &&
//           savedGame.awayTeam === game.awayTeam &&
//           savedGame.matchDay === game.MatchDay &&
//           savedGame.homeLogo === game.homeLogo &&
//           savedGame.awayLogo === game.awayLogo
//         ));

//         return savedGame ? savedGame.checked : false;
//       }

//       const saveButtons = document.querySelectorAll('.save2');
     
//       saveButtons.forEach(function(saveButton) {
//         saveButton.addEventListener('change', function() {
//           const selectedGame = this.parentNode;
//           if (selectedGame) {
//             const gameData = selectedGame.dataset;
//             const game = {
//               homeTeam: gameData.homeTeam,
//               awayTeam: gameData.awayTeam,
//               matchDay: gameData.matchDay,
//               homeLogo: gameData.homeLogo,
//               awayLogo: gameData.awayLogo,
//               checked: this.checked
//             };
//             saveGame(game);
//             console.log(game);
//             console.log(savedGames);
//           }
//         });
//       });

//       HideSpinner();
//     });
// });


// navRecentFixtures.addEventListener('click', function() {
//   ShowSpinner()
// HideFixInfo()
// HideUpcomingFixInfo()
// ShowRecentFixInfo()
//   resetStandingsData()
  

//       fetch(
//         `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${league}&season=2022&from=2023-04-10&to=2023-04-28`,
//        StatsSettings
//       ).then((response) => response.json())

//     .then((data) => {
//       console.log(savedGames);
//       HideSpinner()
//       data.response.forEach((recentFixture) => {
//         const recentFixturesHTML = `


//  <div class="recent-Fixture">
//  <h2 class="recent-fixtures-home">${recentFixture.teams.home.name}</h2>
//  <img src="${recentFixture.teams.home.logo}" class="recent-fixtures-home-img">
//  <div class="recent-fixtures-scoreboard"><p style="margin-left: 11px;">${recentFixture.goals.home}</p><div class="vertical-line"></div> 
//  <p class="goals-away">${recentFixture.goals.away}</p></div>
//  <img src="${recentFixture.teams.away.logo}" class="recent-fixtures-away-img">
//  <h2 class="recent-fixtures-away">${recentFixture.teams.away.name}</h2>
//    <img src="images/oval-football-stadium-black-icon-vector-7508978-removebg-preview.png" class="recent-fixtures-venue-icon">
//  <h5 class="recent-fixtures-venue">${recentFixture.fixture.venue.name},  ${recentFixture.fixture.venue.city}</h5>
//  <img src="${recentFixture.league.logo}" class="recent-fixtures-league-img">
//  <hr>
// </div>

//         `
//         leaguestandings.insertAdjacentHTML('beforeend',recentFixturesHTML)
      
//       })
//     })
//   })
//   const storedGames = JSON.parse(localStorage.getItem('savedGames'))
//   savedGamesBTN.addEventListener('click', function() {
//     document.querySelector('.Results').style.display = 'none';
//     showSavedGames();
//     resetStandingsData();
//     savedGamesSection.innerHTML = '';
//     storedGames.forEach((saved) => {
//       const savedUpcomingGamesHTML = `
//         <div class="selected-game" style="color:white" data-home-team="${saved.homeTeam}" data-away-team="${saved.awayTeam}"
//           data-match-day="${saved.matchDay}" data-home-logo="${saved.homeLogo}" data-away-logo="${saved.awayLogo}">
//           <img src="${saved.awayLogo}" class="fixtures-home-logo">
//           <h3 class="fixtures-home">${saved.awayTeam}</h3>
//           <div class="square"><p>${saved.matchDay}</p></div>
//           <img src="${saved.homeLogo}" class="fixtures-away-logo">
//           <h3 class="fixtures-away">${saved.homeTeam}</h3>
//           <hr style="margin-top:20px;">
//         </div>
//       `;
//       savedGamesSection.insertAdjacentHTML('beforeend', savedUpcomingGamesHTML);
//     });
//   });
  
//   window.onload = function() {
//     const storedGames = JSON.parse(localStorage.getItem('savedGames'));
//     if (storedGames) {
//       savedGames.push(...storedGames);
//     }
//   };
// console.log(storedGames);
// // Side-Bar Navigation Script //
// const acc_btns = document.querySelectorAll(".accordion-header");
// const acc_contents = document.querySelectorAll(".accordion-body");

// acc_btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     acc_contents.forEach((acc) => {
//       if (
//         e.target.nextElementSibling !== acc &&
//         acc.classList.contains("active")
//       ) {
//         acc.classList.remove("active");
//         acc_btns.forEach((btn) => btn.classList.remove("active"));
//       }
//     });

//     const panel = btn.nextElementSibling;
//     panel.classList.toggle("active");
//     btn.classList.toggle("active");
//   });
// });

// window.onclick = (e) => {
//   if (!e.target.matches(".accordion-header")) {
//     acc_btns.forEach((btn) => btn.classList.remove("active"));
//     acc_contents.forEach((acc) => acc.classList.remove("active"));
//   }
// };

// let sidebar = document.querySelector(".sidebar");
// let closeBtn = document.querySelector("#btn");
// let searchBtn = document.querySelector(".bx-search");

// closeBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("open");
//   menuBtnChange(); //calling the function(optional)
// });

// searchBtn.addEventListener("click", () => {
//   // Sidebar open when you click on the search iocn
//   sidebar.classList.toggle("open");
//   menuBtnChange(); //calling the function(optional)
// });

// // following are the code to change sidebar button(optional)
// function menuBtnChange() {
//   if (sidebar.classList.contains("open")) {
//     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
//   } else {
//     closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
//    }
// }



//..... Just in case Gpt does not work


// navUpcomingFixtures.addEventListener('click', function() {
//   ShowSpinner()
//   HideFixInfo()
//   HideRecentFixInfo()
//   ShowUpcomingFixInfo()
//   resetStandingsData()
//   document.querySelector(".fixtures-info").style.opacity = 0;

//   fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2022`, StatsSettings)
//     .then((response) => response.json())
//     // .then((response) => console.log(response.response.slice(-13)))
//     .then((data) => {

      


//       data.response.slice(-13).forEach((fix) => {

//         const dateString = fix.fixture.date;
//         const dateObject = new Date(dateString);
        
//         const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
//         const formattedDate = dateObject.toLocaleDateString('en-US', options);
        


//         const upcomingFixturesHTML = `
//           <div class="selected-game" data-home-team="${fix.teams.home.name}" data-away-team="${fix.teams.away.name}" data-match-day="${formattedDate}" data-home-logo="${fix.teams.home.logo}" data-away-logo="${fix.teams.away.logo}">
//             <img src="${fix.teams.home.logo}" class="fixtures-home-logo">
//             <h3 class="fixtures-home">${fix.teams.home.name}</h3>
//             <div class="square"><p>${formattedDate}</p></div>
//             <img src="${fix.teams.away.logo}" class="fixtures-away-logo">
//             <h3 class="fixtures-away">${fix.teams.away.name}</h3>
//             <input type="checkbox" class="save2" ${isGameSaved(fix) ? 'checked' : ''}>
//             <!-- add save button here -->
//             <hr>
//           </div>
//         `;
//         leaguestandings.insertAdjacentHTML('beforeend', upcomingFixturesHTML);
        
//       });

//       // add event listener to save button
//       function saveGame(game) {
//         const savedGameIndex = savedGames.findIndex(savedGame => (
//           savedGame.homeTeam === game.homeTeam &&
//           savedGame.awayTeam === game.awayTeam &&
//           savedGame.matchDay === game.matchDay &&
//           savedGame.homeLogo === game.homeLogo &&
//           savedGame.awayLogo === game.awayLogo
//         ));
      
//         if (game.checked && savedGameIndex === -1) {
//           savedGames.push(game);
//         } else if (!game.checked && savedGameIndex !== -1) {
//           savedGames.splice(savedGameIndex, 1);
//         } else {
//           savedGames[savedGameIndex].checked = game.checked;
//         }
      
//         localStorage.setItem('savedGames', JSON.stringify(savedGames));
//       }
//       function isGameSaved(game) {
//         const savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];
//         const savedGame = savedGames.find(savedGame => (
//           savedGame.homeTeam === game.homeTeam &&
//           savedGame.awayTeam === game.awayTeam &&
//           savedGame.matchDay === game.MatchDay &&
//           savedGame.homeLogo === game.homeLogo &&
//           savedGame.awayLogo === game.awayLogo
//         ));

//         return savedGame ? savedGame.checked : false;
//       }

//       const saveButtons = document.querySelectorAll('.save2');
     
//       saveButtons.forEach(function(saveButton) {
//         saveButton.addEventListener('change', function() {
//           const selectedGame = this.parentNode;
//           if (selectedGame) {
//             const gameData = selectedGame.dataset;
//             const game = {
//               homeTeam: gameData.homeTeam,
//               awayTeam: gameData.awayTeam,
//               matchDay: gameData.matchDay,
//               homeLogo: gameData.homeLogo,
//               awayLogo: gameData.awayLogo,
//               checked: this.checked
//             };
//             saveGame(game);
//             console.log(game);
//             console.log(savedGames);
//           }
//         });
//       });

//       HideSpinner();
//     });
// });