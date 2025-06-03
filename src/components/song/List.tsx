import {useState} from 'react';
import { v4 as uuid } from 'uuid';
import NewSongForm from "./Form.tsx";

type SongState = {
    id: number | string,
    title: string
}

export default function SongList() {
    const [songs, setSongs] = useState<SongState[]>([
        {id: 1, title: 'Song 1'},
        {id: 2, title: 'Song 2'},
        {id: 3, title: 'Song 3'},
    ]);

    const addSong = (title: string): void => setSongs([...songs, {id: uuid(), title}])

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => (
                    <li key={song.id}>{song.title}</li>
                ))}
            </ul>
            <NewSongForm addSong={addSong} />
        </div>
    )
}