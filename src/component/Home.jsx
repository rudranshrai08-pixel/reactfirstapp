import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then(response => response.json())
      .then(data => setQuotes(data.quotes))
      .catch(error => alert(error.message))
  }, [])

  return (
    <div className="container py-5">

      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">List Of Quotes</h2>
        <p className="text-muted">Explore some inspirational quotes</p>
      </div>

      <div className="card shadow">
        <div className="card-body">

          <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover align-middle mb-0">

              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Quote</th>
                  <th>Author</th>
                </tr>
              </thead>

              <tbody>
                {quotes.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.quote}</td>
                    <td className="fw-semibold">{row.author}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home