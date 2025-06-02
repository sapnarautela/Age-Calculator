function calculate(){
    let year;
    let month;
    let day;
    let currentDay= parseInt(cd.value.slice(8,10),10);
    let currentMonth = parseInt(cd.value.slice(5,7),10);
    let currentyear = parseInt(cd.value.slice(0,4),10);
    console.log('current date: ',currentyear,currentMonth,currentDay);
    
    let birthDay= parseInt(dob.value.slice(8,10),10);
    let birthMonth = parseInt(dob.value.slice(5,7),10);
    let birthyear = parseInt(dob.value.slice(0,4),10);
    console.log('dob: ',birthyear,birthMonth,birthDay);
    
    if(currentDay>=birthDay){
        day = currentDay - birthDay;
    }
    else{
     day = currentDay + new Date(currentyear,currentMonth,0).getDate() - birthDay;
      currentMonth--;
    }
    if(currentMonth>=birthMonth){
        month = currentMonth - birthMonth;
    }
    else{
        month = currentMonth + 12 - birthMonth;
        currentyear--;
    }
    year= currentyear - birthyear;

    if(year<0){
        ageText.innerHTML = "wrong dates put valid input dates";
    }
    else{
        ageText.innerHTML = year + " years,"+ month +" months,"+ day + " days," ;
    }
}