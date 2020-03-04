document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value)


    //create a random string
    document.querySelector('#link-input').value = encrypted;
});
