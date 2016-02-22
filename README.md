# stepni-task-1
Intern Selection task @ Stepni.com

### Create an script on Google App's Script Engine

'''js
function doGet(e) {
  var doc = DocumentApp.openById('1W0swizgXUIsdmZmy-U3sdQs4ZX3f2Sr6marlibQwIRQ');
  doc.getBody().appendParagraph('137164|'+e.parameter.email+' & 137164|'+e.parameter.number);
  return true;
}

'''

Publish your app and get the url and copy into form action url.

### Note:
This Page in Non-Responsive. This is made for common screen width 15.6" inch screen.