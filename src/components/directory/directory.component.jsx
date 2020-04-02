import React from "react";

// styles
import "./directory.styles.scss";

// components
import MenuItem from "../menu-item/menu-item.component";

export default class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
          linkUrl: "shop/women's"
        },
        {
          title: "men's",
          id: 5,
          linkUrl: "shop/men's"
        }
      ]
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
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
