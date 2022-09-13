//AJAX = Asynchronous JavaScript And XML
document.getElementById('get_data').addEventListener('click',load_data);

function  load_data() { 
    //create XHE Xml http Request
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('GET','data.txt',true);
    xhr.onprogress=function () {
        console.log(xhr.readyState);
        document.getElementById('output').innerHTML=`<h5>loading...</h5>`;
   
    }

    // xhr.onreadystatechange =function () {
    //     if(this.status===200 && this.readyState===4){// 200: ok,403:Forbidden; 404 Not Found
    //         console.log(this.responseText);
    //         document.getElementById('output').innerHTML=`<h5>${this.responseText}</h5>`;
    //     }
    // }
    
    // xhr.onload =function () {
    //           if(this.status===200){// 200: ok,403:Forbidden; 404 Not Found
    //         console.log(this.responseText);
    //         document.getElementById('output').innerHTML=`<h5>${this.responseText}</h5>`;
    //     } 
    
    // } 
     
    xhr.onload =function () {
        setTimeout(() => {
              if(this.status===200){// 200: ok,403:Forbidden; 404 Not Found
            console.log(this.responseText);
            document.getElementById('output').innerHTML=`<h5>${this.responseText}</h5>`;
        } 

    }, 500); //delay .5 sec
     
    }
    xhr.send();
  
    console.log(xhr);

}
