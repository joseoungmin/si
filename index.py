#!Python

print("Content-Type: text/html; charset-utf-8\n")
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')
print('''<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="user-scalable=no">

    <style>
    #h1{font-size : 60px;
        text-align:center;}
    #div{text-align:center;
        font-size:50px;}
    .intex{width: 360px;
           height: 45px;
           font-size: 50px;
           text-align:right;}
    .intex1{width:100px;
            height:45px;
            font-size:50px;
            text-align:right;}
    #time{font-size: 45px;
         text-align : center;}
    #sub{width: 300px;
         height:60px;
         text-align : center;
         font-size:40px;}
    #write{text-align : center;
           font-size:40px;}


    </style>
    <script>
      function fun1(){
      var aaaaa = document.getElementById('time');
      var bbbbb = aaaaa.options[aaaaa.selectedIndex].text;


      var a = document.getElementById('a').value;
      var b = document.getElementById('b').value;
      var c = document.getElementById('c').value;


      if (bbbbb=="선택"||!a||!b||!c) {alert('값을 전부 입력해 주세요')}
      }

      function fun2(){
      var aaaaa = document.getElementById('time');
      var bbbbb = aaaaa.options[aaaaa.selectedIndex].text;

      var aa = document.getElementById('a').value;
      var bb = document.getElementById('b').value;
      var cc = document.getElementById('c').value;

      var a = aa.replace(/,/g, "");
      var b = bb.replace(/,/g, "");
      var c = cc.replace(/,/g, "");

      aa = parseInt(a);
      ab = parseInt(a);
      bb = parseInt(b);
      cc = parseInt(c);
      ca = cc * 0.01
      cb = ca + 1
      cq = ca / 12 + 1
      cw = ca / 48 + 1
      ce = ca / 365 + 1
      z = 0

      if (bbbbb=='일년'){
                  z = z + 1
                  document.getElementById('write').innerHTML =(z+'년 '+comma(Math.floor(aa))+'원<br>')
                  aa = aa * cb
                  aa = aa + ab
            while (aa < bb){
                  z = z + 1
                  document.getElementById('write').innerHTML +=(z+'년 '+comma(Math.floor(aa))+'원<br>')
                  aa = aa * cb
                  aa = aa + ab}
                  z = z + 1
                  document.getElementById('write').innerHTML +=(z+'년 '+comma(Math.floor(aa))+'원<br>')
                  aa = aa * cb
                  aa = aa + ab
                  document.getElementById('sub').value = '다시 계산하기';
      }else if(bbbbb=='한달'){
                  z = z + 1
                  document.getElementById('write').innerHTML = (z+'개월 '+comma(Math.floor(aa))+'원<br>')
                  aa = aa * cq
                  aa = aa + ab
            while (aa < bb){
                  z = z + 1
                  document.getElementById('write').innerHTML += (z+'개월 '+comma(Math.floor(aa))+'원<br>')
                  aa = aa * cq
                  aa = aa + ab}
                  z = z + 1
                document.getElementById('write').innerHTML += (z+'개월 '+comma(Math.floor(aa))+'원<br>')
                  aa = aa * cq
                  aa = aa + ab
                  document.getElementById('sub').value = '다시 계산하기';
      }else if(bbbbb=='일주일'){
                z = z + 1
                document.getElementById('write').innerHTML = (z+'주 '+comma(Math.floor(aa))+'원<br>')
                aa = aa * cw
                aa = aa + ab
                while (aa < bb){
                  z = z + 1
                document.getElementById('write').innerHTML += (z+'주 '+comma(Math.floor(aa))+'원<br>')
                  aa = aa * cw
                  aa = aa + ab}
                  z = z + 1
                document.getElementById('write').innerHTML += (z+'주 '+comma(Math.floor(aa))+'원<br>')
                  aa = aa * cw
                  aa = aa + ab
                  document.getElementById('sub').value = '다시 계산하기';
      }else if(bbbbb=='하루'){
                z = z + 1
                document.getElementById('write').innerHTML = (z+'일 '+comma(Math.floor(aa))+'원<br>')
                aa = aa * ce
                aa = aa + ab
                while (aa < bb){
                  z = z + 1
                document.getElementById('write').innerHTML += (z+'일 '+comma(Math.floor(aa))+'원<br>')
                  aa = aa * ce
                  aa = aa + ab}
                  z = z + 1
                document.getElementById('write').innerHTML += (z+'일 '+comma(Math.floor(aa))+'원<br>')
                  aa = aa * ce
                  aa = aa + ab
                  document.getElementById('sub').value = '다시 계산하기';
      }}
      function comma(num) { var regexp = /\B(?=(\d{3})+(?!\d))/g;
      return num.toString().replace(regexp, ',');};

      function inputNumberFormat(obj) {
        obj.value = comma(uncomma(obj.value));
    }

    function comma(str) {
        str = String(str);
        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    }

    function uncomma(str) {
        str = String(str);
        return str.replace(/[^\d]+/g, '');
    }



    </script>
    <title>저축 시뮬레이터</title>
  </head>
  <body>
<h1 id = h1>저축 시뮬레이터</h1>
<div id = 'div'>

<select name="time" id="time">
  <option value="선택">선택</option>
  <option value="하루">하루</option>
  <option value="일주일">일주일</option>
  <option value="한달">한달</option>
  <option value="일년">일년</option>
</select>
에<br> <input type='text' id='a' placeholder='값을 입력하세요'class='intex'value=''onkeyup='inputNumberFormat(this);'> 원을 저축해서<br>
<input type='text' id='b' placeholder='값을 입력하세요' class='intex'onkeyup='inputNumberFormat(this);'>
원을 만들려면?<br>연 이율
<input type='text' id='c'class='intex1'>%
<div>
<input type='button'id='sub' value='계산하기'
onclick="
fun1();
fun2();
"></div></div>
<div id="write">
</div>


  </body>
</html>

''')
