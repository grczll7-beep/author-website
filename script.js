// Reading list — from Grace's curated shelf in her original site
const READS = [
  { title: 'Demon Copperhead', author: 'Barbara Kingsolver', year: '2022', color: '#826455', note: 'For the way it makes you ache for a place and a person at once.' },
  { title: 'Tomorrow, and Tomorrow, and Tomorrow', author: 'Gabrielle Zevin', year: '2022', color: '#8D8294', note: 'On creativity, collaboration, and all the ways we fail each other.' },
  { title: 'The Midnight Library', author: 'Matt Haig', year: '2020', color: '#6F6D62', note: 'A gentle novel about the unlived life and the one worth choosing.' },
  { title: 'Piranesi', author: 'Susanna Clarke', year: '2020', color: '#695F6D', note: 'Strange and beautiful. A labyrinth you’ll want to stay lost in.' },
  { title: 'A Gentleman in Moscow', author: 'Amor Towles', year: '2016', color: '#9A7565', note: 'For readers who believe that a good room can be a whole world.' },
  { title: 'Housekeeping', author: 'Marilynne Robinson', year: '1980', color: '#4E403A', note: 'The book I return to whenever I need to remember why sentences matter.' },
];

const grid = document.getElementById('readsGrid');
if (grid) {
  grid.innerHTML = READS.map(b => `
    <article class="read-card" style="border-left-color:${b.color}">
      <h3>${b.title}</h3>
      <p class="meta">${b.author} · ${b.year}</p>
      <p class="note">${b.note}</p>
    </article>`).join('');
}

// Mobile nav
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// Newsletter (front-end demo — connect a real service before collecting emails)
const form = document.getElementById('newsletterForm');
const thanks = document.getElementById('newsletterThanks');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    if (!email) return;
    form.hidden = true;
    thanks.hidden = false;
  });
}
