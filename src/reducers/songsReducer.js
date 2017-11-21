export const songsReducer = (state = {
	fetchSongsPending: true,
	songPlaying: false
}, action) => {

	switch (action.type) {

  case "FETCH_SONGS_PENDING":
			return {
				...state,
				fetchSongsPending: true
			}

		case "FETCH_SONGS_SUCCESS":
			return {
				...state,
				songs: action.songs,
        fetchSongsError: false,
				fetchSongsPending: false
			};

		case "FETCH_SONGS_ERROR":
      return {
        ...state,
        fetchSongsError: true,
				fetchSongsPending: false
      };

		case "FETCH_RECENTLY_PLAYED_PENDING":
				return {
					...state,
					fetchRecentlyPlayedPending: true
				}

			case "FETCH_RECENTLY_PLAYED_SUCCESS":
				return {
					...state,
					songs: action.songs,
	        fetchRecentlyPlayedError: false,
					fetchRecentlyPlayedPending: false
				};

			case "FETCH_RECENTLY_PLAYED_ERROR":
	      return {
	        ...state,
	        fetchRecentlyPlayedError: true,
					fetchRecentlyPlayedPending: false
	      };

	case "FETCH_PLAYLIST_SONGS_PENDING":
			return {
				...state,
				fetchPlaylistSongsPending: true
			}

		case "FETCH_PLAYLIST_SONGS_SUCCESS":
			return {
				...state,
				songs: action.songs,
				fetchPlaylistSongsError: false,
				fetchPlaylistSongsPending: false
			};

		case "FETCH_PLAYLIST_SONGS_ERROR":
			return {
				...state,
				fetchPlaylistError: true,
				fetchPlaylistSongsPending: false
			};

		case "PLAY_SONG":
				return {
					...state,
					songPlaying: true,
					songDetails: action.song
				}

		case "STOP_SONG":
				return {
					...state,
					songPlaying: false,
					songDetails: null
				}

		default:
			return state;
	}

};

export default songsReducer;
