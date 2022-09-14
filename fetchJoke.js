document.getElementById('get_joke').addEventListener('click', load_joke);
document.getElementById('get_jokes').addEventListener('click', load_jokes);

function load_joke() {
    document.getElementById('output').innerHTML = `<h5>loading...</h5>`;
    fetch('http://api.icndb.com/jokes/random')
        .then(res => res.json())
        .then(data => {
            document.getElementById('output').innerHTML = `<h5>"${data.value.joke}"</h5>`;
        })
        .catch(er => console.log(er))
}

function load_jokes() {
    let number = document.getElementById('jokesNum').value;
    document.getElementById('output').innerHTML = `<h5>Loading ${number} jokes..</h5>`;
    fetch(`http://api.icndb.com/jokes/random/${number}`)
        .then(res => res.json())
        .then(data => {
            let jokes=data.value;
            let output = "<ol>";
            jokes.forEach(item => {
                output += `<li>${item.joke}</li>`
            });
            output += "</ol>";
            document.getElementById('output').innerHTML = `<h6>${output}</h6>`;
        })
        .catch(er => console.log(er))                     
    }