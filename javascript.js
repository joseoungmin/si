
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
