function km() {
    //获取当前时间
    var now_time = new Date();

    // 创建指定时间
    var time = new Date(2022, 0, 1);

    //时间差
    var go_time = time - now_time;

    //把毫秒转为天  时  分  秒退回
    var day = Math.floor(go_time / 1000 / 60 / 60 / 24);
    var hour = Math.floor(go_time / 1000 / 60 / 60 % 24);
    var min = Math.floor(go_time / 1000 / 60 % 60);
    if (min < 10) {
        min = '0' + min;
    }
    var s = Math.floor(go_time / 1000 % 60);
    if (s < 10) {
        s = '0' + s;
    }

    document.getElementById('time').innerHTML = '距离元旦还有' + day + '天' + hour + '时' + min + '分' + s + '秒';
}

setInterval(km, 1000);

function add() {
    var num = document.getElementById('num');
    if (num.value == 146) {
        return
    }
    num.value = parseInt(num.value) + 1;

    var number = document.getElementById('number');
    if (number.value == 0) {
        return
    }
    number.value = parseInt(number.value) - 1;

}


