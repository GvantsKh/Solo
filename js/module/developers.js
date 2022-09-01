import { Base } from "../base.js";


export class Devs extends Base {

    constructor(appJson) {
        super();
        this.appJson = appJson;
    }
    


    _getTopHeaderMenu(){
        return this.appJson.topHeaderMenu.map((obj) => {
             return `<li><a class="${obj.class}" href="#">${obj.title}</a></li>`
        })
        .join(" ");
    }

    _getMenu(){
        return this.appJson.menu.map((obj) => {
            return `<li><a href="#">${obj.title}</a></li>`
       })
       .join(" ");
    }

    _getSlider(){
        return this.appJson.slider.map((obj) => {
            return `<div class="slider-title">
                        <h2>${obj.h2}</h2>
                    </div>

                    <div class="slider-img">
                        <div class="overlay">
                            <h4>${obj.h4}</h4>
                            <div class="slider-button">
                                <a href="#">${obj.button}</a>
                            </div>
                        </div>
                    </div>`
       })
       .join(" ");
    }

    _getCountries(){
        return this.appJson.countries.map((obj) => {
            return `<input type="checkbox"><span>${obj.title}</span><br>`
       })
       .join(" ");
    }

    _getDistrict(){
        return this.appJson.district.map((obj) => {
            return `<input type="checkbox"><span>${obj.title}</span><br>`
       })
       .join(" ");
    }

    _getSquare(){
        return this.appJson.square.map((obj) => {
            return `<input type="radio"><span>${obj.title}</span><br>`
       })
       .join(" ");
    }

    _getStatus(){
        return this.appJson.status.map((obj) => {
            return `<input type="checkbox"><span>${obj.title}</span><br>`
       })
       .join(" ");
    }

    _render() {
        this._setContent('topHeaderMenu', this._getTopHeaderMenu());
        this._setContent('menu', this._getMenu());
        this._setContent('slider', this._getSlider());
        this._setContent('countries', this._getCountries());
        this._setContent('district', this._getDistrict());
        this._setContent('square', this._getSquare());
        this._setContent('status', this._getStatus());

    }


}