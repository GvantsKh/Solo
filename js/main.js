import {app,params, cityParam, districtParam, typeParam} from "./common/common.js";
import {Devs} from "./module/developers.js";
import {soloUrl} from "./common/config.js";
import {Content} from "./module/content.js";
import { getContent, getLink, getFilters } from "./common/filter.js";


let topMenu = new Devs(app);
let headerMenu = topMenu._render();

getContent(getLink(params, soloUrl, null));

getFilters(cityParam, 'country');
getFilters(districtParam, 'district');
getFilters(typeParam, 'status')


