const form = document.querySelector('.form');
const emailerror = document.querySelector('.email')
const pwderror = document.querySelector('.pwd')

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = form.email.value;
    const pwd = form.pwd.value;

    try {
        const res = await fetch('/signin', {
            method: 'POST',
            body: JSON.stringify({ email, pwd }),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json()
        // console.log(data);
        if (data.errors) {
            
            emailerror.textContent = data.errors.email;
            pwderror.textContent = data.errors.pwd
        }
        if (data.user) {

            location.assign('/');
        }

    } catch (err) {
        // console.log(err);
    }
})