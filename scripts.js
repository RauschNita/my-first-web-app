let first = {
    photo: 'images/daisy.jpg',
    title: 'Daisy',
    description: ' is composed of white petals and a yellow center, although the flower can sometimes have a pink or rose color. Daisies are not made of just one flower. A Daisy is made up of two types of flowers - disk florets and petal-like white ray florets.'
  };

let second = {
  photo: 'images/sunflower.jpg',
  title: 'Sunflower',
  description: 'the common sunflower, is a large annual forb of the genus Helianthus grown as a crop for its edible oil and edible fruits. This sunflower species is also used as wild bird food, as livestock forage, in some industrial applications, and as an ornamental in domestic gardens.'
};

let third = {
  photo: 'images/daffodil.jpg',
  title: 'Daffodil',
  description: 'Narcissus is a genus of predominantly spring flowering perennial plants of the amaryllis family, Amaryllidaceae. Various common names including daffodil, narcissus and jonquil are used to describe all or some members of the genus.'
};

let fourth = {
  photo: 'images/1280px-Red_Hibiscus_from_Kerala.jpg',
  title: 'Hibiscus',
  description: 'is a genus of flowering plants in the mallow family, Malvaceae. The genus is quite large, comprising several hundred species that are native to warm temperate, subtropical and tropical regions throughout the world.'
};

let fifth = {
  photo: 'images/Nelumno_nucifera_open_flower_-_botanic_garden_adelaide2.jpg',
  title: 'Nelumno nucifera',
  description: 'also known as Indian lotus, sacred lotus, bean of India, Egyptian bean or simply lotus, is one of two extant species of aquatic plant in the family Nelumbonaceae. It is often colloquially called a water lily.'
};

let sixth = {
  photo: 'images/tulip.jpg',
  title: 'Tulip',
  description: 'Tulips form a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly colored, generally red, pink, yellow, or white. They often have a different colored blotch at the base of the tepals, internally.'
};

let seventh = {
  photo: 'images/hyacinth.jpg',
  title: 'Hyacinth',
  description: ' is a small genus of bulbous, fragrant flowering plants in the family Asparagaceae, subfamily Scilloideae. These are commonly called hyacinths. The genus is native to the eastern Mediterranean.'
};

let currentPhoto = 0;
let imagesData = [first, second, third, fourth, fifth, sixth, seventh];

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

data.forEach((item, index) => {
  $('#container').append(`<div class="box" data-index="${index}">${item} (data-index="${index}")</div>`);
  $('.box').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    $('#clicked').text(data[indexClicked]);
  });
});

