let laptop=function(_name,_ram,_storage,_price){
    this.name=_name;
    this.ram=_ram;
    this.storage=_storage;
    this.price=_price;
}
let lenovo=new laptop('lenovo','8GB',256,40000);
console.log(lenovo);