import React from "react";

export default function Preference({handleChange}) {
  return (
    <div className="form--section" id="preference">
      <h2>Preference</h2>
      <h4>Your Preference</h4>
      <div className="options">
        <div>
          <input type="checkbox" id="pref-movies" name="preference" onChange={handleChange} value="movies"/>
          <label htmlFor="pref-movies">Movies</label>
        </div>
        <div>
          <input type="checkbox" id="pref-music" name="preference" onChange={handleChange} value="music"/>
          <label htmlFor="pref-music">Music</label>
        </div>
        <div>
          <input type="checkbox" id="pref-sports" name="preference" onChange={handleChange} value="sports" />
          <label htmlFor="pref-sports">Sports</label>
        </div>
      </div>
    </div>
  );
}
