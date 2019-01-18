import Hero from "../models/Hero";

export const ListHeroes = [
    new Hero(1, 'Thor', 'Thunder', require('EventEmitterDemo/images/avatars/thor.jpg')),
    new Hero(2, 'Batman', 'Rich', require('EventEmitterDemo/images/avatars/batman.jpg')),
    new Hero(3, 'Flash', 'Speed', require('EventEmitterDemo/images/avatars/flash.jpg')),
    new Hero(4, 'Spiderman', 'Web', require('EventEmitterDemo/images/avatars/spiderman.jpg')),
    new Hero(5, 'Superman', 'Super strong', require('EventEmitterDemo/images/avatars/superman.jpg'))
];