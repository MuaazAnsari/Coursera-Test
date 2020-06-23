/*
Solution of assignment 4:
Expected output:
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  } else {
    helloSpeaker(names[i]);
  }
}

})();

byeSpeaker = (name) => {
  console.log("GoodBye ",name);
}

helloSpeaker = (name) => {
  console.log("Hello ",name);
}
