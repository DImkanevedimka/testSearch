$(function() {
    $('#inputSearch').autocomplete({
        showNoSuggestionNotice: true,
        serviceUrl: 'suggestions.json',
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