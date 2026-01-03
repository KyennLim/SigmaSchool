import { createSlice } from '@reduxjs/toolkit';


const playlist = {
    songs: [
        { id: 1, title: 'Bahemian Rhapsody', artist: 'Queen' },
        { id: 2, title: 'Imagine', artist: 'John Lennon' },
    ],
    currentPlaying: null,
};

const playlistSlice = createSlice({
    name: 'playlist',
    initialState: playlist,
    reducers: {
        addSong(state, action) {
            state.songs.push(action.payload);
        },
        deleteSong(state, action) {
            state.songs = state.songs.filter(song => song.id !== action.payload);
        },
        playSong(state, action) {
            state.currentPlaying = action.payload;
        },
        pauseSong(state) {
            state.currentPlaying = null;
        }
    },
});


export const { addSong, deleteSong, playSong, pauseSong } = playlistSlice.actions;
export default playlistSlice.reducer;