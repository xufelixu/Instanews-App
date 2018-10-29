$(document).ready(function () {

  $('.loading').hide()

  $(".selection").on("change", function () {
    const selected = $(this).val();
    $('.loading').show()

    var url = "https://api.nytimes.com/svc/topstories/v2/" + selected + ".json";
    url += '?' + $.param({
      'api-key': "5d68eebb4fa44bd381bd7fe2988a363d"
    });
    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json'
      })

      .done(function (data) {
        console.log(data);
        $('.selectPage').empty();

        const titles = data.results;
        for (let i = 0; i < 12; i++) {
          console.log(titles[i]);
          let abstract = titles[i].abstract;
          let articleImage = titles[i].multimedia[4].url;
          let links = titles[i].url;

          // console.log(abstract);
          // console.log(articleImage);
          console.log(links);


          $('.selectPage').append('<a href="' + links + '" class="pictures" style="background:url(' + articleImage + '); background-size:cover">' + '<h2>' + abstract + '</h2>' + '</a>');
        }

      }).always(function () {
        $('.loading').hide();


      });

  });


});