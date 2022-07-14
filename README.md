# eyebleach
Sanitize your text with a filter-based package

# Install
using npm:
~~~
npm install eyebleach
~~~
using yarn:
~~~
yarn add eyebleach
~~~

# How to use
After installing the After the ```eyebleach``` module, import it using CommonJS:
~~~js
const eyebleach = require('eyebleach')
~~~
or by using ESM:
~~~js
import eyebleach from 'eyebleach/esm'
~~~
This gives you access to the ```eyebleach``` function and the filter list. The  ```eyebleach which parses a string and replaces it with a character. The list items can be modified with the ```setListItem``` and the```deleteListItem``` functions.

## Example
~~~js
const eyebleach = require('eyebleach')
const formInput = document.querySelector('#form-input')

eyebleach.setListItem('some string')

formInput.oninput = () => formInput.value = eyebleach(formInput.value, '*')
~~~