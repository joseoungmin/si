      function zz(obj){
          var abc = obj / 12;
          var abcd = obj % 12;
          if (obj>=13){writeend.innerHTML =(Math.floor(abc)+'년 '+abcd+'개월 후 목표 달성');}
          else if (obj ==12){writeend.innerHTML =(Math.floor(abc)+'년 후 목표 달성');}
          else if  (obj < 12){
            writeend.innerHTML =(abcd+'개월 후 목표 달성');}
          }

          function xx(obj){
              var abc = obj / 4.348;
              var abcd = obj % 4.348;
              var a = abc / 12;
              var b = abc % 12;

              if (obj >= 49){writeend.innerHTML
                =(Math.floor(a)+'년 '+Math.floor(b)+'개월 '+Math.floor(abcd)+'주 후 목표 달성');}
              else if (obj==48){writeend.innerHTML
                =(Math.floor(a)+'년 후 목표 달성');}
              else if (obj < 4){writeend.innerHTML
                  =(Math.floor(abcd)+'주 후 목표 달성');}
              else if(3 < obj < 48){writeend.innerHTML
                =(Math.floor(b)+'개월 '+Math.floor(abcd)+'주 후 목표 달성');}
              }

              function cx(obj){
                  var c = obj / 7;
                  var d = obj % 7;
                  var abc = c / 4.348;
                  var abcd = c % 4.348;
                  var a = abc / 12;
                  var b = abc % 12;

                  if (obj >= 366){writeend.innerHTML
                    =(Math.floor(a)+'년 '+Math.floor(b)+'개월 '+Math.floor(abcd)+'주 후 목표 달성');}
                  else if (obj==365){writeend.innerHTML
                    =(Math.floor(a)+'년 후 목표 달성');}
                  else if (obj < 7){writeend.innerHTML
                      =(d+'일 후 목표 달성');}
                  else if(obj < 28){writeend.innerHTML
                      =(Math.floor(abcd)+'주 '+d+'일 후 목표 달성');}
                  else if(obj < 365){writeend.innerHTML
                    =(+Math.floor(b)+'개월 '+Math.floor(abcd)+'주 '+d+'일 후 목표 달성');}
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

      else if (bbbbb=="일년"){
                  z = z + 1
                  write.innerHTML =(z+"년 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cb
                  aa = aa + ab
            while (aa < bb){
                  z = z + 1
                  write.innerHTML +=(z+"년 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cb
                  aa = aa + ab}
                  z = z + 1
                  write.innerHTML +=(z+"년 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cb
                  aa = aa + ab
                  writeend.innerHTML=(z+"년 후 목표달성")
                  sub.value = "다시 계산하기";
      }else if(bbbbb=="한달"){
                  z = z + 1
                  write.innerHTML = (z+"개월 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cq
                  aa = aa + ab
            while (aa < bb){
                  z = z + 1
                  write.innerHTML += (z+"개월 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cq
                  aa = aa + ab}
                  z = z + 1
                write.innerHTML += (z+"개월 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cq
                  aa = aa + ab
                  zz(z);
                  sub.value = "다시 계산하기";
      }else if(bbbbb=="일주일"){
                z = z + 1
                write.innerHTML = (z+"주 "+comma(Math.floor(aa))+"원<br>")
                aa = aa * cw
                aa = aa + ab
                while (aa < bb){
                  z = z + 1
                write.innerHTML += (z+"주 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cw
                  aa = aa + ab}
                  z = z + 1
                write.innerHTML += (z+"주 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * cw
                  aa = aa + ab
                  xx(z);
                  sub.value = "다시 계산하기";
      }else if(bbbbb=="하루"){
                z = z + 1
                write.innerHTML = (z+"일 "+comma(Math.floor(aa))+"원<br>")
                aa = aa * ce
                aa = aa + ab
                while (aa < bb){
                  z = z + 1
                write.innerHTML += (z+"일 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * ce
                  aa = aa + ab}
                  z = z + 1
                write.innerHTML += (z+"일 "+comma(Math.floor(aa))+"원<br>")
                  aa = aa * ce
                  aa = aa + ab
                  cx(z);
                  sub.value = "다시 계산하기";
      }}

      function inputNumberFormat(obj) {
        obj.value = comma(uncomma(obj.value));
    }


    function comma(str) {
        str = String(str);
        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    }

    function uncomma(str) {
        str = String(str);
        return str.replace(/[^\d]+/g, "");
    }
