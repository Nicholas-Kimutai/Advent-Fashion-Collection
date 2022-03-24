var mens =[{name: "T-shirt",
              id: "clothe1-btn",
              sizes:[{name:"S",price:2500},{name:"M",price:3000},{name:"L",price:3200},{name:"XL",price:3500}],
              colors:[{name:"Black",price:""},{name:"Red",price:""},{name:"Blue",price:""},{name:"Beige",price:""},{name:"Brown",price:""}]},
              
              {name: "Blazer",
              id: "clothe2-btn",
              sizes:[{name:"S",price:3000},{name:"M",price:3200},{name:"L",price:3500},{name:"XL",price:3600}],
              colors:[{name:"Black",price:""},{name:"Red",price:""},{name:"Blue",price:""},{name:"Beige",price:""},{name:"Brown",price:""}]},

              {name: "Shirt",
              id: "clothe3-btn",
              sizes:[{name:"S",price:4400},{name:"M",price:4600},{name:"L",price:4700},{name:"XL",price:5000}],
              colors:[{name:"Black",price:""},{name:"Red",price:"",price:""},{name:"Blue",price:""},{name:"Beige",price:""},{name:"Brown",price:""}]}, 

              {name: "Rubber",
              id: "shoes1-btn",
              sizes:[{name:"S",price:2600},{name:"M",price:2700},{name:"L",price:2900},{name:"XL",price:3000}],
              colors:[{name:"Black",price:""},{name:"Red",price:""},{name:"Blue",price:""},{name:"Beige",price:""},{name:"Brown",price:""}]},

              {name: "Official",
              id: "shoes2-btn",
              sizes:[{name:"S",price:600},{name:"M",price:900},{name:"L",price:1300},{name:"XL",price:1300}],
              colors:[{name:"Black", price:""},{name:"Red",price:""},{name:"Blue",price:""},{name:"Beige",price:""},{name:"Brown",price:""}]},
              
              {name: "Sneakers",
              id: "shoes3-btn",
              sizes:[{name:"S",price:5600},{name:"M",price:5800},{name:"L",price:6000},{name:"XL",price:6300}],
              colors:[{name:"Black",price:""},{name:"Red",price:""},{name:"Blue",price:""},{name:"Beige",price:""},{name:"Brown",}]},
            ];

//Create a mens constructor
function Men(name,size,colors,total){
    this.name = name;
    this.size = size;
    this.colors = colors;
    this.total = total;
}
Men.prototype.menColors = function(){
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
    mens.forEach(function(men){
        $("button").click(function(){
            if(this.id === men.id){
                $("#orderName").text(men.name);

                var menSize = "";
                var menColors = "";

                $("#myOrders").click(function() {
                    men.sizes.forEach(function(size){
                        var isChecked = $("#"+size.name).is(':checked');
                        if(isChecked){
                            $("#"+size.name+"-"+"price").text(size.price);
                            sizeInput = size.price;
                            menSize = size.name;
                        }
                    });
                    
                    men.colors.forEach(function(color){
                        var isChecked = $("#"+color.name).is(':checked');
                        if(isChecked){
                            $("#"+color.name+"-"+"price").text(color.price);
                            colorInput = color.price;
                            if(!menColors.includes(color.name)){
                                menColors.push(color.name);
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
                    var menChoice = new Men(men.name,menSize,menColors,total);

                    $("#nameOrder").text( menChoice.name); 
                    $("#priceOrder").text( "Ksh." + menChoice.total); 
                    $("#notordered").hide();
                    $(".table").show();
                    $("#total-orders").append('<tr><td id="menname">'+menChoice.name +'</td><td id="mensize">' + menChoice.size + '</td><td id="mencolor">' +menChoice.colors+'</td><td id="menprice">'+menChoice.total+'</td></tr>');
                    $("#mentotalprice").text("Your total order amount is: " + netTotal);

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

