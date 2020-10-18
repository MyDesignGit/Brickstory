function recaptchaReady () {
  grecaptcha.render('myrecaptcha', {
  'sitekey': '6Lc7JBAUAAAAANrF3CJaIjt7T9IEFSmd85Qpc4gj',
  'expired-callback': function () {
    grecaptcha.reset();
    console.log('recatpcha');
  }
});
}