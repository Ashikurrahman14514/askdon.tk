function r1() {
    var p = document.getElementsByClassName("run")[0].value;
    var a = parseInt(p);
    var o = document.getElementsByClassName("run")[1].value;
    var b = parseInt(o);
    var v = document.getElementsByClassName("run")[2].value;
    var c = parseInt(v);
    var w = document.getElementsByClassName("run")[3].value;
    var d = parseInt(w);
    var q = document.getElementsByClassName("run")[4].value;
    var e = parseInt(q);
    var t = document.getElementsByClassName("run")[5].value;
    var f = parseInt(t);
    var u = document.getElementsByClassName("run")[6].value;
    var g = parseInt(u);
    var h5 = document.getElementsByClassName("run")[7].value;
    var h = parseInt(h5);
    var z = document.getElementsByClassName("run")[8].value;
    var i = parseInt(z);
    var s = document.getElementsByClassName("run")[9].value;
    var j = parseInt(s);
    var ml = document.getElementsByClassName("run")[10].value;
    var k = parseInt(ml);
    var jm = document.getElementsByClassName("run")[11].value;
    var m = parseInt(jm);
    var xy = document.getElementsByClassName("allbolll")[0].value;
    var kmp = parseInt(xy);
    var wi = document.getElementsByClassName("allbolll2")[0].value;
    var wic = parseInt(wi);
    var l = a + b + c + d + e + f + g + h + i + j + k + m;
    document.getElementsByClassName("allrun")[0].value = l + "/" + wic + "(" + kmp + ")";
}

function s() {
    var k = document.getElementsByClassName("run")[0].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("bolllar")[0].value;
    var b = parseInt(m);
    var d = a / b;
    document.getElementsByClassName("stk")[0].value = d * 100;
}

function s1() {
    var k = document.getElementsByClassName("run")[1].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("bolllar")[1].value;
    var b = parseInt(m);
    var d = a / b;
    document.getElementsByClassName("stk")[1].value = d * 100;
}

function s2() {
    var k = document.getElementsByClassName("run")[2].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("bolllar")[2].value;
    var b = parseInt(m);
    var d = a / b;
    document.getElementsByClassName("stk")[2].value = d * 100;
}

function s3() {
    var k = document.getElementsByClassName("run")[3].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("bolllar")[3].value;
    var b = parseInt(m);
    var d = a / b;
    document.getElementsByClassName("stk")[3].value = d * 100;
}

function s4() {
    var k = document.getElementsByClassName("run")[4].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("bolllar")[4].value;
    var b = parseInt(m);
    var d = a / b;
    document.getElementsByClassName("stk")[4].value = d * 100;
}

function s5() {
    var k = document.getElementsByClassName("run")[5].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("bolllar")[5].value;
    var b = parseInt(m);
    var d = a / b;
    document.getElementsByClassName("stk")[5].value = d * 100;
}

function s6() {
    var k = document.getElementsByClassName("run")[6].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("bolllar")[6].value;
    var b = parseInt(m);
    var d = a / b;
    document.getElementsByClassName("stk")[6].value = d * 100;
}

function s7() {
    var k = document.getElementsByClassName("run")[7].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("bolllar")[7].value;
    var b = parseInt(m);
    var d = a / b;
    document.getElementsByClassName("stk")[7].value = d * 100;
}

function s8() {
    var k = document.getElementsByClassName("run")[8].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("bolllar")[8].value;
    var b = parseInt(m);
    var d = a / b;
    document.getElementsByClassName("stk")[8].value = d * 100;
}

function s9() {
    var k = document.getElementsByClassName("run")[9].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("bolllar")[9].value;
    var b = parseInt(m);
    var d = a / b;
    document.getElementsByClassName("stk")[9].value = d * 100;
}

function s10() {
    var k = document.getElementsByClassName("run")[10].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("bolllar")[10].value;
    var b = parseInt(m);
    var d = a / b;
    document.getElementsByClassName("stk")[10].value = d * 100;
}



function im() {

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
        var m = document.getElementsByClassName("bollcount")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[0].value = q;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
        var m = document.getElementsByClassName("bollcount")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[1].value = q;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;
        var m = document.getElementsByClassName("bollcount")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[2].value = q;
    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;
        var m = document.getElementsByClassName("bollcount")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[3].value = q;
    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;
        var m = document.getElementsByClassName("bollcount")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[4].value = q;
    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;
        var m = document.getElementsByClassName("bollcount")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[5].value = q;
    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;
        var m = document.getElementsByClassName("bollcount")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[6].value = q;
    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;
        var m = document.getElementsByClassName("bollcount")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[7].value = q;
    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;
        var m = document.getElementsByClassName("bollcount")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[8].value = q;
    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;
        var m = document.getElementsByClassName("bollcount")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[9].value = q;
    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;
        var m = document.getElementsByClassName("bollcount")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[10].value = q;
    }
    if (!radio1[10].checked) {}



    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
        var m = document.getElementsByClassName("over")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[0].value = q;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;
        var m = document.getElementsByClassName("over")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[1].value = q;
    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
        var m = document.getElementsByClassName("over")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[2].value = q;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
        var m = document.getElementsByClassName("over")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[3].value = q;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;
        var m = document.getElementsByClassName("over")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[4].value = q;
    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;
        var m = document.getElementsByClassName("over")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[5].value = q;
    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;
        var m = document.getElementsByClassName("over")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[6].value = q;
    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;
        var m = document.getElementsByClassName("over")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[7].value = q;
    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;
        var m = document.getElementsByClassName("over")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[8].value = q;
    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;
        var m = document.getElementsByClassName("over")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[9].value = q;
    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[0].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;
        var m = document.getElementsByClassName("over")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[10].value = q;
    }
    if (!radio2[10].checked) {

    }


}

