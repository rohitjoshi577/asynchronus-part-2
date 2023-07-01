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
    return new Promise((resolve , reject)=>{
        console.log('all asynchronus tasks are done')
        resolve();
    })
}

function Sync(){
    console.log('do synchronus first');
}

async function asnnchronus(){
    try{
        let a = await A(2);
        let b = await B(a);
        let c = await C(9);
        await D();
    }

    catch(error){console.log(error)}

}

asnnchronus();
Sync();