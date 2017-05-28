import React from 'react';

import './Searchresults.css';


export default (props) => {

    return (
        <div className="searchresults">
            <div className="fluid-wrapper">
                {props.results.length > 0 && props.results.map(result => {

                    return (
                        <div key={result.id} className="result">
                            <a href={result.bitly_url}>
                                <img src={result.images.fixed_height.url} />
                            </a>
                        </div>
                    );


                })}
            </div>

            {props.results.length < 1 && (
                <div className="no-results">No Results. Start searching!</div>
            )}
        </div>
    )


}
