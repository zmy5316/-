$(function () {
  $(".submit").click(function () {
    var reg =
      /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    var str = $(".phone").val();
    if (!reg.test(str)) {
      alert("请输入正确手机号");
      return;
    }
    if (str == "") {
      alert("请输入正确手机号");
      return;
    }

    var str1 = $(".yzm").val();
    if (str1 != "r2b7") {
      alert("请输入正确验证码");
      return;
    }
    if (str1 == "") {
      alert("请输入正确验证码");
      return;
    }

    var reg = /^[\w\u4e00-\u9fa5]{4,8}$/;
    var str2 = $(".username").val();
    if (!reg.test(str2)) {
      alert("请输入正确用户名");
      return;
    }
    if (str2 == "") {
      alert("请输入正确用户名");
      return;
    }

    var reg = /^[\w]{6,12}$/;
    var str3 = $(".pwd").val();
    if (!reg.test(str3)) {
      alert("请输入正确密码");
      return;
    }
    if (str3 == "") {
      alert("请输入正确密码");
      return;
    }

    var reg = /^[\w]{6,12}$/;
    var str4 = $(".repwd").val();
    if (str4 == "") {
      alert("请输入正确新密码");
      return;
    }
    if (!reg.test(str4)) {
      alert("重复密码不正确");
      return;
    }
    if ($(".repwd").val() != $(".pwd").val()) {
      alert("密码不一致");
      return;
    } else {
      $.ajax({
        url: "http://192.168.31.5:3000/users/register", //后台接口地址
        data: {
          phone: str,
          code: str1,
          username: str2,
          password: str3,
        },
        type: "post", //请求方法 默认get

        dataType: "json", //返回json串数据格式  服务器返回数据类型
        // 自定义一些请求头的数据

        headers: {
          // 'token': '请求头数据'
        },

        async: true, //异步请求 不写默认false同步

        // 请求成功 接收数据的回调函数
        success: function (res) {
          console.log(res);
        },
        error(err) {
          console.log(err);
        },
      });
    }
  });
  var flag = true;
  var timer = null;
  var num = 5;
  $(".get_pwd").click(function () {
    if (flag == true) {
      flag = false;
      timer = setInterval(function () {
        num--;
        $(".get_pwd").html(num + "s");
        if (num < 0) {
          clearInterval(timer);
          $(".get_pwd").html("获取验证码");
          num = 5;
          flag = true;
        }
      }, 1000);
    }
  });
});
