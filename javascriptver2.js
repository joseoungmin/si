
function restart(){
var write = document.getElementById("write");
var end1 = document.getElementById("end1");
var end1 = end1.options[end1.selectedIndex].text; //년
var end2 = document.getElementById("end2");
var end2 = end2.options[end2.selectedIndex].text; //월
var end3 = document.getElementById("end3");
var end3 = end3.options[end3.selectedIndex].text; //일

end1 = parseInt(end1);
end2 = parseInt(end2);
end3 = parseInt(end3);
end1 = end1 * 365;
end2 = end2 * 30.4;
plus = end1 + end2 + end3;
const len = [];
var table = document.getElementById('table-1');
var num = table.rows.length;
num = num - 1
    var ii = 0;
    //행의 갯수만큼 반복
    while (ii < num){
      ii = ii + 1;
      var a = document.getElementById("a-"+ii).value;
      var b = document.getElementById("b-"+ii).value;
      var c = document.getElementById("c-"+ii).value;
      var a = a.replace(/,/g, "");
      var b = b.replace(/,/g, "");
      var c = c.replace(/,/g, "");
      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);
      c = c * 0.01
      c = c + 1;
      var time1 = document.getElementById("time1-"+ii).value;
      var time2 = document.getElementById("time2-"+ii).value;
      if (time1 == "매일"){
        i = 0;
        z = 0;
        if (time2 == "매일"){
                while (i < plus){
                  a = a + b;
                  a = a * c;
                  i = i + 1;
                }}
              else if (time2 == "매주"){
                while (i < plus){
                    a = a + b;
                    i = i + 1;
                    z = z + 1;
                    if (z >= 7){
                        z = 0;
                        a = a * c;
                  }
                }}
                else if (time2 == "매달"){
                while (i < plus){
                      a = a + b;
                      i = i + 1;
                      z = z + 1;
                      if (z >= 30.4){
                          z = 0;
                          a = a * c;
                        }
                      }}
                else if (time2 == "매년"){
                  while (i < plus){
                      a = a + b;
                      i = i + 1;
                      z = z + 1;
                      if (z >= 365){
                          z = 0;
                          a = a * c;
                        }
                      }}

              }else if (time1 == "매주"){
                        i = 0;
                        j = 0;
                        z = 0;
                          if (time2 == "매일"){
                          while (i <= plus){
                              i = i + 1;
                              z = z + 1;
                              a = a * c;
                              if (z >= 7){
                                z = 0;
                                a = a + b;
                                  }
                          }}
                          else if (time2 == "매주"){
                              while (i <= plus){
                                  i = i + 1;
                                  j = j + 1;
                                  z = z + 1;
                                  if (j >= 7){
                                  j = 0;
                                  a = a * c;}
                                  if (z >= 7){
                                    z = 0;
                                    a = a + b;}
                          }}
                          else if (time2 == "매달"){
                            while (i <= plus){
                                i = i + 1;
                                j = j + 1;
                                z = z + 1;
                                if (j >= 30.4){
                                j = 0;
                                a = a * c;}
                                if (z >= 7){
                                  z = 0;
                                  a = a + b;}
                        }}
                        else if (time2 == "매년"){
                            while (i <= plus){
                              i = i + 1;
                              j = j + 1;
                              z = z + 1;
                              if (j >= 365){
                              j = 0;
                              a = a * c;}
                              if (z >= 7){
                                z = 0;
                                a = a + b;}
  }}}else if (time1 == "매달"){
            i = 0;
            j = 0;
            z = 0;
              if (time2 == "매일"){
              while (i <= plus){
                  i = i + 1;
                  z = z + 1;
                  a = a * c;
                  if (z >= 30.4){
                    z = 0;
                    a = a + b;
                      }
              }}
              else if (time2 == "매주"){
                  while (i <= plus){
                      i = i + 1;
                      j = j + 1;
                      z = z + 1;
                      if (j >= 7){
                      j = 0;
                      a = a * c;}
                      if (z >= 30.4){
                        z = 0;
                        a = a + b;}
              }}
              else if (time2 == "매달"){
                while (i <= plus){
                    i = i + 1;
                    j = j + 1;
                    z = z + 1;
                    if (j >= 30.4){
                    j = 0;
                    a = a * c;}
                    if (z >= 30.4){
                      z = 0;
                      a = a + b;}
            }}
            else if (time2 == "매년"){
                while (i <= plus){
                  i = i + 1;
                  j = j + 1;
                  z = z + 1;
                  if (j >= 365){
                  j = 0;
                  a = a * c;}
                  if (z >= 30.4){
                    z = 0;
                    a = a + b;}
}}}
else if (time1 == "매년"){
          i = 0;
          j = 0;
          z = 0;
            if (time2 == "매일"){
            while (i <= plus){
                i = i + 1;
                z = z + 1;
                a = a * c;
                if (z >= 365){
                  z = 0;
                  a = a + b;
                    }
            }}
            else if (time2 == "매주"){
                while (i <= plus){
                    i = i + 1;
                    j = j + 1;
                    z = z + 1;
                    if (j >= 7){
                    j = 0;
                    a = a * c;}
                    if (z >= 365){
                      z = 0;
                      a = a + b;}
            }}
            else if (time2 == "매달"){
              while (i <= plus){
                  i = i + 1;
                  j = j + 1;
                  z = z + 1;
                  if (j >= 30.4){
                  j = 0;
                  a = a * c;}
                  if (z >= 365){
                    z = 0;
                    a = a + b;}
          }}
          else if (time2 == "매년"){
              while (i <= plus){
                i = i + 1;
                j = j + 1;
                z = z + 1;
                if (j >= 365){
                j = 0;
                a = a * c;}
                if (z >= 365){
                  z = 0;
                  a = a + b;}
}}}
    //배열에 ii 추가}
    a = Math.floor(a);
    len.push(a);
  }
