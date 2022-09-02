import {app,params} from "./common/common.js";
import {Devs} from "./module/developers.js";
import {soloUrl} from "./common/config.js";
import {Content} from "./module/content.js";
import { getContent, getLink } from "./common/filter.js";


let topMenu = new Devs(app);
let headerMenu = topMenu._render();

getContent(getLink(params, soloUrl, null));