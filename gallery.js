var chico = [

  {description:"Woodstock",
    picture: "http://static1.squarespace.com/static/5357e677e4b0fe1121e39c2d/57675e9c6a49633b44948128/58221184e3df28980b66f8a3/1485370420928/woodstocks.jpg?format=1000w" ,
    from: "//chicostate.studentdiscountprogram.com"

  },

  {

    description:"Chico Creek Nature Center" ,

    picture: "http://image.chicoer.com/storyimage/NA/20150821/NEWS/150829923/AR/0/AR-150829923.jpg&maxh=400&maxw=667" ,

    from: "chicoer.com"

  },

  {

    description:"Oak Way Park" ,

   picture: "http://www.chicorec.com/pictures/parks-facilities/Updated%202010%20photos/oak-way-picnic-area.jpg" ,

   from: "chicorec.com"

  },

  {
    description:"Chico State Park" ,

   picture: "https://chicostateblog.files.wordpress.com/2012/07/img_0590.jpg" ,

   from: "chicostateblog.wordpress.com"

  },

  {
    description: "Bidwell Mansion Historic Park" ,

   picture: "https://www.parks.ca.gov/pages/25071/images/BidwellMansionSHP_%C2%A92006CalStPks_photo.jpg" ,

   from: "parks.ca.gov"

  }

];
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
  document.getElementById("caption").innerHTML = chico[parseInt(rand)].description;
  document.getElementById("source").innerHTML = chico[parseInt(rand)].from;
  document.getElementById("picture").src = chico[parseInt(rand)].picture;
  current = parseInt(rand);
}
