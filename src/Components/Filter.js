import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterDresses } from "../actions/dressActions";

export default function Filter() {
  const dispatch = useDispatch();

  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");

  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3 w-1">
          <input
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            value={searchkey}
            type="text"
            className="form-control w-1 mt-2"
            placeholder="search pizzas"
          />
        </div>
        <div className="col-md-3 w-1">
          <select
            className="form-control w-1 mt-2"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="veg">veg</option>
            <option value="non-veg">non-veg</option>
            
          </select>
        </div>
        <div className="col-md-3 w-1">
          <button
            className="btn w-1 mt-2"
            onClick={() => {
              dispatch(filterDresses(searchkey, category));
            }}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
