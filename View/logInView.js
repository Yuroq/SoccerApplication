const username = document.querySelector('#username')
const password = document.querySelector('#password')
const login = document.querySelector('.Log-in-Button')

const user = 'Soccer'
const pass = 'Football'

login.addEventListener('click', function(e) {
if(username.value == user && password.value == pass) {
    console.log('✅');
    e.preventDefault()
    location.href = "Home.html";

} else {
    alert('Invalid log in info❌')
}
})

login.addEventListener('click', function() {
    
})