const sum = len.reduce((a,b) => (a+b));
// inner = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
write.innerHTML = (numberToKorean(sum) +"원");
}


function inputNumberFormat(obj) {
  obj.value = comma(uncomma(obj.value));
}
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}
function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, "");}

// 돈 단위 함수
function numberToKorean(number){
    var inputNumber  = number < 0 ? false : number;
    var unitWords    = ['', '만', '억', '조', '경'];
    var splitUnit    = 10000;
    var splitCount   = unitWords.length;
    var resultArray  = [];
    var resultString = '';

    for (var i = 0; i < splitCount; i++){
         var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        if (unitResult > 0){
            resultArray[i] = unitResult;
        }
    }

    for (var i = 0; i < resultArray.length; i++){
        if(!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }

    return resultString;
}

function addRow() {
  // table element 찾기
  const table = document.getElementById('table-1');
  num = table.rows.length;
  // 새 행(Row) 추가 (테이블 마지막에)
  const newRow = table.insertRow(-1);

  // 새 행(Row)에 Cell 추가
  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);
  const newCell3 = newRow.insertCell(2);
  const newCell4 = newRow.insertCell(3);

  // Cell에 텍스트 추가

  newCell1.innerHTML = '<input type="text" id="a-'+(num)+'" placeholder="금액을 입력해주세요"class="intex"value=""onkeyup="inputNumberFormat(this);">원';
  newCell2.innerHTML = '<select name="time1-1" class = "time" id="time1-'+(num)+'"><option value="매일">매일</option><option value="매주">매주</option><option value="매달">매달</option><option value="매년">매년</option></select>';
  newCell3.innerHTML = '<input type="text" id="b-'+(num)+'" placeholder="금액을 입력해주세요"class="intex"value=""onkeyup="inputNumberFormat(this);">원';
  newCell4.innerHTML = '<select name="time2-1" class = "time"id="time2-'+(num)+'"><option value="매일">매일</option><option value="매주">매주</option><option value="매달">매달</option><option value="매년">매년</option></select><input type="text" id="c-'+(num)+'"class="intex1">%';

}
function deleteRow(rownum) {
  var table = document.getElementById('table-1')
  table = table.rows.length;
  if (table <= 2){
    alert("행을 삭제 할 수 없습니다.")
  }else{// table element 찾기
  const table = document.getElementById('table-1');
  // 행(Row) 삭제
  const newRow = table.deleteRow(rownum);
  }
}

function a123456(){
  const element = document.getElementById('writeend');
  i = 1;
  while (i < 51) {
    element.innerText += "<option value="+i+">"+i+"일</option>";
    element.innerHTML += '<br>'
   i = i + 1

  }
}

function hide(){
  const unit = document.querySelector(".unit_div");
    unit.classList.toggle('active');
  }

function hide1(){
  const unit = document.querySelector(".hide1");
  unit.classList.toggle('active');
}
function hide2(){
  const unit = document.querySelector(".hide2");
  unit.classList.toggle('active');
}
