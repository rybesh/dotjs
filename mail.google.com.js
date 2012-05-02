// This is a dotjs script. See http://defunkt.io/dotjs/

// Hide unread counts.
var interval, links, text, count = / \(\d+\)/;
interval = setInterval(function() {
  links = $("#canvas_frame").contents().find("div.aim a");
  if (links.length > 0) { 
    clearInterval(interval);
    links.map(function() {
      text = $(this).text();
      $(this).text(text.replace(count, ""));
    });
  }
}, 100);
