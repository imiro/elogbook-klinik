function generate_body(elem) {
  var konten = [], heading = [];
  $(elem).closest('tr').find('td').not('.action_cell').each(function() {
    konten.push( $(this).html() );
  });
  $(elem).closest('table').find('th').not('.action_cell').each(function() {
    heading.push( $(this).html() );
  })

  var ret = "<p>";
  for(var i = 0;i < konten.length;++i) {
    ret += "<b>" + heading[i] + ": </b>" + konten[i] + "<br/>";
  }
  ret += "</p>";

  return ret;
}

function modal_confirmation(modalId, message, url, html) {
  //alert(`MODAL CONFIRMATION: ${modalId} ${message} ${url} ${html}`);
  $(modalId + " .modal-body").html(
    message + html
  );

  $(modalId + " .verifikasi").attr("href", url);
}
