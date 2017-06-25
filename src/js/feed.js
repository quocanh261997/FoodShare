$(document).ready(() => {
  $.get("/food/get?criteria=chicken", function(data, status){
    for (var i = 0; i < data.d.length; i++){
      var name = data.d[i].name;
      var chef = data.d[i].chef;
      var rating = data.d[i].rating;
      var likes = data.d[i].likes;
      var price = data.d[i].price;
      var criteria = data.d[i].criteria;
      var img = data.d[i].img;
      $('.cards').append('<div class="card" data-toggle="modal" data-target="#'
      + i +'"><div class="image"><img src="'+ img +'"></div></div>');
      $('.inner-content').append('<div class="modal fade" id="'+i
      +'" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">'
      +'<button type="button" class="close" data-dismiss="modal">&times;</button><h4>'
      + name +'</h4></div><div class="modal-body"><div class="row"><div class="col-sm-8"><span><img class="big-image" src="'
      + img +'"></span></div><div class="col-sm-4" style="margin-left:-12px"><p><img class="avatar" src="https://api.adorable.io/avatars/24/'
      + 'useravatar' + i + '.png"><b style="margin-left:5px">' + chef
      + '</b></p><hr/><div class="ui tag large labels" style="display: inline-block"><a class="ui green label">'
      + likes + '</a></div>'
      + '<button class="ui active button small red" style="width: 70px"><i class="user heart icon"></i>'
      + price + '</button>'
      + '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor<p>'
      + '<p><div class="ui buttons"><button class="ui button black big">Delivery</button><div class="or" style="margin-top:3px"></div>'
      + '<button class="ui white button big">Pick Up</button></div></p></div></div>'
      + '</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
      +'</div></div></div></div>');


  }
  });
});
