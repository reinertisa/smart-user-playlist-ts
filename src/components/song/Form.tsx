import React, {useState} from 'react';

type NewSongFormProps = {
    addSong: (title: string) => void
}

export default function NewSongForm({addSong}: NewSongFormProps) {
    const [title, setTitle] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Song name:</label>
            <input
                id="name"
                type="text"
                onChange={handleTitleChange}
                value={title}
                required={true}
            />
        </form>
    )
}