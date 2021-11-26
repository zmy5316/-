window.addEventListener('load', function () {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax.open('get', 'http://192.168.31.5:3000/play/new', true);
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                // 接收响应数据  转为 对象
                var data = JSON.parse(ajax.responseText);
                // console.log(data);
                show(data);
            } else {
                console.log('请求失败');
            }
        }
    }
    function show(data) {
        var str = '';
        for (var i of data) {
            // console.log(i);
            for (var k of i) {
                // console.log(k);
                str += ` <li><a>
                <img src="${k.img}" width="230" height="130" />
                <div class="T-info">
                    <p class="T-name">${k.text}<br><span>`;
                var description = (typeof k.description == 'undefined') ? '暂无介绍' : k.description;
                str += `${description}</span></p>
                    <div class="T-tip fix">
                        <span class="T-price left">${k.price}</span>
                        <div class="T-right icon">
                            <span class="T-xin">${k.like}</span>
                            <span class="T-look">${k.words}</span>
                        </div>
                    </div>
                </div>
            </a>
        </li>`;
            }
        }
        document.getElementsByClassName('T-mydiv')[0].innerHTML = str;



        var dianzan0 = document.getElementsByClassName('T-xin')[0];
        dianzan0.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[0].innerHTML++;
            dianzan0.style.color = 'red';
        })
        var dianzan1 = document.getElementsByClassName('T-xin')[1];
        dianzan1.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[1].innerHTML++;
            dianzan1.style.color = 'red';
        })
        var dianzan2 = document.getElementsByClassName('T-xin')[2];
        dianzan2.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[2].innerHTML++;
            dianzan2.style.color = 'red';
        })
        var dianzan3 = document.getElementsByClassName('T-xin')[3];
        dianzan3.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[3].innerHTML++;
            dianzan3.style.color = 'red';
        })
        var dianzan4 = document.getElementsByClassName('T-xin')[4];
        dianzan4.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[4].innerHTML++;
            dianzan4.style.color = 'red';
        })
        var dianzan5 = document.getElementsByClassName('T-xin')[5];
        dianzan5.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[5].innerHTML++;
            dianzan5.style.color = 'red';
        })
        var dianzan6 = document.getElementsByClassName('T-xin')[6];
        dianzan6.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[6].innerHTML++;
            dianzan6.style.color = 'red';
        })
        var dianzan7 = document.getElementsByClassName('T-xin')[7];
        dianzan7.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[7].innerHTML++;
            dianzan7.style.color = 'red';
        })
        var dianzan8 = document.getElementsByClassName('T-xin')[8];
        dianzan8.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[8].innerHTML++;
            dianzan8.style.color = 'red';
        })
        var dianzan9 = document.getElementsByClassName('T-xin')[9];
        dianzan9.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[9].innerHTML++;
            dianzan9.style.color = 'red';
        })
        var dianzan10 = document.getElementsByClassName('T-xin')[10];
        dianzan10.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[10].innerHTML++;
            dianzan10.style.color = 'red';
        })
        var dianzan11 = document.getElementsByClassName('T-xin')[11];
        dianzan11.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[11].innerHTML++;
            dianzan11.style.color = 'red';
        })
        var dianzan12 = document.getElementsByClassName('T-xin')[12];
        dianzan12.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[12].innerHTML++;
            dianzan12.style.color = 'red';
        })
        var dianzan13 = document.getElementsByClassName('T-xin')[13];
        dianzan13.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[13].innerHTML++;
            dianzan13.style.color = 'red';
        })
        var dianzan14 = document.getElementsByClassName('T-xin')[14];
        dianzan14.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[14].innerHTML++;
            dianzan14.style.color = 'red';
        })
        var dianzan15 = document.getElementsByClassName('T-xin')[15];
        dianzan15.addEventListener('click', function () {
            document.getElementsByClassName('T-xin')[15].innerHTML++;
            dianzan15.style.color = 'red';
        })
        
        
        var mengban0 = document.querySelectorAll('li')[0];
        mengban0.onmouseover = function () {
            mengban0.id = 'yiru'
        }
        mengban0.onmouseout = function () {
            mengban0.id = 'none'
        }
        var mengban1 = document.querySelectorAll('li')[1];
        mengban1.onmouseover = function () {
            mengban1.id = 'yiru'
        }
        mengban1.onmouseout = function () {
            mengban1.id = 'none'
        }
        var mengban2 = document.querySelectorAll('li')[2];
        mengban2.onmouseover = function () {
            mengban2.id = 'yiru'
        }
        mengban2.onmouseout = function () {
            mengban2.id = 'none'
        }
        var mengban3 = document.querySelectorAll('li')[3];
        mengban3.onmouseover = function () {
            mengban3.id = 'yiru'
        }
        mengban3.onmouseout = function () {
            mengban3.id = 'none'
        }
        var mengban4 = document.querySelectorAll('li')[4];
        mengban4.onmouseover = function () {
            mengban4.id = 'yiru'
        }
        mengban4.onmouseout = function () {
            mengban4.id = 'none'
        }
        var mengban5 = document.querySelectorAll('li')[5];
        mengban5.onmouseover = function () {
            mengban5.id = 'yiru'
        }
        mengban5.onmouseout = function () {
            mengban5.id = 'none'
        }
        var mengban6 = document.querySelectorAll('li')[6];
        mengban6.onmouseover = function () {
            mengban6.id = 'yiru'
        }
        mengban6.onmouseout = function () {
            mengban6.id = 'none'
        }
        var mengban7 = document.querySelectorAll('li')[7];
        mengban7.onmouseover = function () {
            mengban7.id = 'yiru'
        }
        mengban7.onmouseout = function () {
            mengban7.id = 'none'
        }
        var mengban8 = document.querySelectorAll('li')[8];
        mengban8.onmouseover = function () {
            mengban8.id = 'yiru'
        }
        mengban8.onmouseout = function () {
            mengban8.id = 'none'
        }
        var mengban9 = document.querySelectorAll('li')[9];
        mengban9.onmouseover = function () {
            mengban9.id = 'yiru'
        }
        mengban9.onmouseout = function () {
            mengban9.id = 'none'
        }
        var mengban10 = document.querySelectorAll('li')[10];
        mengban10.onmouseover = function () {
            mengban10.id = 'yiru'
        }
        mengban10.onmouseout = function () {
            mengban10.id = 'none'
        }
        var mengban11 = document.querySelectorAll('li')[11];
        mengban11.onmouseover = function () {
            mengban11.id = 'yiru'
        }
        mengban11.onmouseout = function () {
            mengban11.id = 'none'
        }
        var mengban12 = document.querySelectorAll('li')[12];
        mengban12.onmouseover = function () {
            mengban12.id = 'yiru'
        }
        mengban12.onmouseout = function () {
            mengban12.id = 'none'
        }
        var mengban13 = document.querySelectorAll('li')[13];
        mengban13.onmouseover = function () {
            mengban13.id = 'yiru'
        }
        mengban13.onmouseout = function () {
            mengban13.id = 'none'
        }
        var mengban14 = document.querySelectorAll('li')[14];
        mengban14.onmouseover = function () {
            mengban14.id = 'yiru'
        }
        mengban14.onmouseout = function () {
            mengban14.id = 'none'
        }
        var mengban15 = document.querySelectorAll('li')[15];
        mengban15.onmouseover = function () {
            mengban15.id = 'yiru'
        }
        mengban15.onmouseout = function () {
            mengban15.id = 'none'
        }
        // T-more-btn comMore
        var jiazai = document.getElementsByClassName('T-more-btn')[0];
        jiazai.onclick = function () {
            jiazai.id = 'jiazai';
            console.log('dainle');
        }


    }
})

