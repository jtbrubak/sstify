```js
{
  session: {
    currentUser: {
      id: 1,
      username: 'jtbrubak'
    },
    errors: []
  },
  allArtists: [
    {
      id: 1,
      name: 'Deerhunter',
      image_url: 'http://image.com'
    }
    ...
  ]
  currentTrack: {
    id: 1,
    track_url: 'http://mp3.com',
    title: 'Helicopter',
    artist_id: 1,
    artist: 'Deerhunter',
    release_id: 1,
    release: 'Halcyon Digest'
  }
  userDetail: {
    id: 2,
    username: 'kabrubak',
    email: 'kabrubak@gmail.com',
    playlists: [
      {
        id: 1,
        title: 'ROCKIN PLAYLIST'
      }
    ],
    followed_playlists: [
      {
        id: 2,
        title: 'NOT SO ROCKIN PLAYLIST'
      }
    ],
    followed_users: [
      {
        id: 1,
        username: 'jtbrubak'
      }
    ],
    followers: [
      {
        id: 1,
        username: 'jtbrubak'
      }
    ]
  },
  artistDetail: {
    id: 1,
    name: 'Deerhunter',
    image_url: 'http://image',
    bio: 'Good band',
    releases: [
      {
        id: 1,
        title: 'Halcyon Digest',
        type: 'album',
        image_url: 'http://image',
        year: '2010',
        tracks: [
          {
            id: 1,
            title: 'Earthquake',
            release_ord: 1,
            track_url: 'http://music'
          },
          {
            id: 2,
            title: 'Don\'t Cry',
            release_ord: 2,
            track_url: 'http://music'
          }
          ...
        ]
      }
    ],
  },
  releaseDetail: {
    id: 1,
    artist_id: 1,
    artist: 'Deerhunter',
    title: '',
    image_url: 'http://image',
    year: '2010',
    tracks: [
      {
        id: 1,
        title: 'Earthquake',
        release_ord: 1,
        track_url: 'http://music'
      },
      {
        id: 2,
        title: 'Don\'t Cry',
        release_ord: 2,
        track_url: 'http://music'
      }
      ...
    ]
  },
  playlistDetail: {
    id: 1,
    user_id: 1,
    username: 'jtbrubak',
    title: 'ROCKIN PLAYLIST',
    tracks: [
      {
        id: 1,
        artist_id: 1,
        artist: 'Deerhunter',
        title: 'Earthquake',
        playlist_ord: 1,
        track_url: 'http://music'
      },
      {
        id: 2,
        artist_id: 1,
        artist: 'Deerhunter',
        title: 'Don\'t Cry',
        release_ord: 2,
        track_url: 'http://music'
      }
    ]
  }
}
