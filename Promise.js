function A(x){
    return new Promise((resolve,reject)=>{
        if(x>=1){
            
            resolve(2*x)
        }
        else reject('x is less than 1')
    })
 }

function B(b){

    return new Promise((resolve,reject)=>{
        if(b>=4){
            console.log(b +" "+ "passed from a")
            console.log(2*b +" "+ "passed from b")
            resolve(2*b)

        }
        else reject('b is less than 4')
    })
 }


function C(z){

    return new Promise((resolve,reject)=>{
        if(z>=9){
            console.log('nothing is passed from c')
            resolve()
        }
        else reject('not excuted')
    })
 }


function D(){
    return new Promise((res , rej)=>{
        res('all asynchronus tasks are done')
    })
}

function Sync(){
    console.log('do synchronus first');
}

A(4).
then(B).
then(C).
then(D).
catch(
    function(e){
    console.error(e)}
    )

Sync();