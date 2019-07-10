import React from 'react';

const Denomination = ({ results }) => {
  // console.log(results);s
  const rupiahList = results.length
    ? results.map(v => {
        const keys = Object.keys(v)[0];
        const values = Object.values(v)[0];
        if (values !== 0)
          return (
            <div className="col-sm-4 m-2 p-2 rounded-pill text-center denomination--mod" key={keys}>
              {keys === 'left' ? (
                <span>
                  Rp {values} {keys}over
                </span>
              ) : (
                <span>
                  Rp {keys} x {values}
                </span>
              )}
            </div>
          );
      })
    : null;

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-sm-12 denominations__list">
        <div className="row justify-content-around">{rupiahList}</div>
      </div>
    </div>
  );
};

export default Denomination;
