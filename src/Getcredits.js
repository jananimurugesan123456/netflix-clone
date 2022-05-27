import React from "react";
const Getcredits = ({ actorsname = [] }) => {
  return (
    <>
      <div className="actorsname">
        {actorsname.map((names) => {
          return (
            <div>
              <div className="profile">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${names.profile_path}`}
                  alt=""
                />
              </div>
              <div>{names.name}</div>
              <div>{names.character}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Getcredits;
