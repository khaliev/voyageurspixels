// import React from "react";

// export default function AddShots() {
//   // const [originalTitle, setOriginalTitle] = useState("");
//   // const [originalShot, setOriginalShot] = useState("");
//   // const [thumbnail, setThumbnail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const handleAddShots = () => {
//       fetch(`${import.meta.env.VITE_BACKEND_URL}/${selectedType}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ content: setOriginalShot }),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Error when adding a shot");
//           }
//           return response.json();
//         })
//         .then((data) => {
//           if (selectedType === "shots") {
//             setOriginalShot((prevShots) => [...prevShots, data]);
//           }
//           setOriginalShot("");
//           setShowAddForm(false);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     };
//   };

//   return (
//     <>
//       <h2>Add some new shots</h2>
//       <form className="addShots" onSubmit={handleSubmit}>
//         <>
//           <label htmlFor="originalTitle">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={originalTitle}
//             onChange={(e) => setOriginalTitle(e.target.value)}
//           />
//         </>
//         <>
//           <label htmlFor="originalShot">Photo:</label>
//           <input
//             type="text"
//             id="originalShot"
//             value={originalShot}
//             onChange={(e) => setOriginalShot(e.target.value)}
//           />
//         </>
//         <>
//           <label htmlFor="thumbnail">Preview:</label>
//           <input
//             type="text"
//             id="thumbnail"
//             value={thumbnail}
//             onChange={(e) => setThumbnail(e.target.value)}
//           />
//         </>
//         <>
//           <button type="submit">Submit</button>
//         </>
//       </form>
//     </>
//   );
// }
