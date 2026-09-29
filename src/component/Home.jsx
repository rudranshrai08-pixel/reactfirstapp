import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
      .catch(error => alert(error.message))
  }, [])

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">List Of Recipes</h2>

      <table className="table table-bordered table-striped table-hover">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Instructions</th>
            <th>Ingredients</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {recipes.map((row) => (
            <tr key={row.id}>

              <td>{row.id}</td>

              <td>{row.name}</td>

              <td>{row.instructions}</td>

              <td>
                {row.ingredients.join(", ")}
              </td>

              <td>
                <img
                  src={row.image}
                  alt={row.name}
                  width="100"
                />
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}

export default Home
// import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

// const Home = () => {
//   const [quotes, setQuotes] = useState([])

//   useEffect(() => {
//     fetch("https://dummyjson.com/quotes")
//       .then(response => response.json())
//       .then(data => setQuotes(data.quotes))
//       .catch(error => alert(error.message))
//   }, [])

//   return (
//     <div className="container py-5">

//       <div className="text-center mb-4">
//         <h2 className="fw-bold text-primary">List Of Quotes</h2>
//         <p className="text-muted">Explore some inspirational quotes</p>
//       </div>

//       <div className="card shadow">
//         <div className="card-body">
//           <div className="table-responsive">
//             <table className="table table-bordered table-striped table-hover align-middle mb-0">

//               <thead className="table-dark">
//                 <tr>
//                   <th>ID</th>
//                   <th>Quote</th>
//                   <th>Author</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {quotes.map((row) => (
//                   <tr key={row.id}>
//                     <td>{row.id}</td>
//                     <td>{row.quote}</td>
//                     <td className="fw-semibold">{row.author}</td>
//                   </tr>
//                 ))}
//               </tbody>

//             </table>
//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default Home