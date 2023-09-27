$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })


    jQuery("#load").fadeOut();
    jQuery("#loading").delay(0).fadeOut("slow");
    
    jQuery('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function () {
        jQuery(this).next('.children, .sub-menu').slideToggle();
    });

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})


const product = [
    
    {
        id: 2,
        image: 'https://img2.uquiz.com/content/images/quiz_share_images/1535273113.jpg',
        title: 'iblislar qotili ',
        star: '8.5',
        hd: 'FHD',
        time: '1 soat.45min',
        button: 'filter.html',
    },
    {
        id: 2,
        image: 'https://img2.uquiz.com/content/images/quiz_share_images/1535273113.jpg',
        title: 'iblisla qotili ',
        star: '8.5',
        hd: 'FHD',
        time: '1 soat.45min',
        button: 'filter.html',
    },
    
    ];
    
    const categories = [...new Set(product.map((item)=>
    {return item}))]
    
    const filterItems = (a)=>{
        const flterCategories = categories.filter(item);
        function item(value){
            if(value.id==a){
                return(
                  value.id  
                )
            }
        }
        displayItem(flterCategories)
    }
    
    const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=>
    {
    var {image, title, button, star, hd, time,} = item;
    return(
    ` 
            <a href="${button}" class="movie-item">
            <img src=${image}>
            <div class="movie-item-content">
                <div class="movie-item-title">
                ${title}
                </div>
                <div class="movie-infos">
                    <div class="movie-info">
                        <i class="bx bxs-star"></i>
                        <span>${star}</span>
                    </div>
                    <div class="movie-info">
                        <i class="bx bxs-time"></i>
                        <span>${time}</span>
                    </div>
                    <div class="movie-info">
                        <span>${hd}</span>
                    </div>
                    <div class="movie-info">
                        <span>16+</span>
                    </div>
                </div>
            </div>
        </a>



    `)
    }).join('');
    };
    displayItem(categories);
    
    
    
    const categories1 = [...new Set(product.map((item) => { return item }))]
    
    document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories1.filter((item) => {
      return (
          item.title.toLowerCase().includes(searchData)
      )
    })
    displayItem(filteredData)
    });
    
