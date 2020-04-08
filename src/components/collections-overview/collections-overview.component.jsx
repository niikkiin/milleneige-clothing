import React from 'react';

// styles
import './collections-overview.styles.scss';

// redux
import { connect } from 'react-redux';

// selectors
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

// components
import CollectionPreview from '../collection-preview/collection-preview.component';


const CollectionsOverview = ({ collections }) => (
	<div className="collections-overview">
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);