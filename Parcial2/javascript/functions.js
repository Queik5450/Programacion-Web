const drivers = [
    {
        name: "Oscar Piastri",
        team: "McLaren",
        number: 81,
        number_img: "imgs/numbers/oscarpiastri.png",
        photo: "imgs/drivers/oscarpiastri.png",
        country: "Australia",
        flag: "imgs/countries/aus.png",
        color: "#873400"
    },
    {
        name: "Lando Norris",
        team: "McLaren",
        number: 4,
        number_img: "imgs/numbers/landonorris.png",
        photo: "imgs/drivers/landonorris.png",
        country: "Great Britain",
        flag: "imgs/countries/uk.png",
        color: "#873400"
    },
    {
        name: "George Russell",
        team: "Mercedes",
        number: 63,
        number_img: "imgs/numbers/georgerussell.png",
        photo: "imgs/drivers/georgerussell.png",
        country: "Great Britain",
        flag: "imgs/countries/uk.png",
        color: "#007460"
    },
    {
        name: "Kimi Antonelli",
        team: "Mercedes",
        number: 12,
        number_img: "imgs/numbers/kimiantonelli.png",
        photo: "imgs/drivers/kimiantonelli.png",
        country: "Italy",
        flag: "imgs/countries/it.png",
        color: "#007460"
    },
    {
        name: "Max Verstappen",
        team: "Red Bull Racing",
        number: 1,
        number_img: "imgs/numbers/maxverstappen.png",
        photo: "imgs/drivers/maxverstappen.png",
        country: "Netherlands",
        flag: "imgs/countries/ned.png",
        color: "#003282"
    },
    {
        name: "Yuki Tsunoda",
        team: "Red Bull Racing",
        number: 22,
        number_img: "imgs/numbers/yukitsunoda.png",
        photo: "imgs/drivers/yukitsunoda.png",
        country: "Japan",
        flag: "imgs/countries/jap.png",
        color: "#003282"
    },
    {
        name: "Charles Leclerc",
        team: "Ferrari",
        number: 16,
        number_img: "imgs/numbers/charlesleclerc.png",
        photo: "imgs/drivers/charlesleclerc.png",
        country: "Monaco",
        flag: "imgs/countries/mon.png",
        color: "#710007"
    },
    {
        name: "Lewis Hamilton",
        team: "Ferrari",
        number: 44,
        number_img: "imgs/numbers/lewishamilton.png",
        photo: "imgs/drivers/lewishamilton.png",
        country: "Great Britain",
        flag: "imgs/countries/uk.png",
        color: "#710007"
    },
    {
        name: "Alexander Albon",
        team: "Williams",
        number: 23,
        number_img: "imgs/numbers/alexanderalbon.png",
        photo: "imgs/drivers/alexanderalbon.png",
        country: "Thailand",
        flag: "imgs/countries/tha.png",
        color: "#000681"
    },
    {
        name: "Carlos Sainz",
        team: "Williams",
        number: 55,
        number_img: "imgs/numbers/carlossainz.png",
        photo: "imgs/drivers/carlossainz.png",
        country: "Spain",
        flag: "imgs/countries/es.png",
        color: "#000681"
    },
    {
        name: "Liam Lawson",
        team: "Racing Bulls",
        number: 30,
        number_img: "imgs/numbers/liamlawson.png",
        photo: "imgs/drivers/liamlawson.png",
        country: "New Zealand",
        flag: "imgs/countries/nz.png",
        color: "#2244AA"
    },
    {
        name: "Isack Hadjar",
        team: "Racing Bulls",
        number: 6,
        number_img: "imgs/numbers/isackhadjar.png",
        photo: "imgs/drivers/isackhadjar.png",
        country: "France",
        flag: "imgs/countries/fr.png",
        color: "#2244AA"
    },
    {
        name: "Esteban Ocon",
        team: "Haas F1 Team",
        number: 31,
        number_img: "imgs/numbers/estebanocon.png",
        photo: "imgs/drivers/estebanocon.png",
        country: "France",
        flag: "imgs/countries/fr.png",
        color: "#4C4F51"
    },
    {
        name: "Oliver Bearman",
        team: "Haas F1 Team",
        number: 87,
        number_img: "imgs/numbers/oliverbearman.png",
        photo: "imgs/drivers/oliverbearman.png",
        country: "Great Britain",
        flag: "imgs/countries/uk.png",
        color: "#4C4F51"
    },
    {
        name: "Lance Stroll",
        team: "Aston Martin",
        number: 18,
        number_img: "imgs/numbers/lancestroll.png",
        photo: "imgs/drivers/lancestroll.png",
        country: "Canada",
        flag: "imgs/countries/can.png",
        color: "#00482C"
    },
    {
        name: "Fernando Alonso",
        team: "Aston Martin",
        number: 14,
        number_img: "imgs/numbers/fernandoalonso.png",
        photo: "imgs/drivers/fernandoalonso.png",
        country: "Spain",
        flag: "imgs/countries/es.png",
        color: "#00482C"
    },
    {
        name: "Niko Hulkenberg",
        team: "Kick Sauber",
        number: 27,
        number_img: "imgs/numbers/nikohulkenberg.png",
        photo: "imgs/drivers/nikohulkenberg.png",
        country: "Germany",
        flag: "imgs/countries/ger.png",
        color: "#006300"
    },
    {
        name: "Gabriel Bortoleto",
        team: "Kick Sauber",
        number: 5,
        number_img: "imgs/numbers/gabrielbortoleto.png",
        photo: "imgs/drivers/gabrielbortoleto.png",
        country: "Brazil",
        flag: "imgs/countries/br.png",
        color: "#006300"
    },
    {
        name: "Pierre Gasly",
        team: "Alpine",
        number: 10,
        number_img: "imgs/numbers/pierregasly.png",
        photo: "imgs/drivers/pierregasly.png",
        country: "France",
        flag: "imgs/countries/fr.png",
        color: "#005081"
    },
    {
        name: "Franco Colapinto",
        team: "Alpine",
        number: 43,
        number_img: "imgs/numbers/francocolapinto.png",
        photo: "imgs/drivers/francocolapinto.png",
        country: "Argentina",
        flag: "imgs/countries/arg.png",
        color: "#005081"
    }
];

