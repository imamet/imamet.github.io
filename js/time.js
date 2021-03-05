let a = "17:00:00";
let date1 = new Date();
date1.setHours(a.split(":")[0]);
date1.setMinutes(a.split(":")[1]);
date1.setSeconds(a.split(":")[2]);
let r = date1 - new Date();
setTimeout(function() {
    $('.awal').addClass('hide');
    $('.kedua').addClass('show');
}, r);
// set time 2
let b = "17:00:10";
let date2 = new Date();
date2.setHours(b.split(":")[0]);
date2.setMinutes(b.split(":")[1]);
date2.setSeconds(b.split(":")[2]);
let s = date2 - new Date();
setTimeout(function() {
    $('.kedua.show').removeClass('show');
    $('.ketiga').addClass('show');
}, s);
// set time 3
let c = "17:00:20";
let date3 = new Date();
date3.setHours(c.split(":")[0]);
date3.setMinutes(c.split(":")[1]);
date3.setSeconds(c.split(":")[2]);
let t = date3 - new Date();
setTimeout(function() {
    $('.ketiga.show').removeClass('show');
    $('.keempat').addClass('show');
}, t);
// set time 4
let d = "17:00:30";
let date4 = new Date();
date4.setHours(d.split(":")[0]);
date4.setMinutes(d.split(":")[1]);
date4.setSeconds(d.split(":")[2]);
let u = date4 - new Date();
setTimeout(function() {
    $('.keempat.show').removeClass('show');
    $('.kelima').addClass('show');
}, u);
// set time 5
let e = "17:00:40";
let date5 = new Date();
date5.setHours(e.split(":")[0]);
date5.setMinutes(e.split(":")[1]);
date5.setSeconds(e.split(":")[2]);
let v = date5 - new Date();
setTimeout(function() {
    $('.kelima.show').removeClass('show');
    $('.keenam').addClass('show');
}, v);
