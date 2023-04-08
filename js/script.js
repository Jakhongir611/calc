let doc = document
let body = doc.body
let div = doc.createElement('div')
let scr = doc.querySelector('script')
let cont = doc.createElement('div')
let top_sc = doc.createElement('div')
let bot_sc = doc.createElement('div')



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









cont.append(top_sc)
cont.append(bot_sc)
top_sc.append(equal)
top_sc.append(example)

for (let i = 0; i < 20; i++) {
    let item = doc.createElement('div')
    item.classList.add('item')
    bot_sc.append(item)
}


let btn_ac = doc.querySelectorAll('.item')[0]
btn_ac.textContent = 'AC'
let bckpc = doc.querySelectorAll('.item')[1]
bckpc.append(backspace)
let btn_procent = doc.querySelectorAll('.item')[2]
btn_procent.textContent = '%'
let btn_separation = doc.querySelectorAll('.item')[3]
btn_separation.textContent = '/'
btn_7 = doc.querySelectorAll('.item')[4]
btn_7.textContent = '7'
btn_7.classList.add('border')
btn_8 = doc.querySelectorAll('.item')[5]
btn_8.textContent = '8'
btn_8.classList.add('border')
btn_9 = doc.querySelectorAll('.item')[6]
btn_9.textContent = '9'
btn_9.classList.add('border')
btn_x = doc.querySelectorAll('.item')[7]
btn_x.append(x)
btn_4 = doc.querySelectorAll('.item')[8]
btn_4.textContent = '4'
btn_4.classList.add('border')
btn_5 = doc.querySelectorAll('.item')[9]
btn_5.textContent = '5'
btn_5.classList.add('border')
btn_6 = doc.querySelectorAll('.item')[10]
btn_6.textContent = '6'
btn_6.classList.add('border')
btn_minus = doc.querySelectorAll('.item')[11]
btn_minus.textContent = '-'
btn_1 = doc.querySelectorAll('.item')[12]
btn_1.textContent = '1'
btn_1.classList.add('border')
btn_2 = doc.querySelectorAll('.item')[13]
btn_2.textContent = '2'
btn_2.classList.add('border')
btn_3 = doc.querySelectorAll('.item')[14]
btn_3.textContent = '3'
btn_3.classList.add('border')
btn_plus = doc.querySelectorAll('.item')[15]
btn_plus.textContent = '+'
btn_swap = doc.querySelectorAll('.item')[16]
btn_swap.append(swap_vert)
btn_0 = doc.querySelectorAll('.item')[17]
btn_0.textContent = '0'
btn_0.classList.add('border')
btn_dot = doc.querySelectorAll('.item')[18]
btn_dot.textContent = '.'
btn_equal = doc.querySelectorAll('.item')[19]
btn_equal.textContent = '='


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

btn_swap.addEventListener('click', () => {
    cont.classList.toggle('none')
    big_cont.classList.toggle('none')
})
























let big_cont = doc.createElement('div')
let big_top_sc = doc.createElement('div')
let big_bot_sc = doc.createElement('div')


let big_backspace = doc.querySelectorAll('.big_material-icons')[0]
let big_swap_vert = doc.querySelectorAll('.big_material-icons')[1]
let big_x = doc.querySelectorAll('.big_material-icons')[2]
let big_example = doc.querySelector('.example')
let big_equal = doc.querySelector('.equal')
let big_input = doc.querySelector('.input')


body.insertBefore(big_cont, scr)
big_cont.classList.add('big_container')
big_cont.classList.add('none')
big_top_sc.classList.add('big_top_screen')
big_bot_sc.classList.add('big_bottom_screen')








big_cont.append(big_top_sc)
big_cont.append(big_bot_sc)
big_top_sc.append(big_equal)
big_top_sc.append(big_example)

for (let e = 0; e < 35; e++) {
    let big_item = doc.createElement('div')
    big_item.classList.add('big_item')
    big_bot_sc.append(big_item)
}

