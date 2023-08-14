// scripts.js.... Only 'Pro' edition of Quokka.js supports project files import.

import { company } from "./configuration.js";
import { year } from "./configuration.js";

const message = "© " + company + " (" + year + ")";
document.querySelector("footer").innerText = message;
console.log(message);
