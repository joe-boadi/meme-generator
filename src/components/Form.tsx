
const Form = () => {
    return (
        <div className="flex m-auto p-7 text-center">
            <input type="text" placeholder="Top text" className="flex p-7 m-4"/>
            <input type="text" placeholder="Bottom text" className="flex p-7 m-4"/>
            <button type="button" className="btn w-4/5"> Generate meme</button>
        </div>
    )
}

export default Form;