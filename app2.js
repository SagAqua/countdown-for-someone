var d = new Date();
console.log("Now:" +d);

var utc_offset = d.getTimezoneOffset();
d.setMinutes(d.getMinutes() + utc_offset);
console.log("UTC:" +d);

//8.0 from UTC
var malaysia_offset = 8.0*60;
d.setMinutes(d.getMinutes() + malaysia_offset);
console.log("Malaysia:" +d);