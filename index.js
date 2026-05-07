const school = {
  name: "Your School Name",
  'average class size': 25,
  mascot: "Warriors" ,
};
document.getElementById("result").innerHTML = `${school.name} has an average class size of ${school["average class size"]} and their mascot is a ${school.mascot}`;
