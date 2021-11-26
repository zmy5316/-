var getPwd = document.getElementById('psd');
var pwdAgain = document.getElementById('isrember');
var form = document.getElementsByTagName('form')[0];
var cell_ = document.getElementById('cell');

form.onsubmit = function () {
    var pwd = getPwd.value;
    var repwd = pwdAgain.value;

    if (pwd !== repwd) {
        alert('两次密码不一致');
    }

    var reg = /\w{6}/g;
    if (!reg.test(pwd)) {
        alert('密码不能小于6位数');
    }

}
