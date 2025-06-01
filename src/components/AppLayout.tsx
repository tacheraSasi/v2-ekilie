// import React from 'react'
import Header from './Header'

const AppLayout = ({children}) => {
  return (
    <div className='font-sans antialiased bg-gray-100 dark:bg-neutral-950'>
        <main className="min-h-screen">
            <Header/>
            {children}
        </main>
    </div>
  )
}

export default AppLayout