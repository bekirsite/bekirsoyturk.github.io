var sendMail = document.getElementById('email');
var mailName = document.getElementById('cName');
var mailSubject = document.getElementById('cSubject');
var mailMessage = document.getElementById('cMessage');

sendMail.onclick = function() {
  this.href = "mailto:soyturkb@gmail.com";
  this.href += "?subject=" + mailSubject.value;
  this.href += "&body=" + mailMessage.value.replace(/\n/g, '%0A');
  this.href += "%0A%0A" + mailName.value;
};