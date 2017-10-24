//require queue.js

function configureWareHouse(numberofitems){
    let Warehouse = new Queue();
    //fill the warehouse with new Products
    for(let x=0;x<numberofitems;x++){
        Warehouse.enqueue(new Product());
    }
    return warehouse;

}
function configureTruckFleet(numberoftrucks){
    let theFleet = new Queue();
    //fill the fleet with different sized trucks using math.random()
    for(let x=0;x<numberoftrucks;x++){
      TruckFleet.enqueue(new Truck());
    }
    return theFleet;
}
function distribute(wh,tf){
    //distribute the products in the warehouse to the truck fleet.
    let deploy = new Queue();
    while(!wh.isEmpty() && !tf.isEmpty()){
    let currentTruck = tf.dequeue();
    while(currentTruck.spaceEfficency()<1){
      currentTruck.inventory.push(Warehouse.dequeue);
    }
    if(currentTruck.spaceEfficency()>1){
      Warehouse.enqueue(currentTruck.inventory.pop());
    }
    deploy.enqueue(currentTruck);
  }
  return deploy;
}
function ship(fleet,percent){
    //if the trucks spaceEfficency is greater than or equal to the percent, then remove the truck from the fleet's linked list

}
function main(){
    let flemhouse = configureWareHouse();
    let flemfleet = configureTruckFleet();
    flemfleet = distribute(flemhouse,flemfleet);
    let shipping = ship(flemfleet,0.80);
    for(let s=0;s<shipping.length;s++){
        console.log("Truck "+s+" is in route");
        console.log("-----------------------");
        while(s.getNext() != null){
            console.log(shipping[s].getValue().spaceEfficiency());
        }
    }
}

main();
