$(function() {
    var suggestions = [
    {
        value: 'test',
        data: {
            img: 'http://nakleykiavto.ru.images.1c-bitrix-cdn.ru/upload/iblock/5f7/5f7cb8d0f3d99084e0727425fd5884de.png?1448436989220428',
            country: 'usa'
        }
    },
    {
        value: 'atest',
        data: {
            img: 'http://nakleykiavto.ru.images.1c-bitrix-cdn.ru/upload/iblock/5f7/5f7cb8d0f3d99084e0727425fd5884de.png?1448436989220428',
            country: 'ukraine'
        }
    },
    {
        value: 'dtest',
        data: {
            img: 'http://nakleykiavto.ru.images.1c-bitrix-cdn.ru/upload/iblock/5f7/5f7cb8d0f3d99084e0727425fd5884de.png?1448436989220428',
            country: 'uk'
        }
    }
    ]
    

    $('#inputSearch').autocomplete({
        lookup: suggestions,
        formatResult: function(sug, cur) {
            var img = [
            '<img class="testimg", src=',
            sug.data.img,
            '/>'
            ].join('');

            var country = [
            '<span>' + sug.data.country +
            '</span>'
            ]

            return sug.value + img + country;
        }
    })
});