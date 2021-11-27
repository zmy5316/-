$(function () {
  $(".submit").click(function () {
    // var reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    // var str = $('.phone').val();
    // if (!reg.test(str)) {
    //     alert('请输入正确手机号');
    //     return;
    // }
    // if (str == '') {
    //     alert('请输入正确手机号');
    //     return;
    // }

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
    } else {
      $.ajax({
        url: "http://192.168.31.5:3000/users/login", //后台接口地址
        data: {
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
});
