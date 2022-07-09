import React from 'react'

function MainContent() {
  return (
    <main>
        <div className="main-head">
            <form className="search-box">
                <input 
                    type="search"
                    placeholder="Enter MAL username..."
                    required
                />
            </form>
        </div>
    </main>
  )
}

export default MainContent