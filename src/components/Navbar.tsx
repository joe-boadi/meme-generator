import Meme from "../assets/meme.jpg"

const NavBar = () => {
    return (
        <div>
            <nav className={``}>
                <img 
                className={``}
                 src={Meme} 
                 alt="A Meme icon" 
                 />
                <h1>Meme Generate</h1>
                <h2></h2>
            </nav>
        </div>
    )
}

export default NavBar