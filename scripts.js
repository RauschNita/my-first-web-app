let first = {
    photo: 'images/flower-purple-lical-blosso.jpg',
    title: 'My title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat aliquam lacinia. Nullam in urna lectus. Phasellus gravida lectus ac nisi blandit, vel eleifend sapien vulputate.'
  };

let second = {
  photo: 'images/marguerite-daisy-beautiful-beauty.jpg',
  title: 'My title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat aliquam lacinia. Nullam in urna lectus. Phasellus gravida lectus ac nisi blandit, vel eleifend sapien vulputate.'
};

let third = {
  photo: 'images/head-treasure-flower-disk-flowers-inflorescence-ray.jpg',
  title: 'My title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat aliquam lacinia. Nullam in urna lectus. Phasellus gravida lectus ac nisi blandit, vel eleifend sapien vulputate.'
};

let fourth = {
  photo: 'images/Nelumno_nucifera_open_flower_-_botanic_garden_adelaide2.jpg',
  title: 'My title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat aliquam lacinia. Nullam in urna lectus. Phasellus gravida lectus ac nisi blandit, vel eleifend sapien vulputate.'
};

let fifth = {
  photo: 'images/1280px-Red_Hibiscus_from_Kerala.jpg',
  title: 'My title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat aliquam lacinia. Nullam in urna lectus. Phasellus gravida lectus ac nisi blandit, vel eleifend sapien vulputate.'
};

let currentPhoto = 0;
let imagesData = [first, second, third, fourth, fifth];

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
  $('#photo-title').text(imagesData[photoNumber].title);
  $('#photo-description').text(imagesData[photoNumber].description);
}

loadPhoto(currentPhoto);

$('#previous').click(() => {
  if (currentPhoto < imagesData.length+1) {
    currentPhoto--;
  }
  loadPhoto(currentPhoto);
});

$('#next').click(() => {
  if (currentPhoto < imagesData.length) {
    currentPhoto++;
  }
  loadPhoto(currentPhoto);
})