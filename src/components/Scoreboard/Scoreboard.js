import React from 'react';
import '../TextContainer/TextContainer.css';

const Scoreboard = ({ scores }) => (
  <div className="textContainer">
    {
      scores
        ? (
          <div>
            <div className="activeContainer">
              <h2>

                {
                    for( var scores in scores ) {
                 (<div key={scores[i]} className="activeItem">
                    {scores[i]}
                  </div>
                 )}
                }
              </h2>
              {/* <h2>
                {scores.map(({score}) => (
                  <div key={score} className="activeItem">
                    {score}
                  </div>
                ))}
              </h2> */}
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default Scoreboard;