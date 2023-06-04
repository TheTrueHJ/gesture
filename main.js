Webcam.set({
    width:480,
    height:360,
    img_format: "png",
    png_quality: 90
})

Webcam.attach("#webcam")

function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML= "<img src = '" + data_uri + "'>";
    })
}

console.log("ml5 version: " + ml5.version);

classify = ml5.imageClassifier("https://storage.googleapis.com/tm-model/aqMxLUTL8/model.json",ModelLoaded);

function ModelLoaded(){

}