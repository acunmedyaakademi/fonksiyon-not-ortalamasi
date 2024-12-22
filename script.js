const grades = calculation(30,70,50);

function calculation(...grades){
    const collection = grades.reduce((acc, curr) => acc + curr);    
    const gradeAverage = collection / grades.length;

    if(gradeAverage === 90){
        console.log("Notunuz A");
    }
    else if(gradeAverage >= 80){
        console.log("Notunuz B");
    }
    else if(gradeAverage >= 70){
        console.log("Notunuz C");
    }
    else if(gradeAverage >= 60){
        console.log("Notunuz D");
    }
    else{
        console.log("Notunuz F");
    }

    return gradeAverage
}

console.log(grades);