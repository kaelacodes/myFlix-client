import {useState} from "react";
import {MovieView} from "../movie-view/movie-view";
import {MovieCard} from "../movie-card/movie-card";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            "genre": {
                "genre_name": "Adventure",
                "genre_description": "A common theme of adventure films is of characters leaving their home or place of comfort and going to fulfill a goal, embarking on travels, quests, treasure hunts, heroic journeys; and explorations or searches for the unknown."
            },
            "director": {
                "name": "Wes Anderson",
                "bio": "A common theme of adventure films is of characters leaving their home or place of comfort and going to fulfill a goal, embarking on travels, quests, treasure hunts, heroic journeys; and explorations or searches for the unknown.",
                "birth_year": "1970-01-01T00:00:01.969Z",
                "death_year": null
            },
            "_id": "63dc4c10d732b28eb9dff9b5",
            "title": "The Grand Budapest Hotel",
            "description": "An unconventional adaptation of writer Zweig's memoir 'The World of Yesterday' and director Wes Andersons own personal experiences. The film has it's own original story but retains the central thrus of the memoir. The Grand Budapest Hotel is the story of a writer who encounters the owner of an aging high-class hotel, and tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
            "featured": true,
            "imageUrl": "https://en.wikipedia.org/wiki/The_Grand_Budapest_Hotel#/media/File:The_Grand_Budapest_Hotel.png"
        },
        {
            "genre": {
                "genre_name": "Action",
                "genre_description": "Action is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats. The genre tends to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a dangerous villain, or a pursuit which usually concludes in victory for the hero."
            },
            "director": {
                "name": "Dan Kwan",
                "bio": "Daniel Kwan with Daniel Scheinert, collectively known as Daniels, are a duo of film directors and writers. They began their career as directors of music videos, including the popular DJ Snake promotional for the single 'Turn Down For What' (2013)",
                "birth_year": "1970-01-01T00:00:01.988Z",
                "death_year": null
            },
            "_id": "63dc49bdd732b28eb9dff9b3",
            "title": "Everything Everywhere All at Once",
            "description": "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
            "featured": true,
            "imageUrl": "https://en.wikipedia.org/wiki/Everything_Everywhere_All_at_Once#/media/File:Everything_Everywhere_All_at_Once.jpg"
        },
        {
            "genre": {
                "genre_name": "Horror",
                "genre_description": "Horror is a film genre that seeks to elicit fear or disgust in its audience for entertainment purposes. Horror films often explore dark subject matter and may deal with transgressive topics or themes. Broad elements include monsters, apocalyptic events, and religious or folk beliefs. Cinematic techniques used in horror films have been shown to provoke psychological reactions in an audience."
            },
            "director": {
                "name": "Mark Mylod",
                "bio": "Mark Mylod is a British television and film director and executive producer. He is known for his work on the television series Succession and Shameless, as well as for directing the horror-comedy film The Menu (2022).",
                "birth_year": "1970-01-01T00:00:01.965Z",
                "death_year": null
            },
            "_id": "63dc454bd732b28eb9dff9af",
            "title": "The Menu",
            "description": "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menue, with some shocking surprises.",
            "featured": true,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/en/d/db/The_Menu_%282022_film%29.jpg"
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    
    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie._id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};