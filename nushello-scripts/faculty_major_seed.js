var seed = '';
var list;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.nusmods.com/2015-2016/1/facultyDepartments.json');
xhr.send();
xhr.onreadystatechange = function (){
  if (this.readyState == 4) {
    list = JSON.parse(xhr.responseText);
    for (var faculty in list) {
      seed += `faculty = Faculty.create(name: "${faculty}")\n`;
      list[faculty].forEach(function (major) {
        seed += `Major.create(faculty: faculty, name: "${major}")\n`;
      });
    }

    console.log(seed);
  }
}
