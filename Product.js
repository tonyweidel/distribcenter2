const Product = function (){

    //all the below stuff is randomized
    let name = determineName();
    let price = setNumber();
    let space = setNumber();
    let prime = questionPrime();

    function determineName(){
        let name = "";
        for (let x=0; x<8; x++){
            let c = Math.floor(25*Math.random()+65);
            let letter = String.fromCharCode(c);
            name += letter;
        }
        return name;
    }

    function setNumber(){
        let price = Math.round(10000*Math.random())/100;
        return price;
    }

    function questionPrime(){
        let num = Math.random()*100;
        if (num > 50){
            return true;
        }
        else{
            return false;
        }
    }
}