function im1() {


    var radio1 = document.getElementsByClassName("radio1");


    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
        var m = document.getElementsByClassName("bollcount")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[0].value = q;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
        var m = document.getElementsByClassName("bollcount")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[1].value = q;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;
        var m = document.getElementsByClassName("bollcount")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[2].value = q;
    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;
        var m = document.getElementsByClassName("bollcount")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[3].value = q;
    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;
        var m = document.getElementsByClassName("bollcount")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[4].value = q;
    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;
        var m = document.getElementsByClassName("bollcount")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[5].value = q;
    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;
        var m = document.getElementsByClassName("bollcount")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[6].value = q;
    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;
        var m = document.getElementsByClassName("bollcount")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[7].value = q;
    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;
        var m = document.getElementsByClassName("bollcount")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[8].value = q;
    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;
        var m = document.getElementsByClassName("bollcount")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[9].value = q;
    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;
        var m = document.getElementsByClassName("bollcount")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[10].value = q;
    }
    if (!radio1[10].checked) {}


    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
        var m = document.getElementsByClassName("over")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[0].value = q;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;
        var m = document.getElementsByClassName("over")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[1].value = q;
    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
        var m = document.getElementsByClassName("over")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[2].value = q;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
        var m = document.getElementsByClassName("over")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[3].value = q;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;
        var m = document.getElementsByClassName("over")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[4].value = q;
    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;
        var m = document.getElementsByClassName("over")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[5].value = q;
    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;
        var m = document.getElementsByClassName("over")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[6].value = q;
    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;
        var m = document.getElementsByClassName("over")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[7].value = q;
    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;
        var m = document.getElementsByClassName("over")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[8].value = q;
    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;
        var m = document.getElementsByClassName("over")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[9].value = q;
    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[1].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;
        var m = document.getElementsByClassName("over")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[10].value = q;
    }
    if (!radio2[10].checked) {

    }

}

function im2() {

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
        var m = document.getElementsByClassName("bollcount")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[0].value = q;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
        var m = document.getElementsByClassName("bollcount")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[1].value = q;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;
        var m = document.getElementsByClassName("bollcount")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[2].value = q;
    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;
        var m = document.getElementsByClassName("bollcount")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[3].value = q;
    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;
        var m = document.getElementsByClassName("bollcount")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[4].value = q;
    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;
        var m = document.getElementsByClassName("bollcount")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[5].value = q;
    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;
        var m = document.getElementsByClassName("bollcount")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[6].value = q;
    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;
        var m = document.getElementsByClassName("bollcount")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[7].value = q;
    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;
        var m = document.getElementsByClassName("bollcount")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[8].value = q;
    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;
        var m = document.getElementsByClassName("bollcount")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[9].value = q;
    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;
        var m = document.getElementsByClassName("bollcount")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[10].value = q;
    }
    if (!radio1[10].checked) {}


    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
        var m = document.getElementsByClassName("over")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[0].value = q;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;
        var m = document.getElementsByClassName("over")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[1].value = q;
    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
        var m = document.getElementsByClassName("over")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[2].value = q;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
        var m = document.getElementsByClassName("over")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[3].value = q;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;
        var m = document.getElementsByClassName("over")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[4].value = q;
    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;
        var m = document.getElementsByClassName("over")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[5].value = q;
    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;
        var m = document.getElementsByClassName("over")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[6].value = q;
    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;
        var m = document.getElementsByClassName("over")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[7].value = q;
    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;
        var m = document.getElementsByClassName("over")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[8].value = q;
    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;
        var m = document.getElementsByClassName("over")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[9].value = q;
    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[2].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;
        var m = document.getElementsByClassName("over")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[10].value = q;
    }
    if (!radio2[10].checked) {

    }

}

