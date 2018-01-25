const Cat = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Catty');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.imgAttribution = ko.observable('somewhere');

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
  this.cat = ko.observable(new Cat());

  this.incrementCounter = function () {
    const cat = self.cat();
    cat.clickCount(cat.clickCount() + 1);
  }
};

ko.applyBindings(new ViewModel());