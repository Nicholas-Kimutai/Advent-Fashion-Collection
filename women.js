
var womens =[{name: "sweater-top",
              id: "clothe1-btn",
              sizes:[{name:"S",price:1200},{name:"M",price:1200},{name:"L",price:1200},{name:"XL",price:1200}],
              colors:[{name:"Black"},{name:"Red"},{name:"Blue"},{name:"Beige"}]},
              {name: "dress",
              id: "clothe2-btn",
              sizes:[{name:"S",price:3000},{name:"M",price:3000},{name:"L",price:3000},{name:"XL",price:3000}],
              colors:[{name:"Black"},{name:"Red"},{name:"Blue"},{name:"Beige"}]},
              {name: "boots",
              id: "clothe3-btn",
              sizes:[{name:"S",price:4500},{name:"M",price:4500},{name:"L",price:4500},{name:"XL",price:4500}],
              colors:[{name:"Black"},{name:"Red"},{name:"Blue"},{name:"Beige"}]},
              {name: "chunky",
              id: "shoes1-btn",
              sizes:[{name:"S",price:1800},{name:"M",price:1800},{name:"L",price:1800},{name:"XL",price:1800}],
              colors:[{name:"Black"},{name:"Red"},{name:"Blue"},{name:"Beige"}]},
              {name: "handbag",
              id: "shoes2-btn",
              sizes:[{name:"S",price:2500},{name:"M",price:2500},{name:"L",price:2500},{name:"XL",price:2500}],
              colors:[{name:"Black"},{name:"Red"},{name:"Blue"},{name:"Beige"}]},
              {name: "skirt",
              id: "shoes3-btn",
              sizes:[{name:"S",price:1000},{name:"M",price:1000},{name:"L",price:1000},{name:"XL",price:1000}],
              colors:[{name:"Black"},{name:"Red"},{name:"Blue"},{name:"Beige"}]},
            ];

//Create a mens constructor
function Women(name,size,colors,total){
    this.name = name;
    this.size = size;
    this.colors = colors;
    this.total = total;
}
Women.prototype.womenColors = function(){
    let col= "";
    this.colors.forEach(function(color){
        col = color.name;
    });
}
$(document).ready(function(){
    var total = 0;
    var sizeInput = 0;
    var colorInput = 0;
    var netTotal = 0;
    womens.forEach(function(women){
        $("button").click(function(){
            if(this.id === women.id){
                $("#orderName").text(women.name);
                var womenSize = "";
                var womenColors = "";
                $("#myOrders").click(function() {
                    women.sizes.forEach(function(size){
                        var isChecked = $("#"+size.name).is(':checked');
                        if(isChecked){
                            $("#"+size.name+"-"+"price").text(size.price);
                            sizeInput = size.price;
                            womenSize = size.name;
                        }
                    });
                    women.colors.forEach(function(color){
                        var isChecked = $("#"+color.name).is(':checked');
                        if(isChecked){
                            $("#"+color.name+"-"+"price").text(color.price);
                            colorInput = color.price;
                            if(!womenColors.includes(color.name)){
                                womenColors.push(color.name);
                            }
                        }
                    })
                    total = sizeInput + colorInput;
                    $("#totalPrice").text( "Ksh."+ total);
                });
                $("form#myOrders").submit(function(event){
                    event.preventDefault();
                    netTotal += total;
                    console.log(netTotal)
                    var womenChoice = new Women(women.name, womenSize, womenColors,total);
                    $("#nameOrder").text( womenChoice.name);
                    $("#priceOrder").text( "Ksh." + womenChoice.total);
                    $("#notordered").hide();
                    $(".table").show();
                    $("#total-orders").append('<tr><td id="womenname">'+womenChoice.name +'</td><td id="womensize">' + womenChoice.size + '</td><td id="womencolor">' + womenChoice.colors+'</td><td id="womenprice">' + womenChoice.total+'</td></tr>');
                    $("#womentotalprice").text("Your total order amount is: " + netTotal);
                    $('input[name="size"]').prop('checked', false);
                    $('input[name="color"]').prop('checked', false);
                    $(".order-btn").show()
                });
            }
        })
    });
    $("button#proceedbtn").click(function(){
        $(".checkout").show();
        $("form#checkoutfrm").submit(function(event){
            event.preventDefault();
            var nameInput = $("input#username").val();
            var locationInput = $("input#location").val();
            var phoneInput = $("input#phone").val();
            console.log(nameInput)
            console.log(locationInput)
            console.log(phoneInput)
            if(nameInput !== "" && locationInput !== "" && phoneInput !== ""){
                alert("Hi "+ nameInput+ ","+" We have received your order and our rider will be delivering it to: " + locationInput);
            }
            $("input#username").val("");
            $("input#location").val("");
            $("input#phone").val("");
        });
    })
});            

// 

    

