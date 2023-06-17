  // import Swiper JS
 
  // import Swiper styles





const text = document.querySelector(".Text");
const stats = document.querySelector(".stats");
const news = document.querySelector(".Results2");
const results = document.querySelector(".fixtures");
const topScorersSection = document.querySelector(".top-scorers-standings");
const Leagues = document.querySelectorAll("h6");
const searchInputs = document.querySelector("#userInput");
const leaguestandings = document.querySelector(".league-standings");
const playerCard = document.querySelector('.swiper-wrapper')
const prem = document.querySelector('.Prem')
const mls = document.querySelector('.mls')
const liga = document.querySelector('.la-liga')
const bundesliga = document.querySelector('.bundesliga')
const navStandings = document.querySelector('.nav-standings')
const navUpcomingFixtures = document.querySelector('.nav-Upcoming-Fixtures')
const RecentFxtures = document.querySelector('.league-standings-recent-fixtures')
const navRecentFixtures = document.querySelector('.nav-Recent-Fixtures')
const spiner = document.querySelector('.lds-hourglass')
const savedGamesSection = document.querySelector('.saved-Games')
const savedGamesBTN = document.querySelector('.saved-games')
document.body.style.zoom="67%"
let league = ''
searchInputs.addEventListener('click', function(){
  location.href = "searchViewPage.html";
})

// Catch User Text In Search Bar //
document.querySelector("#userInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchvalue = searchInputs.value;
    location.href = "searchViewPage.html";
  }
});
document.querySelector('#log_out').addEventListener('click', function() {
  location.href = "index.html"; 
})
const data = null;

// API Settings //
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
    "X-RapidAPI-Host": "football98.p.rapidapi.com",
  },
};

const StatsSettings = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};
let matchday = ''
let leagueSelected = ''
let season = ''
document.addEventListener('click', function(e){
if(e.target == prem) {
  leagueSelected = 'premierleague'
  matchday = '37'

} if(e.target == liga) {
  leagueSelected = 'laliga'
  matchday = '37'
} if(e.target == bundesliga) {
  leagueSelected = 'bundesliga'
  matchday = '34'
} if(e.target == mls) {
  leagueSelected = 'majorleaguesoccer'
  matchday = '14'
}
})


 
function resetAllData() {
  playerCard.innerHTML = ''
  topScorersSection.innerHTML = ''
  leaguestandings.innerHTML = ''
}
function resetStandingsData() {
  leaguestandings.innerHTML = ''
}
function HideFixInfo() {
  document.querySelector(".fixtures-info").style.opacity = 0;
}

function ShowFixInfo() {
  document.querySelector(".fixtures-info").style.opacity = 1;
}
function HideRecentFixInfo() {
  document.querySelector(".recent-fixtures-info").style.opacity = 0;
}
function ShowRecentFixInfo() {
  document.querySelector(".recent-fixtures-info").style.opacity = 1;
}
function HideUpcomingFixInfo() {
  document.querySelector('.upcoming-fixtures-info').style.opacity = 0
}

function ShowUpcomingFixInfo() {
  document.querySelector('.upcoming-fixtures-info').style.opacity = 1
}
function ShowSpinner() {
spiner.classList.add('show')
// spiner.style.opacity = 1
}
function HideSpinner() {
  spiner.classList.remove('show')
  // spiner.style.opacity = 0
}
 
