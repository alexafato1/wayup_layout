
 document.querySelectorAll('.link').forEach(item=>
    item.onclick = function(){
      item.parentElement.classList.toggle('open')
    })

