const assignments = [
    {
        title: "Hang de vlag uit",
        image: "./images/vlaggen.jpg",
        website: "https://quizzical-lovelace-909ccf.netlify.app/",
        github: "https://github.com/sandermeijer1972/Sander_Meijer-Hang_De_Vlag_Uit",
        programs: ["html", "css"],
        text: "Dit was de eerste opdracht die nagekeken werd. Deze website is alleen met HTML en CSS gemaakt, en moest onderdelen als grid, flexbox en mediaqueries bevatten."
    },
    {
        title: "Benno het Bernertje",
        image: "./images/benno.jpg",
        website: "https://benno-test-kankervaccin.netlify.app/",
        github: "https://github.com/sandermeijer1972/benno",
        programs: ["html", "css"],
        text: "Onze hond doet mee aan een onderzoek naar een vaccin tegen kanker. Omdat we daar veel vragen over kregen (en nog steeds krijgen) heb ik daar een pagina voor gemaakt, met daarop het hele verhaal. Gemaakt met HTML en CSS."
    },
    {
        title: "Kleurentoggle",
        image: "./images/kleurentoggle.jpg",
        website: "https://hungry-ptolemy-2e50ff.netlify.app/",
        github: "https://github.com/sandermeijer1972/Sander_Meijer-Kleurentoggle",
        programs: ["html", "css", "javascript"],
        text: "De eerste grotere opdracht met JavaScript. Hierbij moest gebruik worden gemaakt van DOM-manipulatie. Met behulp van event-listeners moesten er classes toegevoegd en verwijderd worden. Met transities moest het er wat flitsender uitzien allemaal."
    },
    {
        title: "Filmzoeker",
        image: "./images/filmzoeker.jpg",
        website: "https://admiring-goldberg-8a03d3.netlify.app/",
        github: "https://github.com/sandermeijer1972/Sander_Meijer-filmzoeker",
        programs: ["html", "css", "javascript"],
        text: "Bij deze opdracht moest je elementen toevoegen aan de DOM. Alle data stond in een database, en daar moest je ook wat dingen uit filteren."
    },
    {
        title: "1000-footers",
        image: "./images/greatlakes.jpg",
        website: "https://great-lakes-1000footers.netlify.app/",
        github: "https://github.com/sandermeijer1972/GreatLakes",
        programs: ["html", "css", "javascript"],
        text: "Nadat ik een tijdje bezig was met React, heb ik voor mezelf nog een website gemaakt met Vanilla JavaScript. Het is de bedoeling dat ik deze zelfde website ook nog ga maken met React."
    },
    {
        title: "Grote Database",
        image: "./images/database.jpg",
        website: "https://romantic-thompson-cbba2b.netlify.app/",
        github: "https://github.com/sandermeijer1972/grote_arrays",
        programs: ["html", "css", "javascript"],
        text: "Bij deze opdracht zat een hele grote database. Voor elke sub-opdracht moest je gaan filteren om de juiste gegevens door middel van DOM-manipulatie op de pagina te krijgen. Je leerde hier veel over array-methods, en dan met name map, filter en reduce."
    },
    {
        title: "Advent of Code",
        image: "./images/advent.jpg",
        website: "https://adventofcode.com/2021",
        github: "https://github.com/sandermeijer1972/Advent_of_Code_2021",
        programs: ["javascript"],
        text: "Vanuit Winc Academy werd je aangemoedigd om aan de jaarlijkse Advent of Code mee te doen. Ik ben er fanatiek aan begonnen, maar merkte al snel dat er wel heel veel tijd in ging zitten. Dus daarna mezelf de opdracht gegeven om tot uiterlijk 11 uur er mee bezig te zijn, en daarna 's avonds pas weer. Niet alle puzzels waren te doen, dus ik kan er nog verder aan coderen."
    },
    {
        title: "API-fun",
        image: "./images/apifun.jpg",
        website: "https://knoppen-pagina.netlify.app/",
        github: "https://github.com/sandermeijer1972/API_fun",
        programs: ["html", "css", "javascript"],
        text: "Bij deze opdracht moest je je data via een API binnen zien te krijgen. Omdat ik moeite had met deze stof, heb ik er uiteindelijk 10 gebruikt. Bij Winc Academy word je ook gestimuleerd om anderen te helpen met coderings-problemen. Op het moment dat ik met deze opdracht bezig was, hielp ik iemand met transities. Omdat die stof bij mij ook aardig weggezakt was, heb ik dat bij deze opdracht weer eens flink opgehaald."
    },
    {
        title: "To-Do List",
        image: "./images/todolist.jpg",
        website: "https://sanders-opdrachten.netlify.app/index.html",
        github: "https://github.com/sandermeijer1972/Sander_Meijer-To_Do_List",
        programs: ["html", "css", "javascript"],
        text: "Bij deze opdracht moest je een RESTful-API clonen, zodat je alle handelingen lokaal kon fetchen. De bedoeling van deze opdracht was dat je liet zien dat je GET, POST, PUT en DELETE commando's kon geven aan een API. Omdat de 'server' dus lokaal draait, kon er hier geen website van gemaakt worden. Dus in dit geval heb ik een pagina met wat screenshots gemaakt."
    },
    {
        title: "TDD Groentetuin",
        image: "./images/groentetuin.jpg",
        website: "https://sanders-groentetuin.netlify.app/",
        github: "https://github.com/sandermeijer1972/Sander_Meijer-TDD_groentetuin",
        programs: ["html", "css", "javascript", "jest"],
        text: "Bij deze opdracht ging het om Test Driven Development. Omdat ik graag aan anderen wil laten zien wat ik zoal maak tijdens de opleiding, heb ik er ook een hele front-end aan vast gemaakt. Je kan dus zelf een groentetuin beginnen, en een schatting maken wat je opbrengst zal zijn."
    },
    {
        title: "React",
        image: "./images/react.jpg",
        website: "https://elegant-galileo-988d19.netlify.app/",
        github: "https://github.com/sandermeijer1972/react-module-8/tree/master/src/opdrachten/combi",
        programs: ["react", "css"],
        text: "Bij het leren van React, kreeg je steeds korte lessen, met veel verschillende kleine opdrachten. Omdat je het met Scrimba leerde, sloeg je je eigen code eigenlijk niet op. Daarom heb ik wat van die opdrachten daarna ook nog gewoon in Visual Studio Code gemaakt, en er een menu bij gemaakt. Dit was nog voordat ik het Router-principe leerde in React."
    },
    {
        title: "Boodschappenlijstje",
        image: "./images/boodschappen.jpg",
        website: "https://boodschappendoen.netlify.app/",
        github: "https://github.com/sandermeijer1972/react-module-8/tree/master/src/opdrachten/boodschappenlijst",
        programs: ["react", "css"],
        text: "De eerste react-opdracht die je in Visual Studio Code moest maken. Een erg leuke opdracht, maar wel moeilijk."
    },
    {
        title: "Playlist",
        image: "./images/playlist.jpg",
        website: "https://sanders-playlist.netlify.app/",
        github: "https://github.com/sandermeijer1972/Sander_Meijer-Lil-Playlist",
        programs: ["react", "css"],
        text: "Bij deze opdracht moest je ook gebruik maken van React-Router. Omdat het een opdracht met muziek was, was dit echt een hele leuke opdracht."
    },
    {
        title: "Portfolio",
        image: "./images/portfolio.jpg",
        website: "https://sandermeijer.netlify.app/",
        github: "https://github.com/sandermeijer1972/portfolio",
        programs: ["html", "css", "javascript"],
        text: "Ook de code van deze portfolio-pagina deel ik hier. Ik kijk graag naar filmpjes van Kevin Powell, de CSS-koning. Ik hou zelf ook veel van CSS, je raakt daarbij nooit uitgekeken op de mogelijkheden, en elke dag ontdek je wel weer wat nieuws."
    },    
];
