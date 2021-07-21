
function zzzz(obj){
        var a = obj / 12; //년
        var b = obj % 12; //월
        writeend.innerHTML = "";
        if (a >= 1)
        {writeend.innerHTML+=(Math.floor(a)+'년 ');
      }else {writeend.innerHTML += "";}
      if (b >= 1)
      {writeend.innerHTML+=(Math.floor(b)+'개월 ');
    }else {writeend.innerHTML += "";}
        writeend.innerHTML += " 후 목표달성";
    }
function zzz(obj){
        var abc = obj / 4;
        var abcd = obj % 4; //주
        var a = abc / 12; //년
        var b = abc % 12; //월
        writeend.innerHTML = "";
        if (a >= 1)
        {writeend.innerHTML+=(Math.floor(a)+'년 ');
      }else {writeend.innerHTML += "";}
      if (b >= 1)
      {writeend.innerHTML+=(Math.floor(b)+'개월 ');
    }else {writeend.innerHTML += "";}
      if (abcd >= 1)
      {writeend.innerHTML+=(Math.floor(abcd)+'주');
    }else {writeend.innerHTML += "";}
        writeend.innerHTML += " 후 목표달성";
    }
    function zz(obj){
            var d = obj / 7;
            var c = obj % 7; //일
            var abc = d / 4.348;
            var abcd = d % 4.348; //주
            var a = abc / 12; //년
            var b = abc % 12; //월
            writeend.innerHTML = "";
            if (a >= 1)
            {writeend.innerHTML+=(Math.floor(a)+'년 ');
          }else {writeend.innerHTML += "";}
          if (b >= 1)
          {writeend.innerHTML+=(Math.floor(b)+'개월 ');
        }else {writeend.innerHTML += "";}
          if (abcd >= 1)
          {writeend.innerHTML+=(Math.floor(abcd)+'주 ');
        }else {writeend.innerHTML += "";}
          if (c >= 1)
            {writeend.innerHTML+=(Math.floor(c)+'일');}
          else{writeend.innerHTML += "";}
            writeend.innerHTML += " 후 목표달성";
        }


      function fun1(){
      var aaaaa = document.getElementById("time");
      var bbbbb = aaaaa.options[aaaaa.selectedIndex].text;

      var aa = document.getElementById("a").value;
      var bb = document.getElementById("b").value;
      var cc = document.getElementById("c").value;

      var a = aa.replace(/,/g, "");
      var b = bb.replace(/,/g, "");
      var c = cc.replace(/,/g, "");

      aa = parseInt(a);
      ab = parseInt(a);
      bb = parseInt(b);
      cc = parseInt(c);
      ca = cc * 0.01 ;
      cb = ca + 1 ;
      cq = ca / 12 + 1 ;
      cw = ca / 48 + 1 ;
      ce = ca / 365 + 1 ;
      z = 0 ;
      var write = document.getElementById("write");
      var sub = document.getElementById("sub");
      if (bbbbb=="선택"||!a||!b||!c) {alert("값을 전부 입력해 주세요")}

      else if (bbbbb=="매년"){
                  z = z + 1
                  write.innerHTML =(z+"년 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cb
                  aa = aa + ab
            while (aa < bb){
                  z = z + 1
                  write.innerHTML +=(z+"년 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cb
                  aa = aa + ab}
                  writeend.innerHTML = "";
                  writeend.innerHTML+=((z)+'년 후 목표달성');
                  sub.value = "다시 계산하기";
                  z = z + 1
                  write.innerHTML +=(z+"년 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cb
                  aa = aa + ab
      }else if(bbbbb=="매달"){
                  z = z + 1
                  write.innerHTML = (z+"개월 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cq
                  aa = aa + ab
            while (aa < bb){
                  z = z + 1
                  write.innerHTML += (z+"개월 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cq
                  aa = aa + ab}
                  zzzz(z);
                  sub.value = "다시 계산하기";
                  z = z + 1
                  write.innerHTML += (z+"개월 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cq
                  aa = aa + ab
      }else if(bbbbb=="매주"){
                z = z + 1
                write.innerHTML = (z+"주 "+comma(Math.floor(aa))+"원<br>")
                aa = aa * cw
                aa = aa + ab
                while (aa < bb){
                  z = z + 1
                  write.innerHTML += (z+"주 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cw
                  aa = aa + ab}
                  zzz(z);
                  sub.value = "다시 계산하기";
                  z = z + 1
                  write.innerHTML += (z+"주 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cw
                  aa = aa + ab
      }else if(bbbbb=="매일"){
                z = z + 1
                write.innerHTML = (z+"일 "+comma(Math.floor(aa))+"원<br>")
                aa = aa * ce
                aa = aa + ab
                while (aa < bb){
                  z = z + 1
                  write.innerHTML += (z+"일 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * ce
                  aa = aa + ab}
                  zz(z);
                  sub.value = "다시 계산하기";
                  z = z + 1
                  write.innerHTML += (z+"일 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * ce
                  aa = aa + ab
    }}

function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
}
function comma(str){
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}
function uncomma(str){
    str = String(str);
    return str.replace(/[^\d]+/g, "");
}

function hide(){
  const unit = document.querySelector(".unit_div");
  unit.classList.toggle("active");
  }

function hide1(){
  const unit1 = document.querySelector(".hide1");
  const unit2 = document.querySelector(".hide2");
  if (unit1.style.display === "none"){
  unit2.style.display = "none";
  unit1.style.display = "block";
}else{
  unit1.style.display = "none"
}}
function hide2(){
  const unit1 = document.querySelector(".hide1");
  const unit2 = document.querySelector(".hide2");
  if (unit2.style.display === "none"){
  unit2.style.display = "block";
  unit1.style.display = "none";
}else{
  unit2.style.display = "none"
}}
