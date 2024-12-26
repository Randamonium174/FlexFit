const ownerPhotos = [
  "owner.jpg",
  "owner1.jpg",
  "owner2.jpg",
  "owner3.jpg",
  "owner4.jpg"
];

let currentPhotoIndex = 0;

function shufflePhoto() {
  const photoElement = document.getElementById('owner-photo');
  currentPhotoIndex = (currentPhotoIndex + 1) % ownerPhotos.length;
  photoElement.src = ownerPhotos[currentPhotoIndex];
}

setInterval(shufflePhoto, 5000); // Change photo every 5 seconds