const teams = [
    {
        name: "McLaren",
        logo: "imgs/logos/mclaren.png",
        color: "#DE6900",
        vehicle_img: "imgs/teams/mclaren.png",
        racers: [drivers[0], drivers[1]]
    },
    {
        name: "Mercedes",
        logo: "imgs/logos/mercedes.png",
        color: "#00B89A",
        vehicle_img: "imgs/teams/mercedes.png",
        racers: [drivers[2], drivers[3]]
    },
    {
        name: "Red Bull Racing",
        logo: "imgs/logos/redbullracing.png",
        color: "#2F66BA",
        vehicle_img: "imgs/teams/redbullracing.png",
        racers: [drivers[4], drivers[5]]
    },
    {
        name: "Ferrari",
        logo: "imgs/logos/ferrari.png",
        color: "#C40B23",
        vehicle_img: "imgs/teams/ferrari.png",
        racers: [drivers[6], drivers[7]]
    },
    {
        name: "Williams",
        logo: "imgs/logos/williams.png",
        color: "#1049BF",
        vehicle_img: "imgs/teams/williams.png",
        racers: [drivers[8], drivers[9]]
    },
    {
        name: "Racing Bulls",
        logo: "imgs/logos/racingbulls.png",
        color: "#547DE3",
        vehicle_img: "imgs/teams/racingbulls.png",
        racers: [drivers[10], drivers[11]]
    },
    {
        name: "Haas F1 Team",
        logo: "imgs/logos/haasf1team.png",
        color: "#848789",
        vehicle_img: "imgs/teams/haasf1team.png",
        racers: [drivers[12], drivers[13]]
    },
    {
        name: "Aston Martin",
        logo: "imgs/logos/astonmartin.png",
        color: "#17815C",
        vehicle_img: "imgs/teams/astonmartin.png",
        racers: [drivers[14], drivers[15]]
    },
    {
        name: "Kick Sauber",
        logo: "imgs/logos/kicksauber.png",
        color: "#01A20A",
        vehicle_img: "imgs/teams/kicksauber.png",
        racers: [drivers[16], drivers[17]]
    },
    {
        name: "Alpine",
        logo: "imgs/logos/alpine.png",
        color: "#0087C8",
        vehicle_img: "imgs/teams/alpine.png",
        racers: [drivers[18], drivers[19]]
    }
];