function im3() {

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
        var m = document.getElementsByClassName("bollcount")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[0].value = q;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
        var m = document.getElementsByClassName("bollcount")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[1].value = q;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;
        var m = document.getElementsByClassName("bollcount")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[2].value = q;
    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;
        var m = document.getElementsByClassName("bollcount")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[3].value = q;
    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;
        var m = document.getElementsByClassName("bollcount")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[4].value = q;
    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;
        var m = document.getElementsByClassName("bollcount")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[5].value = q;
    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;
        var m = document.getElementsByClassName("bollcount")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[6].value = q;
    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;
        var m = document.getElementsByClassName("bollcount")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[7].value = q;
    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;
        var m = document.getElementsByClassName("bollcount")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[8].value = q;
    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;
        var m = document.getElementsByClassName("bollcount")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[9].value = q;
    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;
        var m = document.getElementsByClassName("bollcount")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[10].value = q;
    }
    if (!radio1[10].checked) {}

    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
        var m = document.getElementsByClassName("over")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[0].value = q;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;
        var m = document.getElementsByClassName("over")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[1].value = q;
    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
        var m = document.getElementsByClassName("over")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[2].value = q;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
        var m = document.getElementsByClassName("over")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[3].value = q;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;
        var m = document.getElementsByClassName("over")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[4].value = q;
    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;
        var m = document.getElementsByClassName("over")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[5].value = q;
    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;
        var m = document.getElementsByClassName("over")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[6].value = q;
    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;
        var m = document.getElementsByClassName("over")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[7].value = q;
    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;
        var m = document.getElementsByClassName("over")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[8].value = q;
    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;
        var m = document.getElementsByClassName("over")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[9].value = q;
    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[3].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;
        var m = document.getElementsByClassName("over")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[10].value = q;
    }
    if (!radio2[10].checked) {

    }

}

function im4() {

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
        var m = document.getElementsByClassName("bollcount")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[0].value = q;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
        var m = document.getElementsByClassName("bollcount")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[1].value = q;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;
        var m = document.getElementsByClassName("bollcount")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[2].value = q;
    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;
        var m = document.getElementsByClassName("bollcount")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[3].value = q;
    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;
        var m = document.getElementsByClassName("bollcount")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[4].value = q;
    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;
        var m = document.getElementsByClassName("bollcount")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[5].value = q;
    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;
        var m = document.getElementsByClassName("bollcount")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[6].value = q;
    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;
        var m = document.getElementsByClassName("bollcount")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[7].value = q;
    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;
        var m = document.getElementsByClassName("bollcount")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[8].value = q;
    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;
        var m = document.getElementsByClassName("bollcount")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[9].value = q;
    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;
        var m = document.getElementsByClassName("bollcount")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[10].value = q;
    }
    if (!radio1[10].checked) {}


    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
        var m = document.getElementsByClassName("over")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[0].value = q;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;
        var m = document.getElementsByClassName("over")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[1].value = q;
    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
        var m = document.getElementsByClassName("over")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[2].value = q;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
        var m = document.getElementsByClassName("over")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[3].value = q;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;
        var m = document.getElementsByClassName("over")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[4].value = q;
    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;
        var m = document.getElementsByClassName("over")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[5].value = q;
    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;
        var m = document.getElementsByClassName("over")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[6].value = q;
    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;
        var m = document.getElementsByClassName("over")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[7].value = q;
    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;
        var m = document.getElementsByClassName("over")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[8].value = q;
    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;
        var m = document.getElementsByClassName("over")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[9].value = q;
    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[4].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;
        var m = document.getElementsByClassName("over")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[10].value = q;
    }
    if (!radio2[10].checked) {

    }

}

function im5() {

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
        var m = document.getElementsByClassName("bollcount")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[0].value = q;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
        var m = document.getElementsByClassName("bollcount")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[1].value = q;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;
        var m = document.getElementsByClassName("bollcount")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[2].value = q;
    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;
        var m = document.getElementsByClassName("bollcount")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[3].value = q;
    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;
        var m = document.getElementsByClassName("bollcount")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[4].value = q;
    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;
        var m = document.getElementsByClassName("bollcount")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[5].value = q;
    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;
        var m = document.getElementsByClassName("bollcount")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[6].value = q;
    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;
        var m = document.getElementsByClassName("bollcount")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[7].value = q;
    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;
        var m = document.getElementsByClassName("bollcount")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[8].value = q;
    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;
        var m = document.getElementsByClassName("bollcount")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[9].value = q;
    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;
        var m = document.getElementsByClassName("bollcount")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[10].value = q;
    }
    if (!radio1[10].checked) {}

    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
        var m = document.getElementsByClassName("over")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[0].value = q;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;
        var m = document.getElementsByClassName("over")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[1].value = q;
    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
        var m = document.getElementsByClassName("over")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[2].value = q;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
        var m = document.getElementsByClassName("over")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[3].value = q;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;
        var m = document.getElementsByClassName("over")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[4].value = q;
    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;
        var m = document.getElementsByClassName("over")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[5].value = q;
    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;
        var m = document.getElementsByClassName("over")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[6].value = q;
    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;
        var m = document.getElementsByClassName("over")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[7].value = q;
    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;
        var m = document.getElementsByClassName("over")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[8].value = q;
    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;
        var m = document.getElementsByClassName("over")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[9].value = q;
    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[5].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;
        var m = document.getElementsByClassName("over")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[10].value = q;
    }
    if (!radio2[10].checked) {

    }

}

