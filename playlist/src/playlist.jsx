import { useSelector, useDispatch } from "react-redux";
import { addSong, deleteSong, playSong, pauseSong } from "./playlistSlice";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const Playlist = () => {
    const songs = useSelector((state) => state.playlist.songs);
    const currentPlaying = useSelector((state) => state.playlist.currentPlaying);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");

    const nowPlaying = songs.find((song) => song.id === currentPlaying);

    function handleSetTitle(e) {
        setTitle(e.target.value);
    }

    function handleSetArtist(e) {
        setArtist(e.target.value);
    }

    function handleAddSong() {
        const newSong = {
            id: songs.length ? songs[songs.length - 1].id + 1 : 1,
            title,
            artist,
        };
        dispatch(addSong(newSong));
        setTitle("");
        setArtist("");
    }

    return (
        <div>
            <h1>Music playlist App</h1>
            <h2>my playlist</h2>
            <Row>
                <input placeholder="song title" type="text" onChange={handleSetTitle} />
                <input placeholder="artist" type="text" onChange={handleSetArtist} />
            </Row>
            <Row>
                <button onClick={handleAddSong}>Add Song</button>
            </Row>
            <Col>
                <ul>
                    {songs.map((song) => (
                        <li key={song.id}>
                            {song.title} by {song.artist}
                            <button onClick={() => {if (currentPlaying === song.id) {
                                dispatch(pauseSong());
                            } else {
                                dispatch(playSong(song.id))
                            }}}>
                                {currentPlaying === song.id ? "Pause" : "Play"}
                            </button>
                            <button onClick={() => dispatch(deleteSong(song.id))}>Delete</button>
                        </li>
                    ))}
                </ul>
            </Col>
            <p>now playing {nowPlaying ? `${nowPlaying.title} by ${nowPlaying.artist}` : "Nothing"}</p>
        </div>
    );
}

export default Playlist;