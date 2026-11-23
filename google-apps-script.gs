/** Asterbridge Learning free submission endpoint.
 * Install: create Google Sheet > Extensions > Apps Script > paste this > set OWNER_EMAIL > deploy as Web app.
 */
const OWNER_EMAIL = 'REPLACE_WITH_YOUR_EMAIL';
function doPost(e) {
  const p = (e && e.parameter) || {};
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Enquiries');
  if (!sheet) sheet = ss.insertSheet('Enquiries');
  if (sheet.getLastRow() === 0) sheet.appendRow(['Timestamp','Name','Email','Province','Grade','Subject','Program','Message','Source']);
  sheet.appendRow([new Date(),p.name||'',p.email||'',p.province||'',p.grade||'',p.subject||'',p.program||'',p.message||'',p.source||'Website']);
  if (OWNER_EMAIL && OWNER_EMAIL.indexOf('REPLACE_') !== 0) {
    MailApp.sendEmail(OWNER_EMAIL,'New Asterbridge Learning enquiry: '+(p.program||'General enquiry'),
      'Name: '+(p.name||'')+'\nEmail: '+(p.email||'')+'\nProvince: '+(p.province||'')+'\nGrade: '+(p.grade||'')+'\nSubject: '+(p.subject||'')+'\nProgram: '+(p.program||'')+'\nMessage: '+(p.message||''));
  }
  return ContentService.createTextOutput('OK');
}
