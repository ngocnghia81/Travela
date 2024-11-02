const container = document.getElementById('log-container')
const loginBtn = document.getElementById('login-btn')
const registerBtn = document.getElementById('register-btn')
function register(){
    container.classList.add("right-panel-active")
}
registerBtn.addEventListener('click',register
)
loginBtn.addEventListener('click',function(){
    container.classList.remove("right-panel-active")
})

