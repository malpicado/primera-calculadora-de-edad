function age() {
    let D1 = document.getElementById("Date").value;
    let M1 = document.getElementById("Month").value;
    let Y1 = document.getElementById("Year").value;
    let date = new Date();
    let D2 = date.getDate();
    let M2 = 1 + date.getMonth();
    let Y2 =  date.getFullYear();
    let Month = [31, 29, 31, 30, 31,30,31,31,30,31,30,31];
    if(D1 > D2) {
        D2 = D2 + Month[M2 - 1];
        M2 = M2 - 1;
    }
    if(M1 > M2) {
        M2 = M2 + 12;
        Y2 = Y2 - 1;
    }
    let D = D2 - D1;
    let M = M2 - M1; 
    let Y = Y2 - Y1;
    document.getElementById("age").innerHTML = "Tu edad es " + Y + " años, " + M + " meses y " + D + " días ";
}