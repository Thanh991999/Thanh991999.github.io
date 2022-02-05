

// active slider when click on buttom.

function active_slider_click(){
    let get_squares = document.querySelectorAll('.container-silder__btn-squares');
    
    let choses_img = document.querySelectorAll('.container-img1');

    // get_squares.forEach(function(square)
    // {
    //     square.onclick = function(events)
    //     {
    //         document.querySelector('.slider-ative').classList.remove('slider-ative');

    //         events.target.classList.add('slider-ative');
    //     }
    // })

    for( let i = 0; i < get_squares.length; i++ )
    {
        get_squares[i].onclick = function(events)
        {
            document.querySelector('.slider-ative').classList.remove('slider-ative');
            document.querySelector('.slider-ative-style').classList.remove('slider-ative-style');

            choses_img[i].classList.add('slider-ative');
            events.target.classList.add('slider-ative-style');
        }
    }
}
active_slider_click();



// active appear line category 
// latest - best seller - feature
// click on category - appear products

function click_on_category_appear_product() {
    let get_category = document.querySelectorAll('.products-category__list.a')
    let get_lines = document.querySelectorAll('.products-link');
    // animation
    // function opacitys(i){
    //     document.querySelector('.products-category__list-active.a')[i].style.opacitys = '0';
    //     setTimeout(function(){

    //     },2000)
    //     document.querySelector('.products-category__list-active.a')[i].style.opacitys = '1';

    // }

    get_lines.forEach(function(line, index)
    {
        line.onclick = function(events) {

            
            // active appear line category 
            document.querySelector('.products-links__active').classList.remove('products-links__active');

            events.target.classList.add('products-links__active');

            
            // click on category - appear products
            document.querySelector('.products-category__list-active.a').classList.remove('products-category__list-active');
            
            get_category[index].classList.add('products-category__list-active');

            // delay of products

            // tạo biến để lấy từng cột danh mục trực tiếp
            var get_product_category = document.querySelectorAll('.products-category__list-active.a>.products-category__single');
            
            // add animation on products
            get_product_category.forEach(function(product){
                product.classList.add('play_animation');
            })
        }
    })


}
click_on_category_appear_product();

// slide advertiments


// var index = 0;
// slide_auto_advertisement = function () {
//     var arr = ["http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/mbm.png", 
//     "http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/nova.png", 
//     "http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/avio.png",
//     "http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/avan.png", 
//     "http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/lamino.png", 
//     "http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/nazic.png"];
    

//     document.querySelectorAll('.advertisement__img')[0].src = arr[index];
//     document.querySelectorAll('.advertisement__img')[1].src = arr[index+1];
//     document.querySelectorAll('.advertisement__img')[2].src = arr[index+2];
//     document.querySelectorAll('.advertisement__img')[3].src = arr[index+3];
//     document.querySelectorAll('.advertisement__img')[4].src = arr[index+4];
//     document.querySelectorAll('.advertisement__img')[5].src = arr[index+5];
    
//     index++;

//     if (index + 5 == 11)
//     {
//         index = 0;
//     }

// }

// setInterval(slide_auto_advertisement, 3000);

var contentHeight = 0;
slide_auto_advertisement = function () {

    document.querySelector('.advertisements').style.transform = 'translateX(' + -contentHeight + 'px)'
    
    contentHeight = contentHeight + 200;

    if (contentHeight > 1200)
    {
        contentHeight = 0;
    }

}
setInterval(slide_auto_advertisement, 2000);


// click_appear_product_suggest_collection
function click_appear_product_suggest_collection() {
    let click_appear_product_suggest_collection = document.querySelectorAll('.suggest_collection-list');
    console.log(click_appear_product_suggest_collection);



    click_appear_product_suggest_collection.forEach(function(product, index) {
        product.onclick = function(events) {

            let get_products = document.querySelectorAll('.products-category__single.b');
            
            get_products.forEach(function(each_product)
            {
                each_product.classList.add('play_animation');
                setTimeout(function(){
                    each_product.classList.remove('play_animation');
                }, 1100)
            })
            

        }
    })
        
    

}
click_appear_product_suggest_collection();

function click_menu() {
    var get_element = document.querySelector('.navigation-menu');
    get_element.onclick = function(events){
        document.querySelector('.navigation .modal-menu').style.display = 'block';
        document.querySelector('.modal-layout').style.display = 'block';
    }

    document.querySelector('.modal-layout').onclick = function(events){
        document.querySelector('.navigation .modal-menu').style.display = 'none';
        document.querySelector('.modal-layout').style.display = 'none';
    }

}   
click_menu();

function open_menu_anchor_on_tablet() {
    var get_icon_anchor = document.querySelector('.header_icon');
    get_icon_anchor.addEventListener('click', function(){
        document.querySelector('.header__nav-list:nth-child(2)').classList.toggle('hide');
    })
}

open_menu_anchor_on_tablet();