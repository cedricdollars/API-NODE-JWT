exports.getProduct = (req, res) => {
    
    const productArray = [
        { name: "sneackers", price: "18" },
        { name: "sneackers", price: "18" },
        { name: "sneackers", price: "18" }
    ];

    res.send(productArray);

}