const races = [
    {
        name: "Australia",
        description: "Formula 1 Louis Vuitton Australian Grand Prix 2025",
        round: 1,
        country: "Australia",
        flag: "imgs/countries/aus.png",
        date: "14 - 16 Mar",
        track: "imgs/tracks/australia.png"
    },
    {
        name: "China",
        description: "Formula 1 Heineken Chinese Grand Prix 2025",
        round: 2,
        country: "China",
        flag: "imgs/countries/chi.png",
        date: "21 - 23 Mar",
        track: "imgs/tracks/china.png"
    },
    {
        name: "Japan",
        description: "Formula 1 Lenovo Japanese Grand Prix 2025",
        round: 3,
        country: "Japan",
        flag: "imgs/countries/jap.png",
        date: "04 - 06 Apr",
        track: "imgs/tracks/japan.png"
    },
    {
        name: "Bahrain",
        description: "Formula 1 Gulf Air Bahrain Grand Prix 2025",
        round: 4,
        country: "Bahrain",
        flag: "imgs/countries/bah.png",
        date: "11 - 13 Apr",
        track: "imgs/tracks/bahrain.png"
    },
    {
        name: "Saudi Arabia",
        description: "Formula 1 STC Saudi Arabian Grand Prix 2025",
        round: 5,
        country: "Saudi Arabia",
        flag: "imgs/countries/sa.png",
        date: "18 - 20 Apr",
        track: "imgs/tracks/saudiarabia.png"
    },
    {
        name: "Miami",
        description: "Formula 1 Crypto.com Miami Grand Prix 2025",
        round: 6,
        country: "USA",
        flag: "imgs/countries/usa.png",
        date: "02 - 04 May",
        track: "imgs/tracks/usamiami.png"
    },
    {
        name: "Emilia-Romagna",
        description: "Formula 1 AWS Gran Premio Del Made In Italy E Dell'Emilia-Romagna 2025",
        round: 7,
        country: "Italia",
        flag: "imgs/countries/it.png",
        date: "16 - 18 May",
        track: "imgs/tracks/italyimola.png"
    },
    {
        name: "Monaco",
        description: "Formula 1 Tag Heuer Monaco Grand Prix 2025",
        round: 8,
        country: "Monaco",
        flag: "imgs/countries/mon.png",
        date: "23 - 25 May",
        track: "imgs/tracks/monaco.png"
    },
    {
        name: "Spain",
        description: "Formula 1 Aramco Gran Premio De España 2025",
        round: 9,
        country: "Spain",
        flag: "imgs/countries/es.png",
        date: "30 - 01 Jun",
        track: "imgs/tracks/spain.png"
    },
    {
        name: "Canada",
        description: "Formula 1 Pirelli Grand Prix Du Canada 2025",
        round: 10,
        country: "Canada",
        flag: "imgs/countries/can.png",
        date: "13 - 15 Jun",
        track: "imgs/tracks/canada.png"
    },
    {
        name: "Austria",
        description: "Formula 1 MSC Austrian Grand Prix 2025",
        round: 11,
        country: "Austria",
        flag: "imgs/countries/au.png",
        date: "27 - 29 Jun",
        track: "imgs/tracks/austria.png"
    },
    {
        name: "Great Britain",
        description: "Formula 1 Qatar Airways British Grand Prix 2025",
        round: 12,
        country: "Great Britain",
        flag: "imgs/countries/uk.png",
        date: "04 - 06 Jul",
        track: "imgs/tracks/greatbritain.png"
    },
    {
        name: "Belgium",
        description: "Formula 1 Moët & Chandon Belgian Grand Prix 2025",
        round: 13,
        country: "Belgium",
        flag: "imgs/countries/bel.png",
        date: "25 - 27 Jul",
        track: "imgs/tracks/belgium.png"
    },
    {
        name: "Hungary",
        description: "Formula 1 Lenovo Hungarian Grand Prix 2025",
        round: 14,
        country: "Hungary",
        flag: "imgs/countries/hun.png",
        date: "01 - 03 Aug",
        track: "imgs/tracks/hungary.png"
    },
    {
        name: "Netherlands",
        description: "Formula 1 Heineken Dutch Grand Prix 2025",
        round: 15,
        country: "Netherlands",
        flag: "imgs/countries/ned.png",
        date: "29 - 31 Aug",
        track: "imgs/tracks/netherlands.png"
    },
    {
        name: "Italy",
        description: "Formula 1 Pirelli Gran Premio D'Italia 2025",
        round: 16,
        country: "Italy",
        flag: "imgs/countries/it.png",
        date: "05 - 07 Sep",
        track: "imgs/tracks/italymonza.png"
    },
    {
        name: "Azerbaijan",
        description: "Formula 1 Qatar Airways Azerbaijan Grand Prix 2025",
        round: 17,
        country: "Azerbaijan",
        flag: "imgs/countries/az.png",
        date: "19 - 21 Sep",
        track: "imgs/tracks/azerbaijan.png"
    },
    {
        name: "Singapore",
        description: "Formula 1 Singapore Airlines Singapore Grand Prix 2025",
        round: 18,
        country: "Singapore",
        flag: "imgs/countries/si.png",
        date: "03 - 05 Oct",
        track: "imgs/tracks/singapore.png"
    },
    {
        name: "United States",
        description: "Formula 1 MSC Cruises United States Grand Prix 2025",
        round: 19,
        country: "United States",
        flag: "imgs/countries/usa.png",
        date: "17 - 19 Oct",
        track: "imgs/tracks/usacota.png"
    },
    {
        name: "Mexico",
        description: "Formula 1 Gran Premio De La Ciudad De México 2025",
        round: 20,
        country: "Mexico",
        flag: "imgs/countries/mx.png",
        date: "24 - 26 Oct",
        track: "imgs/tracks/mexico.png"
    },
    {
        name: "Brazil",
        description: "Formula 1 MSC Cruises Grande Premio Do São Paulo 2025",
        round: 21,
        country: "Brazil",
        flag: "imgs/countries/br.png",
        date: "07 - 09 Nov",
        track: "imgs/tracks/brazil.png"
    },
    {
        name: "Las Vegas",
        description: "Formula 1 Heineken Las Vegas Grand Prix 2025",
        round: 22,
        country: "United States",
        flag: "imgs/countries/usa.png",
        date: "20 - 22 Nov",
        track: "imgs/tracks/usavegas.png"
    },
    {
        name: "Qatar",
        description: "Formula 1 Qatar Airways Qatar Grand Prix 2025",
        round: 23,
        country: "Qatar",
        flag: "imgs/countries/qa.png",
        date: "28 - 30 Nov",
        track: "imgs/tracks/qatar.png"
    },
    {
        name: "Abu Dhabi",
        description: "Formula 1 Ethiad Airways Abu Dhabi Grand Prix 2025",
        round: 24,
        country: "United Arab Emirates",
        flag: "imgs/countries/uae.png",
        date: "05 - 07 Dec",
        track: "imgs/tracks/abudhabi.png"
    }
];

