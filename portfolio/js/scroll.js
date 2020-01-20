const HEADER_HEIGHT = 72;
function scrollWindow(id) {
  const element = document.getElementById(id);
  const rect = element.getBoundingClientRect();
  const elemtop = rect.top + window.pageYOffset - HEADER_HEIGHT;
  document.documentElement.scrollTop = elemtop;
}
