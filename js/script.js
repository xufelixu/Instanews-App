$(document).ready(function () {

  $('.loading').hide();

  $('.selection').on('change', function (event) {

    $('.loading').show();

    $('header').addClass('activate');

    $('.logo img').css('padding-top', '0px');

    event.preventDefault();

    $('.selectPage').empty();

    var newscategory = $('.selection option:selected').val();

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + newscategory + '.json';

    url += '?' + $.param({

      'api-key': "5d68eebb4fa44bd381bd7fe2988a363d"

    });

    $.ajax({

        url: url,

        method: 'GET',

      }).done(function (response) {

        var results = response.results;

        var filteredList = results.filter(function (item) {
          return item.multimedia.length
        }).slice(0, 12);

        $.each(filteredList, function (key, value) {

          var url = value.url;

          var pic = value.multimedia[4].url;

          var abstract = value.abstract;

          var link = '';

          link += '<a href="' + url + '">';

          link += '<li class="article-picture" style="background-image:url(' + pic + ')">';

          link += '<p class="title">' + abstract + '</p>';

          link += '</li></a>';


          $('.selectPage').append(link);

        })

      })

      .fail(function (err) {

        console.log('IN AJAX FAIL');

        throw err;

      }).always(function () {

        $('.loading').hide();

      });

  });

});