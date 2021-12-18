const naam = document.getElementById("naam");
const screenshot = document.getElementById("screenshot");
const website = document.getElementById("website");
const code = document.getElementById("code");
const uitleg = document.getElementById("uitleg");

const showInfo = (number) => {
    naam.innerText = opdrachten[number].titel;
    screenshot.src = opdrachten[number].plaatje;
    website.href = opdrachten[number].website;
    code.href = opdrachten[number].github;
    uitleg.innerText = opdrachten[number].tekst;
};

const vlag = document.getElementById("vlag");
vlag.addEventListener("click", () => {
    showInfo(0);
});

const benno = document.getElementById("benno");
benno.addEventListener("click", () => {
    showInfo(1);
});

const kleur = document.getElementById("kleur");
kleur.addEventListener("click", () => {
    showInfo(2);
});

const film = document.getElementById("film");
film.addEventListener("click", () => {
    showInfo(3);
});

const boten = document.getElementById("boten");
boten.addEventListener("click", () => {
    showInfo(4);
});

const database = document.getElementById("database");
database.addEventListener("click", () => {
    showInfo(5);
});

const advent = document.getElementById("advent");
advent.addEventListener("click", () => {
    showInfo(6);
});

const api = document.getElementById("api");
api.addEventListener("click", () => {
    showInfo(7);
});

const todo = document.getElementById("todo");
todo.addEventListener("click", () => {
    showInfo(8);
});

const groentetuin = document.getElementById("groentetuin");
groentetuin.addEventListener("click", () => {
    showInfo(9);
});

const react = document.getElementById("react");
react.addEventListener("click", () => {
    showInfo(10);
});

const shop = document.getElementById("shop");
shop.addEventListener("click", () => {
    showInfo(11);
});

const playlist = document.getElementById("playlist");
playlist.addEventListener("click", () => {
    showInfo(12);
});

const portfolio = document.getElementById("portfolio");
portfolio.addEventListener("click", () => {
    showInfo(13);
});

