
export function loadCurentUser(){
    return new Promise((resolve, reject)=>{
setTimeout(() => {
    resolve({name:"khachatur jackson"})
}, 1000);
    });
}