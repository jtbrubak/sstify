```js
{
  session: {
    currentUser: {
      id: 1,
      username: 'jtbrubak'
    },
    errors: []
  },
  currentTrack: {
    track_url: 'http://mp3.com',
    title: 'Helicopter',
    artist: 'Deerhunter',
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
    name: 'Deerhunter',
    image_url: 'http://image',
    bio: 'Good band',
    releases: [
      {
        title: 'Halcyon Digest',
        type: 'album',
        image_url: 'http://image',
        year: '2010',
        tracks: [
          {
            title: 'Earthquake',
            release_ord: 1,
            track_url: 'http://music'
          },
          {
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
    artist: 'Deerhunter',
    title: ''
  }
}
