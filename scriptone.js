let arr = [
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioUPyn34M7Hc/v0/-1x-1.jpg",
    "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/12/top-rated-indian-movies-of-2021-on-imdb-202105-1622029016-825x510-1.webp?fit=825%2C510&ssl=1",
    "https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    "https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Best-South-Indian-movies.jpg"
];

function displayImage(val){
        let container = document.getElementById("container");
        container.innerHTML = "";
        let img = document.createElement("img");
        img.src = arr[val];
        container.append(img);
}
let i = 2;
displayImage(i);
let id;
function slideShow(){
    if(id==undefined){
        id = setInterval(()=>{
            i++;
            if(i==arr.length){
                i = 0;
            }
        displayImage(i);
        },2000);
    }
}
function startfn(){
    slideShow();
}
function stopfn(){
    clearInterval(id);
        }
        function pausefn(){
        if(id==i){
            stopfn();
        }
        }
        function resumefn(){
        if(id!==undefined){
            startfn();
        }
        }
function prefn(){
i--;
if(i<0){
    i = arr.length-1;
}
displayImage(i);
}
function nextfn(){
    i++;
    if(i==arr.length){
        i = 0;
    }
    displayImage(i);
    }
   