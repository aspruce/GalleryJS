var chico = [ "Woodstock", "Chico Creek Nature Center", "Oak Way Park", "Chico State Park", "Bidwell Mansion Historic Park"];
var current = -1;

function shuffleGallery()
{
  var rand = Math.random();
  rand = rand * 4;
  if (parseInt(rand) == current)
  {
    while(parseInt(rand) == current)
    {
      var rand = Math.random();
      rand = rand * 4;
    }
  }
  console.log(chico[parseInt(rand)]);
  current = parseInt(rand);
}
