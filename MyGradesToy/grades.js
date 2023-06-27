
function myGrades(grade){
    if (grade>79 && grade <=100){
        console.log('Your Grade is A')
    }
    else if(grade>= 60 && grade <79){
        console.log('Your Grade is B')
    }
    else if (grade>=49 && grade<=59){
        console.log('Your Grade is C')
    }
    else if (grade >=40 && grade<49){
        console.log('Your Grade is C')
    }
    else if (grade<40){
        console.log('Your Grade is E')
    }

}
myGrades(78);