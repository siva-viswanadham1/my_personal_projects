let cityname="eluru"
let tempature=document.querySelector(".temp");
let city=document.querySelector(".temp_location p");
let date=document.querySelector(".temp_location span");
let image=document.querySelector(".weather_condition p img");
let condition=document.querySelector(".weather_condition span");
let searchfiled=document.querySelector(".searchField");
let form=document.querySelector("form")

form.addEventListener('submit',function(event){
    let k=event.preventDefault();
    cityname=searchfiled.value;
    getcallAPI(cityname)
})

try{
async function getcallAPI(cityname){
  const response=await fetch(`http://api.weatherapi.com/v1/current.json?key=06c512c5d2b34a0cb48120115232311&q=${cityname}&aqi=no`);
  const jsonobj=await response.json();
  console.log(jsonobj);
  tempature.innerText=jsonobj.current.temp_c;
  city.innerText=jsonobj.location.name;
  image.src=jsonobj.current.condition.icon;
  condition.innerText=jsonobj.current.condition.text;
  let objdate=jsonobj.location.localtime;
  let dateandtime=objdate.split(" ");
  let rdate=dateandtime[0];
  let d=new Date();
  let day=d.getDay();
  let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  let time=dateandtime[1];
  console.log(day);
  date.innerText=`${objdate} ${days[day]}`;

}
}catch{
    window.alert("entered city is unavaible")
}
getcallAPI(cityname)