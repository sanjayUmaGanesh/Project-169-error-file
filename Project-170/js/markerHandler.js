AFRAME.registerComponent('markerHandler', {
    init: async function () {
      
        this.e1.addEventListener('markerFound', ()=>{
            this.handleMarkerFound();
        })
        this.e1.addEventListener('markerLost', ()=>{
            this.handleMarkerLost();
        })

    },

    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex"

        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button");

        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "RATE DISH OR NO DISH",
                text: "work in progress or.... no dish ! "
            })
        })

        orderButton.addEventListener("click", function(){
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks for order",
                text: "your order will be served soon if you rated this food 5 stars "
            })
        })
    },

    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none"
    }
});
