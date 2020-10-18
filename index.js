let allels = [...document.querySelectorAll('input[type="text"]')]
let allelsId = []
allels.map(el => allelsId.push(el.getAttribute('id')))
console.log(allelsId)

$('input[type="text"]').on('input',function(){
    let val = parseInt(this.value)
    console.log(this.value)
    console.log(val)
    if(val>=0 && val<=9)
    {
        let curId = this.id
        let idx = allelsId.indexOf(curId)
        let nextId = ''
        if(idx < allelsId.length-1)
        {
            nextId = allelsId[idx+1]
            document.getElementById(nextId).value = ""
        }
        else
            nextId = allelsId[0]
        console.log(nextId)
        document.getElementById(nextId).focus()
    }
    else
        this.value = ''   
})

$('button.reset-button').on('click', function(){
    allelsId.forEach(id => {
        document.getElementById(id).value = ""
    })
})


$('button.start-button').on('click', function(){

    
    allelsId.forEach(id => {
        document.getElementById(id).value = ""
    })
})


