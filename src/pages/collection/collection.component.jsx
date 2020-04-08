import React from 'react';

// styles
import './collection.styles.scss';

// components
import CollectionItem from '../../components/collection-item/collection-item.component';

// redux
import { connect } from 'react-redux';
import { selectCollection, selectCollections } from '../../redux/shop/shop.selectors';


const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection);
  return(
  <div className="collection-page">
    <h2 className='title'>{title}</h2>
    <div className="items">
      {
        items.map(item => (
          <CollectionItem key={item.id} item={item} />
          )
        )
      }
    </div>
  </div>
)};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);