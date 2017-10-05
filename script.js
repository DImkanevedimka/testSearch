$(function() {
    var suggestions = [
        {
            value: 'Product default',
            data: {
                type: 'default',
                Category: 'default',
                price: '122 kr.',
                link: '#'
            }
        },
        {
            value: 'Product Name1',
            data: {
                type: 'product',
                img: 'http://nakleykiavto.ru.images.1c-bitrix-cdn.ru/upload/resize_cache/iblock/e62/285_480_136a784aa5facf479774d3d75ef15b257/e628c15bcf9945269152465aac06e717.png?145324223391239',
                Category: 'product category',
                price: '122 kr.',
                link: '#'
            }
        },
        {
            value: 'Product Name2',
            data: {
                type: 'product',
                img: 'http://nakleykiavto.ru.images.1c-bitrix-cdn.ru/upload/resize_cache/iblock/803/285_480_136a784aa5facf479774d3d75ef15b257/803073d0d3d6b1d2cd3f1447e6617e9d.png?145323215699622',
                Category: 'product category',
                price: '113 kr.',
                link: '#'
            }
        },
        {
            value: 'Product Name3',
            data: {
                type: 'product',
                img: 'http://nakleykiavto.ru.images.1c-bitrix-cdn.ru/upload/iblock/5f7/5f7cb8d0f3d99084e0727425fd5884de.png?1448436989220428',
                Category: 'product category',
                price: '112 kr.',
                link: '#'
            }
        },
        {
            value: 'Show all suggestions',
            data: {
                type: 'product',
                showAll: true,
                link: '#',
                suggestionsLenght: '3',
            }
        }
    ]
    

    $('#inputSearch').autocomplete({
        showNoSuggestionNotice: true,
        lookup: suggestions,
        beforeRender: function(container) {
            container.find('.autocomplete-suggestion .product').parent().wrapAll('<div class="suggestions__product"/>');
            container.find('.autocomplete-suggestion .default').parent().wrapAll('<div class="suggestions__default"/>');
        }, 
        formatResult: function(sug, cur) {

            if (sug.data.showAll) {
                var showAll = '<a class="showAll" href=' + sug.data.link +  '>' + sug.value +" "+ '(' + sug.data.suggestionsLenght + ')</a>';
                return showAll;

            } else if (sug.data.type === 'product') {
                var img = [
                '<img class="productImg", src=',
                sug.data.img,
                '/>'
                ].join('');

                var productName = '<div class="productName">' + sug.value + '</div>';
                var productCategory = '<div class="productCategory">' + sug.data.Category + '</div>';
                var productText ='<div class="productText">' + productName + productCategory + '</div>';
                var productInfo = '<div class="productInfo">' + img + productText + '</div>';
                var price = '<div class="productPrice">'+ '<span>fra </span>' + sug.data.price + '</div>';
                var product = '<a class="productFull product" href='+ sug.data.link + '>' + productInfo + price + '</a>';
                
                return product;
            } else {
                var defaulProduct = '<a class="default" href=' + sug.data.link + '><span> ' + sug.value + '</span> in category (2) </a>';
                return defaulProduct;
            }
        }
    })
});