const regularUser = {
    email: "some@gmail.com",
    fullName: {
        useFullName: {
            firstName: "Tejas ",
            lastName: "Agrawal",
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName.useFullName.firstName);


const obj1 = {
    1: "A",
    2: 'B',
}

const obj2 = {
    3: "C",
    4: 'D',
}

// const obj3 = {obj1 , obj2}; -> wrong way

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);


const course = {
    courseName : "JS in Hindi",
    price: 999,
    courseInstructor : "Tejas Agrawal",
}

// console.log(course.courseInstructor);

const {courseInstructor: padaneVala} = course
console.log(padaneVala);
