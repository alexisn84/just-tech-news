//function to operate submit button for signup form
async function signupFormHandler(event) {
    event.preventDefault();

    //fetch request to api/users to POST username/email/password from form to server
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        //use await b4 the Promise
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        //console.log(response);
        //check if response status
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

//function to operate submit button and tasks for login 
async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        //check if response ok
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

//listener for signup button
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

//listener for login button
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);