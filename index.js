var numberOfGenress=document.querySelectorAll(".dropdown-item").length;
for (var i=0;i<numberOfGenress;i++){
  document.querySelectorAll(".dropdown-item")[i].addEventListener("click",function ()
{
  var ButtonInnerHTML=this.innerHTML;
  filter(ButtonInnerHTML);

})
}

function filter(currentKey){
  var numberOfmovies=document.querySelectorAll(".movie-box").length;
  console.log(numberOfmovies);
  if(currentKey=="All"){
    for (var i=0;i<numberOfmovies;i++)
    {
      document.querySelectorAll(".movie-box")[i].classList.add("selected")
    }
  }
  else{
  // var numberOfmovies=document.querySelectorAll(".movie-box").length;
   for (var i=0;i<numberOfmovies;i++)
  {
    document.querySelectorAll(".movie-box")[i].classList.add("selected")
  }


  for (var j=0;j<numberOfmovies;j++)
  {
    document.querySelectorAll(".movie-box")[j].classList.add("unselected");
    document.querySelectorAll(".movie-box")[j].classList.remove("selected");
  }

  var numofActiveGenre=document.querySelectorAll("."+currentKey).length;
  console.log(numofActiveGenre);
  for(var k=0;k<numofActiveGenre;k++){
    document.querySelectorAll("."+currentKey)[k].classList.remove("unselected");
    document.querySelectorAll("."+currentKey)[k].classList.add("selected");
  }
}
}
