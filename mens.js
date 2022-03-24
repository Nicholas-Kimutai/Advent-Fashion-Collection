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
