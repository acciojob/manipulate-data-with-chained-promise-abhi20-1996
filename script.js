function arr(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(a)},3000)
    })
}

arr([1,2,3,4]).then((r)=>r)
	.then(r=>r.filter(i=>i%2==0))
	.then(r=>r.map(i=>i*2))
	.then(r=>{document.getElementById("output").innerHTML=r})