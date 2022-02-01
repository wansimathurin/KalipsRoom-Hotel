// carousel initialisation
$( function(){
    $('#overview .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.bestRoomArea .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    
    // testi
    $('#testimonial .owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
  $('.overview .owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
});

// connecter a la zone Room data 
document.getElementById('bestRooms').innerHTML=`
   ${roomsData.map(function card(room){
       return `
       <div class="item card" style="width: 18rem;">
        <div class="item-img"><img src="${room.image}" class="card-img-top" alt="..."></div>
       <div class="card-body">
         <h3 class="card-title">${room.name}</h3>
         <h6>${room.roomCondition}</h6>
         <p class="card-text">${room.desc}</p>
       </div>
       <a href="${room.link}" class="btn btn-primary">Book Now ${room.price}</a>
     </div>
       `
   }).join("")}
`

        

        // Testimonial area
        document.getElementById("testi-content").innerHTML=`
        <div class="title">
          <h1>Testimonials</h1>
          <h3>What they Say</h3>
        </div>
        `
        document.getElementById('slider').innerHTML=`
        ${clients.map(function name(client){
          return `
              <div class="item">
                 <div class="img"><img src="${client.image}" width="100%"></div>
                <h4>${client.name}</h4>
                <p>${client.comments}</p>
              </div>
          `
      }).join("")}
        `

     