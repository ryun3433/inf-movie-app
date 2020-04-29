import React, { useEffect } from "react";
import "./FavoritePage.css";
import Axios from "axios";

function FavoritePage() {
  useEffect(() => {
    Axios.post("/api/favorite/getFavoritedMovie", {
      userForm: localStorage.getItem("userId"),
    }).then((response) => {
      if (response.data.success) {
        console.log(response.date);
      } else {
        alert("영화 정보를 가져오는데 실패 했습니다.");
      }
    });
  }, []);

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h2> Favorite Movies </h2>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie Runtime</th>
            <td>Remove from favorites</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
