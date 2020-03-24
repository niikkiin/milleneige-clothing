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
          title: "jewelries",
          id: 1,
          linkUrl: "shop/jewelries"
        },
        {
          title: "accesories",

          id: 2,
          linkUrl: "shop/accesories"
        },
        {
          title: "bags",
          id: 3,
          linkUrl: "shop/bags"
        },
        {
          title: "jackets",

          id: 4,
          linkUrl: "shop/jackets"
        },
        {
          title: "shoes",
          id: 5,
          linkUrl: "shop/shoes"
        },
        {
          title: "dresses",
          id: 6,
          linkUrl: "shop/dresses"
        }
      ]
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
