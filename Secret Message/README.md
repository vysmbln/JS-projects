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

Each characters have 8 digit binary representation of character code.
The differeence between ASCII and Base64 is to express  the ascii table we have 8 individual characters, and Base64  is express with 6 characters with each binary string.

Function that's used:::
btoa - we will call it to convert the base64 encoding.

atob - a base64 string and turn it into normal characters.



