import React from 'react';
import PropTypes from 'prop-types';
import SongList from '../SongList';
import AlbumList from '../AlbumList';
import ArtistList from '../ArtistList';
import BrowseView from '../BrowseView';
import './MainView.css';

const MainView = ({ headerTitle, audioControl }) => {

	return (
		<div>
			{
				headerTitle === 'Albums' ?
					(<AlbumList audioControl={ audioControl } />) :
					headerTitle === 'Artists' ?
						(<ArtistList />) :
						(headerTitle === 'Browse') ?
							( <BrowseView />) :
							//anything else show SongList
							( <SongList audioControl={ audioControl } />)
			}
		</div>
	);

};

MainView.propTypes = {
	headerTitle: PropTypes.string,
	audioControl: PropTypes.func
};

export default MainView;
