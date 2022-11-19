console.log("Hasher V2")
console.log("Perform sha256 Hashing on with ease")
console.log("Devd by e0e2087b3efad83c23c899efb0059a16d9ee9d4ef51349c6066548b8d01f1ab8")
document.getElementById("data_set").style.visibility = "hidden";
document.getElementById("hash").style.visibility = "hidden";
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%/()=?*#.:,;-_+';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
} 

function hash(){
    document.getElementById("loader").style ="display: block;"
    setTimeout(()=>{
        var creator_tag = document.getElementById("creator_tag").value;
        var st_val = document.getElementById("st_val").value;


    if (creator_tag == "") {
        var creator_tag = ""
    }
    else {
        var creator_tag = creator_tag + "/" 
    }
    var not_found = true
    while (not_found){
        var ran_data_set = (creator_tag + makeid(10))
        var hash = sha256(ran_data_set);
        if (hash.substring(0, st_val.length) == st_val) {
            var output = (ran_data_set)
            var output2 = (hash.substring(0, 30) + "...")
            not_found = false
        }
    }
    document.getElementById("data_set").style.visibility = "visible";
    document.getElementById("hash").style.visibility = "visible";
    document.getElementById("data_set").innerText = (output);
    document.getElementById("hash").innerText = (output2);
    document.getElementById("loader").style ="display: none;"
    document.getElementById("pp").innerHTML=("Copied data to Clipboard")
    navigator.clipboard.writeText(output);

    },100)
}

