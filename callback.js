function fetchData(c){
    setTimeout(()=>{
        console.log('fetch data');
        c();
} , 1000)
}

function Json(c){
    setTimeout(()=>{
        console.log('data is converted to json');
        c();
    } , 500)
}


function renderUI(c){
    setTimeout(()=>{
        console.log('JSON data is converted to UI');
        c();
    },500)
}


function Loader(){
    console.log('show loader');
}


fetchData(function (){
    Json( function (){
        renderUI(
            function(){
                console.log('asynchronus is done');
            }
        )
    })
    
})

Loader()

// /structure of code is nested which makes it hard to debug 
// maybe we use third party functions in between which can take control of excution of other tasks.  maybe never call the callback function or call it multiple times .


