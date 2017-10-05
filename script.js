$(function() {
    var suggestions = [
        {
            value: 'Product Name1',
            data: {
                img: 'http://nakleykiavto.ru.images.1c-bitrix-cdn.ru/upload/resize_cache/iblock/e62/285_480_136a784aa5facf479774d3d75ef15b257/e628c15bcf9945269152465aac06e717.png?145324223391239',
                Category: 'product category',
                price: '122 kr.',
                link: '#'
            }
        },
        {
            value: 'Sroduct Name2',
            data: {
                img: 'http://nakleykiavto.ru.images.1c-bitrix-cdn.ru/upload/resize_cache/iblock/803/285_480_136a784aa5facf479774d3d75ef15b257/803073d0d3d6b1d2cd3f1447e6617e9d.png?145323215699622',
                Category: 'producr category',
                price: '113 kr.',
                link: '#'
            }
        },
        {
            value: 'Product Name3',
            data: {
                img: 'http://nakleykiavto.ru.images.1c-bitrix-cdn.ru/upload/iblock/5f7/5f7cb8d0f3d99084e0727425fd5884de.png?1448436989220428',
                Category: 'product category',
                price: '112 kr.',
                link: '#'
            }
        },
        {
            value: 'Show all suggestions',
            data: {
                showAll: true,
                link: '#',
                number: '3',
            }
        }
    ]
    

    $('#inputSearch').autocomplete({
        lookup: suggestions,
        formatResult: function(sug, cur) {

            if(sug.data.showAll) {
                var showAll = '<a class="showAll" href=' + sug.data.link +  '>' + sug.value +" "+ '(' + sug.data.number + ')</a>';
                return showAll;

            } else {
                var img = [
                '<img class="productImg", src=',
                sug.data.img,
                '/>'
                ].join('');

                
                var productName = '<div class="productName">' + sug.value + '</div>';
                var productCategory = '<div class="productCategory">' + sug.data.Category + '</div>';
                var productText ='<div class="productText">' + productName + productCategory + '</div>';
                var productInfo = '<div class="productInfo">' + img + productText + '</div>';
                var Price = '<div class="productPrice">'+ '<span>fra </span>' + sug.data.price + '</div>';
                var full = '<a class="productFull" href='+ sug.data.link + '>' + productInfo + Price + '</a>';
                
                return full;
            }
        }
    })
});