var script = document.createElement('script');
script.src = 'https://api.map.baidu.com/api?v=2.0&ak=kKC3PPnZc3Fq7xlwGyZfkCuYnGBrGuAL&callback=getCity';
$("body").append(script);
function getCity() {
    var myCity = new BMap.LocalCity();
    myCity.get(function(r) {
        $(".city").text(r.name);
        $.getJSON("http://v.juhe.cn/weather/index?callback=?", {
            "cityname": r.name,
            "dtype": "jsonp",
            "key": "12787276c08fd9a6d9c249a6189f59d9" 
        }, function(data) {
            var sk = data.result.sk;
            var skArr = [];
            var today = data.result.today;
            var todayArr = [];
            for (var skPro in sk) { skArr.push(sk[skPro]); }
            $(".temp").text(skArr[0] + "℃");
            $(".wind_direction").text(skArr[1]);
            $(".wind_strengt").text(skArr[2]);
            $(".humidity").text(skArr[3]);
            $(".time").text(skArr[4]);
            for (var todayPro in today) { todayArr.push(today[todayPro]); }
            $(".temperature").text(todayArr[0]);
            $(".wind").text(todayArr[3]);
            $(".weather").text(todayArr[1]);
            $(".dressing_advice").text(todayArr[8]);
            $(".date_y").text(todayArr[6]);
        });

    });
}

