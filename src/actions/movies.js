export function SciFi(data) {
    return dispatch => {
      dispatch({
        type: "SCI_FI",
        payload: data
      });
    };
  }

  export function MostWatched(data) {
    return dispatch => {
      dispatch({
        type: "MOST_WATCHED",
        payload: data
      });
    };
  }

  export function TopTv(data) {
    return dispatch => {
      dispatch({
        type: "TOPTV",
        payload: data
      });
    };
  }

  export function Trending(data) {
    return dispatch => {
      dispatch({
        type: "TRENDING",
        payload: data
      });
    };
  }

  export function Search(data) {
    return dispatch => {
      dispatch({
        type: "SEARCH",
        payload: data
      });
    };
  }



export function loadContent(data) {
    return dispatch => {

        fetch(data).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch({type: 'DATA', payload: data});
        }).catch((err) => {
            console.log("There has been error");
        })


        dispatch({
            type: "SEARCH",
            payload: data
        });
    };
}