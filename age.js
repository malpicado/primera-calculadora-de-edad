function age() {
  const inputDay = document.getElementById("Date").value
  const inputMonth = document.getElementById("Month").value
  const inputYear = document.getElementById("Year").value

  const inputDate = new Date(inputYear + "/" + inputMonth + "/" + inputDay)
  const currentDate = new Date()
  let finalDate = currentDate - inputDate
  
  const dayMS = 3600 * 24 * 1000
  const yearMS = dayMS * 365
  
  const years = Math.floor(finalDate / yearMS)
  const days = Math.floor((finalDate % yearMS) / dayMS)
  const hours = Math.floor((((finalDate % yearMS) / dayMS) - days) * 24)

  document.getElementById("age").innerHTML = `Tu edad es ${years} años ${days} dias y ${hours} horas`
}

/* before version
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
*/
