const doc = {
    setButton: document.querySelector('#setButton'),
    delButton: document.querySelector('#delButton'),
    getButton: document.querySelector('#getButton')
}

window.addEventListener('load', () => {
    init();
})

function init() {
    doc.setButton.addEventListener('click', () => {
        startSet();
    })
    doc.getButton.addEventListener('click', () => {
        startGet();
    })
    
}

function startSet() {
    let emp = {
        name: 'Béla',
        city: 'Szeged',
        salary: 345
    }
    let empStr = JSON.stringify(emp)
    localStorage.setItem('employee',empStr)
    
}
function startGet() {
    let empStr = localStorage.getItem('employee')
    let emp = JSON.parse(empStr)
    console.log(emp.name)
    
}