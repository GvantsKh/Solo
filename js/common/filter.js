import {Content} from "../module/content.js";
import { soloUrl } from "./config.js";


export function getLink(arr, link, value){
    let res = link;
    
    if(value === null){
            res = res+'skip='+arr.skip+'&limit='+arr.limit;         
    }

    else{
        for (let i = 0; i < arr.length; i++){
            res = res+value+arr.value+'?limit='+arr[i].limit+'&api_key='+arr[i].api_key+'&fmt='+arr[i].fmt;         
        }
    }
    
    return res; 
}

export function removeSpaces(text){
    let result = '';

    for(let i=0; i<text.length; i++){
        if(text[i] === ' '){
            result = result + '%20';
        }

        else{
            result = result + text[i];
        }
    }
    return result;
}

export function getContent(link){
    fetch(link)
    .then((res) => {
        return res.json();
    })
    .then((res)=>{
        let content = new Content(res);
        content._render();
    });
}

