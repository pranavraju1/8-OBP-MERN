let submit = document.querySelector("#submit");
let students = [];

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    let gender = document.querySelector('input[name="gender"]:checked');
    // let skillCheckbox = document.querySelectorAll('.skill:checked')
    let skillCheckbox = document.querySelectorAll('input[name="skill"]:checked')
    let skills = []
    skillCheckbox.forEach(item=>{
        skills.push(item.value)
    })
    let courseElement = document.querySelector("#course")
    let course = courseElement.options[courseElement.options.selectedIndex].value
    
    let obj = {}
    obj.name = name.value;
    obj.age = age.value;
    obj.gender = gender.value;
    obj.skills = skills;
    obj.course = course;
    students.push(obj);
})