import React from 'react'
import A from './usecontextex/A'
export const InfoContext = React.createContext()

const Home = () => {
    const [info, setInfo] = React.useState("Context Use")
  return (
    <div>
        <h2>Home Component</h2>
        <InfoContext.Provider value={{info, setInfo}}>
            <A />
        </InfoContext.Provider>
    </div>
  )
}

export default Home