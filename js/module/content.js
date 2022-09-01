import { Base } from "../base.js";


export class Content extends Base {

    constructor(appJson) {
        super();
        this.appJson = appJson;
    }
    


    _getContent(){
        return this.appJson.data.map((obj) => {
             return `<div class="content-item">
             <img src="./imgs/koxta.JPG" />
             <span class="text-content-title">${obj.projectName}</span><br>
             <span class="text-content-offer">${obj.priceLabel}</span><br>
             <span class="text-content-desc">${obj.address}</span><br>
             <a class="content-link" href="#">გაიგეთ მეტი</a>
         </div>`
        })
        .join(" ");
    }

    _render() {
        this._setContent('contentItems', this._getContent());

    }


}