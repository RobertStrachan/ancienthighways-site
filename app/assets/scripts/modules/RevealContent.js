import $ from 'jquery';

class RevealContent {
    constructor() {
        this.revealContentButton = $('.main-content__button');
        this.mainContent = $('.main-content');
        this.events();
    }

    events() {
        var that = this;
        this.revealContentButton.each(function(i){
            var currentSection = this;
            that.revealContentButton[i].addEventListener('click', function(){
                $('.main-content').addClass("main-content--is-visible")
            });

        });
    }
}

export default RevealContent;