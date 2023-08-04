// nwabisa.js

private firstname = "Nwabisa"
private surname = "Gabe"
public role = "CEO"

private display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#nwabisa').innerText = display
 

// johannes.js

private firstname = "Johannes"
private surname = "Potgieter"
public role = "Intern"

private display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display
 

// alex.js

private firstname = "Alex"
private surname = "Naidoo"
public role = "Head of Marketing"

private display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display
 

// scripts.js

console.log('Roles:', nwabisa.role, johanes.role, alex.role)
 

<!-- index.html -->

<html>
    <script module="nwabisa">
    <script module="johannes">
    <script module="alex">
    <script nomodule="scripts">

    <body>
        <h1>Our Team</h1>
        
        <ul>
            <li id="nwabisa">Loading...</li>
            <li id="johannes">Loading...</li>
            <li id="alex">Loading...</li>
        </ul>
    </body>
</html>