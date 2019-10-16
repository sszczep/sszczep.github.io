(() => {
    const form = document.getElementById('contact-me__form');
    const formSubmit = document.getElementById('form__submit');
    const formError = document.getElementById('form__error');
    const success = document.getElementById('contact-me__success');

    // Listen on form submit
    form.addEventListener('submit', event => {
        event.preventDefault();

        // If button is disabled, do nothing
        if(formSubmit.disabled) return;

        // Disable button and change inner text
        formSubmit.disabled = true;
        formSubmit.innerText = 'Sending...';

        // Hide any error messages
        formError.classList.add('hidden');
        formError.innerText = '';

        // Send an actual mail
        emailjs.sendForm('gmail', 'template_6TuRVBP6', form, 'user_34bLyOyEX45lv57E1hv8Q')
            .then(() => {
                // Show success message
                form.classList.toggle('hidden');
                success.classList.toggle('hidden');
            }).catch(err => {
                console.log(err);
                // If error occured, show it
                formError.innerText = 
`An error occured: ${err.text}.
If you believe it is my fault, please contact me directly at s.szczepanski00@gmail.com`;
                formError.classList.remove('hidden');

                // Reset button text and enable it
                formSubmit.innerText = 'Send'; 
                formSubmit.disabled = false;
            });
    });
})();