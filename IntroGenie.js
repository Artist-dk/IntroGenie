const body = document.getElementById('body');
const ans = document.getElementById('msginput');
const btn = document.getElementById("insbtn");
let funcCode = 'a';
let intro = new Object();
window.onkeydown = (event) => {
    if(ans === document.activeElement && event.keyCode === 13) {
        funcA();
    }
} 
function funcA() {
    var a, q, fc, pl;
    var txt = ans.value;
    if(ans.value == '') {
        txt = "Please give answer of my question";
        insert('msga', txt);
        return 0;
    }
    switch(funcCode) {
        case 'a':
            insert('msgb', txt);
            break;
        case 'name':
            intro.name = txt;
            a = "My name is "+txt;
            q = "Where are you from?";
            insert('msgb',a);
            setTimeout(()=>{insert('msga', 'Nice name')},1000,false);
            txt = q;
            funcCode = 'paddr';
            setTimeout(()=>{
                insert('msga',txt);
            },1000,false);
            break;
        case 'age' :
            intro.age = txt;
            a = "I am "+txt+" years old";
            q = "Where are you from?";
            insert('msgb',a);
            txt = q;
            funcCode = 'caddr';
            setTimeout(()=>{
                insert('msga',txt);
            },1000,false);
            break;
        case 'paddr':
            intro.paddr = txt;
            a = "I am from "+txt;
            q = "Where do you live now?";
            insert('msgb',a);
            txt = q;
            funcCode = 'caddr';
            setTimeout(()=>{
                insert('msga',txt);
            },1000,false);
            break;
        case 'caddr':
            intro.caddr = txt;
            a = "I live in "+txt;
            q = "Where did you completed 10th?";
            insert('msgb',a);
            txt = q;
            funcCode = 'addrssc';
            setTimeout(()=>{
                insert('msga',txt);
            },1000,false);
            break;
        case 'addrhsc':
            intro.addrhsc = txt;
            a = "I did my 12th in  "+txt;
            q = 'How many percent did you get in 12th?';;
            insert('msgb',a);
            txt = q;
            funcCode = 'hscmarks';
            setTimeout(()=>{
                insert('msga',txt);
            },1000,false);     
            break;
        case 'addrssc':
            intro.addrssc = txt;
            a = "I did my 10th in "+txt;
            q = 'How many percentage did you get in 10th?';
            insert('msgb',a);
            txt = q;
            funcCode = 'sscmarks';
            setTimeout(()=>{
                insert('msga',txt);
            },1000,false);     
            break;
        case 'sscmarks':
            intro.sscmarks = txt;
            a = "I got "+txt+" percent in 10th";
            q = "Where did you completed 12th?";
            insert('msgb',a);
            txt = q;n
            funcCode = 'addrhsc';
            setTimeout(()=>{
                insert('msga',txt);
            },1000,false);     
            break;
        case 'hscmarks':
            intro.hscmarks = txt;
            a = "I got "+txt +" percent in 12th";
            txt = "How many member are in your family including you?";
            insert('msgb',a);
            funcCode = 'family';
            setTimeout(()=>{
                insert('msga',txt);
            },1000,false);     
            break;
        case 'family':
            intro.family = txt;
            a = "I have "+txt+" members in my family"
            insert('msgb',a);
            txt = "You should introduce yourself as follows";
            insert('msga',txt);
            funcB();
            break;
    }
    ans.value = '';
}
function funcB() {
    setTimeout(()=>{
        insert('msga',selfintro());
    },1000);
    var txt = "Thank You!";
    setTimeout(()=>{
        insert('msga',txt);
    },1000);
}
window.onload = () => {
    console.log('welcome');
    var a = new Date();
    var b = a.getHours();
    var txt;
    if(b>5&&b<12) {
        txt = "Good morning!";
    } else if(b>12&&b<17) {
        txt = "Good afternoon!";
    } else if(b>17 &&b<19) {
        txt = "Good evening!";
    } else {
        txt = "Hi!";
    }
    txt = txt + " User, I'm an Assistant"
    insert('msga',txt);
    txt = "I am here to teach you how to introduce yourself to anyone. Before that we should get to know each other, So just give me the answers of my question.";
    insert('msga',txt);
    insert("msga","What is your name?");
    funcCode = 'name';
}
function welcome() {
    console.log('welcome');
}
function insert(cl,txt) {
        var a = document.createElement('div');
        a.setAttribute("class", cl);
        var b = document.createElement("div");
        b.setAttribute("class","txtbg");
        var c = document.createElement('div');
        c.setAttribute('class','msg');
        var t = document.createTextNode(txt);
        c.appendChild(t);
        b.appendChild(c);
        c = document.createElement('div');
        c.setAttribute('class','msgtime');
        var d = new Date();
        var e = d.getHours();
        var f = d.getMinutes();
        console.log(e);
        if(e>12) {
            e = e - 12;
            if(e < 10) {e = '0'+e;}
            if(f < 10) {f = '0'+f;}
            txt = e+':'+f+' pm';
        } else {
            txt = e+':'+f+' am';
            if(e < 10) {e = '0'+e;}
            if(f < 10) {f = '0'+f;}
        }
        t = document.createTextNode(txt);
        c.appendChild(t);
        b.appendChild(c);
        a.appendChild(b);
        c = document.getElementById('aaazaa0');
        c.appendChild(a);
        c.scrollTop = c.scrollHeight;

    // console.log(txt);
}
function giveName() {
    // console.log("start");
    txt = document.getElementById('name').value;
    var a = 'My name is '+txt;
    insert("msgb",a);
    var a = "Hi! "+txt;
    console.log(a);
    insert("msga",a);
}
function selfintro() {
    var a = new Date();
    var b = a.getHours();
    var txt;
    if(b>5&&b<12) {
        txt = "Good morning!";
    } else if(b>12&&b<17) {
        txt = "Good afternoon!";
    } else if(b>17 &&b<19) {
        txt = "Good evening!";
    } else {
        txt = "";
    }
    txt += " My name is ";
    txt += intro.name+", I am from ";
    txt += intro.paddr+" and now live in ";
    txt += intro.caddr+". I have completed 10th in ";
    txt += intro.addrssc+" with ";
    txt += intro.sscmarks+" percent. Also, I have completed 12th in ";
    txt += intro.addrhsc+" with "+intro.hscmarks+" percent. I have ";
    txt += intro.family+" members in my family including me. I am an enthusiast, hardworking and honest person with good moral values. That's all about me.";
    // txt = txt+intro.caddr;

    return txt;
}