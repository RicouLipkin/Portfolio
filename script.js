setInterval(function () {
    let years = document.getElementById("years");
    let birthday = new Date("1989-11-12");
    let y = (new Date() - birthday)/31536000000;
    let m = (y - Math.floor(y))*12;
    let d = (m - Math.floor(m))*30.42;
    let h = (d - Math.floor(d))*24;
    let min = (h - Math.floor(h))*60;
    let s = (min - Math.floor(min))*60;
    years.innerHTML=Math.floor(y);
    months.innerHTML=Math.floor(m);
    days.innerHTML=Math.floor(d);
    hours.innerHTML=Math.floor(h);
    minutes.innerHTML=Math.floor(min);
    seconds.innerHTML=Math.floor(s);
},1000);