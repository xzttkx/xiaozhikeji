// 打字机
let str = "“小时候最蠢的事是盼着长大.”'"
let i = 0
let timer = setInterval(() => {
    p.innerText += str[i]
    i++
    if (i == str.length - 1) {
        clearInterval(timer)
    }
}, 300)
// 时间获取
let time = new Date();
setInterval(() => {
    time = new Date();
    document.getElementById('time1').innerHTML = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;
}, 1000)
document.getElementById('time1').innerHTML = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`
console.log(new Date());


function showIP(json) {
    var ip = json.ip;
    document.getElementById("myIP").innerHTML = "您的IP：" + ip;
}
var script = document.createElement("script");
script.src = "https://api.ipify.org?format=jsonp&callback=showIP";
document.body.appendChild(script);
// 获取浏览器简称
var userAgent = navigator.userAgent;
var browserName = "";
if (userAgent.indexOf("Chrome") !== -1) {
    browserName = "Chrome";
} else if (userAgent.indexOf("Firefox") !== -1) {
    browserName = "Firefox";
} else if (userAgent.indexOf("Safari") !== -1) {
    browserName = "Safari";
} else if (userAgent.indexOf("Edge") !== -1) {
    browserName = "Edge";
} else {
    browserName = "其他浏览器";
}
document.getElementById("browser").innerText = "浏览器: " + browserName;
document.getElementById("os").innerText = "操作系统: " + navigator.platform;
var now = new Date();
var hour = now.getHours();
var greeting = "";

if (hour >= 0 && hour < 5) {
    greeting = "凌晨好！";
} else if (hour >= 5 && hour < 7) {
    greeting = "早上好！";
} else if (hour >= 7 && hour < 11) {
    greeting = "上午好！";
} else if (hour >= 11 && hour < 13) {
    greeting = "中午好！";
} else if (hour >= 13 && hour < 18) {
    greeting = "下午好！";
} else {
    greeting = "晚上好！";
}
document.getElementById("greeting").innerText = greeting;

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
