// scripts.js

import { company, year } from "./configuration.js";
//import { year } from "./configuration";

const message = "© " + company + " (" + year + ")";
document.querySelector("footer").innerText = message;
