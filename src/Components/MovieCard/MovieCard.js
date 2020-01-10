import React, {Component} from "react";
import {connect} from "react-redux";
import "./MovieCard.scss";

class MovieCard extends Component {
    getYear = (yearStr) => yearStr.split('-')[0];

    getGenre = () =>{
        const { genre } = this.props;
    };
    render() {
        const { movie } = this.props;
        const { getYear } = this;
        return (
            <div className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <div className="card-footer">
                    <h4>{movie.title}</h4>
                    <h4 className="sub-title">{getYear(movie.release_date)}</h4>
                </div>
            </div>
        );
    }
}

export default MovieCard;
