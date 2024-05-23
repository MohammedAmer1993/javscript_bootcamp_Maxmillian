const task3Element = document.getElementById('task-3');
let output;

function alerting() {
  alert('who is there');
}

function alertingSomebody(name) {
  alert(name);
}

function threeNames(name1, name2, name3) {
  return name1 + name2 + name3;
}

alerting();
alertingSomebody('Amer');
task3Element.addEventListener('click', alerting);
output = threeNames('welcome ', 'back ', 'Amer');
alert(output);
