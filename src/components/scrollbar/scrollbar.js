import $ from 'jquery';
import SimpleBar from 'simplebar';

$(function(){
  $('.js-scrollbar').each(function(){
    try {
      new SimpleBar($(this)[0]);
    } catch (error) {
      console.debug(error);
    }
  });
});