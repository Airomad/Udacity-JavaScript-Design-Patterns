function CatClicker(cat) {
  this.name = cat.name;
  this.img = cat.img;
  this.clicks = 0;
  this.clicksDOMElementID = cat.clicksDOMElementID;

  this.incrementClicks = function() {
    this.clicks += 1;
  }

  this.updateClicksLabel = function() {
    document.getElementById(this.clicksDOMElementID).innerHTML = `Clicks: ${this.clicks}`;
  }
}

// All cats
const cats = [
  {
    name: 'Cat 1',
    img: 'cat.png',
    imgDOMElementID: 'cat-img1',
    nameDOMElementID: 'cat-name1',
    clicksDOMElementID: 'cat-clicks1',
  },
  {
    name: 'Cat 2',
    img: 'cat.png',
    imgDOMElementID: 'cat-img2',
    nameDOMElementID: 'cat-name2',
    clicksDOMElementID: 'cat-clicks2',
  },
  {
    name: 'Cat 3',
    img: 'cat.png',
    imgDOMElementID: 'cat-img3',
    nameDOMElementID: 'cat-name3',
    clicksDOMElementID: 'cat-clicks3',
  },
  {
    name: 'Cat 4',
    img: 'cat.png',
    imgDOMElementID: 'cat-img4',
    nameDOMElementID: 'cat-name4',
    clicksDOMElementID: 'cat-clicks4',
  },
  {
    name: 'Cat 5',
    img: 'cat.png',
    imgDOMElementID: 'cat-img5',
    nameDOMElementID: 'cat-name5',
    clicksDOMElementID: 'cat-clicks5',
  },
];

const list = document.getElementById('list');
const catImgContainer = document.getElementById('img');
const catInfo = document.getElementById('info');

function showCatByName(catClicker) {
  catImgContainer.innerHTML = '';
  catInfo.innerHTML = '';

  const catImg = document.createElement('img');
  catImg.src = catClicker.img;
  catImg.alt = catClicker.name;
  catImg.className += 'cat-img';
  catImg.onclick = function() {
    catClicker.incrementClicks();
    catClicker.updateClicksLabel();
  }
  catImgContainer.appendChild(catImg);

  const catName = document.createElement('div');
  catName.innerText = catClicker.name;
  catInfo.appendChild(catName);

  const catClicks = document.createElement('div');
  catClicks.innerText = `Clicks: ${catClicker.clicks}`;
  catClicks.id = catClicker.clicksDOMElementID;
  catInfo.appendChild(catClicks);
}

function addListItem(catClicker) {
  const item = document.createElement('div');
  item.className += 'list-item';
  item.innerText = `Show ${catClicker.name}`;
  item.onclick = function() {
    showCatByName(catClicker);
  }
  list.appendChild(item);
}

cats.forEach(function(cat) {
  const catClicker = new CatClicker(cat);
  addListItem(catClicker)
});
