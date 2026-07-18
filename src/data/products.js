import espresso from "../image/Espresso.jpg";
import latte from "../image/Latte.jpg";
import cappuccino from "../image/Cappuccino.jpg";
import greenTea from "../image/Green-tea.jpg";
import thaiTea from "../image/thai-tea.jpg";
import chocolateCake from "../image/chocolate-cake.jpg";
import croissant from "../image/Croissant.jpg";

const products = [
    {
        id: 1,
        name: "Espresso",
        price: 60,
        category: "Coffee",
        Image: espresso,
    },
    {
        id: 2,
        name: "Latte",
        price: 80,
        category: "Coffee",
        image: latte,
    },
    {
        id: 3,
        name: "Cappuccino",
        price: 85,
        category: "Coffee",
        image: cappuccino
    },
    {
        id: 4,
        name: "Green Tea",
        price: 60,
        category: "Tea",
        image: greenTea
    },
    {
        id: 5,
        name: "Thai Tea",
        price: 60,
        category: "Tea",
        image: thaiTea
    },
    {
        id: 6,
        name: "Chocolate Cake",
        price: 95,
        category: "Dessert",
        image: chocolateCake
    },
    {
        id: 7,
        name: "Croissant",
        price: 55,
        category: "Bakery",
        image: croissant
    }
]

export default products;