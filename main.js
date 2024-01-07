const buttonsImgs = document.querySelectorAll('.main_settings_box_kind_imgs_item img')
buttonsImgs.forEach((e) => {
    e.addEventListener("click" ,()=>{
        buttonsImgs.forEach(item => {
            item.classList.remove('selected')
        });
        e.classList.add('selected')
    })
});
const buttons = document.querySelectorAll('.main_settings_box_kind_btns_items-item button')
buttons.forEach((e) => {
    e.addEventListener("click" ,()=>{
        buttons.forEach(item => {
            item.classList.remove('selected')
        });
        e.classList.add('selected')
    })
});
const buttonsUpper = document.querySelectorAll('.main_settings_box_kind_upper_items button')
buttonsUpper.forEach((e) => {
    e.addEventListener("click" ,()=>{
        buttonsUpper.forEach(item => {
            item.classList.remove('selected')
        });
        e.classList.add('selected')
    })
});