function renderTeams() {
    const container = document.getElementById('teams-container');
    container.innerHTML = '';

    teams.forEach(team => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.style.backgroundColor = team.color;
        card.style.background = `linear-gradient(135deg, ${team.color} 0%, #15151E 100%)`;

        const driversHtml = team.racers.map(d => `
            <div class="team-driver-item">
                <img src="${d.photo}" alt="${d.name}" class="team-driver-photo">
                <span class="team-driver-name">${d.name}</span>
            </div>
        `).join('');

        card.innerHTML = `
            <div class="team-header">
                <div class="team-info">
                    <h3 class="team-name">${team.name}</h3>
                    <div class="team-drivers-container">
                        ${driversHtml}
                    </div>
                </div>
                <div class="team-logo-wrapper">
                    <img src="${team.logo}" alt="${team.name} Logo" class="team-logo">
                </div>
            </div>
            <img src="${team.vehicle_img}" alt="${team.name} Car" class="team-car">
        `;
        container.appendChild(card);
    });
}

function renderDrivers() {
    const container = document.getElementById('drivers-container');
    container.innerHTML = '';

    const teamFilter = document.getElementById('drivers-team-filter');
    const selectedTeam = teamFilter ? teamFilter.value : 'all';

    const filteredDrivers = selectedTeam === 'all'
        ? drivers
        : drivers.filter(driver => driver.team === selectedTeam);

    filteredDrivers.forEach(driver => {
        const card = document.createElement('div');
        card.className = 'driver-card';
        card.style.background = `linear-gradient(135deg, ${driver.color} 0%, #15151E 100%)`;

        const nameParts = driver.name.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ');

        card.innerHTML = `
            <div class="driver-info">
                <div class="driver-names">
                    <span class="driver-firstname">${firstName}</span>
                    <span class="driver-lastname">${lastName}</span>
                </div>
                <div class="driver-team">${driver.team}</div>
                <div class="driver-number">${driver.number}</div>
                <img src="${driver.flag}" alt="${driver.country}" class="driver-flag">
            </div>
            <img src="${driver.photo}" alt="${driver.name}" class="driver-photo">
        `;
        container.appendChild(card);
    });
}

