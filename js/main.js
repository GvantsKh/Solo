import {app} from "./common/common.js";
import {Devs} from "./module/developers.js";
import {soloUrl} from "./common/config.js";
import {Content} from "./module/content.js";


let topMenu = new Devs(app);
let headerMenu = topMenu._render();

// fetch(soloUrl)
// .then((res) => {
//     return res.json();
// })
// .then((res)=>{
//     let gifs = new Content(res);
//     gifs._render();
// });

