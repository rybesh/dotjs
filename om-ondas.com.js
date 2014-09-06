$('a[href$=".mp3"').map(function() {
  var link = $(this);
  link[0].parentNode.removeChild(link[0].previousSibling)
  link.prev().remove()
  link.replaceWith('<audio controls style="padding-bottom: 1px" src="' + link.attr('href') + '">')
})