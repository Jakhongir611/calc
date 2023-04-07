let doc = document
let body = doc.body
let scr = doc.querySelector('script')
// let phone = doc.createElement('div')
let cont = doc.createElement('div')
let top_sc = doc.createElement('div')
let bot_sc = doc.createElement('div')
// let camera = doc.createElement('div')
// let web_camera = doc.createElement('div')
// let theme = doc.createElement('div')






// let btn_theme = doc.querySelectorAll('.item')[0]    
// btn_theme.addEventListener('click', () => {
//     body.classList.toggle('dark')
// })





let backspace = doc.querySelectorAll('.material-icons')[0]
let swap_vert = doc.querySelectorAll('.material-icons')[1]
let x = doc.querySelectorAll('.material-icons')[2]
let example = doc.querySelector('.example')
let equal = doc.querySelector('.equal')
let input = doc.querySelector('.input')










body.insertBefore(cont, scr)
cont.classList.add('container')
top_sc.classList.add('top_screen')
bot_sc.classList.add('bottom_screen')
// camera.classList.add('camera')
// web_camera.classList.add('web_camera')








// phone.append(cont)
cont.append(top_sc)
cont.append(bot_sc)
// top_sc.append(camera)
// camera.append(web_camera)
top_sc.append(equal)
top_sc.append(example)

for (let i = 0; i < 20; i++) {
    let item = doc.createElement('div')
    item.classList.add('item')
    bot_sc.append(item)
}


btn_swap = doc.querySelectorAll('.item')[0]
btn_swap.append(swap_vert)
let bckpc = doc.querySelectorAll('.item')[1]
bckpc.append(backspace)
let btn_procent = doc.querySelectorAll('.item')[2]
btn_procent.textContent = '%'
let btn_separation = doc.querySelectorAll('.item')[3]
btn_separation.textContent = '/'
btn_7 = doc.querySelectorAll('.item')[4]
btn_7.textContent = '7'
btn_8 = doc.querySelectorAll('.item')[5]
btn_8.textContent = '8'
btn_9 = doc.querySelectorAll('.item')[6]
btn_9.textContent = '9'
btn_x = doc.querySelectorAll('.item')[7]
btn_x.append(x)
btn_4 = doc.querySelectorAll('.item')[8]
btn_4.textContent = '4'
btn_5 = doc.querySelectorAll('.item')[9]
btn_5.textContent = '5'
btn_6 = doc.querySelectorAll('.item')[10]
btn_6.textContent = '6'
btn_minus = doc.querySelectorAll('.item')[11]
btn_minus.textContent = '-'
btn_1 = doc.querySelectorAll('.item')[12]
btn_1.textContent = '1'
btn_2 = doc.querySelectorAll('.item')[13]
btn_2.textContent = '2'
btn_3 = doc.querySelectorAll('.item')[14]
btn_3.textContent = '3'
btn_plus = doc.querySelectorAll('.item')[15]
btn_plus.textContent = '+'
let btn_ac = doc.querySelectorAll('.item')[16]
btn_ac.textContent = 'AC'
btn_0 = doc.querySelectorAll('.item')[17]
btn_0.textContent = '0'
btn_dot = doc.querySelectorAll('.item')[18]
btn_dot.textContent = '.'
btn_equal = doc.querySelectorAll('.item')[19]
btn_equal.textContent = '='


// for(let i of item){
//     i.addEventListener('click', () => {
//         example.value += i.textContent
//     })
// }



btn_0.addEventListener('click', () => {
    example.value += '0'
})
btn_1.addEventListener('click', () => {
    example.value += '1'
})
btn_2.addEventListener('click', () => {
    example.value += '2'
})
btn_3.addEventListener('click', () => {
    example.value += '3'
})
btn_4.addEventListener('click', () => {
    example.value += '4'
})
btn_5.addEventListener('click', () => {
    example.value += '5'
})
btn_6.addEventListener('click', () => {
    example.value += '6'
})
btn_7.addEventListener('click', () => {
    example.value += '7'
})
btn_8.addEventListener('click', () => {
    example.value += '8'
})
btn_9.addEventListener('click', () => {
    example.value += '9'
})
btn_dot.addEventListener('click', () => {
    example.value += '.'
})

btn_x.addEventListener('click', () => {
    example.value += '*'
})
btn_separation.addEventListener('click', () => {
    example.value += '/'
})
btn_plus.addEventListener('click', () => {
    example.value += '+'
})
btn_minus.addEventListener('click', () => {
    example.value += '-'
})

bckpc.addEventListener('click', () => {
    example.value = example.value.slice(0, -1)
})

btn_equal.addEventListener('click', () => {
    let result = eval(example.value)
    equal.value = result
})
btn_procent.addEventListener('click', () => {
    example.value += '%'
})



btn_ac.addEventListener('click', () => {
    example.value = ''
    equal.value = ''
})
















let actives = doc.querySelectorAll('.active')
for (let item of actives) {
    item.addEventListener('click', () => {
        for(let i of actives){
            i.disabled = true
        }
    })
}




