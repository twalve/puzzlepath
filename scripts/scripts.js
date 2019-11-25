(function() {
  const PZZL = {
    GRID: null,
    TOTAL: 0,
    add: function(button) {
      PZZL.TOTAL += parseInt(button.value, 10);
      button.classList.add("clicked")

      console.log(PZZL.TOTAL);
    },
    build: function() {
      const shadow = document.createElement("div");

      for (const tile in TILES) {
        const button = document.createElement("button");
        button.innerHTML = TILES[tile].value;
        button.value = TILES[tile].value;

        if (TILES[tile]["⅃"] === "_") {
          button.classList.add("bottom");
        } else if (TILES[tile]["⅃"] === "|") {
          button.classList.add("right");
        } else if (TILES[tile]["⅃"] === "_|") {
          button.classList.add("bottom");
          button.classList.add("right");
        }

        shadow.appendChild(button);
      }

      PZZL.GRID.innerHTML = shadow.innerHTML;
    },
    click: function(element) {
      clicked = element.target;

      if (clicked.classList.contains("clicked")) {
        PZZL.remove(clicked);
      } else {
        PZZL.add(clicked);
      }
    },
    find: function() {
      PZZL.GRID = document.querySelector("#grid");
    },
    remove: function(button) {
      PZZL.TOTAL -= parseInt(button.value, 10);
      button.classList.remove("clicked");

      console.log(PZZL.TOTAL);
    },
    listen: function() {
      const grid = document.querySelector("grid");
      grid.addEventListener("click", PZZL.click);
    },
    init: function() {
      this.find();
      this.listen();
      this.build();
    }
  }

  window.PZZL = PZZL;
  PZZL.init();
}())