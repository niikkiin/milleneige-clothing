const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",

      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "women's",

      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "men's",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
      return state;
  }
};

export default directoryReducer;

  // sections: [
      //   {
      //     title: "jewelries",
      //     id: 1,
      //     linkUrl: "shop/jewelries"
      //   },
      //   {
      //     title: "accesories",

      //     id: 2,
      //     linkUrl: "shop/accesories"
      //   },
      //   {
      //     title: "bags",
      //     id: 3,
      //     linkUrl: "shop/bags"
      //   },
      //   {
      //     title: "jackets",

      //     id: 4,
      //     linkUrl: "shop/jackets"
      //   },
      //   {
      //     title: "shoes",
      //     id: 5,
      //     linkUrl: "shop/shoes"
      //   },
      //   {
      //     title: "dresses",
      //     id: 6,
      //     linkUrl: "shop/dresses"
      //   }
      // ]