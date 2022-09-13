//AJAX = Asynchronous JavaScript And XML
document.getElementById('get_joke').addEventListener('click',load_joke);
document.getElementById('get_jokes').addEventListener('click',load_jokes);

function  load_joke() { 
    //create XHE Xml http Request
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('GET','http://api.icndb.com/jokes/random',true);
    xhr.onprogress=function () {
        console.log(xhr.readyState);
        document.getElementById('output').innerHTML=`<h5>loading...</h5>`;  
    }
    
    xhr.onload =function () {
              if(this.status===200){// 200: ok,403:Forbidden; 404 Not Found
                let res=JSON.parse(this.responseText);
             document.getElementById('output').innerHTML=`<h5>"${res.value.joke}"</h5>`;
        } 
    } 
     
    xhr.send();
    console.log(xhr);
}
function  load_jokes() {  
    let xhr = new XMLHttpRequest(); 
    let number= document.getElementById('jokesNum').value; 
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onprogress=function () { 
        document.getElementById('output').innerHTML=`<h5>loading...</h5>`;  
    }
    
    xhr.onload =function () {
              if(this.status===200){
                let res=JSON.parse(this.responseText);
                console.log(res.value);
                let jokes= res.value;
                let output= "<ol>";
                jokes.forEach(item => 
                   { console.log(item.joke);
                    output +=`<li>${item.joke}</li>`
                });
                 output+= "</ol>";

             document.getElementById('output').innerHTML=`<h6>${output}</h6>`;
        } 
    }  
    xhr.send(); 
}
