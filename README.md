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
After installing the 

## Example
~~~js
const eyebleach = require('eyebleach')
const formInput = document.querySelector('#form-input')

eyebleach.setListItem('some string')

formInput.oninput = () => formInput.value = eyebleach(formInput.value, '*')
~~~