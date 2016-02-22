function doGet(e) {
  var doc = DocumentApp.openById('1W0swizgXUIsdmZmy-U3sdQs4ZX3f2Sr6marlibQwIRQ');
  doc.getBody().appendParagraph('137164|'+e.parameter.email+' & 137164|'+e.parameter.number);
  return true;
}

