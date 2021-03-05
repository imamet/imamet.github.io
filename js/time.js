 
        // set time 2
        let b = "22:00:00";
        let date2 = new Date();
        date2.setHours(b.split(":")[0]);
        date2.setMinutes(b.split(":")[1]);
        date2.setSeconds(b.split(":")[2]);
        let s = date2 - new Date();
        setTimeout(function() {
            $('.kedua').addClass('show');
            $('.awal.show').removeClass('show');

        }, s);
        // set time 3
        let c = "23:00:00";
        let date3 = new Date();
        date3.setHours(c.split(":")[0]);
        date3.setMinutes(c.split(":")[1]);
        date3.setSeconds(c.split(":")[2]);
        let t = date3 - new Date();
        setTimeout(function() {
            $('.ketiga').addClass('show');
            $('.kedua.show').removeClass('show');

        }, t);
        // set time 4
        let d = "23:59:00";
        let date4 = new Date();
        date4.setHours(d.split(":")[0]);
        date4.setMinutes(d.split(":")[1]);
        date4.setSeconds(d.split(":")[2]);
        let u = date4 - new Date();
        setTimeout(function() {
            $('.keempat').addClass('show');
            $('.ketiga.show').removeClass('show');

        }, u);
        // set time 5
        let e = "01:00:00";
        let date5 = new Date();
        date5.setHours(e.split(":")[0]);
        date5.setMinutes(e.split(":")[1]);
        date5.setSeconds(e.split(":")[2]);
        let v = date5 - new Date();
        setTimeout(function() {
            $('.kelima').addClass('show');
            $('.keempat.show').removeClass('show');
        }, v);
        // set time 6
        let f = "02:00:00";
        let date6 = new Date();
        date6.setHours(f.split(":")[0]);
        date6.setMinutes(f.split(":")[1]);
        date6.setSeconds(f.split(":")[2]);
        let w = date6 - new Date();
        setTimeout(function() {
            $('.keenam').addClass('show');
            $('.kelima.show').removeClass('show');
        }, w);
// set time 1
        let a = "21:00:00";
        let date1 = new Date();
        date1.setHours(a.split(":")[0]);
        date1.setMinutes(a.split(":")[1]);
        date1.setSeconds(a.split(":")[2]);
        let r = date1 - new Date();
        setTimeout(function() {
            $('.awal').addClass('show');
            $('.keenam.show').removeClass('show');

        }, r);
