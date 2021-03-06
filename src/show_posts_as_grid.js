
(function () {

  var isShowAsGrid = function() {
    return window.localStorage && window.localStorage.SteemMoreInfoShowPostsAsGrid === 'yes' || false;
  };

  var setShowAsGrid = function(v) {
    if(window.localStorage){
      window.localStorage.SteemMoreInfoShowPostsAsGrid = v ? 'yes' : 'no';
    }
  };

  var createButton = function(grid){
    return '<div class="list-grid-toggle">\
      <div class="icon' + (grid ? ' icon-grid': '') + '">\
        <div class="icon-bar"></div>\
        <div class="icon-bar"></div>\
        <div class="icon-bar"></div>\
      </div>\
      <span class="label">List</span>\
    </div>';
  };

  if(!$('.smi-show-as-grid-buttons').length){

    var showAsGridButtons = $('<div class="smi-show-as-grid-buttons">\
      <a class="smi-show-as-grid-button" href="#">' + createButton(true) + '</a>\
      <a class="smi-show-as-list-button" href="#">' + createButton() + '</a>\
    </div>');

    showAsGridButtons.find('.smi-show-as-grid-button').on('click', function(e) {
      e.preventDefault();
      $('html').addClass('smi-show-posts-as-grid');
      setShowAsGrid(true);
    });
    showAsGridButtons.find('.smi-show-as-list-button').on('click', function(e) {
      e.preventDefault();
      $('html').removeClass('smi-show-posts-as-grid');
      setShowAsGrid(false);
    });

    // $('.Header__sub-nav').append(showAsGridButtons);
    var container = $('.Header__top .Header__top-steemit').parent().find('.HorizontalMenu');
    container.append('<li class="delim show-for-medium" style="padding-left: 5px; padding-right: 10px;">|</li>');
    container.append(showAsGridButtons);

  }


  if(isShowAsGrid()) {
    $('html').addClass('smi-show-posts-as-grid');    
  }
  
})();
