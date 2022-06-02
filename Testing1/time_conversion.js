function time(n) {
    let Time, t;
    if (n < 60000)
    {
      t = Math.floor(n / 1000);
      if (t === 1) 
    {
        Time = `${t} second`;
    } else 
    {
        Time = `${t} seconds`;
      }
    } 
    else if (n >= 60000 && n < 3600000)
    {
      t = Math.floor(n / 1000);
      if (t === 60) 
    {
        t = t / 60;
        Time = `${t} minute`;
    } 
    else if (t > 60 && t % 60 === 0) 
    {
        t = t / 60;
        Time = `${t} minutes`;
    }
    else if (t > 60 && t % 60 !== 0) 
    {
        let m = Math.floor(t / 60);
        let s = t % 60;
        if (m === 1) 
        {
          Time = `${m} minute ${s} seconds`;
        }
         else if (m > 1) 
        {
          Time = `${m} minutes ${s} seconds`;
        }
      }
    } 
    else if (n >= 3600000) 
    {
      t = n / 1000;
      let h, m, s;
      if (t === 3600) 
      {
        t = t / 3600;
        Time = `${t} hour`;
      } 
      else if (t > 3600 && t % 3600 === 0) 
      {
        h = t / 3600;
        Time = `${h} hours`;
      } else if (t > 3600 && t % 3600 !== 0) 
      {
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
        Time = `${h} hours ${m} ${minutes} ${s} ${seconds}`;
      }
    }
    return Time;
  }
  

  
  module.exports = time;