// A Few of My Favorites — Grace's picks
const READS = [
  { title: 'Little Women', author: 'Louisa May Alcott', year: '1868', color: '#826455', note: 'The March sisters — Meg, Jo, Beth, and Amy — growing up in Civil War-era New England.' },
  { title: 'The Night Circus', author: 'Erin Morgenstern', year: '2011', color: '#33313B', note: 'A wandering magical circus that only opens at night, and the duel — and love story — behind it.' },
  { title: 'Garden Spells', author: 'Sarah Addison Allen', year: '2007', color: '#6F7D5C', note: 'Two estranged sisters, an enchanted apple tree, and a little magic in a Southern town.' },
  { title: 'The Penderwicks', author: 'Jeanne Birdsall', year: '2005', color: '#9A7565', note: 'Four sisters, one summer vacation, and all the adventures that find them.' },
  { title: 'The Shadow of the Wind', author: 'Carlos Ruiz Zafón', year: '2001', color: '#695F6D', note: 'A boy, a mysterious book, and literary Barcelona after the Spanish Civil War.' },
  { title: 'Anna Karenina', author: 'Leo Tolstoy', year: '1878', color: '#7A2E2E', note: 'A sweeping story of love, family, and society in Imperial Russia.' },
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
