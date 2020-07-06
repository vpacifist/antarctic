ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938278, 30.323299],
          zoom: 16,
          controls: ['zoomControl', 'fullscreenControl', 'routeButtonControl']
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark([59.937560, 30.322615], {
        hintContent: '',
        balloonContent: ''
    }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/icon_balloon.svg',
          // Размеры метки.
          iconImageSize: [18, 22],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [0, 0]
      });

  myMap.geoObjects
      .add(myPlacemark)
});