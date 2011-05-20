$(document).ready(function() {
  
  // Embedly automatic document embedding
  $('div#main a.embedly-link').embedly();
  
  // Hyphenator JS to make text content look stunning
  Hyphenator.run();
  
  // Fancybox Lightbox
  fancyOptions = {
    'scrolling'     : 'no',
    'type'          : 'image',
    'titleShow'     : false,
    'overlayColor'  : '#333',
    'autoScale'     : true
  };
  
  $("#recent-photos-link").click(function(){
    var imgs = new Array;
    $("#recent-photos a").each(function(index){ imgs[index] = $(this).attr('href') });
    $.fancybox(imgs, fancyOptions);
  });
  
  $("#summer-photos-link").click(function(){
    var imgs = new Array;
    $("#summer-photos a").each(function(index){ imgs[index] = $(this).attr('href') });
    $.fancybox(imgs, fancyOptions);
  });
  
  $("#winter-photos-link").click(function(){
    var imgs = new Array;
    $("#winter-photos a").each(function(index){ imgs[index] = $(this).attr('href') });
    $.fancybox(imgs, fancyOptions);
  });
  
  $("#people-photos-link").click(function(){
    var imgs = new Array;
    $("#people-photos a").each(function(index){ imgs[index] = $(this).attr('href') });
    $.fancybox(imgs, fancyOptions);
  });
  
  // Local scroll for links
  $("#main").localScroll();
  
  // Open and Close the caveat lector notes in the footer 
  $("#caveat-lector").click(function(){
    $("#caveats").slideToggle('slow');
  });
});
