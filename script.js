function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function toggle(header) {
  const article = header.parentElement;
  article.classList.toggle('expanded');
}



function toggleMode() {
  document.body.classList.toggle('dark');
}
