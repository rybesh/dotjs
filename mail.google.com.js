// Hide unread counts.
var iframe, interval, links, text, count = / \(\d+\)/;
$(function(){
  $("#canvas_frame").load(function(){
    iframe = $(this);
    interval = setInterval(function() {
      links = iframe.contents().find("div.aim a");
      if (links.length > 0) { 
        clearInterval(interval);
        links.map(function() {
          text = $(this).text();
          $(this).text(text.replace(count, ""));
        });
      }
    }, 100);
  });
});
