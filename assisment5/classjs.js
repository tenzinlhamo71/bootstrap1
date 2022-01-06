//constructor with arguments
class CricketersDetails{
    constructor(name, average){
        consol.log("inside the constructor");
        console.log("name");
        console.log("average");
        console.log("leaving the constructor")// control will go to new cricketers details
    }
}
console.log("executing the line number one");
new CricketersDetails("penjor",34.5);//object creation and along with sending vale to constructor

new CricketersDetails("wangdi",84.5);
console.log("program execute successfully");