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
        title: 'iblislar qotili ',
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
    document.getElementById('noroot').innerHTML = items.map((item)=>
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
    displayItem(categories2);
    
    
    
    const categories2 = [...new Set(product.map((item) => { return item }))]
    
    document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories2.filter((item) => {
      return (
          item.title.toLowerCase().includes(searchData)
      )
    })
    displayItem(filteredData)
    });
    
