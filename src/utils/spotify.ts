import axios from 'axios';

export async function getAccount(token: string) {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response;
    } else {
      console.log('Error', error.message)
    }
  }
}

export async function getUserTop(token: string) {
  const response = await axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=12`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data.items;
}

export async function createPlaylist(token: string, user: any, name: string, description: string) {
  const data = {
    "name": name,
    "description": description,
    "public": true
  }

  const response = await axios.post(`https://api.spotify.com/v1/users/${user.id}/playlists`, data, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  return response.data.id;
}

export async function addTracksToPlaylist(token: string, id: string, tracks: any) {
  const apiCallAmount = Math.ceil(tracks.length / 100);

  const addedTracks = await Promise.all([...new Array(apiCallAmount)].map(async (key, index) => {
    const response = await axios.post(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
      uris: tracks.splice(0, 100)
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data;
  }));

  return addedTracks;
}

export async function updatePlaylistTracks(token: string, id: string, tracks: any) {
  const apiCallAmount = Math.ceil(tracks.length / 100); 

  const addedTracks = await Promise.all([...new Array(apiCallAmount)].map(async (key, index) => {
    const response = await axios.put(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
      uris: tracks.splice(0, 100)
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data;
  }));

  return addedTracks;
}

export async function getPlaylist(id: string, token: any) {
  const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response.data;
}