function showSavedGames() {
document.querySelector('.saved-Games').style.display = 'flex'
}
function hideSavedGames() {
  document.querySelector('.saved-Games').style.display = 'none'
}
document.querySelectorAll("h6").forEach((leg) =>
  leg.addEventListener("click", function (e) {

resetAllData()
hideSavedGames()
document.querySelector('.container').style.display = 'flex';
if (e.target == prem) {
  league = 39
  season = 2022
    } if(e.target == liga) {
      league = 140
      season = 2022
   } if(e.target == mls) {
      league = 253
      season = 2023
    }  if(e.target == bundesliga) {
      league = 78
      season = 2022
    }
    
    

 fetch(
      `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${league}&season=${season}`,
      StatsSettings
    )
      .then((response) => response.json())
// .then((res) => console.log(res))
      .then((data) => {
        document.querySelector('.Results').style.display = 'flex'
        hideSavedGames()
        data.response.slice(0,10).forEach((player) => {
          const topScorersSliderHTML = `

 
          <div class="swiper-slide"><img src="images/Capture.white-background.PNG" class="player-card-background"
            style="width: 100%; height: 240px;">
            <div class="player-card">
              
            <img src="${player.player.photo}" class="player-card-image">

            <h3>10</h3>
            <h5>${player.statistics[0].games.position}</h5>
            <img src="${player.statistics[0].league.flag}" class="player-card-flagLogo">
            <img src="${player.statistics[0].team.logo}" class="player-card-teamLogo">
            <!-- <img src="${player.statistics[0].league.flag}" class="player-card-flagLogo">
            <img src="${player.statistics[0].team.logo}" class="player-card-teamLogo"> -->
          </div>
          <h2 style="text-align: center;">${player.player.name}</h2>
          <div class="container2">
            
            <div class="section">
             
              <h2 style="font-size: 22px;margin-left: 33px;">Goals:<span style="position: absolute;left:140px;">${player.statistics[0].goals.total}</span></h2>
            <h2 style="font-size: 22px;margin-left: 33px;">Assists:<span style="position: absolute;left:140px;">${player.statistics[0].goals.assists}</span></h2>
            <h2 style="font-size: 22px;margin-left: 33px;">Rating:<span style="position: absolute;left:140px;">${player.statistics[0].games.rating.slice(0,3)}</span></h2>
            </div>
            <div class="section">
            <h2 style="font-size: 22px;margin-left: 33px;">Shots: <span style="position: absolute;left:340px;">${player.statistics[0].shots.total}</span></h2>
              <h2 style="font-size: 22px;margin-left: 33px;">Apps:<span style="position: absolute;left:340px;">${player.statistics[0].games.appearences}</span></h2>
            <h2 style="font-size: 22px;margin-left: 33px;">Cards:<span style="position: absolute;left:340px;">${player.statistics[0].cards.yellow}</span></h2>

            </div>
          </div>
           
          
          </div>
</div>


      
      `;

          playerCard.insertAdjacentHTML("beforeend", topScorersSliderHTML);
          

          const topScorersHTML = `
          <li class ="scorersList">
          <div class="goal-standings">
            
          <h2 style="color:white">${player.player.name}</h2>
          <img src="${player.statistics[0].team.logo}" class="Goal-standings-team-logo">
          <p class="goal-standings-team">${player.statistics[0].team.name}</p>
          <img src="${player.statistics[0].league.flag}" class="Goal-standings-country-logo">
          <p class="goal-standings-country">${player.player.nationality}</p>
          <p class="goal-standings-position">${player.statistics[0].games.position}</p>
          <p class="goal-standings-goals">${player.statistics[0].goals.total}</p>
   
        </div>
        </li>
        <hr class="goal-standings-line">
          `
          topScorersSection.insertAdjacentHTML('beforeend',topScorersHTML)  
          
        });
   
      })
      
  

  navStandings.addEventListener('click', function() {
    ShowSpinner()
    HideUpcomingFixInfo()
    HideRecentFixInfo()
ShowFixInfo()
resetStandingsData()

    fetch(
      `https://api-football-v1.p.rapidapi.com/v3/standings?season=${season}&league=${league}`,
     StatsSettings
    )
      .then((response) => response.json())
// .then((response) => console.log(response.response[0].league.standings[0]))
      .then((data) => {
        HideSpinner()
        const yo = data.response[0].league.standings[0].forEach((team) => {
         
          ///// Solution to finding index of arr
      
          const markup = ` 
  
  <li class="Standings-list">
  <div class ="Li-styling">
  

   <img src="${team.team.logo}"><p class="standings-list-team-name">${team.team.name}</p></a>
  
  <div class="aligned">
  <p class="games-played">${team.all.played}</p>
  <p class="games-Winned">${team.all.win}</p>
  <p class="games-Tie">${team.all.draw}</p>
  <p class="games-Loosed">${team.all.lose}</p>
  <p class="games-Gd">${team.goalsDiff}</p>
  <p class="games-Points">${team.points}</p>
</div>

</li>
<hr>
  `;
 
    
          leaguestandings.insertAdjacentHTML("beforeend", markup);
          
        }) 
     }).catch((err) => console.error(err));

  })  

})) 


  



  
 

