function CatClicker(cat) {
  this.catName = cat.name;
  this.clicks = 0;
  this.nameDOMElement = document.getElementById(cat.nameDOMElementID);
  this.clicksDOMElement = document.getElementById(cat.clicksDOMElementID);

  this.incrementClicks = function() {
    this.clicks += 1;
  }

  this.updateNameLabel = function() {
    this.nameDOMElement.innerHTML = `Name: ${this.catName}`;
  }

  this.updateClicksLabel = function() {
    this.clicksDOMElement.innerHTML = `Clicks: ${this.clicks}`;
  }
}

// All cats
const cats = [
  {
    name: 'Cat 1',
    imgDOMElementID: 'cat-img1',
    nameDOMElementID: 'cat-name1',
    clicksDOMElementID: 'cat-clicks1',
  },
  {
    name: 'Cat 2',
    imgDOMElementID: 'cat-img2',
    nameDOMElementID: 'cat-name2',
    clicksDOMElementID: 'cat-clicks2',
  },
];

cats.forEach(function(cat) {
  const catClicker = new CatClicker(cat);

  catClicker.updateClicksLabel();
  catClicker.updateNameLabel();

  const catImg = document.getElementById(cat.imgDOMElementID);

  catImg.addEventListener('click', function() {
    catClicker.incrementClicks();
    catClicker.updateClicksLabel();
  });
});
