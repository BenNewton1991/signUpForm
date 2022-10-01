const passw = document.getElementById('password');
const confirm = document.getElementById('confirm')
const btn = document.getElementById('btn')
const col = document.getElementById('col')

const error_message = document.createElement('p')
error_message.textContent = 'Passwords do not match!'
error_message.classList.add('error_message')


function check_password(a, b = confirm, c = passw, d = btn, e = col){

    let password = c.value;
    let conf = b.value;

    console.log(password)
    console.log(conf)

    if (password == conf) {
        console.log('password okay')
        b.classList.remove('error');
        c.classList.remove('error');
        e.removeChild(error_message)
    } else {
        b.classList.add('error');
        c.classList.add('error');
        e.appendChild(error_message);
        
    }
    
}

btn.addEventListener('mousedown', check_password)