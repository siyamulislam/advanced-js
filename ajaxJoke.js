//AJAX = Asynchronous JavaScript And XML
document.getElementById('get_joke').addEventListener('click',load_joke);

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
