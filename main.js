// Navbar 
const navbarHTML = `
  <div class="navbar">
    <img src="images/favicon.png" width=auto height="90%">
    <div class="navbar-links">
      <a href="index.html">Om oss</a>
      <a href="medlemmer.html">Medlemmer</a>
    </div>
  </div>
`;

// Inject navbar at the top of the body
function injectNavbar() {
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  // Highlight active link
  document.querySelectorAll('.navbar a').forEach(link => {
    if (window.location.pathname.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
}

// Footer 
const footerHTML = `
  <div class="footer">
    <p>Gruppe 21</p>
    <div class="footer-links">
      <a href="index.html">Om oss</a> 
      <a href="medlemmer.html">Medlemmer</a>
    </div>
  </div>
`;

function injectFooter() {
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  document.querySelectorAll('.footer').forEach(link => {
    if (window.location.pathname.endsWith(link.getAttribute('href'))){
      link.classList.add('active');
    }
  });
}

// Members data for medlemmer.html
const members = [
  {
    name: "Niri August Lorentzen",
    role: "Prosjektleder & Backend utvikling",
    age: `21`,
    origin: `Lillestrøm`,
    previewDescription: `Interessert i ledelse og backend`,
    description: `Jeg er lederen for gruppen, og har stor interesse for backend og frontend utvikling.
     Jeg har alltid hatt stor interesse for data og IT, og gjennom studiet har jeg fått erfaring og kunnskap innen organisering av prosjektarbeid, frontend utvikling og backend utvikling.
     <br>Her er det backend og databasearbeid jeg har likt mest og fått best resultater ifra, med bruk av teknologier som PostgreSQL, Docker og Entity Framework.
     Jeg har også mye interesse for frontend og har også drevet en del med Figma for designutvikling under prosjektarbeid. 
     I løpet av prosjektene og innleveringer har jeg også erkjent gode erfaring med blant annet C#, Python og Java.
    <strong><br><br> Jeg trives godt med prosjektarbeid og gleder meg til bachelorprosjekt!</strong>
    `,
    picture: "images/niri.jpg",
    linkedin: "https://www.linkedin.com/in/niri-a-lorentzen-409916381/",
    mail: "niri.lorentzen@gmail.com",
    skills: ["C#", "PostGreSQL", "Python"]
  },
  {
    name: "Eivind Hovden Breivik",
    role: "Backend utvikler & Scrum Master",
    age: `25`,
    origin: `Kongsberg`,
    previewDescription: `Engasjert i godt samarbeid og effektivitet`,
    description: ` Jeg trives godt med prosjektarbeid, og å sørge for at både arbeidsprosessen og utviklingen blir utført effektivt og med god kvalitet. 
    Der jeg setter fokus på personer i sentrum, som er noe jeg tar vidre i min rolle som Scrum Master. 
    Jeg har stor interesse i nye teknologier, og studiet har gitt meg nyttig erfaring i fullstack-utviling både teoretisk og praktisk.
    Denne erfaringen har vist meg at min største lidenskap er backend-utvikling.
    <br><br>
    Studiet har også gitt meg mulighet å bidra til flere prosjekter som har tatt i bruk en rekke ulike teknologier slik som: Java, C#, Python, PostgreSQL og nylig også PHP.
    Videre har disse prosjektene gitt meg en spesiell interesse for optimalisering av kode og programmer, fordi jeg har sett hvor avgjørende og interessant dette er for både utviklere og produktet.    
    I tilegg har jeg også god erfaring med teambygging, formidlingsevne og kreativ problemløsning fra tidligere utdanning og jobb.
    <br><br>
    <strong>Jeg ser frem til vidre samarbeid og nye opplevelser!</strong>
    `,
    picture: "images/EivindProfBilde.jpg",
    linkedin: "https://www.linkedin.com/in/eivind-hovden-breivik-979241381/",
    mail: "eivind.h.breivik@gmail.com",
    skills: ["Scrum", "PostGreSQL", "C#"]
  },
  {
    name: "William Jondahl",
    role: "Sikkerhetsansvarlig",
    age: `21`,
    origin: `Drammen`,
    previewDescription: `Interessert i cybersikkerhet og utvikling`,
    description: `I løpet av de siste årene har jeg blitt fascinert av cybersikkerhet og kunstig intelligens, ettersom disse er felter i kontinuerlig utvikling med stadig nye gjennombrudd.
    <br> Jeg har praktisk erfaringen innen C#, Java og PostgreSQL med fokus på webutvikling. 
    <br> Jeg vil gjerne utvikle ferdighetene mine, samt utforske banebrytende teknologier innen sikkerhet og kunstig intelligens gjennom bachelorprosjektet.
    <br> Gjennom studiene har jeg tilegnet team-arbeidsferdigheter som smidig utvikling med Scrum og versjonskontroll med Git.
    <br><strong> Jeg gleder meg til å gjøre det aller meste ut av bachelorprosjektet sammen med gode lagkamerater! </strong>`,
    picture: "images/williamj.jpg",
    linkedin: "https://www.linkedin.com/in/william-jondahl-22b571382/",
    mail: "williamjondahl@gmail.com",
    skills: ["Security", "AI", "Java"]
  },
  {
    name: "Carl Andreas Arnegard",
    role: "Frontend utvikler",
    age: `21`,
    origin: `Drammen`,
    previewDescription: `Interesse for teknologi, design og programmering`,
    description: `Jeg har lenge vært interessert i teknologi og programmering, 
    <br>og har erfaring med flere programmeringsspråk som Python, Java, C# og jeg har også jobbet med webutvikling ved bruk av HTML, CSS og JavaScript. I tillegg har jeg lyst til å prøve meg på React i fremtiden.
    <br><br>Jeg studerer nå IT og Informasjonssystemer ved Universitetet i Agder, hvor jeg har fått muligheten til å jobbe med ulike prosjekter som har styrket mine ferdigheter innen både frontend- og backend-utvikling. Jeg har en interesse i design, men fungerer også som en fullstack utvikler. 
    <br><br><strong>Jeg ser frem til å jobbe med spennende prosjekter og utvikle mine ferdigheter videre.</strong>`,
    picture: "images/CarlBilde.JPG",
    linkedin: "https://www.linkedin.com/in/carl-andreas-arnegard-993996214/",
    mail: "carl.andreas.arnegard@gmail.com",
    skills: ["CSS", "C#", "UX"]
  },
  {
    name: "Nicolay Lehne-Torp",
    role: "Fullstack utvikler",
    age: `21`,
    origin: `Drammen`,
    previewDescription: `Interessert i utvikling og teamarbeid`,
    description: `Jeg har veldig lenge vært interessert i teknologi, noe som har utviklet seg videre til en interesse for utvikling og programmering. Gjennom studiet har jeg anskaffet meg kunnskap og erfaring innen både frontend og backend utvikling. Det jeg har jobbet mest med er HTML, CSS, Java, JavaScript, Python, C#, PostgreSQL, Git og nå også PHP. 
    <br>Jeg har jobbet med flere prosjekter og oppgaver igjennom studiet som har vist meg at jeg liker å jobbe i team, samt styrket min interesse for utvikling. 
    <br><strong>Jeg gleder meg til å få gjort et bra bachelorprosjekt som hjelper meg å utvikle meg videre.</strong>`,
    picture: "images/NicolayBilde.JPG",
    linkedin: "https://www.linkedin.com/in/nicolay-lehne-torp-14b62a2ba/",
    mail: "lehnenicolay@gmail.com",
    skills: ["CSS", "Python", "JS"]
  }
];

// Render members for medlemmer.html
function renderMembers() {
  const container = document.querySelector('.medlem_oversikt');
  if (!container) return;

  members.forEach(m => {
    const div = document.createElement('div');
    div.className = 'medlem_instans';
    div.innerHTML = `
      <img class="Personbilde" src="${m.picture}" alt="Bilde av ${m.name}">
      <div class="medlem_instans_tekst_boks">
        <div>
          <h2><strong>${m.name}</strong></h2>
          <h3><em>${m.role}</em></h3>
          <hr class="tekst-divider">
          <h3> ${m.age} år - Fra ${m.origin}</h3>         
          ${m.previewDescription}
        </div>
      </div>

      <div class="medlem_attributter">
        <text>${m.skills[0]}</text>
        <text>${m.skills[1]}</text>
        <text>${m.skills[2]}</text>
      </div>
      <div class="kontaktinfo">
        <hr class="tekst-divider">
          <a href="${m.linkedin}" target="_blank">
            <div class="linkedin">
              <text>Linked</text>
              <img src="images/LinkedIn_icon.svg">
            </div>
          </a>
          <a href="mailto:${m.mail}"><text class="mail">${m.mail}</text></a>
        </hr>
      </div>      
    `;

    // modal event listener
    div.addEventListener("click", () => openModal(m));

    container.appendChild(div);
  });
}

function openModal(m) {
  const modal = document.getElementById("memberModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <img class="personbilde_modal" src="${m.picture}" alt="Bilde av ${m.name}">
    <h2>${m.name}</h2>
    <h3>${m.role}</h3>
    <p><strong>Alder:</strong> ${m.age} år</p>
    <p><strong>Fra:</strong> ${m.origin}</p>
    <p><strong>Epost:</strong> ${m.mail}</p>
    <hr>
    <p>${m.description}</p>  
  `;

  modal.classList.add("show");
}

function closeModal() {
  const modal = document.getElementById("memberModal");
  modal.classList.remove("show");
}



// On DOMContentLoaded, inject navbar and render members if needed
window.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  renderMembers();
  injectFooter();

  const modal = document.getElementById("memberModal");
  const closeBtn = document.querySelector(".close");

  closeBtn.onclick = () => closeModal();
  window.onclick = (event) => {
    if (event.target === modal) {
      closeModal();
    }
  };
});