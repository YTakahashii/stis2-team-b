const HEADER_HEIGHT = 72;
function scrollWindow(elem) {
  const element = document.getElementById(elem);
  const rect = element.getBoundingClientRect();
  const elemtop = rect.top + window.pageYOffset - HEADER_HEIGHT;
  document.documentElement.scrollTop = elemtop;
}