function im6() {

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
        var m = document.getElementsByClassName("bollcount")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[0].value = q;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
        var m = document.getElementsByClassName("bollcount")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[1].value = q;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;
        var m = document.getElementsByClassName("bollcount")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[2].value = q;
    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;
        var m = document.getElementsByClassName("bollcount")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[3].value = q;
    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;
        var m = document.getElementsByClassName("bollcount")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[4].value = q;
    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;
        var m = document.getElementsByClassName("bollcount")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[5].value = q;
    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;
        var m = document.getElementsByClassName("bollcount")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[6].value = q;
    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;
        var m = document.getElementsByClassName("bollcount")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[7].value = q;
    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;
        var m = document.getElementsByClassName("bollcount")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[8].value = q;
    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;
        var m = document.getElementsByClassName("bollcount")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[9].value = q;
    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;
        var m = document.getElementsByClassName("bollcount")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[10].value = q;
    }
    if (!radio1[10].checked) {}


    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
        var m = document.getElementsByClassName("over")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[0].value = q;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;
        var m = document.getElementsByClassName("over")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[1].value = q;
    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
        var m = document.getElementsByClassName("over")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[2].value = q;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
        var m = document.getElementsByClassName("over")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[3].value = q;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;
        var m = document.getElementsByClassName("over")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[4].value = q;
    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;
        var m = document.getElementsByClassName("over")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[5].value = q;
    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;
        var m = document.getElementsByClassName("over")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[6].value = q;
    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;
        var m = document.getElementsByClassName("over")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[7].value = q;
    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;
        var m = document.getElementsByClassName("over")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[8].value = q;
    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;
        var m = document.getElementsByClassName("over")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[9].value = q;
    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[6].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;
        var m = document.getElementsByClassName("over")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[10].value = q;
    }
    if (!radio2[10].checked) {

    }

}

function im7() {
    var o = document.getElementsByClassName("button_1")[7].value;
    var a = parseInt(o);
    var h = document.getElementsByClassName("Extra")[0].value;
    var b = parseInt(h);
    var c = a + b;
    document.getElementsByClassName("Extra")[0].value = c;

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var m = document.getElementsByClassName("bollcount")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[0].value = q;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
       
        var m = document.getElementsByClassName("bollcount")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[1].value = q;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
       
        var m = document.getElementsByClassName("bollcount")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[2].value = q;
    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
       
        var m = document.getElementsByClassName("bollcount")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[3].value = q;
    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
       
        var m = document.getElementsByClassName("bollcount")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[4].value = q;
    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
      
        var m = document.getElementsByClassName("bollcount")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[5].value = q;
    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
       
        var m = document.getElementsByClassName("bollcount")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[6].value = q;
    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        
        var m = document.getElementsByClassName("bollcount")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[7].value = q;
    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
       
        var m = document.getElementsByClassName("bollcount")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[8].value = q;
    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        
        var m = document.getElementsByClassName("bollcount")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[9].value = q;
    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
      
        var m = document.getElementsByClassName("bollcount")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[10].value = q;
    }
    if (!radio1[10].checked) { }

    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var m = document.getElementsByClassName("over")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[0].value = q;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var m = document.getElementsByClassName("over")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[1].value = q;
    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var m = document.getElementsByClassName("over")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[2].value = q;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var m = document.getElementsByClassName("over")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[3].value = q;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var m = document.getElementsByClassName("over")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[4].value = q;
    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var m = document.getElementsByClassName("over")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[5].value = q;
    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var m = document.getElementsByClassName("over")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[6].value = q;
    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var m = document.getElementsByClassName("over")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[7].value = q;
    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var m = document.getElementsByClassName("over")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[8].value = q;
    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var m = document.getElementsByClassName("over")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[9].value = q;
    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var m = document.getElementsByClassName("over")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[10].value = q;
    }
    if (!radio2[10].checked) {

    }
}

