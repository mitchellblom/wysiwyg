var counter = 0;
var outputEl = document.getElementById("outputEl");
for (; counter < people.length; counter++) {
  // Give each person element a unique identifier
  outputEl.innerHTML += `<div class="person__container" id="person--${counter}"></div>`;
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
  });
};

////////// JS from Dongle project ///////
for (var i = 0; i < dongle.length; i++) {
  var productCard = "";
  productCard +="<div class='productCard'><img class='productPic' src=" + dongle[i].image + "><p class='lightBox'>" + "<div class='descrip'>" + dongle[i].descrip + "</div>";
  products.innerHTML += productCard
////////////////////////////////////////

var people = [
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
  lifespan: {
    birth: 1747,
    death: 1797
  },
{
  title: "Sir",
  name: "Isaac Newton",
  bio: "Extremely smart man whose bio I will look up and put a longer sentence in here later.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
  lifespan: {
    birth: 1800,
    death: 1801
  },
  {
  title: "King",
  name: "Charles III",
  bio: "Crazy Spanish king that did a bunch of silly stuff instead of actually governing his state.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
  lifespan: {
    birth: 1600,
    death: 1601
  }
];