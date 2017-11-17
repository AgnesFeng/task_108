'use strict'

function fill_block(){
    let fillblock = 0;
    let fillblockAnswer = ["统一建模语言", "封装性", "继承性", "多态性"];
    if (document.getElementById("a1")==fillblockAnswer[0]);
    fillblock +=5;
    fillblockAnswer.map(function (temp,index,array) {
        if(temp == document.getElementById("b1").value && array.indexOf(temp)==index) //避免重复出现
            fillblock +=5;
        if(temp == document.getElementById("b2").value && array.indexOf(temp)==index) //避免重复出现
            fillblock +=5;
        if(temp == document.getElementById("b3").value && array.indexOf(temp)==index) //避免重复出现
            fillblock +=5;
        return fillblock;
    });
    return fillblock;
}

function single_select() {
    let single = 0;
    let du = document.getElementsByName("Sex");
    if(du[1].checked && du[0].checked == false && du[2].checked == false && du[3].checked == false){
        single +=10;
    }
    let du2 = document.getElementsByName("ex");
    if(du2[0].checked && du2[1].checked == false && du2[2].checked == false && du2[3].checked == false){
        single +=10;
    }
    return single;
}

function multi_select() {
    let multi = 0;
    let mu = document.getElementsByName("mul");
    let mu2 = document.getElementsByName("mul2");
    if(mu2[0].checked && mu2[1].checked && mu2[2].checked && mu2[3].checked == false){
        single +=10;
    }
    if(mu[0].checked && mu[1].checked && mu[2].checked == false && mu[3].checked){
        single +=10;
    }
    return multi;
}

function judge_tf(){
    let judge = 0;
    let ju = document.getElementsByName("1");
    let ju2 = document.getElementsByName("2");
    if(ju[0].checked == false && ju[1].checked){
        judge += 10;
    }
    if(ju[1].checked == false && ju[0].checked){
        judge += 10;
    }
    return judge;
}
function fill_area() {
    let fillarea = 0
    let fa = document.getElementById("fillarea");
    if(fa.innerHTML == "模型是对现实世界的简化和抽象，模型是对所有研究的系统，过程，事物或概念的一种表达形式，可以是物理实体；可以是某图形；或者是一种数学表达式。")
    fillarea += 20;
    return fillarea;
}

//最好分开，有个计算函数，有个输出函数
function output_count(){

    var stu_class = document.getElementById("stu_class").childNodes[1].value;
   // console.log(document.getElementById("stu_class").childNodes[1].value);
    var stu_name = document.getElementById("stu_name").value;
    let sum = fill_block() + single_select() + multi_select() + judge_tf() + fill_area();
    //let sum = fill_block() + multi_select() + judge_tf() + fill_area();
    document.getElementById("count").innerHTML = "总分："+sum;
    alert(stu_class+"班"+stu_name + "的得分是" + sum);
}

