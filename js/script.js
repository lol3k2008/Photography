const masonry = new Macy({
container:  '#main',
mobileFirst: true,
columns: 1,
breakAt: {
400:1,
800:2,
1100:3

},
margin: 30
});

// ----------------DATA_FOOTER----------------------

let newData = new Date();

const spanData = document.querySelector(`.data`);

spanData.textContent = `${newData.getFullYear()}`

// --------- DAY - NIGHT ------------


