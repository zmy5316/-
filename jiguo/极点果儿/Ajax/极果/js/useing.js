$(function () {
  $(".inner>span").click(function (e) {
    e.preventDefault();
    $(this).css({
      color: "#f65340",
      borderBottom: "6px solid #ff5036",
    });
    $(this).siblings("span").css({
      color: "#a3a8ae",
      borderBottom: "none",
    });
  });
  $(".state>span").click(function (e) {
    e.preventDefault();
    $(this).css({
      color: "#3b3f48",
    });
    $(this).siblings("span").css({
      color: "#a3a8ae",
    });
  });

  ajax1();

  function ajax1() {
    arr1 = [];
    arr2 = [];
    arr3 = [];
    $.ajax({
      url: "http://192.168.31.5:3000/useing/public", //后台接口地址
      // data: '',

      type: "get", //请求方法 默认get

      dataType: "json", //返回json串数据格式  服务器返回数据类型
      // 自定义一些请求头的数据

      async: false, //异步请求 不写默认false同步

      // 请求成功 接收数据的回调函数
      success: function (res) {
        console.log(res);
        //根据时间分割数组
        var settime_min = +new Date("2020-5-20");
        var settime_max = +new Date("2020-8-05");
        for (var j = 0; j < res.length; j++) {
          var nowtime = +new Date(res[j].endTime);
          if (nowtime > settime_max) {
            arr1.push(res[j]);
          } else if (nowtime > settime_min) {
            arr2.push(res[j]);
          } else if (nowtime < settime_min) {
            arr3.push(res[j]);
          }
        }
        demo1(res);
      },
      error(err) {
        console.log(err);
      },
    });
  }

  //体验师专享
  $("#sings").on("click", function (e) {
    ajax();
    sixtime();
    setTimeout(function () {
      ajax();
      $(".center").css({
        "margin-top": 0,
        fontSize: 16,
      });
      $(".time").text("报告数量:8");
      $(".logo").text("体验师专享");
      $(".center .box").find(".logo").addClass("logo_useing");
      $(".center .box:nth-child(4n+2)")
        .find(".num span")
        .css({ color: "#80c261", borderColor: "#80c261" });
      $(".center .box:nth-child(4n+2)").find(".time").css("color", "#80c261");

      $(".center .box:nth-child(4n+3)")
        .find(".num span")
        .css({ color: "#cdcdcd", borderColor: "#cdcdcd" });
      $(".center .box:nth-child(4n+3)").find(".time").css("color", "#cdcdcd");
    }, 3000);
  });
  //加载页面倒计时
  function sixtime() {
    var sixnum = 3;
    var timer = setInterval(function () {
      sixnum--;
      $(".center").html("loading..." + sixnum + "s");
      $(".center").css({
        textAlign: "center",
        "margin-top": 100,
        "margin-bottom": 100,
        fontSize: 50,
      });
      if (sixnum == 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  //ajax请求获取全部页面数据
  function ajax() {
    arr1 = [];
    arr2 = [];
    arr3 = [];
    $.ajax({
      url: "http://192.168.31.5:3000/useing/public", //后台接口地址
      // data: '',

      type: "get", //请求方法 默认get

      dataType: "json", //返回json串数据格式  服务器返回数据类型
      // 自定义一些请求头的数据

      async: false, //异步请求 不写默认false同步

      // 请求成功 接收数据的回调函数
      success: function (res) {
        console.log(res);
        //根据时间分割数组
        var settime_min = +new Date("2020-5-20");
        var settime_max = +new Date("2020-8-05");
        for (var j = 0; j < res.length; j++) {
          var nowtime = +new Date(res[j].endTime);
          if (nowtime > settime_max) {
            arr1.push(res[j]);
          } else if (nowtime > settime_min) {
            arr2.push(res[j]);
          } else if (nowtime < settime_min) {
            arr3.push(res[j]);
          }
        }
        demo(res);
      },
      error(err) {
        console.log(err);
      },
    });

    $(".center").css({
      "margin-top": 0,
      fontSize: 16,
    });
  }
  //全部
  $(".all").click(function (e) {
    e.preventDefault();
    sixtime();
    setTimeout(function () {
      ajax();
      $(".time").text("报告数量:8");
      $(".logo").text("首发");
      $(".center .box").find(".logo").removeClass("logo_useing");
      $(".center .box:nth-child(4n+2)")
        .find(".num span")
        .css({ color: "#80c261", borderColor: "#80c261" });
      $(".center .box:nth-child(4n+2)").find(".time").css("color", "#80c261");

      $(".center .box:nth-child(4n+3)")
        .find(".num span")
        .css({ color: "#cdcdcd", borderColor: "#cdcdcd" });
      $(".center .box:nth-child(4n+3)").find(".time").css("color", "#cdcdcd");

      // $('.goods .good_footer').find('span').show();
      // $('.goods .good_footer').find('p').hide();
    }, 3000);

    // function demo(res) {
    //     console.log(res);
    //     // var margin = document.querySelector(".margin ");
    //     var html = template('tpl', {
    //         value: res,

    //     })

    //     $('.box').innerHTML = html;

    // }
  });
  $(".more").click(function (e) {
    e.preventDefault();
    sixtime();
    setTimeout(function () {
      arr1 = [];
      arr2 = [];
      arr3 = [];
      $.ajax({
        url: "http://192.168.31.5:3000/useing/public", //后台接口地址
        // data: '',

        type: "get", //请求方法 默认get

        dataType: "json", //返回json串数据格式  服务器返回数据类型
        // 自定义一些请求头的数据

        async: false, //异步请求 不写默认false同步

        // 请求成功 接收数据的回调函数
        success: function (res) {
          console.log(res);
          //根据时间分割数组
          var settime_min = +new Date("2020-5-20");
          var settime_max = +new Date("2020-8-05");
          for (var j = 0; j < res.length; j++) {
            var nowtime = +new Date(res[j].endTime);
            if (nowtime > settime_max) {
              arr1.push(res[j]);
            } else if (nowtime > settime_min) {
              arr2.push(res[j]);
            } else if (nowtime < settime_min) {
              arr3.push(res[j]);
            }
          }
          demo(res);
        },
        error(err) {
          console.log(err);
        },
      });

      $(".center").css({
        "margin-top": 0,
        fontSize: 16,
      });
      $(".time").text("报告数量:8");
      $(".logo").text("首发");
      $(".center .box").find(".logo").removeClass("logo_useing");
      $(".center .box:nth-child(4n+2)")
        .find(".num span")
        .css({ color: "#80c261", borderColor: "#80c261" });
      $(".center .box:nth-child(4n+2)").find(".time").css("color", "#80c261");

      $(".center .box:nth-child(4n+3)")
        .find(".num span")
        .css({ color: "#cdcdcd", borderColor: "#cdcdcd" });
      $(".center .box:nth-child(4n+3)").find(".time").css("color", "#cdcdcd");

      // $('.goods .good_footer').find('span').show();
      // $('.goods .good_footer').find('p').hide();
    }, 3000);
  });

  // 申请中
  $(".try").click(function (e) {
    e.preventDefault();
    sixtime();
    setTimeout(function () {
      $.ajax({
        url: "http://192.168.31.5:3000/useing/public", //后台接口地址
        // data: '',

        type: "get", //请求方法 默认get

        dataType: "json", //返回json串数据格式  服务器返回数据类型
        // 自定义一些请求头的数据

        async: false, //异步请求 不写默认false同步

        // 请求成功 接收数据的回调函数
        success: function (res) {
          console.log(res);
          //根据时间分割数组
          var settime_min = +new Date("2020-5-20 00:00:00");
          var settime_max = +new Date("2020-8-05 00:00:00");
          for (var j = 0; j < res.length; j++) {
            var nowtime = +new Date(res[j].endTime);
            if (nowtime > settime_max) {
              arr1.push(res[j]);
            } else if (nowtime > settime_min) {
              arr2.push(res[j]);
            } else {
              arr3.push(res[j]);
            }
          }
          demo(arr1);
        },
        error(err) {
          console.log(err);
        },
      });
      $(".center").css({
        "margin-top": 0,
        fontSize: 16,
      });
    }, 3000);
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];

    $(".time").text("报告数量:8");
    $(".center").find(".box").eq(2).find("num>span").eq(0).text(5555);
  });
  // 试用中
  $(".ing").click(function (e) {
    sixtime();
    setTimeout(function () {
      $.ajax({
        url: "http://192.168.31.5:3000/useing/public", //后台接口地址
        // data: '',

        type: "get", //请求方法 默认get

        dataType: "json", //返回json串数据格式  服务器返回数据类型
        // 自定义一些请求头的数据

        async: false, //异步请求 不写默认false同步

        // 请求成功 接收数据的回调函数
        success: function (res) {
          console.log(res);
          //根据时间分割数组
          var settime_min = +new Date("2020-5-20 00:00:00");
          var settime_max = +new Date("2020-8-05 00:00:00");
          for (var j = 0; j < res.length; j++) {
            var nowtime = +new Date(res[j].endTime);
            if (nowtime > settime_max) {
              arr1.push(res[j]);
            } else if (nowtime > settime_min) {
              arr2.push(res[j]);
            } else {
              arr3.push(res[j]);
            }
          }
          demo(arr2);
        },
        error(err) {
          console.log(err);
        },
      });
      $(".center").css({
        "margin-top": 0,
        fontSize: 16,
      });
    }, 3000);
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    $(".num span").css("color", "#80c261");
    $(".num span").css("borderColor", "#80c261");
    $(".time").css("color", "#80c261");
    $(".time").text("剩余时间2天");
  });

  // 结束
  $(".end").click(function (e) {
    sixtime();
    setTimeout(function () {
      $.ajax({
        url: "http://192.168.31.5:3000/useing/public", //后台接口地址
        // data: '',

        type: "get", //请求方法 默认get

        dataType: "json", //返回json串数据格式  服务器返回数据类型
        // 自定义一些请求头的数据

        async: false, //异步请求 不写默认false同步

        // 请求成功 接收数据的回调函数
        success: function (res) {
          console.log(res);
          //根据时间分割数组
          var settime_min = +new Date("2020-5-20 00:00:00");
          var settime_max = +new Date("2020-8-05 00:00:00");
          for (var j = 0; j < res.length; j++) {
            var nowtime = +new Date(res[j].endTime);
            if (nowtime > settime_max) {
              arr1.push(res[j]);
            } else if (nowtime > settime_min) {
              arr2.push(res[j]);
            } else {
              arr3.push(res[j]);
            }
          }
          demo(arr3);
        },
        error(err) {
          console.log(err);
        },
      });
      $(".center").css({
        "margin-top": 0,
        fontSize: 16,
      });
      $(".num span").css("color", "#cdcdcd");
      $(".num span").css("borderColor", "#cdcdcd");
      $(".time").css("color", "#cdcdcd");
    }, 3000);
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
  });

  //单独字符串拼接函数
  function demo(res) {
    var str = "";
    var newarr = [];
    for (var i = 0; i < res.length; i++) {
      str += ' <div class="box">';
      str += '<img src="' + res[i].img + '" alt="">';
      str += ' <p class="title">' + res[i].text + "</p>";
      str += ' <div class="num" id="num">';
      str += "<span>" + res[i].totalnum + "</span>";
      str += " <span>" + res[i].num + "台" + "</span>";
      str += "</div>";
      str += ' <p class="count">';
      str += " <span>" + res[i].apply + "</span> <span>申请</span></p>";
      str += '<p class="time">查看试用名单</p>';
      str += '<div class="logo">' + res[i].info_ty + "</div>";
      str += "</div>";
      if (res[i].info_ty === "体验师转享") {
        newarr.push(i);
      }
    }

    $(".center").html(str);
    for (var m = 0; m <= newarr.length; m++) {
      $(".center .box").eq(newarr[m]).find(".logo").addClass("logo_useing");
    }

    $(".goods .good_footer").find("span").hide();
    $(".goods .good_footer").find("p").show();
  }

  function demo1(res) {
    var str = "";
    var newarr = [];
    for (var i = 0; i < 8; i++) {
      str += ' <div class="box">';
      str += '<img src="' + res[i].img + '" alt="">';
      str += ' <p class="title">' + res[i].text + "</p>";
      str += ' <div class="num" id="num">';
      str += "<span>" + res[i].totalnum + "</span>";
      str += " <span>" + res[i].num + "台" + "</span>";
      str += "</div>";
      str += ' <p class="count">';
      str += " <span>" + res[i].apply + "</span> <span>申请</span></p>";
      str += '<p class="time">查看试用名单</p>';
      str += '<div class="logo">' + res[i].info_ty + "</div>";
      str += "</div>";
      if (res[i].info_ty === "体验师转享") {
        newarr.push(i);
      }
    }

    $(".center").html(str);
    for (var m = 0; m <= newarr.length; m++) {
      $(".center .box").eq(newarr[m]).find(".logo").addClass("logo_useing");
    }
  }
});
