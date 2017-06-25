$(document).ready(() => {
  $.get("", function(data, status){
    for (var i = 0; i < data.length; i++){
      var name = data[i].name;
      var chef = data[i].chef;
      var rating = data[i].rating;
      var likes = data[i].likes;
      var price = data[i].price;
      var criteria = data[i].criteria;
      var img = data[i].img;
      $('.cards').append('<div class="card" data-toggle="modal" data-target="#'
      + i +'"><div class="image"><img src="'+ img +'"></div></div>');
      $('.inner-content').append('<div class="modal fade" id="#'+i
      +'" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">'
      +'<button type="button" class="close" data-dismiss="modal">&times;</button><h4>'
      + name +'</h4></div><div class="modal-body"><div class="row"><div class="col-sm-8"><span><img class="big-image" src="'
      + img +'"></span></div><div class="col-sm-4"><p><img class="avatar" src=""><b>' + chef
      + '</b></p><span><i class="empty heart icon"></i><i class="comment outline icon"></i></span>'
      + '<p><button class="btn btn-info">Pick Up</button><button class="btn btn-success">Delivery</button></p></div></div>'
      + '</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
      +'</div></div></div></div>');
    }

  });
});
