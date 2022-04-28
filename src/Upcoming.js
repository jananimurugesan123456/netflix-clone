// import React, { useState, useEffect } from "react";

// function Upcoming() {
//   useEffect(() => {
//     fetchItems();
//   }, []);
//   const [data, setData] = useState([]);
//   const fetchItems = async () => {
//     const data = await fetch(`https://image.tmdb.org/t/p/w300/`);
//     const item = await data.json();
//     console.log(data.data);
//     setData(data.data);
//   };
//   return (
//     <div>
//       {data.map((data) => (
//         <h1>{data.id}</h1>
//       ))}
//     </div>
//   );
// }
// export default Upcoming;
