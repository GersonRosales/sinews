
document.getElementById('input-login-email').addEventListener('input', function() {
  if (document.getElementById('input-login-email').value)
    document.querySelector('.label-login-email').classList.add('label-login-email--collapsed');
  else
    document.querySelector('.label-login-email').classList.remove('label-login-email--collapsed');
});

document.getElementById('input-login-password').addEventListener('input', function() {
  if (document.getElementById('input-login-password').value)
    document.querySelector('.label-login-password').classList.add('label-login-password--collapsed');
  else
    document.querySelector('.label-login-password').classList.remove('label-login-password--collapsed');
});
