const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for(let i = 0; i < players.length; i++) {
        let obj = {
            name: players[i],
            strength: getRandomStrength(),
            images: "images/super-" + (i + 1) + ".png",
        };
        if(i % 2 == 0) {
            obj.type ="hero";
        } else {
            obj.type = "villain";
        }
        detailedPlayers.push(obj);
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()

    var i = parseInt(Math.random() * 100) + 1;
    return i;
}

const buildPlayers = (players, type) => {
    let fragment = '';
    let fragment1 = '';
    for(let i of players) {
        fragment = `
            <div class="player">
                <img src="${i.image}" alt="">
                <div class="name">${i.name}</div>
                <div class="stength">${i.strength}</div>
            </div>`;
        if(i.type == type) {
            fragment1 += fragment;
        }
    }
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment1;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}