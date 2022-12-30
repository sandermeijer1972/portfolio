const info = document.getElementById("info");
const explanation = document.getElementById("explanation");

const showInfo = (number) => {
    info.innerHTML = "";
    explanation.innerHTML = "";
    const newDivName = document.createElement('div');
    newDivName.classList.add("name");
    newDivName.innerText = assignments[number].title;
    info.appendChild(newDivName);
    const newDivScreen = document.createElement('div');
    newDivScreen.classList.add("screen");
    const newImg = document.createElement('img');
    newImg.alt = "screenshot";
    newImg.src = assignments[number].image;
    newDivScreen.appendChild(newImg);
    info.appendChild(newDivScreen);
    const newDivLinks = document.createElement('div');
    newDivLinks.classList.add("links");
    for (i=0; i<assignments[number].website.length; i++) {
        const newAWebsite = document.createElement('a');
        newAWebsite.classList.add("website");
        newAWebsite.innerText = assignments[number].webname[i];
        newAWebsite.target = "_blank";
        newAWebsite.href = assignments[number].website[i];
        newDivLinks.appendChild(newAWebsite);
        const newAGithub = document.createElement('a');
        newAGithub.classList.add("code");
        newAGithub.innerText = "code";
        newAGithub.target = "_blank";
        newAGithub.href = assignments[number].github[i];
        newDivLinks.appendChild(newAGithub);
    };
    info.appendChild(newDivLinks);
    const newDivProgs = document.createElement('div');
    newDivProgs.classList.add("progs");
    const program = assignments[number].programs;
    program.forEach(item => {
        if (item === "jest") {
            const newIcon = document.createElement('img');
            newIcon.src = "./images/jest.svg";
            newDivProgs.appendChild(newIcon);
        } else if(item ==="sass") {
            const newIcon = document.createElement('img');
            newIcon.src = "./images/sass.png";
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
    const explanationText = assignments[number].text;
    explanationText.forEach(text => {
        const newDivText = document.createElement('div');
        newDivText.innerText = text;
        explanation.appendChild(newDivText);
    });    
};

const flag = document.getElementById("flag");
flag.addEventListener("click", () => {
    showInfo(0);
});

const benno = document.getElementById("benno");
benno.addEventListener("click", () => {
    showInfo(1);
});

const colour = document.getElementById("colour");
colour.addEventListener("click", () => {
    showInfo(2);
});

const movie = document.getElementById("movie");
movie.addEventListener("click", () => {
    showInfo(3);
});

const boats = document.getElementById("boats");
boats.addEventListener("click", () => {
    showInfo(4);
});

const listening = document.getElementById("listen");
listening.addEventListener("click", () => {
    showInfo(5);
})

const games = document.getElementById("games");
games.addEventListener("click", () => {
    showInfo(6);
});

const advent = document.getElementById("advent");
advent.addEventListener("click", () => {
    showInfo(7);
});

const challenge = document.getElementById("challenge");
challenge.addEventListener("click", () => {
    showInfo(8);
});

const database = document.getElementById("database");
database.addEventListener("click", () => {
    showInfo(9);
});

const api = document.getElementById("api");
api.addEventListener("click", () => {
    showInfo(10);
});

const todo = document.getElementById("todo");
todo.addEventListener("click", () => {
    showInfo(11);
});

const grow = document.getElementById("grow");
grow.addEventListener("click", () => {
    showInfo(12);
});

const react = document.getElementById("react");
react.addEventListener("click", () => {
    showInfo(13);
});

const shop = document.getElementById("shop");
shop.addEventListener("click", () => {
    showInfo(14);
});

const playlist = document.getElementById("playlist");
playlist.addEventListener("click", () => {
    showInfo(15);
});

const student = document.getElementById("student");
student.addEventListener("click", () => {
    showInfo(16);
});

const portfolio = document.getElementById("portfolio");
portfolio.addEventListener("click", () => {
    showInfo(17);
});
