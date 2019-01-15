(function () {
  'use strict';

// Массив услуг
  var servises = [{
      name: 'Грудь',
      price: 2000,
      oldPrice: 3500,
      categories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Подмышечная впадина',
      price: 2300,
      oldPrice: 3000,
      categories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Ореолы сосков',
      price: 2800,
      oldPrice: 3100,
      categories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Область живота',
      price: 2250,
      oldPrice: 0,
      categories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Глубокое бикини',
      price: 250,
      oldPrice: 500,
      categories: {
        gender: 'wooman',
        typeService: 'Другая эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Классическое бикини',
      price: 850,
      oldPrice: 1000,
      categories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Белая линия живота',
      price: 3250,
      oldPrice: 4000,
      categories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Руки полностью',
      price: 1250,
      oldPrice: 1500,
      categories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Кисти рук',
      price: 1850,
      oldPrice: 1900,
      categories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Предплечья',
      price: 1850,
      oldPrice: 1900,
      categories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Спина',
      price: 1850,
      oldPrice: 1900,
      categories: {
        gender: 'wooman',
        typeService: 'Другая эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Шея',
      price: 1950,
      oldPrice: 2100,
      categories: {
        gender: 'wooman',
        typeService: 'Другая эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Спина',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'wooman',
        typeService: 'Другая эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Поясница',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'wooman',
        typeService: 'Другая эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Уши',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'wooman',
        typeService: 'Другая эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Ноги полностью',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'wooman',
        typeService: 'Другая эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Ягодицы',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'wooman',
        typeService: 'Другая эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1,
        isShowed: true
      }
    },
    {
      name: 'Бедра',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Голени',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'wooman',
        typeService: 'Другая эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Колено',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Стопы',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Грудь',
      price: 2000,
      oldPrice: 3500,
      categories: {
        gender: 'man',
        typeService: 'Лазерная эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Подмышечная впадина',
      price: 2300,
      oldPrice: 3000,
      categories: {
        gender: 'man',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Ореолы сосков',
      price: 2800,
      oldPrice: 3100,
      categories: {
        gender: 'man',
        typeService: 'Другая эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Область живота',
      price: 2250,
      oldPrice: 0,
      categories: {
        gender: 'man',
        typeService: 'Другая эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Глубокое бикини',
      price: 250,
      oldPrice: 500,
      categories: {
        gender: 'man',
        typeService: 'Другая эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Классическое бикини',
      price: 850,
      oldPrice: 1000,
      categories: {
        gender: 'man',
        typeService: 'Лазерная эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Белая линия живота',
      price: 3250,
      oldPrice: 3500,
      categories: {
        gender: 'man',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Руки полностью',
      price: 1250,
      oldPrice: 1500,
      categories: {
        gender: 'man',
        typeService: 'Другая эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Кисти рук',
      price: 1850,
      oldPrice: 1900,
      categories: {
        gender: 'man',
        typeService: 'Лазерная эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Предплечья',
      price: 1850,
      oldPrice: 1900,
      categories: {
        gender: 'man',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Спина',
      price: 1850,
      oldPrice: 1900,
      categories: {
        gender: 'man',
        typeService: 'Другая эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Шея',
      price: 1950,
      oldPrice: 2100,
      categories: {
        gender: 'man',
        typeService: 'Другая эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Спина',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'man',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Поясница',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'man',
        typeService: 'Другая эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Уши',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'man',
        typeService: 'Другая эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Ноги полностью',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'man',
        typeService: 'Лазерная эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Ягодицы',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'man',
        typeService: 'Другая эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Бедра',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'man',
        typeService: 'Другая эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Голени',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'man',
        typeService: 'Другая эпиляция',
        zone: 'body'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Колено',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'man',
        typeService: 'Лазерная эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    },
    {
      name: 'Стопы',
      price: 950,
      oldPrice: 1100,
      categories: {
        gender: 'man',
        typeService: 'Лазерная эпиляция',
        zone: 'face'
      },
      viewOptions: {
        isSelected: false,
        count: 1
      }
    }
  ];

  var calculator = new Vue({
    el: '.Calculator',
    data: {
      servises,
      viewedCategories: {
        gender: 'wooman',
        typeService: 'Лазерная эпиляция',
        zone: 'face'
      },
      tweenedPrice: 0,
      tweenedOldPrice: 0
    },
    computed: {
      filteredServices: function () {
        var viewedCategories = this.viewedCategories;

        return this.servises.filter(function (item) {
          return JSON.stringify(viewedCategories) === JSON.stringify(item.categories);
        });
      },
      selectedServices: function () {
        return this.servises.filter(function (service) {
          return service.viewOptions.isSelected;
        });
      },
      amountPrice: function () {
        return this.selectedServices.reduce(function (acc, currentService) {
          return acc + (currentService.price * currentService.viewOptions.count);
        }, 0);
      },
      amountOldPrice: function () {
        return this.selectedServices.reduce(function (acc, currentService) {
          var oldPrice = (currentService.oldPrice) ? currentService.oldPrice : currentService.price;
          return acc + (oldPrice * currentService.viewOptions.count);
        }, 0);
      },
      animatedPrice: function () {
        return this.tweenedPrice.toFixed(0);
      },
      animatedOldPrice: function () {
        return this.tweenedOldPrice.toFixed(0);
      }
    },
    filters: {
      number: function (value) {
        var strNumber = String(value).replace(/(\.(.*))/g, '');
        var arrNumbers = strNumber.split('');
        var numberFormat = '';

        if (strNumber.length > 3) {
          for (var i = arrNumbers.length - 1, j = 1; i >= 0; i--, j++) {
            numberFormat = arrNumbers[i] + numberFormat;
            if (j % 3 == 0) {
              numberFormat = ' ' + numberFormat;
            }
          }
          return numberFormat;
        } else {
          return strNumber;
        }
      }
    },
    watch: {
      amountPrice: function (newValue) {
        TweenLite.to(this.$data, 0.5, {
          tweenedPrice: newValue
        });
      },
      amountOldPrice: function (newValue) {
        TweenLite.to(this.$data, 0.5, {
          tweenedOldPrice: newValue
        });
      }
    }
  });
}());