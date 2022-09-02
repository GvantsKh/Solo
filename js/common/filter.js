import {Content} from "../module/content.js";
import { soloUrl } from "./config.js";
import { params } from "./common.js";


export function getLink(arr, link, value){
    let res = link;
    
    if(value === null){
             res = res+'skip='+params[0]+'&limit='+params[1];         
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



export function getFilters (arr, className){
    
    let filterItem = document.getElementsByClassName(className);

    for (let i = 0; i < filterItem.length; i++) {
            
        let filterElem = filterItem[i];
        let searchValue = filterElem.value;

        filterElem.addEventListener('click', () => {
            if(filterElem.checked === true){
                arr.push(searchValue);
            }
            else{
                for(let j=0; j<arr.length; j++){
                    if(arr[j] === searchValue){
                        arr.splice(j,1)
                    }
                }
            }
        console.log(arr)
        getContent(getLink(arr, soloUrl, className));

        })
    }
}