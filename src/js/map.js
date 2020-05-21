'use strict';


let map = {
    id: '#map',
    isInit: false,
    categories: [],
    placemarks: [],
    filters: {
        isWorking: false,
        roundTheClock: false,
        cashInn: false,
        sLegalEntities: false
    },
    init: function (id) {

    }
};

map.init();



console.log(map);


let placemark = {
    title: null,
    categoryId: null,
    address: null,
    workingTime: null,
    isOpened: false
};

let category = {
    id: null,
    title: null,
    isActive: false
};