const cats = [
  {
    name: 'Cat 1',
    clicks: 0,
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    attribution: 'I don\'t know',
  },
  {
    name: 'Cat 2',
    clicks: 0,
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    attribution: 'I don\'t know',
  },
  {
    name: 'Cat 3',
    clicks: 0,
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    attribution: 'I don\'t know',
  },
  {
    name: 'Cat 4',
    clicks: 0,
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    attribution: 'I don\'t know',
  },
  {
    name: 'Cat 5',
    clicks: 0,
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    attribution: 'I don\'t know',
  },
];

const Cat = function (data) {
  this.clickCount = ko.observable(data.clicks);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.attribution);

  this.level = ko.computed(function () {
    const clicks = this.clickCount();
    if (clicks > 50) {
      return 'Max';
    } else if (clicks > 40) {
      return 4;
    } else if (clicks > 30) {
      return 3;
    } else if (clicks > 20) {
      return 2;
    }

    return 1;
  }, this);
};

const ViewModel = function () {
  const self = this;

  this.cats = ko.observableArray([]);
  
  cats.forEach(function (catData) {
    self.cats.push(new Cat(catData));
  });

  this.currentCat = ko.observable(this.cats()[0]);

  this.incrementCounter = function () {
    const cat = self.currentCat();
    cat.clickCount(cat.clickCount() + 1);
  };

  this.setCurrentCat = function () {
    self.currentCat(this);
  }
};

ko.applyBindings(new ViewModel());