(() => {
  const list = document.querySelector('#repository-list');
  if (!list) return;
  const rows = [...list.children];
  const search = document.querySelector('#repo-search');
  const website = document.querySelector('#repo-website');
  const source = document.querySelector('#repo-source');
  const sort = document.querySelector('#repo-sort');
  const clear = document.querySelector('#repo-clear');
  const form = document.querySelector('[data-directory-filters]');
  const count = document.querySelector('#repo-count');
  const empty = document.querySelector('#repo-empty');
  form.hidden = false;
  document.querySelector('[data-directory-controls]').hidden = false;
  const params = new URLSearchParams(location.search);
  search.value = params.get('q') || '';
  for (const [key, control] of [['website', website], ['source', source], ['sort', sort]]) {
    const value = params.get(key);
    if ([...control.options].some(option => option.value === value)) control.value = value;
  }
  function update() {
    const words = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const sorted = [...rows].sort((a, b) => {
      const order = a.dataset.name.toLowerCase().localeCompare(b.dataset.name.toLowerCase(), 'en');
      if (sort.value === 'za') return -order;
      if (sort.value === 'websites') return Number(b.dataset.website === 'live') - Number(a.dataset.website === 'live') || order;
      return order;
    });
    let visible = 0;
    for (const row of sorted) {
      const match = words.every(word => row.dataset.search.includes(word)) &&
        (website.value === 'all' || row.dataset.website === website.value) &&
        (source.value === 'all' || row.dataset.source === source.value);
      row.hidden = !match;
      if (match) visible++;
      list.appendChild(row);
    }
    count.textContent = `${visible} ${visible === 1 ? 'repository' : 'repositories'}`;
    empty.hidden = visible !== 0;
    clear.hidden = !search.value && website.value === 'all' && source.value === 'all';
    const state = new URLSearchParams();
    if (search.value) state.set('q', search.value);
    if (website.value !== 'all') state.set('website', website.value);
    if (source.value !== 'all') state.set('source', source.value);
    if (sort.value !== 'az') state.set('sort', sort.value);
    const query = state.toString();
    if (location.protocol !== 'file:') history.replaceState(null, '', location.pathname + (query ? `?${query}` : '') + location.hash);
  }
  function reset() {
    search.value = ''; website.value = 'all'; source.value = 'all'; sort.value = 'az';
    update(); search.focus();
  }
  form.addEventListener('submit', event => event.preventDefault());
  search.addEventListener('input', update);
  for (const control of [website, source, sort]) control.addEventListener('change', update);
  clear.addEventListener('click', reset);
  document.querySelector('#repo-empty-clear').addEventListener('click', reset);
  update();
})();
