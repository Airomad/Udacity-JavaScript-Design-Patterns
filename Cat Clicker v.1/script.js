function Clicker() {
  this.clicks = 0;

  this.increment = function() {
    this.clicks += 1;
  }

  this.updateLabel = function() {
    document.getElementById('clicks').innerHTML = `Clicks: ${this.clicks}`;
  }
}

const clicker = new Clicker();
const catImg = document.getElementById('cat');

catImg.addEventListener('click', function() {
  clicker.increment();
  clicker.updateLabel();
});
