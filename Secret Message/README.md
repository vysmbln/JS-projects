1. Create html and js file.

2. Link materialized css ftom cdnjs.com

3. Add queryselector for the form, add preventDefault(because anytime you submit a form,
the browser will automatically  get the info on that form and will try to submit it to some backend server.
Sice we dont have a backend server, we added the preventDefault to stop the default route/browser behavior to submit the form.
To check if its working, on the live server, try to submit any text and make sure that the browser is not refreshing. Add console.log after trying to submit it.)

4. encode Base64. 




Special note:

ascii - Complete tables including hex, octal, html, decimal conversions.
          The characters "a-z", "A-Z", "0-9", "!@#$%^&*()" and few others can be representedwith decimal value from 0-127.
Base64 - a way to encode binary data into an ASCII character set known to pretty much every computer system, in order to transmit the data without loss or modification of the contents itself.
        The characters "a-z", "A-Z", "0-9" can be represented with decimal value from 0-63.
