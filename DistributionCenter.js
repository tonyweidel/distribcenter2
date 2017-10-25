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
      theFleet.enqueue(new Truck(size));
    }
    return theFleet;
}
function distribute(wh,tf){
    //distribute the products in the warehouse to the truck fleet.
    let deploy = new Queue();
    while(!wh.isEmpty() && !tf.isEmpty()){
    let currentTruck = tf.dequeue();
    while(currentTruck.spaceEfficency()<1){
      currentTruck.inventory.push(Warehouse.dequeue());
    }
    if(currentTruck.spaceEfficency()>1){
      Warehouse.enqueue(currentTruck.inventory.pop());
    }
    deploy.enqueue(currentTruck);
  }
  return deploy;
}

function main(){
    let flemhouse = configureWareHouse();
    let flemfleet = configureTruckFleet();
    let ready = distribute(flemhouse,flemfleet,0.95);
    ready.print();
    while(!ready.isEmpty()){
      console.log("Truck "+s+" is in route");
      console.log("-----------------------");
      let ct = ready.dequeue();
      console.log(ct.spaceEfficiency());
      for(let x=0; x<ct.inventory.length; x++){
        console.log(ct.inventory[x].name);
      }
    }
}

main();
