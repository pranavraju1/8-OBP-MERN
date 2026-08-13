
// Reading your document

// find() -> returns you an array
db.orders.find()
db.inventory.find()


// findOne -> will return you a single object
db.inventory.findOne()

// db.orders.find({item: "almonds"})
db.orders.find({ _id: 2})


// to apply conditions in seraching documents in mongo you need to specify
// it inside the argument of the find function
db.orders.find({item: "almonds"})
db.orders.findOne({ _id: 2})

// greater than -> $gt
db.orders.find({ 
  price: { $gt : 15 } 
  })
// greater than or equal -> $gte
db.orders.find({ 
  price: { $gte : 20 } 
  })
// less than -> $lt
// less than or equal -> $lte

// equal to -> $eq
db.inventory.find({ 
  instock: { $eq : 80 } 
  })

// not equal to -> $ne

// mathches value in array -> $in
db.inventory.find({ 
  sku: { $in : ['almonds', 'bread'] } 
  })


// does not match value in array -> $nin
db.inventory.find({ 
  sku: { $nin : ['almonds', 'bread'] } 
  })

// 1. find all recored in orders whose price >= 12 and price <= 30
db.orders.find({ 
  price: { $gte: 12, $lte:30 } 
  })

// 2. find all recored in orders whose price >= 10 and quntity >= 1
db.orders.find({ 
  price: { $gte: 10},
  quantity: {$gte: 1}
  })


// 3. find all recored where item is "almonds" OR "pecans"
db.orders.find({ 
  $or:[
    {item: "almonds"},
    {item: "pecans"}
  ]
})

// 3. find all recored where price > 10 AND quantity >= 1
db.orders.find({ 
  $and:[
    {price: {$gt: 10}},
    {quantity: {$gte: 1}}
  ]
})

// Projection
// Controling which fields are to be returned
// 1 -> includes field
// 0 -> excludes filed
// _id -> it is returned by default unless its specified in the projection
db.inventory.find(
  {},
  {
    _id: 0,
   description : 1,
   instock : 1
  }
)


// Sorting

// asc
db.orders.find({}).sort({
  price: 1
})

// desc
db.orders.find({}).sort({
  price: -1
})

// finding the most expensive product
db.orders.find({}).sort({
  price: -1
}).limit(1)

// finding the 2nd most expensive product
db.orders.find({}).sort({
  price: -1
}).skip(1).limit(1)


// Pagination
// if we have to show limited amount of items in a page we do not need to fetch all the data
// we only need those data that need to be shown
const page = 1;
const pageSize = 2;
db.orders.find({}).sort({_id: 1}).skip((page - 1) * pageSize).limit(pageSize)


// missing fields

// if you serach for null value it will give the missing fields also
db.inventory.find({
  sku: null
})

// corrent way to search for null values in mongo
// here 10 is the bson value for null
db.inventory.find({
  sku: {
    $type: 10
  }
})

// find all the records where sku exists
db.inventory.find({
  sku: {
    $exists: true
  }
})
