var initialCats=[
    {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'img/cat-1.jpg',
        imgAtrribution : 'http://www.flickr.com',
        nicknames : [{name: 'malukinh'}, {name: 't-bone'}, {name: 'eu'}]
    },
    {
        clickCount:0,
        name : 'Fubby',
        imgSrc : 'img/cat-1.jpg',
        imgAtrribution : 'http://www.flickr.com',
        nicknames : [{name: 'Mini Fupa'}, {name: 't-blood'}, {name: 'sayyyve'}]
    },
    {
        clickCount :0,
        name : 'Mag',
        imgSrc :'img/cat-1.jpg',
        imgAtrribution :'http://www.flickr.com',
        nicknames : [{name: 'Arminha'}, {name: 't-fur'}, {name: 'body'}]
    },
    {
        clickCount : 0,
        name : 'Xiu',
        imgSrc : 'img/cat-1.jpg',
        imgAtrribution : 'http://www.flickr.com',
        nicknames : [{name: 'Xiu Xiu'}, {name: 't-bonner'}, {name: 'some'}]
    },

]

//current model
var Cat = function(data){
        this.catNickNames = ko.observableArray(data.nicknames);

        this.clickCount = ko.observable(data.clickCount);
        this.name = ko.observable(data.name);
        this.imgSrc = ko.observable(data.imgSrc);
        this.imgAtrribution = ko.observable(data.imgAtrribution);
    
        this.title = ko.computed(function () {
            var title;
            var clicks = this.clickCount();
            if(clicks > 10){
                title = 'Infant';
            }
    
            return title;
        }, this);    
}

//current ViewModel
var ViewModel = function(){

    //using self to always reference the contex of the viewmodel function with self
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        //this fuction now is on the context of the currentCat()
        
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCat = function(clickedCat){
        self.currentCat(clickedCat)
    };
};

//starting app with knockout 
ko.applyBindings(new ViewModel())