big_btn_id_0 = doc.querySelectorAll('.big_item')[0]
big_btn_id_0.textContent = '2nd'
big_btn_id_1 = doc.querySelectorAll('.big_item')[1]
big_btn_id_1.textContent = 'deg'
big_btn_id_2 = doc.querySelectorAll('.big_item')[2]
big_btn_id_2.textContent = 'sin'
big_btn_id_3 = doc.querySelectorAll('.big_item')[3]
big_btn_id_3.textContent = 'cos'
big_btn_id_4 = doc.querySelectorAll('.big_item')[4]
big_btn_id_4.textContent = 'tan'
big_btn_id_5 = doc.querySelectorAll('.big_item')[5]
big_btn_id_5.textContent = 'x²'
big_btn_id_6 = doc.querySelectorAll('.big_item')[6]
big_btn_id_6.textContent = 'log'
big_btn_id_7 = doc.querySelectorAll('.big_item')[7]
big_btn_id_7.textContent = 'ln'
big_btn_id_8 = doc.querySelectorAll('.big_item')[8]
big_btn_id_8.textContent = '('
big_btn_id_9 = doc.querySelectorAll('.big_item')[9]
big_btn_id_9.textContent = ')'
big_btn_id_10 = doc.querySelectorAll('.big_item')[10]
big_btn_id_10.textContent = '√×'
big_btn_id_11 = doc.querySelectorAll('.big_item')[11]
big_btn_id_11.textContent = 'AC'
big_btn_id_12 = doc.querySelectorAll('.big_item')[12]
big_btn_id_12.append(big_backspace)
big_btn_id_13 = doc.querySelectorAll('.big_item')[13]
big_btn_id_13.textContent = '%'
big_btn_id_14 = doc.querySelectorAll('.big_item')[14]
big_btn_id_14.textContent = '/'
big_btn_id_15 = doc.querySelectorAll('.big_item')[15]
big_btn_id_15.textContent = '×!'
big_btn_id_16 = doc.querySelectorAll('.big_item')[16]
big_btn_id_16.textContent = '7'
big_btn_id_16.classList.add('border')
big_btn_id_17 = doc.querySelectorAll('.big_item')[17]
big_btn_id_17.textContent = '8'
big_btn_id_17.classList.add('border')
big_btn_id_18 = doc.querySelectorAll('.big_item')[18]
big_btn_id_18.textContent = '9'
big_btn_id_18.classList.add('border')
big_btn_id_19 = doc.querySelectorAll('.big_item')[19]
big_btn_id_19.append(big_x)
big_btn_id_20 = doc.querySelectorAll('.big_item')[20]
big_btn_id_20.textContent = '¹/×'
big_btn_id_21 = doc.querySelectorAll('.big_item')[21]
big_btn_id_21.textContent = '4'
big_btn_id_21.classList.add('border')
big_btn_id_22 = doc.querySelectorAll('.big_item')[22]
big_btn_id_22.textContent = '5'
big_btn_id_22.classList.add('border')
big_btn_id_23 = doc.querySelectorAll('.big_item')[23]
big_btn_id_23.textContent = '6'
big_btn_id_23.classList.add('border')
big_btn_id_24 = doc.querySelectorAll('.big_item')[24]
big_btn_id_24.textContent = '-'
big_btn_id_25 = doc.querySelectorAll('.big_item')[25]
big_btn_id_25.textContent = 'π'
big_btn_id_26 = doc.querySelectorAll('.big_item')[26]
big_btn_id_26.textContent = '1'
big_btn_id_26.classList.add('border')
big_btn_id_27 = doc.querySelectorAll('.big_item')[27]
big_btn_id_27.textContent = '2'
big_btn_id_27.classList.add('border')
big_btn_id_28 = doc.querySelectorAll('.big_item')[28]
big_btn_id_28.textContent = '3'
big_btn_id_28.classList.add('border')
big_btn_id_29 = doc.querySelectorAll('.big_item')[29]
big_btn_id_29.textContent = '+'
big_btn_id_30 = doc.querySelectorAll('.big_item')[30]
big_btn_id_30.append(big_swap_vert)
big_btn_id_31 = doc.querySelectorAll('.big_item')[31]
big_btn_id_31.textContent = 'e'
big_btn_id_32 = doc.querySelectorAll('.big_item')[32]
big_btn_id_32.textContent = '0'
big_btn_id_32.classList.add('border')
big_btn_id_33 = doc.querySelectorAll('.big_item')[33]
big_btn_id_33.textContent = '.'
big_btn_id_34 = doc.querySelectorAll('.big_item')[34]
big_btn_id_34.textContent = '='


big_btn_id_30.addEventListener('click', () => {
    cont.classList.toggle('none')
    big_cont.classList.toggle('none')
})


big_btn_id_32.addEventListener('click', () => {
    big_example.value += '0'
})
big_btn_id_26.addEventListener('click', () => {
    big_example.value += '1'
})
big_btn_id_27.addEventListener('click', () => {
    big_example.value += '2'
})
big_btn_id_28.addEventListener('click', () => {
    big_example.value += '3'
})
big_btn_id_21.addEventListener('click', () => {
    big_example.value += '4'
})
big_btn_id_22.addEventListener('click', () => {
    big_example.value += '5'
})
big_btn_id_23.addEventListener('click', () => {
    big_example.value += '6'
})
big_btn_id_16.addEventListener('click', () => {
    big_example.value += '7'
})
big_btn_id_17.addEventListener('click', () => {
    big_example.value += '8'
})
big_btn_id_18.addEventListener('click', () => {
    big_example.value += '9'
})
big_btn_id_14.addEventListener('click', () => {
    big_example.value += '/'
})
big_btn_id_19.addEventListener('click', () => {
    big_example.value += '*'
})
big_btn_id_24.addEventListener('click', () => {
    big_example.value += '-'
})
big_btn_id_29.addEventListener('click', () => {
    big_example.value += '+'
})
big_btn_id_34.addEventListener('click', () => {
    let big_result = eval(big_example.value)
    big_equal.value = big_result
})
big_btn_id_5.addEventListener('click', () => {
    let big_result = eval(example.value)
    big_equal.value = big_result * big_result
})
big_btn_id_10.addEventListener('click', () => {
    let big_result = eval(example.value)
    big_equal.value = Math.sqrt(big_result)
})
big_btn_id_7.addEventListener('click', () => {
    let big_result = eval(example.value)
    big_equal.value = Math.log10(big_result)
})
big_btn_id_11.addEventListener('click', () => {
    big_example.value = ''
    big_equal.value = ''
})
big_btn_id_13.addEventListener('click', () => {
    big_example.value += '%'
})
big_btn_id_12.addEventListener('click', () => {
    big_example.value = example.value.slice(0, -1)})




