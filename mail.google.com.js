// This is a dotjs script. See http://defunkt.io/dotjs/

var interval, links, text, wait = 100, count = / \(\d+\)/;

function hideUnreadCounts() {
  links = $("#canvas_frame").contents().find("div.aim a");
  if (links.length > 0) {
    links.map(function() {
      text = $(this).text();
      $(this).text(text.replace(count, ""));
    });
    if (wait == 100) {
      wait = 1000;
      clearInterval(interval);
      setInterval(hideUnreadCounts, wait);
    }
  }
}

interval = setInterval(hideUnreadCounts, wait);
