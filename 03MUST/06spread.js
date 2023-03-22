const languages = ['javascript', 'c++', 'python', 'java'];
const dsl = ['SQL', 'HTML', 'CSS', 'NoSQL'];

const allLanguages = [...languages, ...dsl];

const courseData = {
    name: 'Projektowanie i oprogramowanie front-end',
    shortcut: 'PPFront',
    year: '2',
    content:{
            type:{
            lectures: true,
            laboratories: true,
            projects: true,
        },
        hours:{
            lectures: 15,
            laboratories: 15,
            projects: 15
        }
    }
}

console.log(languages);
console.log(dsl);
console.log(allLanguages);

const courseDataForYear = courseData;
courseDataForYear = {start: 2020, end: 2024};