function im8() {
    var o = document.getElementsByClassName("button_1")[8].value;
    var a = parseInt(o);
    var h = document.getElementsByClassName("Extra")[0].value;
    var b = parseInt(h);
    var c = a + b;
    document.getElementsByClassName("Extra")[0].value = c;

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var m = document.getElementsByClassName("bollcount")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[0].value = q;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {

        var m = document.getElementsByClassName("bollcount")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[1].value = q;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {

        var m = document.getElementsByClassName("bollcount")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[2].value = q;
    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {

        var m = document.getElementsByClassName("bollcount")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[3].value = q;
    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {

        var m = document.getElementsByClassName("bollcount")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[4].value = q;
    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {

        var m = document.getElementsByClassName("bollcount")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[5].value = q;
    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {

        var m = document.getElementsByClassName("bollcount")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[6].value = q;
    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {

        var m = document.getElementsByClassName("bollcount")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[7].value = q;
    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {

        var m = document.getElementsByClassName("bollcount")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[8].value = q;
    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {

        var m = document.getElementsByClassName("bollcount")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[9].value = q;
    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {

        var m = document.getElementsByClassName("bollcount")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[10].value = q;
    }
    if (!radio1[10].checked) { 

    }

    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var m = document.getElementsByClassName("over")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[0].value = q;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var m = document.getElementsByClassName("over")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[1].value = q;
    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var m = document.getElementsByClassName("over")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[2].value = q;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var m = document.getElementsByClassName("over")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[3].value = q;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var m = document.getElementsByClassName("over")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[4].value = q;
    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var m = document.getElementsByClassName("over")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[5].value = q;
    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var m = document.getElementsByClassName("over")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[6].value = q;
    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var m = document.getElementsByClassName("over")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[7].value = q;
    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var m = document.getElementsByClassName("over")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[8].value = q;
    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var m = document.getElementsByClassName("over")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[9].value = q;
    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var m = document.getElementsByClassName("over")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[10].value = q;
    }
    if (!radio2[10].checked) {

    }
}

function im9() {
    var o = document.getElementsByClassName("button_1")[9].value;
    var a = parseInt(o);
    var h = document.getElementsByClassName("Extra")[0].value;
    var b = parseInt(h);
    var c = a + b;
    document.getElementsByClassName("Extra")[0].value = c;

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var m = document.getElementsByClassName("bollcount")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[0].value = q;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {

        var m = document.getElementsByClassName("bollcount")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[1].value = q;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {

        var m = document.getElementsByClassName("bollcount")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[2].value = q;
    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {

        var m = document.getElementsByClassName("bollcount")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[3].value = q;
    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {

        var m = document.getElementsByClassName("bollcount")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[4].value = q;
    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {

        var m = document.getElementsByClassName("bollcount")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[5].value = q;
    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {

        var m = document.getElementsByClassName("bollcount")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[6].value = q;
    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {

        var m = document.getElementsByClassName("bollcount")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[7].value = q;
    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {

        var m = document.getElementsByClassName("bollcount")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[8].value = q;
    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {

        var m = document.getElementsByClassName("bollcount")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[9].value = q;
    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {

        var m = document.getElementsByClassName("bollcount")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[10].value = q;
    }
    if (!radio1[10].checked) { }

    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var m = document.getElementsByClassName("over")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[0].value = q;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var m = document.getElementsByClassName("over")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[1].value = q;
    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var m = document.getElementsByClassName("over")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[2].value = q;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var m = document.getElementsByClassName("over")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[3].value = q;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var m = document.getElementsByClassName("over")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[4].value = q;
    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var m = document.getElementsByClassName("over")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[5].value = q;
    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var m = document.getElementsByClassName("over")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[6].value = q;
    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var m = document.getElementsByClassName("over")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[7].value = q;
    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var m = document.getElementsByClassName("over")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[8].value = q;
    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var m = document.getElementsByClassName("over")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[9].value = q;
    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var m = document.getElementsByClassName("over")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[10].value = q;
    }
    if (!radio2[10].checked) {

    }
}

function im10() {
    var o = document.getElementsByClassName("button_1")[10].value;
    var a = parseInt(o);
    var h = document.getElementsByClassName("Extra")[0].value;
    var b = parseInt(h);
    var c = a + b;
    document.getElementsByClassName("Extra")[0].value = c;

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var m = document.getElementsByClassName("bollcount")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[0].value = q;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {

        var m = document.getElementsByClassName("bollcount")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[1].value = q;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {

        var m = document.getElementsByClassName("bollcount")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[2].value = q;
    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {

        var m = document.getElementsByClassName("bollcount")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[3].value = q;
    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {

        var m = document.getElementsByClassName("bollcount")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[4].value = q;
    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {

        var m = document.getElementsByClassName("bollcount")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[5].value = q;
    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {

        var m = document.getElementsByClassName("bollcount")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[6].value = q;
    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {

        var m = document.getElementsByClassName("bollcount")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[7].value = q;
    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {

        var m = document.getElementsByClassName("bollcount")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[8].value = q;
    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {

        var m = document.getElementsByClassName("bollcount")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[9].value = q;
    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {

        var m = document.getElementsByClassName("bollcount")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[10].value = q;
    }
    if (!radio1[10].checked) { }

    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var m = document.getElementsByClassName("over")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[0].value = q;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var m = document.getElementsByClassName("over")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[1].value = q;
    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var m = document.getElementsByClassName("over")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[2].value = q;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var m = document.getElementsByClassName("over")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[3].value = q;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var m = document.getElementsByClassName("over")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[4].value = q;
    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var m = document.getElementsByClassName("over")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[5].value = q;
    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var m = document.getElementsByClassName("over")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[6].value = q;
    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var m = document.getElementsByClassName("over")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[7].value = q;
    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var m = document.getElementsByClassName("over")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[8].value = q;
    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var m = document.getElementsByClassName("over")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[9].value = q;
    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var m = document.getElementsByClassName("over")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[10].value = q;
    }
    if (!radio2[10].checked) {

    }
}

function im12() {
    var o = document.getElementsByClassName("button_1")[12].value;
    var a = parseInt(o);
    var h = document.getElementsByClassName("Extra")[0].value;
    var b = parseInt(h);
    var c = a + b;
    document.getElementsByClassName("Extra")[0].value = c;

    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[12].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;

    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[12].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;

    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[12].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[12].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[12].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;

    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[12].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;

    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[12].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;

    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[12].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;

    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[12].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;

    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[12].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;

    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[12].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;

    }
    if (!radio2[10].checked) {

    }
}

function im13() {
    var o = document.getElementsByClassName("button_1")[13].value;
    var a = parseInt(o);
    var h = document.getElementsByClassName("Extra")[0].value;
    var b = parseInt(h);
    var c = a + b;
    document.getElementsByClassName("Extra")[0].value = c;

    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[13].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;

    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[13].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;

    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[13].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[13].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[13].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;

    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[13].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;

    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[13].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;

    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[13].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;

    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[13].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;

    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[13].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;

    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[13].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;

    }
    if (!radio2[10].checked) {

    }
}

function im14() {
    var o = document.getElementsByClassName("button_1")[14].value;
    var a = parseInt(o);
    var h = document.getElementsByClassName("Extra")[0].value;
    var b = parseInt(h);
    var c = a + b;
    document.getElementsByClassName("Extra")[0].value = c;

    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[14].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;

    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[14].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;

    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[14].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[14].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[14].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;

    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[14].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;

    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[14].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;

    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[14].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;

    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[14].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;

    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[14].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;

    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[14].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;

    }
    if (!radio2[10].checked) {

    }
}

function im15() {
    var o = document.getElementsByClassName("button_1")[15].value;
    var a = parseInt(o);
    var h = document.getElementsByClassName("Extra")[0].value;
    var b = parseInt(h);
    var c = a + b;
    document.getElementsByClassName("Extra")[0].value = c;

    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[15].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;

    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[15].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;

    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[15].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[15].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[15].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;

    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[15].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;

    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[15].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;

    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[15].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;

    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[15].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;

    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[15].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;

    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[15].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;

    }
    if (!radio2[10].checked) {

    }
}

function im16() {
    var o = document.getElementsByClassName("button_1")[16].value;
    var a = parseInt(o);
    var h = document.getElementsByClassName("Extra")[0].value;
    var b = parseInt(h);
    var c = a + b;
    document.getElementsByClassName("Extra")[0].value = c;

    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[16].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;

    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[16].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;

    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[16].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[16].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[16].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;

    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[16].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;

    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[16].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;

    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[16].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;

    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[16].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;

    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[16].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;

    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[16].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;

    }
    if (!radio2[10].checked) {

    }
}

function im17() {
    var o = document.getElementsByClassName("button_1")[17].value;
    var a = parseInt(o);
    var h = document.getElementsByClassName("Extra")[0].value;
    var b = parseInt(h);
    var c = a + b;
    document.getElementsByClassName("Extra")[0].value = c;

    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[17].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;

    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[17].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;

    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[17].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[17].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[17].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;

    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[17].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;

    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[17].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;

    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[17].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;

    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[17].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;

    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[17].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;

    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[17].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;

    }
    if (!radio2[10].checked) {

    }
}

function im18() {

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;

    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;

    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;

    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;

    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;

    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;

    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;

    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;

    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;

    }
    if (!radio1[10].checked) {}



    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;

    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;

    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;

    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;

    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;

    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;

    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;

    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;

    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;

    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[18].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;

    }
    if (!radio2[10].checked) {

    }


}

function im19() {

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;

    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;

    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;

    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;

    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;

    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;

    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;

    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;

    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;

    }
    if (!radio1[10].checked) {}



    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;

    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;

    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;

    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;

    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;

    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;

    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;

    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;

    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;

    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[19].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;

    }
    if (!radio2[10].checked) {

    }


}

function im20() {

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;

    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;

    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;

    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;

    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;

    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;

    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;

    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;

    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;

    }
    if (!radio1[10].checked) {}



    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;

    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;

    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;

    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;

    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;

    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;

    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;

    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;

    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;

    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[20].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;

    }
    if (!radio2[10].checked) {

    }


}

function im21() {

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;

    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;

    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;

    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;

    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;

    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;

    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;

    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;

    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;

    }
    if (!radio1[10].checked) {}



    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;

    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;

    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;

    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;

    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;

    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;

    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;

    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;

    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;

    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[21].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;

    }
    if (!radio2[10].checked) {

    }


}

function im22() {

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;

    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;

    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;

    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;

    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;

    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;

    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;

    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;

    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;

    }
    if (!radio1[10].checked) {}



    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;

    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;

    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;

    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;

    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;

    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;

    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;

    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;

    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;

    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[22].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;

    }
    if (!radio2[10].checked) {

    }


}

function im23() {

    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[0].value = c;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[1].value = c;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[2].value = c;

    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[3].value = c;

    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[4].value = c;

    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[5].value = c;

    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[6].value = c;

    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[7].value = c;

    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[8].value = c;

    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[9].value = c;

    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("clapp")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("clapp")[10].value = c;

    }
    if (!radio1[10].checked) {}



    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[0].value = c;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[1].value = c;

    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[2].value = c;

    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[3].value = c;

    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[4].value = c;

    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[5].value = c;

    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[6].value = c;

    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[7].value = c;

    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[8].value = c;

    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[9].value = c;

    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[23].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("rundisa")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("rundisa")[10].value = c;

    }
    if (!radio2[10].checked) {

    }


}

function wicall() {
    var p = document.getElementsByClassName("wicket5")[0].value;
    var a = parseInt(p);
    var o = document.getElementsByClassName("wicket5")[1].value;
    var b = parseInt(o);
    var v = document.getElementsByClassName("wicket5")[2].value;
    var c = parseInt(v);
    var w = document.getElementsByClassName("wicket5")[3].value;
    var d = parseInt(w);
    var q = document.getElementsByClassName("wicket5")[4].value;
    var e = parseInt(q);
    var t = document.getElementsByClassName("wicket5")[5].value;
    var f = parseInt(t);
    var u = document.getElementsByClassName("wicket5")[6].value;
    var g = parseInt(u);
    var h5 = document.getElementsByClassName("wicket5")[7].value;
    var h = parseInt(h5);
    var z = document.getElementsByClassName("wicket5")[8].value;
    var i = parseInt(z);
    var s = document.getElementsByClassName("wicket5")[9].value;
    var j = parseInt(s);
    var ml = document.getElementsByClassName("wicket5")[10].value;
    var k = parseInt(ml);


    var l = a + b + c + d + e + f + g + h + i + j + k;
    document.getElementsByClassName("allbolll2")[0].value = l;
}

function bo() {
    var p = document.getElementsByClassName("over")[0].value;
    var a = parseInt(p);
    var o = document.getElementsByClassName("over")[1].value;
    var b = parseInt(o);
    var v = document.getElementsByClassName("over")[2].value;
    var c = parseInt(v);
    var w = document.getElementsByClassName("over")[3].value;
    var d = parseInt(w);
    var q = document.getElementsByClassName("over")[4].value;
    var e = parseInt(q);
    var t = document.getElementsByClassName("over")[5].value;
    var f = parseInt(t);
    var u = document.getElementsByClassName("over")[6].value;
    var g = parseInt(u);
    var h5 = document.getElementsByClassName("over")[7].value;
    var h = parseInt(h5);
    var z = document.getElementsByClassName("over")[8].value;
    var i = parseInt(z);
    var s = document.getElementsByClassName("over")[9].value;
    var j = parseInt(s);
    var ml = document.getElementsByClassName("over")[10].value;
    var k = parseInt(ml);


    var l = a + b + c + d + e + f + g + h + i + j + k;
    var pp = l / 6;
    document.getElementsByClassName("allbolll")[0].value = pp.toFixed(1);
}

function bo2() {
    var radio1 = document.getElementsByClassName("radio1");

    if (radio1[0].checked) {

        var m = document.getElementsByClassName("bollcount")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[0].value = q;
    }
    if (!radio1[0].checked) {

    }
    if (radio1[1].checked) {

        var m = document.getElementsByClassName("bollcount")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[1].value = q;
    }
    if (!radio1[1].checked) {

    }
    if (radio1[2].checked) {

        var m = document.getElementsByClassName("bollcount")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[2].value = q;
    }
    if (!radio1[2].checked) {

    }
    if (radio1[3].checked) {

        var m = document.getElementsByClassName("bollcount")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[3].value = q;
    }
    if (!radio1[3].checked) {

    }
    if (radio1[4].checked) {

        var m = document.getElementsByClassName("bollcount")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[4].value = q;
    }
    if (!radio1[4].checked) {

    }
    if (radio1[5].checked) {

        var m = document.getElementsByClassName("bollcount")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[5].value = q;
    }
    if (!radio1[5].checked) {

    }
    if (radio1[6].checked) {

        var m = document.getElementsByClassName("bollcount")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[6].value = q;
    }
    if (!radio1[6].checked) {

    }
    if (radio1[7].checked) {

        var m = document.getElementsByClassName("bollcount")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[7].value = q;
    }
    if (!radio1[7].checked) {

    }
    if (radio1[8].checked) {

        var m = document.getElementsByClassName("bollcount")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[8].value = q;
    }
    if (!radio1[8].checked) {

    }
    if (radio1[9].checked) {

        var m = document.getElementsByClassName("bollcount")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[9].value = q;
    }
    if (!radio1[9].checked) {

    }
    if (radio1[10].checked) {

        var m = document.getElementsByClassName("bollcount")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("bollcount")[10].value = q;
    }
    if (!radio1[10].checked) {

    }


    var radio2 = document.getElementsByClassName("radio2");

    if (radio2[0].checked) {
        var o = document.getElementsByClassName("button_1")[11].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("wicket5")[0].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("wicket5")[0].value = c;
        var m = document.getElementsByClassName("over")[0].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[0].value = q;
    }
    if (!radio2[0].checked) {

    }
    if (radio2[1].checked) {
        var o = document.getElementsByClassName("button_1")[11].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("wicket5")[1].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("wicket5")[1].value = c;
        var m = document.getElementsByClassName("over")[1].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[1].value = q;
    }
    if (!radio2[1].checked) {

    }
    if (radio2[2].checked) {
        var o = document.getElementsByClassName("button_1")[11].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("wicket5")[2].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("wicket5")[2].value = c;
        var m = document.getElementsByClassName("over")[2].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[2].value = q;
    }
    if (!radio2[2].checked) {

    }
    if (radio2[3].checked) {
        var o = document.getElementsByClassName("button_1")[11].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("wicket5")[3].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("wicket5")[3].value = c;
        var m = document.getElementsByClassName("over")[3].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[3].value = q;
    }
    if (!radio2[3].checked) {

    }
    if (radio2[4].checked) {
        var o = document.getElementsByClassName("button_1")[11].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("wicket5")[4].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("wicket5")[4].value = c;
        var m = document.getElementsByClassName("over")[4].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[4].value = q;
    }
    if (!radio2[4].checked) {

    }
    if (radio2[5].checked) {
        var o = document.getElementsByClassName("button_1")[11].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("wicket5")[5].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("wicket5")[5].value = c;
        var m = document.getElementsByClassName("over")[5].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[5].value = q;
    }
    if (!radio2[5].checked) {

    }
    if (radio2[6].checked) {
        var o = document.getElementsByClassName("button_1")[11].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("wicket5")[6].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("wicket5")[6].value = c;
        var m = document.getElementsByClassName("over")[6].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[6].value = q;
    }
    if (!radio2[6].checked) {

    }
    if (radio2[7].checked) {
        var o = document.getElementsByClassName("button_1")[11].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("wicket5")[7].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("wicket5")[7].value = c;
        var m = document.getElementsByClassName("over")[7].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[7].value = q;
    }
    if (!radio2[7].checked) {

    }
    if (radio2[8].checked) {
        var o = document.getElementsByClassName("button_1")[11].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("wicket5")[8].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("wicket5")[8].value = c;
        var m = document.getElementsByClassName("over")[8].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[8].value = q;
    }
    if (!radio2[8].checked) {

    }
    if (radio2[9].checked) {
        var o = document.getElementsByClassName("button_1")[11].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("wicket5")[9].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("wicket5")[9].value = c;
        var m = document.getElementsByClassName("over")[9].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[9].value = q;
    }
    if (!radio2[9].checked) {

    }
    if (radio2[10].checked) {
        var o = document.getElementsByClassName("button_1")[11].value;
        var a = parseInt(o);
        var h = document.getElementsByClassName("wicket5")[10].value;
        var b = parseInt(h);
        var c = a + b;
        document.getElementsByClassName("wicket5")[10].value = c;
        var m = document.getElementsByClassName("over")[10].value;
        var n = parseInt(m);
        var q = n + 1;

        document.getElementsByClassName("over")[10].value = q;
    }
    if (!radio2[10].checked) {

    }
}

function ec() {
    var k = document.getElementsByClassName("over")[0].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("rundisa")[0].value;
    var b = parseInt(m);
    var d = a / 6;
    var e = b / d;
    document.getElementsByClassName("ru1")[0].value = e;
}

function ec1() {
    var k = document.getElementsByClassName("over")[1].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("rundisa")[1].value;
    var b = parseInt(m);
    var d = a / 6;
    var e = b / d;
    document.getElementsByClassName("ru1")[1].value = e;
}

function ec2() {
    var k = document.getElementsByClassName("over")[2].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("rundisa")[2].value;
    var b = parseInt(m);
    var d = a / 6;
    var e = b / d;
    document.getElementsByClassName("ru1")[2].value = e;
}

function ec3() {
    var k = document.getElementsByClassName("over")[3].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("rundisa")[3].value;
    var b = parseInt(m);
    var d = a / 6;
    var e = b / d;
    document.getElementsByClassName("ru1")[3].value = e;
}

function ec4() {
    var k = document.getElementsByClassName("over")[4].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("rundisa")[4].value;
    var b = parseInt(m);
    var d = a / 6;
    var e = b / d;
    document.getElementsByClassName("ru1")[4].value = e;
}

function ec5() {
    var k = document.getElementsByClassName("over")[5].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("rundisa")[5].value;
    var b = parseInt(m);
    var d = a / 6;
    var e = b / d;
    document.getElementsByClassName("ru1")[5].value = e;
}

function ec6() {
    var k = document.getElementsByClassName("over")[6].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("rundisa")[6].value;
    var b = parseInt(m);
    var d = a / 6;
    var e = b / d;
    document.getElementsByClassName("ru1")[6].value = e;
}

function ec7() {
    var k = document.getElementsByClassName("over")[7].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("rundisa")[7].value;
    var b = parseInt(m);
    var d = a / 6;
    var e = b / d;
    document.getElementsByClassName("ru1")[7].value = e;
}

function ec8() {
    var k = document.getElementsByClassName("over")[8].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("rundisa")[8].value;
    var b = parseInt(m);
    var d = a / 6;
    var e = b / d;
    document.getElementsByClassName("ru1")[8].value = e;
}

function ec9() {
    var k = document.getElementsByClassName("over")[9].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("rundisa")[9].value;
    var b = parseInt(m);
    var d = a / 6;
    var e = b / d;
    document.getElementsByClassName("ru1")[9].value = e;
}

function ec10() {
    var k = document.getElementsByClassName("over")[10].value;
    var a = parseInt(k);
    var m = document.getElementsByClassName("rundisa")[10].value;
    var b = parseInt(m);
    var d = a / 6;
    var e = b / d;
    document.getElementsByClassName("ru1")[10].value = e;
}