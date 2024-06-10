import Meme from "../assets/meme.jpg"
// import styles from "../App.css";

const NavBar = () => {
    return (
        <div>
            <nav className={`fixed navbar p-7 items-center justify-between bg-lime-400`}>
                <div>
                    <img 
                        className={``}
                        src={Meme} 
                        alt="A Meme icon" 
                        width={70}
                        height={70}
                    />
                    <h1 className="text-3xl flex">Meme Generator</h1>
                </div>
            </nav>
        </div>
    )
}

export default NavBar