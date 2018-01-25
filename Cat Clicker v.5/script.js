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
  currentCatId: -1,
  isEditable: false,

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
    if (this.currentCatData) {
      this.currentCatId = catId;
    }
  },

  setCurrentCatData: function(newCatData) {
    this.currentCatData = newCatData;
    this.data[this.currentCatId] = newCatData;
  },

  increaseCurrentCatClicks: function() {
    this.currentCatData.clicks += 1;
  },

  toggleEditable: function() {
    this.isEditable = !this.isEditable;
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


// Edit View
const editView = {
  init: function() {
    this.editBtn = document.getElementById('edit-toggle');
    this.saveBtn = document.getElementById('edit-save');
    this.editContainer = document.getElementById('edit-container');
    this.editNameInput = document.getElementById('edit-name-input');
    this.editImgInput = document.getElementById('edit-img-input');
    this.editClicksInput = document.getElementById('edit-clicks-input');

    this.editBtn.addEventListener('click', function(render) {
      connector.toggleEditable();
      connector.renderEdit();
    });

    this.saveBtn.addEventListener('click', function() {
      if (connector.isEditable()) {
        connector.saveNewCatInfo();
        connector.renderCatImg();
        connector.renderCatInfo();
        connector.renderList();
      }
    });

    this.render();
  },
  
  render: function() {
    const isEditable = connector.isEditable();
    const catData = connector.getCurrentCatData();

    this.editBtn.innerText = isEditable ? 'Cancel Edit' : 'Edit information';
    this.editContainer.style.display = isEditable ? '' : 'none';

    if (isEditable) {
      this.editNameInput.value = catData.name;
      this.editImgInput.value = catData.img;
      this.editClicksInput.value = catData.clicks;
    }
  }
}

const connector = {
  init: function() {
    model.init();
    catView.init();
    listView.init();
    editView.init();
  },

  renderCatInfo: function() {
    catView.renderCatInfo();
    editView.render();
  },

  renderCatImg: function() {
    catView.renderCatImg();
  },

  renderList: function() {
    listView.renderList();
  },

  renderEdit: function() {
    editView.render();
  },

  setCurrentCatById: function(catID) {
    model.setCurrentCatDataById(catID);
    catView.renderCatImg();
    catView.renderCatInfo();
    editView.render();
  },

  catIncreaseClicks: function() {
    model.increaseCurrentCatClicks();
  },

  saveNewCatInfo: function(newCatData) {
    const name = document.getElementById('edit-name-input').value;
    const img = document.getElementById('edit-img-input').value;
    let clicks = document.getElementById('edit-clicks-input').value;

    model.setCurrentCatData({
      name: name,
      img: img,
      clicks: parseInt(clicks),
    });
  },

  isEditable: function() {
    return model.isEditable;
  },

  toggleEditable: function() {
    model.toggleEditable();
  },

  getCurrentCatData: function() {
    return model.getCurrentCatData();
  },

  getAllData: function() {
    return model.getAllData();
  }
}

connector.init();
