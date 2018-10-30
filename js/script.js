$(document).ready(function () {


  // set some inital variables
  const $loader = $('ajx-loader');
  const $stores = $('.selectPage');

  $('#sections').on('change', function () {
    //get the selet value
    const section = $(this).val();

    if (!section.length) {
      returen;
    }
    //clear out the old stories
    $stores.empty();
    //show the loader gif
    $loader.show();
    //get stories from the API

    getStories($stories, $loader, section);

    var url = "https://api.nytimes.com/svc/topstories/v2/" + selected + ".json";
    url += '?' + $.param({
      'api-key': "5d68eebb4fa44bd381bd7fe2988a363d"
    });

    $.ajax - loader({
        url: url,
        method: 'GET',
        dataType: 'json'
      })

      .done(function (data) {

        $('.selectPage').empty();

        const titles = data.results;

        for (let i = 0; i < 12; i++) {

          let abstract = titles[i].abstract;
          let articleImage = titles[i].multimedia[4].url;
          let links = titles[i].url;



          $('.selectPage').append('<a href="' + links + '" class="pictures" style="background:url(' + articleImage + '); background-size:cover">' + '<h2>' + abstract + '</h2>' + '</a>');
        }

      }).always(function () {


      });
  });
});