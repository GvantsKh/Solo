import {app} from "./common/common.js";
import {Devs} from "./module/developers.js";


let topMenu = new Devs(app);
let headerMenu = topMenu._render();