function renderRaces() {
    const container = document.getElementById('races-container');
    container.innerHTML = '';

    races.forEach(race => {
        const card = document.createElement('div');
        card.className = 'race-card';

        card.innerHTML = `
            <div class="race-info">
                <div class="race-round">ROUND ${race.round}</div>
                <div class="race-country-wrapper">
                    <img src="${race.flag}" alt="${race.country}" class="race-flag">
                    <h3 class="race-country">${race.country}</h3>
                </div>
                <div class="race-description">${race.description}</div>
            </div>
            <div class="race-footer">
                <div class="race-date-box">
                    <i class="fa-solid fa-flag-checkered"></i> ${race.date}
                </div>
                <img src="${race.track}" alt="${race.name} Track" class="race-track">
            </div>
        `;
        container.appendChild(card);
    });
}

function filterContent(filter) {
    const teamsSection = document.getElementById('teams-section');
    const driversSection = document.getElementById('drivers-section');
    const racesSection = document.getElementById('races-section');

    if (filter === 'all') {
        teamsSection.style.display = 'block';
        driversSection.style.display = 'block';
        racesSection.style.display = 'block';
    } else if (filter === 'teams') {
        teamsSection.style.display = 'block';
        driversSection.style.display = 'none';
        racesSection.style.display = 'none';
    } else if (filter === 'drivers') {
        teamsSection.style.display = 'none';
        driversSection.style.display = 'block';
        racesSection.style.display = 'none';
    } else if (filter === 'races') {
        teamsSection.style.display = 'none';
        driversSection.style.display = 'none';
        racesSection.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderTeams();
    const teamFilter = document.getElementById('drivers-team-filter');
    if (teamFilter) {
        const teamNames = [...new Set(drivers.map(d => d.team))];
        teamNames.forEach(team => {
            const option = document.createElement('option');
            option.value = team;
            option.textContent = team;
            teamFilter.appendChild(option);
        });
        teamFilter.addEventListener('change', () => {
            renderDrivers();
        });
    }
    renderDrivers();
    renderRaces();

    const carouselImages = document.querySelectorAll('.carousel-img');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    let currentIndex = 0;

    function showCarouselImage(index) {
        carouselImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        carouselDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    if (carouselDots.length > 0 && carouselImages.length > 0) {
        carouselDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.getAttribute('data-index'));
                currentIndex = idx;
                showCarouselImage(currentIndex);
            });
        });
        setInterval(() => {
            currentIndex = (currentIndex + 1) % carouselImages.length;
            showCarouselImage(currentIndex);
        }, 5000);
    }

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            filterContent(filter);
        });
    });
});
