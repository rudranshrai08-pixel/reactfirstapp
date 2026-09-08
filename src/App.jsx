import React from 'react'
import Body from './component/body/body.jsx'
import Footer from './component/footer/footer.jsx'
import { Routes, Route } from 'react-router-dom'
import RegistrationForm from './component/body/RegistrationForm.jsx'
import Error404 from './component/Error404.jsx'
import Product from './component/Product.jsx'

const App = () => {
    return (
        <div className="container mt-5">

            <Routes>
                <Route path="/" element={<Body />} />

                <Route
                    path="/register"
                    element={<RegistrationForm />}
                />

                <Route
                    path="/product/:id"
                    element={<Product />}
                />

                <Route
                    path="*"
                    element={<Error404 />}
                />
            </Routes>

            <Footer />

        </div>
    )
}

export default App