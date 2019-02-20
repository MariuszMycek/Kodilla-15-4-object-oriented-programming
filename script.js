(function() {
  function Phone(brand, price, color,camera, batery) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.camera = camera;
    this.batery = batery;
  }

  Phone.prototype.printInfo = function() {
    console.log(
      "The phone brand is " +
        this.brand +
        ", color is " +
        this.color +
        " and the price is " +
        this.price +
        ". Camera: " +
        this.camera +
        ". Standard batery: " +
        this.batery +
        "."
    );
  };

  var SamsungGalaxyS6 = new Phone(
    "Samsung",
    "350$",
    "rustic gold",
    "16 Mpx",
    "Li-Ion 2550 mAh"
  );
  var iPhone6S = new Phone(
    "Apple",
    "800$",
    "silver",
    "12 Mpx",
    "Li-Po 1715 mAh"
  );
  var OnePlusOne = new Phone(
    "OnePlus",
    "300$",
    "electric blue",
    "13 Mpx",
    "Li-Po 3100 mAh"
  );
  var HuaweiP20 = new Phone(
    "Huawei",
    "400$",
    "black",
    "12 Mpx",
    "Li-Po 3400 mAh"
  );

  SamsungGalaxyS6.printInfo();
  iPhone6S.printInfo();
  OnePlusOne.printInfo();
  HuaweiP20.printInfo();
})();
