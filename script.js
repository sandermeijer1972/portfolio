const info = document.getElementById("info");
const uitleg = document.getElementById("uitleg");

const showInfo = (number) => {
    info.innerHTML = "";
    uitleg.innerHTML = "";
    const newDivNaam = document.createElement('div');
    newDivNaam.classList.add("naam");
    newDivNaam.innerText = opdrachten[number].titel;
    info.appendChild(newDivNaam);
    const newDivScreen = document.createElement('div');
    newDivScreen.classList.add("screen");
    const newImg = document.createElement('img');
    newImg.alt = "screenshot";
    newImg.src = opdrachten[number].plaatje;
    newDivScreen.appendChild(newImg);
    info.appendChild(newDivScreen);
    const newDivLinks = document.createElement('div');
    newDivLinks.classList.add("links");
    const newAWebsite = document.createElement('a');
    newAWebsite.classList.add("website");
    newAWebsite.innerText = "website";
    newAWebsite.target = "_blank";
    newAWebsite.href = opdrachten[number].website;
    newDivLinks.appendChild(newAWebsite);
    const newAGithub = document.createElement('a');
    newAGithub.classList.add("code");
    newAGithub.innerText = "code";
    newAGithub.target = "_blank";
    newAGithub.href = opdrachten[number].github;
    newDivLinks.appendChild(newAGithub);
    info.appendChild(newDivLinks);
    const newDivProgs = document.createElement('div');
    newDivProgs.classList.add("progs");
    const programma = opdrachten[number].programma;
    programma.forEach(item => {
        if (item === "jest") {
            const newIcon = document.createElement('img');
            newIcon.src = "./images/jest.svg";
            newDivProgs.appendChild(newIcon);
        } else {
            const newIcon = document.createElement('i');
            newIcon.classList.add("fab");
            if (item === "html") {
                newIcon.classList.add("fa-html5");
                newIcon.style = "color:#ff5722";
            } else if (item === "css") {
                newIcon.classList.add("fa-css3-alt");
                newIcon.style = "color:#379ad6";
            } else if (item === "javascript") {
                newIcon.classList.add("fa-js-square");
                newIcon.style = "color:#f7df1e";
            } else if (item === "react") {
                newIcon.classList.add("fa-react");
                newIcon.style = "color:#61dbfb";
            };
            newDivProgs.appendChild(newIcon);
        };
    });
    info.appendChild(newDivProgs);
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
