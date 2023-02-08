const boldText = document.getElementById("changeableText");

const insults = ["retardados", "baianos", "vagabundos", "donos de bar"];

function getInsult() {
  return insults[Math.floor(Math.random() * insults.length)];
}

setInterval(() => {
  boldText.innerText = getInsult();
}, 2000);