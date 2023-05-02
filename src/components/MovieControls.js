import React, { useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import closeIcon from '../icons/close.svg'
import eyeIcon from '../icons/eye.svg'
import eyeOffIcon from '../icons/eye-off.svg'



export const MovieControls = ({movie, type}) => {
  const {removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched} = useContext(GlobalContext);
  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
          <button 
            className='ctrl-btn'
            onClick={() => addMovieToWatched(movie)}>
            <img className="btn-icon" src ={eyeIcon}></img>
          </button>

          <button 
            className='ctrl-btn'
            onClick={() => removeMovieFromWatchlist (movie.id)} >
            <img className="btn-icon" src ={closeIcon}></img>
          </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button
             className='ctrl-btn'
             onClick={() => moveToWatchlist (movie)}>
            <img className="btn-icon" src ={eyeOffIcon}></img>
          </button>

          <button 
            className='ctrl-btn'
            onClick={() => removeFromWatched (movie.id)}>
            <img className="btn-icon" src ={closeIcon}></img>
          </button>
        </>
      )}



    </div>

  )
}
