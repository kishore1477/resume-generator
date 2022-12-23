function GenerateNewWE() {
  let newElement = document.createElement('textarea');
  newElement.setAttribute('rows', 3);
  newElement.classList.add('WE')
  let we = document.getElementById('we')
  let btn= document.getElementById('AddbtnWE')
  we.insertBefore(newElement,btn);
   
}
function GenerateNewAQ() {
  let newElement = document.createElement('textarea');
  newElement.setAttribute('rows', 3);
  newElement.classList.add('AQ')
  let we = document.getElementById('aq')
  let btn= document.getElementById('AddbtnAQ')
  we.insertBefore(newElement,btn);
   
}
function GenerateNewSkill() {
  let newElement = document.createElement('textarea');
  newElement.setAttribute('rows', 3);
  newElement.classList.add('skill')
  let skill = document.getElementById('skill')
  let btn= document.getElementById('AddbtnSkill')
  skill.insertBefore(newElement,btn);
   
}
function GenerateNewProject() {
  let newElement = document.createElement('textarea');
  newElement.setAttribute('rows', 3);
  newElement.classList.add('project')
  let projct = document.getElementById('project')
  let btn= document.getElementById('AddbtnProject')
  projct.insertBefore(newElement,btn);
   
}

function GenerateCV() {
    let cv = document.getElementById('cv-form');
    let tmplt = document.getElementById('templete-form')
    var prnt =  document.getElementsByClassName('print')
    prnt.style.display = 'block'
    cv.style.display = 'none'
    tmplt.style.display = 'block'
    document.getElementById('nameT').innerHTML = document.getElementById('name').value
    document.getElementById('nameT1').innerHTML = document.getElementById('name').value
    document.getElementById('emailT').innerHTML = document.getElementById('email').value
    document.getElementById('phoneT').innerHTML = document.getElementById('phone').value
    document.getElementById('addressT').innerHTML = document.getElementById('address').value
    document.getElementById('fbT').href = document.getElementById('facebook').value
    document.getElementById('lkT').href= document.getElementById('linkdlen').value
    document.getElementById('twT').href = document.getElementById('twitter').value
    document.getElementById('objT').innerHTML  = document.getElementById('obj').value


    // Work Exprience
    let workExp = document.getElementsByClassName('WE')
    let str = ''
    for(let e of workExp) {
        console.log(e.value)
str = str + `<li>${e.value}</li>`;
    }
    document.getElementById('WET').innerHTML = str
    // Academic Qualification
    let AcademicQ = document.getElementsByClassName('AQ')
    let strAq = ''
    for(let e of AcademicQ) {
        console.log(e.value)
        strAq = strAq + `<li>${e.value}</li>`;
    }
    console.log("AcademicQ: " , strAq)

    document.getElementById('AQT').innerHTML = strAq

    // Skills
    let Skills = document.getElementsByClassName('skill')
    let strSkill = ''
    for(let e of Skills) {
        console.log(e.value)
        strSkill = strSkill + `<li>${e.value}</li>`;
    }
    console.log("strSkill: " , strSkill)

    document.getElementById('SkillT').innerHTML = strSkill
    // Project
    let projects = document.getElementsByClassName('project')
    let strProject = ''
    for(let e of projects) {
        console.log(e.value)
        strProject = strProject + `<li>${e.value}</li>`;
    }
    console.log("strProject: " , strProject)

    document.getElementById('projectT').innerHTML = strProject
}
function PrintCV() {
//     var   Tdata = document.getElementById('totalData').innerHTML
// var   data = document.getElementById('data').innerHTML
// document.getElementById('totalData').innerHTML = data
var td = document.body
var d = document.getElementById('removebtn').innerHTML
document.body = d
    window.print()
    
}