// Move savedGames, saveGame, and isGameSaved outside the navUpcomingFixtures click event handler

let savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];

navUpcomingFixtures.addEventListener('click', function() {
  ShowSpinner();
  HideFixInfo();
  HideRecentFixInfo();
  ShowUpcomingFixInfo();
  resetStandingsData();
  document.querySelector(".fixtures-info").style.opacity = 0;

  fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${league}&season=${season}`, StatsSettings)
    .then((response) => response.json())
    // .then((res) => console.log(res))
    .then((data) => {
      data.response.slice(-13).forEach((fix) => {
        const dateString = fix.fixture.date;
        const dateObject = new Date(dateString);
        
        const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        const formattedDate = dateObject.toLocaleDateString('en-US', options);
        
        const upcomingFixturesHTML = `
          <div class="selected-game" data-home-team="${fix.teams.home.name}" data-away-team="${fix.teams.away.name}" data-match-day="${formattedDate}" data-home-logo="${fix.teams.home.logo}" data-away-logo="${fix.teams.away.logo}">
            <img src="${fix.teams.home.logo}" class="fixtures-home-logo">
            <h3 class="fixtures-home">${fix.teams.home.name}</h3>
            <div class="square"><p>${formattedDate}</p></div>
            <img src="${fix.teams.away.logo}" class="fixtures-away-logo">
            <h3 class="fixtures-away">${fix.teams.away.name}</h3>
            <img src="images/oval-football-stadium-black-icon-vector-7508978-removebg-preview.png" class="upcoming-fixtures-venue-icon">
 <h5 class="upcoming-fixtures-venue-name">${fix.fixture.venue.name},  ${fix.fixture.venue.city}</h5>
            <input class="star" type="checkbox" title="bookmark page" ${isGameSaved(fix) ? 'checked' : ''}/>
            <hr>
          </div>
        `;
        leaguestandings.insertAdjacentHTML('beforeend', upcomingFixturesHTML);
      });

      // add event listener to save button
      function saveGame(game) {
        const savedGameIndex = savedGames.findIndex(savedGame => (
          savedGame.homeTeam === game.homeTeam &&
          savedGame.awayTeam === game.awayTeam &&
          savedGame.matchDay === game.matchDay &&
          savedGame.homeLogo === game.homeLogo &&
          savedGame.awayLogo === game.awayLogo
        ));
      
        if (game.checked && savedGameIndex === -1) {
          savedGames.push(game);
        } else if (!game.checked && savedGameIndex !== -1) {
          savedGames.splice(savedGameIndex, 1);
        } else {
          savedGames[savedGameIndex].checked = game.checked;
        }
      
        localStorage.setItem('savedGames', JSON.stringify(savedGames));
      }
      
      function isGameSaved(game) {
        const savedGame = savedGames.find(savedGame => (
          savedGame.homeTeam === game.homeTeam &&
          savedGame.awayTeam === game.awayTeam &&
          savedGame.matchDay === game.MatchDay &&
          savedGame.homeLogo === game.homeLogo &&
          savedGame.awayLogo === game.awayLogo
        ));

        return savedGame ? savedGame.checked : false;
      }

      const saveButtons = document.querySelectorAll('.star');
     
      saveButtons.forEach(function(saveButton) {
        saveButton.addEventListener('change', function() {
          const selectedGame = this.parentNode;
          if (selectedGame) {
            const gameData = selectedGame.dataset;
            const game = {
              homeTeam: gameData.homeTeam,
              awayTeam: gameData.awayTeam,
              matchDay: gameData.matchDay,
              homeLogo: gameData.homeLogo,
              awayLogo: gameData.awayLogo,
              checked: this.checked
            };
            saveGame(game);
            console.log(game);
            console.log(savedGames);
          }
        });
      });
      HideSpinner();
    });
});

navRecentFixtures.addEventListener('click', function() {
  ShowSpinner()
HideFixInfo()
HideUpcomingFixInfo()
ShowRecentFixInfo()
  resetStandingsData()
  

      fetch(
        `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${league}&season=${season}&from=2023-04-10&to=2023-04-28`,
       StatsSettings
      ).then((response) => response.json())

    .then((data) => {
      console.log(savedGames);
      HideSpinner()
      data.response.forEach((recentFixture) => {
        const recentFixturesHTML = `


 <div class="recent-Fixture">
 <h2 class="recent-fixtures-home">${recentFixture.teams.home.name}</h2>
 <img src="${recentFixture.teams.home.logo}" class="recent-fixtures-home-img">
 <div class="recent-fixtures-scoreboard"><p style="margin-left: 11px;">${recentFixture.goals.home}</p><div class="vertical-line"></div> 
 <p class="goals-away">${recentFixture.goals.away}</p></div>
 <img src="${recentFixture.teams.away.logo}" class="recent-fixtures-away-img">
 <h2 class="recent-fixtures-away">${recentFixture.teams.away.name}</h2>
   <img src="images/oval-football-stadium-black-icon-vector-7508978-removebg-preview.png" class="recent-fixtures-venue-icon">
 <h5 class="recent-fixtures-venue">${recentFixture.fixture.venue.name},  ${recentFixture.fixture.venue.city}</h5>
 <img src="${recentFixture.league.logo}" class="recent-fixtures-league-img">
 <hr>
</div>

        `
        leaguestandings.insertAdjacentHTML('beforeend',recentFixturesHTML)
      
      })
    })
  })

  savedGamesBTN.addEventListener('click', function() {
    document.querySelector('.Results').style.display = 'none';
    document.querySelector('.container').style.display = 'none';
    showSavedGames();
    resetStandingsData();
    savedGamesSection.innerHTML = ''; // Clear the content of savedGamesSection
    savedGames.forEach((saved) => {
      const savedUpcomingGamesHTML = `
        <div class="selected-game" style="color:white" data-home-team="${saved.homeTeam}" data-away-team="${saved.awayTeam}"
          data-match-day="${saved.matchDay}" data-home-logo="${saved.homeLogo}" data-away-logo="${saved.awayLogo}">
          <img src="${saved.awayLogo}" class="fixtures-home-logo">
          <h3 class="fixtures-home">${saved.awayTeam}</h3>
          <div class="square"><p>${saved.matchDay}</p></div>
          <img src="${saved.homeLogo}" class="fixtures-away-logo">
          <h3 class="fixtures-away">${saved.homeTeam}</h3>
          <hr style="margin-top:20px;">
        </div>
      `;
      savedGamesSection.insertAdjacentHTML('beforeend', savedUpcomingGamesHTML);
    });
  });
  
  let savedGames2 = []; // Initialize an empty array

  window.onload = function() {
    const storedGames = JSON.parse(localStorage.getItem('savedGames'));
    if (storedGames) {
      savedGames2.push(...storedGames);
    }
  
    // Check the checkboxes for the saved games
    const saveButtons = document.querySelectorAll('.star');
    saveButtons.forEach(function(saveButton) {
      const selectedGame = saveButton.parentNode;
      if (selectedGame) {
        const gameData = selectedGame.dataset;
        const game = {
          homeTeam: gameData.homeTeam,
          awayTeam: gameData.awayTeam,
          matchDay: gameData.matchDay,
          homeLogo: gameData.homeLogo,
          awayLogo: gameData.awayLogo,
          checked: true
        };
        savedGames2.push(game); // Push the game object to savedGames
      }
    });
  
    // Rest of the code...
  };

// Side-Bar Navigation Script //
const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".accordion-body");

acc_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    acc_contents.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
      ) {
        acc.classList.remove("active");
        acc_btns.forEach((btn) => btn.classList.remove("active"));
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".accordion-header")) {
    acc_btns.forEach((btn) => btn.classList.remove("active"));
    acc_contents.forEach((acc) => acc.classList.remove("active"));
  }
};

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
   }
}

