/////////////////// ARRAY //////////////////////////////////////////////////

var people = [
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Sir",
  name: "Isaac Newton",
  bio: "Extremely smart man whose bio I will look up and put a longer sentence in here later.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
  lifespan: {
    birth: 1800,
    death: 1801
  }
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
 },
 {
  title: "Captain",
  name: "Jean-Luc Picard",
  bio: "Captain of various iterations of the USS Enterprise. Leader of countless away missions. Had second life as Professor Xavier.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
  lifespan: {
    birth: 1600,
    death: 1601
  }
 },
  {
  title: "Queen",
  name: "Daenerys Targaryen",
  bio: "First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains, and Mother of Dragons.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
  lifespan: {
    birth: 1600,
    death: 1601
  }
 },
];

/////////////////// WRITING ARRAY TO DOM ///////////////////////////////////

var counter = 0;

var outputEl = document.getElementById("outputEl");

for (; counter < 5; counter++) {
  outputEl.innerHTML = "Test String Here";

 //  `
 //  		<div class="person__container" id="person--${counter}">
	// 		<person>
	// 		  <header> ${people[counter].title} ${people[counter].name}</header>
	// 		  <section>${people[counter].bio} ${people[counter].image}</section>
	// 		  <footer>${people[counter].lifespan.birth} - ${people[counter].lifespan.death}</footer>
	// 		</person>
	// 	</div>
	// `;
};

/////////////////// REFERENCE AND LOGIC ///////////////////////////////////

// var containerEl = document.getElementsByClassName("person__container");

// for (var i = 0; i < containerEl.length; i++) {
//   containerEl[i].addEventListener("click", function (event) {
//     // Logic to execute when the element is clicked
//     console.log("clicking on people divs")
//   });
// };