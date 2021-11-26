
// 设置cookie 需要传入三个参数  键 值  过期时间
function setCookie(key, value, time) {
    // console.log('time:'+time)
    var date_ = new Date();
    date_.setDate(date_.getDate() + time);
    document.cookie = key + '=' + value + ';expires=' + date_;
}

// 获取cookie 键名
function getCookie(key) {
    // 多个cookie通过；分割
    var arry = document.cookie.split(';');
    console.log(arry);
    for (var i = 0; i < arry.length; i++) {
        var n_arry = arry[i].split('=');
        // 多个cookie存值的时候  会存在某个cookie的值名前面有空格 去除
        var n_key = n_arry[0].replace(/^\s/, '');
        if (n_key == key) {
            console.log(n_arry[0], n_arry[1]);
            return n_arry[1];
        }
    }
    return '';
}

//删除cookie  通过键名
function removeCookie(key) {
    this.setCookie(key, '', -1);
}