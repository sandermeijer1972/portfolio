const assignments = [
    {
        title: "Hang de vlag uit",
        image: "./images/vlaggen.jpg",
        website: ["https://quizzical-lovelace-909ccf.netlify.app/"],
        github: ["https://github.com/sandermeijer1972/Sander_Meijer-Hang_De_Vlag_Uit"],
        programs: ["html", "css"],
        text: "Dit was de eerste opdracht die nagekeken werd door een leraar van Winc Academy. Deze website is alleen met HTML en CSS gemaakt, en moest onderdelen als grid, flexbox en mediaqueries bevatten. Het onderwerp moest je zelf bedenken, en de website moest ook meerdere pagina's hebben."
    },
    {
        title: "Benno het Bernertje",
        image: "./images/benno.jpg",
        website: ["https://benno-test-kankervaccin.netlify.app/"],
        github: ["https://github.com/sandermeijer1972/benno"],
        programs: ["html", "css"],
        text: "Onze hond doet mee aan een onderzoek naar een vaccin tegen kanker. Omdat we daar veel vragen over kregen (en nog steeds krijgen) heb ik daar een pagina voor gemaakt, met daarop het hele verhaal. Gemaakt met HTML en CSS, en zoals aangeleerd bij Winc Academy, mobile first."
    },
    {
        title: "Kleurentoggle",
        image: "./images/kleurentoggle.jpg",
        website: ["https://hungry-ptolemy-2e50ff.netlify.app/"],
        github: ["https://github.com/sandermeijer1972/Sander_Meijer-Kleurentoggle"],
        programs: ["html", "css", "javascript"],
        text: "De eerste grotere opdracht met JavaScript. Hierbij moest gebruik worden gemaakt van DOM-manipulatie. Met behulp van event-listeners moesten er classes toegevoegd en verwijderd worden. Met transities moest het er wat flitsender uitzien allemaal. Door de goede feedback van de leraren bij Winc Academy leer je dat er een hoop dingen vereenvoudigd kunnen worden, en dat je niet steeds code herhaalt."
    },
    {
        title: "Filmzoeker",
        image: "./images/filmzoeker.jpg",
        website: ["https://admiring-goldberg-8a03d3.netlify.app/"],
        github: ["https://github.com/sandermeijer1972/Sander_Meijer-filmzoeker"],
        programs: ["html", "css", "javascript"],
        text: "Bij deze opdracht moest je elementen vanuit een database toevoegen aan de DOM. Door gebruik te maken van de input van de gebruiker moest je ook de juiste dingen er uit zien te filteren. Ik heb wel zelf de database met filmtitels aangepast, omdat het genre wat meegegeven werd mij totaal niet boeide. Gelukkig doen ze daar bij Winc Academy niet moeilijk over, het gaat er tenslotte om dat je je geleerde vaardigheden kan laten zien."
    },
    {
        title: "1000-footers",
        image: "./images/greatlakes.jpg",
        website: ["https://great-lakes-1000footers.netlify.app/", "https://great-lakes-1000footers-react.netlify.app"],
        github: ["https://github.com/sandermeijer1972/GreatLakes", "https://github.com/sandermeijer1972/greatlakesreact"],
        programs: ["html", "css", "javascript", "react"],
        text: "Nadat ik een tijdje bezig was met React, heb ik voor mezelf nog een website gemaakt met 'gewoon' JavaScript. Wel weer even inkomen, want je moet hier echt stap voor stap te werk gaan om iets in de DOM te plaatsen. Het was mijn bedoeling dat ik deze zelfde website ook nog ging maken met React, en dat heb ik inmiddels gedaan. Dus je kunt de twee websites met elkaar vergelijken."
    },
    {
        title: "Grote Database",
        image: "./images/database.jpg",
        website: ["https://romantic-thompson-cbba2b.netlify.app/"],
        github: ["https://github.com/sandermeijer1972/grote_arrays"],
        programs: ["html", "css", "javascript"],
        text: "Bij deze opdracht zat een hele grote database. Voor elke sub-opdracht moest je gaan filteren om de juiste gegevens door middel van DOM-manipulatie op de pagina te krijgen. Je leerde hier veel over array-methods, en dan met name .map, .filter en .reduce."
    },
    {
        title: "Advent of Code",
        image: "./images/advent.jpg",
        website: ["https://adventofcode.com/2021"],
        github: ["https://github.com/sandermeijer1972/Advent_of_Code_2021"],
        programs: ["javascript"],
        text: "Vanuit Winc Academy werd je aangemoedigd om aan de jaarlijkse Advent of Code mee te doen. Ik ben er fanatiek aan begonnen, maar merkte al snel dat er wel heel veel tijd in ging zitten. Dus daarna mezelf de opdracht gegeven om tot uiterlijk 11 uur er mee bezig te zijn, en daarna 's avonds pas weer. Niet alle puzzels waren te doen, dus ik kan er nog verder aan coderen."
    },
    {
        title: "API-fun",
        image: "./images/apifun.jpg",
        website: ["https://knoppen-pagina.netlify.app/"],
        github: ["https://github.com/sandermeijer1972/API_fun"],
        programs: ["html", "css", "javascript"],
        text: "Bij deze opdracht moest je je data via een API binnen zien te krijgen. Omdat ik moeite had met deze stof, heb ik er uiteindelijk 10 gebruikt. Bij Winc Academy word je ook gestimuleerd om anderen te helpen met coderings-problemen. Op het moment dat ik met deze opdracht bezig was, hielp ik iemand met transities. Omdat die stof bij mij ook aardig weggezakt was, heb ik dat bij deze opdracht weer eens flink opgehaald en er een over-de-top pagina van gemaakt. Door wat kleine dingetjes die bij Netlify niet goed gaan, werken niet alle knoppen even goed, dat is provisorisch opgelost, maar werkt niet altijd. Wellicht dat ik hiervoor in de toekomst nog iets aan kan veranderen."
    },
    {
        title: "To-Do List",
        image: "./images/todolist.jpg",
        website: ["https://takenpakket.netlify.app/index.html"],
        github: ["https://github.com/sandermeijer1972/Sander_Meijer-To_Do_List"],
        programs: ["html", "css", "javascript"],
        text: "Bij deze opdracht moest je een RESTful-API clonen, zodat je alle handelingen lokaal kon fetchen. De bedoeling van deze opdracht was dat je liet zien dat je GET, POST, PUT en DELETE commando's kon geven aan een API. Omdat de 'server' dus lokaal draait, kon er hier geen website van gemaakt worden. Dus in dit geval heb ik een pagina met wat screenshots gemaakt."
    },
    {
        title: "TDD Groentetuin",
        image: "./images/groentetuin.jpg",
        website: ["https://sanders-groentetuin.netlify.app/"],
        github: ["https://github.com/sandermeijer1972/Sander_Meijer-TDD_groentetuin"],
        programs: ["html", "css", "javascript", "jest"],
        text: "Bij deze opdracht ging het om Test Driven Development. Met Jest moest je je functies testen of ze goed werkten. Omdat ik graag aan anderen wil laten zien wat ik zoal maak tijdens de opleiding, en er met Jest niet zoveel te zien valt op een website, heb ik er ook een hele front-end aan vast gemaakt. Je kan nu dus zelf een groentetuin beginnen, en een schatting maken wat je opbrengst zal zijn bij wisselende factoren."
    },
    {
        title: "React",
        image: "./images/react.jpg",
        website: ["https://elegant-galileo-988d19.netlify.app/"],
        github: ["https://github.com/sandermeijer1972/react-module-8/tree/master/src/opdrachten/combi"],
        programs: ["react", "css"],
        text: "Bij het leren van React, kreeg je steeds korte lessen, met veel verschillende kleine opdrachten. Omdat je het met Scrimba leerde, sloeg je je eigen code eigenlijk niet op. Daarom heb ik later ook nog gewoon in Visual Studio Code wat van deze opdrachten gemaakt, en er een menu bij gemaakt. Dit was nog voordat ik het Router-principe leerde in React."
    },
    {
        title: "Boodschappenlijstje",
        image: "./images/boodschappen.jpg",
        website: ["https://boodschappendoen.netlify.app/"],
        github: ["https://github.com/sandermeijer1972/react-module-8/tree/master/src/opdrachten/boodschappenlijst"],
        programs: ["react", "css"],
        text: "De eerste React-opdracht die je in Visual Studio Code moest maken. Een erg leuke opdracht, maar wel moeilijk. Vooral het doorgeven van props was hier een flinke heuvel die overwonnen moest worden. Ik ben ook wel een tijdje bezig geweest om het turven op je boodschappenbriefje goed te krijgen."
    },
    {
        title: "Playlist",
        image: "./images/playlist.jpg",
        website: ["https://sanders-playlist.netlify.app/"],
        github: ["https://github.com/sandermeijer1972/Sander_Meijer-Lil-Playlist"],
        programs: ["react", "css"],
        text: "Bij deze opdracht moest je ook gebruik maken van React-Router. Je mocht hier ook kiezen om de opdracht met redux te maken. Het principe daarvan begrijp ik wel, maar om het daadwerkelijk in elkaar te zetten, dat lukte niet. Dus het is bij React gebleven. Omdat het een opdracht over muziek was, was dit echt een hele leuke opdracht."
    },
    {
        title: "Portfolio",
        image: "./images/portfolio.jpg",
        website: ["https://sandermeijer.netlify.app/"],
        github: ["https://github.com/sandermeijer1972/portfolio"],
        programs: ["html", "css", "javascript"],
        text: "Ook de code van deze portfolio-pagina deel ik hier. Ik heb zoveel mogelijk technieken proberen te gebruiken die ik geleerd heb. Wat mij het meest uitdaagt met coderen is hoe het er uiteindelijk uit komt te zien. Ik kijk graag naar filmpjes van Kevin Powell, de ongekroonde CSS-koning, en daar doe ik veel ideeën op om ook eens te proberen te maken. Je raakt eigenlijk nooit uitgekeken op de mogelijkheden, en elke dag ontdek je wel weer wat nieuws."
    },    
];
