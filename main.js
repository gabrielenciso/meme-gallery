var $gallery = document.querySelector('main');

var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://data.whicdn.com/images/350396108/original.jpg',
  'https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg'

];

var $imageURLInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');
var $resetButton = document.getElementById('reset');

$addImageButton.addEventListener('click', function () {
  if ($imageURLInput.value !== '') {
    imageUrls.push($imageURLInput.value);
    $imageURLInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

$resetButton.addEventListener('click', function () {
  $gallery.innerHTML = '';
  imageUrls = [];
});

updateGallery();
