import { Injectable } from '@angular/core'


@Injectable()
export class ImageService {
    visibleImages = [];

    getImages() {
        //returning the copy of IMAGES array to array visibleImages
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        //from set of all images , it must return the image by the id we pass to this function
        return IMAGES.slice(0).find(image => image.id == id);
    }
}

const IMAGES = [
    { "id": 1, "category": "coffee", "caption": "Coffee preparation", "url": "assets/img/coffee_01.jpeg" },
    { "id": 2, "category": "coffee", "caption": "Steaming cup of coffee", "url": "assets/img/coffee_02.jpeg" },
    { "id": 3, "category": "coffee", "caption": "Black Coffee", "url": "assets/img/coffee_03.jpeg" },
    { "id": 4, "category": "coffee", "caption": "Creamy coffee", "url": "assets/img/coffee_04.jpeg" },
    { "id": 5, "category": "flowers", "caption": "Red Flower", "url": "assets/img/flowers_01.jpeg" },
    { "id": 6, "category": "flowers", "caption": "White Flowers", "url": "assets/img/flowers_02.jpeg" },
    { "id": 7, "category": "flowers", "caption": "SunFlower", "url": "assets/img/flowers_03.jpeg" },
    { "id": 8, "category": "flowers", "caption": "Pink Flowers", "url": "assets/img/flowers_04.jpeg" },
    { "id": 9, "category": "landscape", "caption": "Sun rising between the tree", "url": "assets/img/landscape_01.jpeg" },
    { "id": 10, "category": "landscape", "caption": "Green Mountains", "url": "assets/img/landscape_02.jpeg" },
    { "id": 11, "category": "landscape", "caption": "Waterfalls", "url": "assets/img/landscape_03.jpeg" },
    { "id": 12, "category": "landscape", "caption": "Desert", "url": "assets/img/landscape_04.jpeg" },
    { "id": 13, "category": "people", "caption": "Newly wed couple", "url": "assets/img/people_01.jpeg" },
    { "id": 14, "category": "people", "caption": "Girl checking her phone", "url": "assets/img/people_02.jpeg" },
    { "id": 15, "category": "people", "caption": "Chinese Market", "url": "assets/img/people_03.jpeg" },
    { "id": 16, "category": "people", "caption": "Group of photographers", "url": "assets/img/people_04.jpeg" },
    { "id": 17, "category": "space", "caption": "Orange Nebula", "url": "assets/img/space_01.jpeg" },
    { "id": 18, "category": "space", "caption": "Silhouette of man seeing night sky", "url": "assets/img/space_02.jpeg" },
    { "id": 19, "category": "space", "caption": "Night sky view from the mountains", "url": "assets/img/space_03.jpeg" },
    { "id": 20, "category": "space", "caption": "Stars in the night sky", "url": "assets/img/space_04.jpeg" },
];