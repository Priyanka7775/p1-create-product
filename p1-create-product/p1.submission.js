const product={
    productId:1234567,
    productName:"Mobile",
    description:"Wireless device used connect people",
    unitPrice:40000
}

function displayDetails(productData){
    console.log("Product Details")
    console.log("-----------------------------")
    console.log("Product Id   :"+productData.productId)
    console.log("Product Name :"+productData.productName)
    console.log("Description  :"+productData.description)
    console.log("Price        :"+productData.unitPrice)
}
displayDetails(product)