document.querySelector('#detail_btn1').addEventListener('click',(e) => {
    document.querySelector('#detail_btn1').classList.add('selected')
    document.querySelector('#detail_btn2').classList.remove('selected')
    document.querySelector('#detail_btn3').classList.remove('selected')
    document.querySelector('#detail_info2').className = 'detail_footer_info_unselected'
    document.querySelector('#detail_info1').className = 'detail_footer_info_selected'
    document.querySelector('#detail_reviews').className = 'detail_footer_info_unselected'
})
document.querySelector('#detail_btn2').addEventListener('click',() => {
    document.querySelector('#detail_btn2').classList.add('selected')
    document.querySelector('#detail_btn1').classList.remove('selected')
    document.querySelector('#detail_btn3').classList.remove('selected')
    document.querySelector('#detail_info1').className = 'detail_footer_info_unselected'
    document.querySelector('#detail_info2').className = 'detail_footer_info_selected'
    document.querySelector('#detail_reviews').className = 'detail_footer_info_unselected'
})
document.querySelector('#detail_btn3').addEventListener('click',() => {
    document.querySelector('#detail_btn3').classList.add('selected')
    document.querySelector('#detail_btn1').classList.remove('selected')
    document.querySelector('#detail_btn2').classList.remove('selected')
    document.querySelector('#detail_info1').className = 'detail_footer_info_unselected'
    document.querySelector('#detail_info2').className = 'detail_footer_info_unselected'
    document.querySelector('#detail_reviews').className = 'detail_footer_info_selected'
})

