const Truck = function(size){
  let type = size;
  let inventory = [];
  let capacity = setCapacity(size);

  function setCapacity(){
    type = type.toLowerCase();
    if(size == "small"){
      return 1000;
    }
    else if(size == "medium"){
      return 2500;
    }
    else if(size == "large"){
      return 5000;
    }
    else{
      console.log("Invalid Capacity Size");
    }
  }
  function spaceEfficency(){
    let sum = 0;
    let inv = inventory.length;
    for(let x = 0;x<inv;x++){
      sum += inventory[x].space;
    }
    return sum/capacity;
  }
  return{type,inventory,capacity,spaceEfficiency}
}
module.exports = Truck.js
