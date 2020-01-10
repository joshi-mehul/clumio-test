import React, {Component} from "react";
import {connect} from "react-redux";
import {discoverMovies, genreMovies} from '../store/reducer'
import "./Movies.scss";
import MovieCard from "../Components/MovieCard/MovieCard";

class Movies extends Component {
    componentDidMount() {
        this.props.onGetMovies();
        this.props.onGetGenreMovies();
    }

    render() {
        const { movies, genre } = this.props;
        console.log(movies);
        return (
            <div className="movies">
                { movies && movies.map((movie) => (<MovieCard key={movie.id} movie={movie} genre={genre}/>))}
            </div>
        );
    }
}

const mapStateToProps = ({movies, genre}) => {
    return {movies, genre};
};

const mapDispachToProps = dispatch => {
    return {
        onGetMovies: (filters) => dispatch(discoverMovies(filters)),
        onGetGenreMovies: () => dispatch(genreMovies()),
    };
};
export default connect(
    mapStateToProps,
    mapDispachToProps
)(Movies);
