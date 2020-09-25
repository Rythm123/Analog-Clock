setInterval(() => {
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();

    hrotation=h*30 + m/2;
    mrotation=6*m;
    srotation=6*s;
    document.getElementById("hour").style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    document.getElementById("second").style.transform=`rotate(${srotation}deg)`;
}, 1000);