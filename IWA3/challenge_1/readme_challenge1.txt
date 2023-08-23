// configuration.js

const company = 'ACME Inc.'
const year = 2022
 

// scripts.js

import company form 'configuration'
import year form 'configuration'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message
 

<!-- index.html -->

<html>
	<head>
		<scripts scr="./scripts">
  </head>

	<body>
		<h1>Welcome</h1>
		<p>This is our website</p>
	</body>

	<footer>Loading...</footer>
</html>