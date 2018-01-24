const initData = [
  {
    "name": "Cat 1",
    "img": "cat.jpg"
  },
  {
    "name": "Cat 2",
    "img": "cat.jpg"
  },
  {
    "name": "Cat 3",
    "img": "cat.jpg"
  },
  {
    "name": "Cat 4",
    "img": "cat.jpg"
  },
  {
    "name": "Cat 5",
    "img": "cat.jpg"
  },
  {
    "name": "Cat 6",
    "img": "cat.jpg"
  },
  {
    "name": "Cat 7",
    "img": "cat.jpg"
  },
  {
    "name": "Cat 8",
    "img": "cat.jpg"
  }
];

// All data model
const model = {
  data: null,
  currentCatData: null,

  init: function () {
    this.data = [];
    (function (data) {
      initData.forEach(function(catData) {
        data.push({
          name: catData.name,
          img: catData.img,
          clicks: 0,
        });
      });
    })(this.data);

    this.setCurrentCatDataById(0);
  },

  setCurrentCatDataById: function(catId) {
    this.currentCatData = this.data.filter(function(catData, index) {
      if (index === catId) {
        return true;
      }
      return false;
    })[0];
  },

  increaseCurrentCatClicks: function() {
    this.currentCatData.clicks += 1;
  },

  getCurrentCatData: function() {
    return this.currentCatData;
  },

  getAllData: function() {
    return this.data.slice();
  }
}

// Cat View
const catView = {
  init: function() {
    this.renderCatImg();
    this.renderCatInfo();
  },

  renderCatImg: function() {
    const catData = connector.getCurrentCatData();
    const imgContainer = document.getElementById('img');
    imgContainer.innerHTML = '';

    const imgElem = document.createElement('img');
    imgElem.src = catData.img;
    imgElem.alt = catData.name;
    imgElem.className += 'cat-img';
    imgElem.onclick = function() {
      connector.catIncreaseClicks();
      connector.renderCatInfo();
    }
    imgContainer.appendChild(imgElem);
  },

  renderCatInfo: function() {
    const catData = connector.getCurrentCatData();
    const infoContainer = document.getElementById('info');
    infoContainer.innerHTML = '';

    const nameElem = document.createElement('div');
    nameElem.innerText = `Name: ${catData.name}`;
    infoContainer.appendChild(nameElem);

    const clicksElem = document.createElement('div');
    clicksElem.innerText = `Clicks: ${catData.clicks}`;
    infoContainer.appendChild(clicksElem);
  },
}

// List View
const listView = {
  init: function() {
    this.renderList();
  },

  renderList: function() {
    const catData = connector.getCurrentCatData();
    const allData = connector.getAllData();
    const listContainer = document.getElementById('list');
    listContainer.innerHTML = '';

    allData.forEach(function(catData, index) {
      const listElem = document.createElement('div');
      listElem.innerText = `Cat: ${catData.name}`;
      listElem.className += 'list-item';
      listElem.onclick = function() {
        connector.setCurrentCatById(index);
      }
      listContainer.appendChild(listElem);
    })
  }
}

const connector = {
  init: function() {
    model.init();
    catView.init();
    listView.init();
  },

  renderCatInfo: function() {
    catView.renderCatInfo();
  },

  renderList: function() {
    listView.renderList();
  },

  setCurrentCatById: function(catID) {
    model.setCurrentCatDataById(catID);
    catView.renderCatImg();
    catView.renderCatInfo();
  },

  catIncreaseClicks: function() {
    model.increaseCurrentCatClicks();
  },

  getCurrentCatData: function() {
    return model.getCurrentCatData();
  },

  getAllData: function() {
    return model.getAllData();
  }
}

connector.init();
