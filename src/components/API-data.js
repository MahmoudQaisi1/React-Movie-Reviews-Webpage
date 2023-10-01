export async function getMovieId(query){
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTE2NjNiMDA4Y2FhNDRmNjhmYjZkYTdiODViOWFmNyIsInN1YiI6IjY0NzlkMDBjY2Y0YjhiMDE0MThlNjRiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R7HexTUZVk8AAN1dJ_wfUKaMbUTilzgfVbwXg8cSJSI'
    }
    };

    let id;
    let title;

    try{
        let response = await fetch(url, options);
        let list = await response.json();
        id = await list.results[0].id;
        title = await `${list.results[0].original_title} (${list.results[0].release_date.split('-')[0]})`;
        return await [id,title];
    } catch(e){
        console.log(e);
    }
}



export async function getMovieReviews(id){
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTE2NjNiMDA4Y2FhNDRmNjhmYjZkYTdiODViOWFmNyIsInN1YiI6IjY0NzlkMDBjY2Y0YjhiMDE0MThlNjRiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R7HexTUZVk8AAN1dJ_wfUKaMbUTilzgfVbwXg8cSJSI'
      }
    };
  
    try{
      let response = await fetch(url, options);
      let list = await response.json();
      return await list.results.map(review => {
        return {
          author: review.author,
          avatar: review.author_details.avatar_path,
          content: review.content,
          rating: review.author_details.rating
        }
      });
    }catch(err){
      console.error('error:' + err)
      return [];
    }
  }