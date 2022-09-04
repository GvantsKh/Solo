import {Content} from "../module/content.js";
import { soloUrl } from "./config.js";
import { params, cityParam, districtParam, typeParam , priceParam} from "./common.js";


export function getLink(link, value){
    let res = link;
    
    if(value === null){
        res = res+'skip='+params[0]+'&limit='+params[1];         
    }
    else{
        res = res + value +'&skip='+params[0]+'&limit='+params[1];
    }
    return res; 
}

export function removeSpaces(text){
    let result = '';

    for(let i=0; i<text.length; i++){
        if(text[i] === ' '){
            result = result + '+';
        }
        else{
            result = result + text[i];
        }
    }
    return result;
}



export function getPriceFrom(text){
    let result = '';

    for(let i=0; i<text.length; i++){
        if(text[i] === ' '){
            break
        }
            result = result + text[i];
    }

    return result;
}

export function getPriceTo(text){
    let result = '';

    for(let i=0; i<text.length; i++){
        if(text[i] === '-'){
            for(let j = i+1; j<text.length; j++){
                if(text[j] !== ' '){
                    result = result + text[j];
                }
            }
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

    for (let i = 1; i < filterItem.length; i++) {
            
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
        getContent(getLink(soloUrl, getCheckedValues()));
        })
    }
}


export function getCheckedValues(){
    let cities = '';
    let distr = '';
    let types = '';
    let priceStart = '?fromParam=';
    let PriceEnd = '&toParam=';

    if(cityParam.length>0){
        cities = '&cityParam='
        for(let i = 0 ; i<cityParam.length; i++){
            if(i !== cityParam.length-1){
                cities += removeSpaces(cityParam[i])+'%2C';

            }
            else {
                cities += removeSpaces(cityParam[i])+'&';

            }
        }
    
    }
    
    if(districtParam.length>0){
        distr = '&districtParam=';
        for(let i=0; i<districtParam.length; i++){
            if(i !== districtParam.length-1){
                distr += removeSpaces(districtParam[i])+'%2C';

            }
            else {
                distr += removeSpaces(districtParam[i])+'&';

            }
        }
    }
   
    if(typeParam.length>0){
        types = '&typeParam=';
          for(let i=0; i<typeParam.length; i++){
            if(i !== typeParam.length-1){
                types += removeSpaces(typeParam[i])+'%2C';

            }
            else {
                types += removeSpaces(typeParam[i]);

            }
        }
    }

    if(priceParam.length>0){
          for(let i=0; i<priceParam.length; i++){
                priceStart += getPriceFrom(priceParam[i]);
                PriceEnd += getPriceTo(priceParam[i]);
        }

    }



    let sum = priceStart+PriceEnd+cities+distr+types;
    return sum;
}
