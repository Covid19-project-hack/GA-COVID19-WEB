$(document).ready(function () {
    const listgrp = document.getElementById("lstgrp");
  
    var epass = (function () {
      var json = null;
      $.ajax({
        'async': false,
        'global': false,
        'url': "json/epass.json",
        'dataType': "json",
        'success': function (data) {
          json = data;
        }
      });
      return json;
    })();
  
    epass = epass.data;
    epass.forEach(element => {
      listgrp.innerHTML +=
        `<a href="${element.link}" style="text-decoration: none;" target="_blank"><div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
      <div class="d-flex w-100 justify-content-between">
        <h5><b>${element.name}</b></h5>
      </div>
      <br>
      <p class="mb-1"><i class="fas fa-link" style="margin-right: 15px;"> </i>   ${element.link}</p>
      </div></a><br>`;
    });
  });