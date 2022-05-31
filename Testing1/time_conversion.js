function time(n) {
    let op, t;
    if (n < 60000) {
      t = Math.floor(n / 1000);
      if (t === 1) {
        op = `${t} second`;
      } else {
        op = `${t} seconds`;
      }
    } else if (n >= 60000 && n < 3600000) {
      t = Math.floor(n / 1000);
      if (t === 60) {
        t = t / 60;
        op = `${t} minute`;
      } else if (t > 60 && t % 60 === 0) {
        t = t / 60;
        op = `${t} minutes`;
      } else if (t > 60 && t % 60 !== 0) {
        let m = Math.floor(t / 60);
        let s = t % 60;
        if (m === 1) {
          op = `${m} minute ${s} seconds`;
        } else if (m > 1) {
          op = `${m} minutes ${s} seconds`;
        }
      }
    } else if (n >= 3600000) {
      t = n / 1000;
      let h, m, s;
      if (t === 3600) {
        t = t / 3600;
        op = `${t} hour`;
      } else if (t > 3600 && t % 3600 === 0) {
        h = t / 3600;
        op = `${h} hours`;
      } else if (t > 3600 && t % 3600 !== 0) {
        h = Math.floor(t / 3600);
        m = Math.floor((t % 3600) / 60);
        s = Math.floor((t % 3600) % 60);
        let minutes, seconds;
        if (m === 1) {
          minutes = "minute";
        } else {
          minutes = "minutes";
        }
        if (s == 1) {
          seconds = "second";
        } else {
          seconds = "seconds";
        }
        op = `${h} hours ${m} ${minutes} ${s} ${seconds}`;
      }
    }
    return op;
  }
  

  
  module.exports = time;