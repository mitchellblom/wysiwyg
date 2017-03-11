/////////////////// ARRAY //////////////////////////////////////////////////

var people = [{
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
        birth: 1747,
        death: 1797
    }
}, {
    title: "Sir",
    name: "Isaac Newton",
    bio: "Sir Isaac Newton PRS was an English mathematician, astronomer, and physicist who is widely recognised as one of the most influential scientists of all time and a key figure in the scientific revolution.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg",
    lifespan: {
        birth: 1643,
        death: 1727
    }
}, {
    title: "King",
    name: "Charles III",
    bio: "Charles III was the King of Spain and the Spanish Indies from 1759 to 1788. While he was the fifth son of Philip V of Spain, he was the eldest son of Philip's second wife, Elisabeth Farnese. Did a bunch of silly stuff instead of actually governing his empire.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Charles_III_of_Spain_high_resolution.jpg",
    lifespan: {
        birth: 1716,
        death: 1788
    }
}, {
    title: "Captain",
    name: "Jean-Luc Picard",
    bio: "Jean-Luc Picard is a fictional character in the Star Trek franchise, most often seen as Captain of the starship USS Enterprise-D. He appears in the television series Star Trek: The Next Generation. Leader of countless away missions. Had second life as Professor Xavier.",
    image: "https://s-media-cache-ak0.pinimg.com/originals/47/ba/21/47ba21ca9b5cf73389f4398f38263821.jpg",
    lifespan: {
        birth: 2305,
        death: "present"
    }
}, {
    title: "Queen",
    name: "Daenerys Targaryen",
    bio: "First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains, and Mother of Dragons.",
    image: "https://s-media-cache-ak0.pinimg.com/736x/4f/b8/f6/4fb8f6f5c29f5598b87556ae731cb089.jpg",
    lifespan: {
        birth: 284,
        death: "present"
    }
}, ];

/////////////////// WRITING ARRAY TO DOM ///////////////////////////////////

var outputEl = document.getElementById("outputEl");

for (var counter = 0; counter < 5; counter++) {
    outputEl.innerHTML +=
        `<div class="person__container" id="person--${counter}">
        <person>
          <img class="bioPic" src="${people[counter].image}">
  			  <header class="editable"> ${people[counter].title} ${people[counter].name}</header>
              <section class="editable">${people[counter].bio} </section>
              <footer class="editable">${people[counter].lifespan.birth} - ${people[counter].lifespan.death}</footer>
            </person>
          </div>`;
};

/////////////////// REFERENCES ///////////////////////////////////

var containerEl = outputEl.getElementsByClassName("person__container");
var userInputText = document.getElementById("userInputTextBox");
var clickedBio;

/////////////////// LOGIC ///////////////////////////////////

window.addEventListener("click", function(e) {
    for (var k = 0; k < containerEl.length; k++) {
        containerEl[k].classList.remove("clicked");
    }
    for (var j = 0; j < containerEl.length; j++) {
        containerEl[j].classList.value = "person__container";
    }
    if (e.target.classList.value === "person__container") {
        e.target.classList.add("clicked");
    } else if (e.target.parentNode.parentNode.classList.value === "person__container") {
        e.target.parentNode.parentNode.classList.add("clicked");
    }
});

/// Focus on the input box and bind bio content to it
outputEl.addEventListener("click", function(e) {
    if (e.target.classList.value === "editable") {
        clickedBio = e.target;
        userInputText.value = clickedBio.innerHTML;
        userInputText.focus();
        userInputText.addEventListener("keyup", function() {
            clickedBio.innerHTML = userInputText.value;
            userInputText.onkeydown = function() {
                if (window.event.keyCode === 13) {
                    clickedBio = "";
                    userInputText.value = "";
                }
            };
        });
        }
        else {
            userInputText.value = "";
            // alert("Click text to edit");
        };
    });