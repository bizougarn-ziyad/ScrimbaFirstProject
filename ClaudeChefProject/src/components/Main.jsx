import { useState } from "react"
export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const handleClick = (e) => {
        e.preventDefault()
        console.log(ingredients)
        let data = new FormData(e.target)
        let formatedData = data.get("ingredient")[0].toUpperCase() + data.get("ingredient").slice(1)
        setIngredients([...ingredients, formatedData])
        document.getElementById("ingredient").value = ""
        console.log(ingredients)
    }
    return (
        <main className="mainContainer max-w-[650px] min-w-[400px] m-auto mt-20">

            <form onSubmit={handleClick} className="flex justify-between gap-5">
                <input type="text" placeholder="e.g. Tomatos" name="ingredient" className="border border-zinc-200 outline-0 px-[13px] py-[9px] max-w-[500px] min-w-[400px] rounded-[5px]" id="ingredient" required />
                <button className="bg-black text-white w-40 rounded-[5px]">Add ingredient</button>
            </form>

            <div className="ingredientsContainer  mt-15 flex flex-col">
                {ingredients.length != 0 && <h1 className="text-3xl font-bold">Ingredients On hand : </h1>}
                <ul className="mt-5 text-xl px-13 flex flex-col gap-3">
                    {ingredients.map((ingredient, index) => {
                        return <li className="list-disc" key={index}>{ingredient}</li>
                    })}
                </ul>
                {ingredients.length != 0 && <form className="bg-gray-200 px-10 py-6 rounded-[10px] mt-10">
                    <h3 className="font-bold mb-1 text-[19px]">Ready for a recipe?</h3>
                    <div className="flex justify-between items-center">
                        <p className="text-[14px] text-gray-500" >Generate a recipe from your list of ingredients.</p>
                        <button className="bg-amber-600 px-4 py-2 rounded-[5px] text-white text-[14px] font-bold cursor-pointer ">Get a recipe</button>
                    </div>

                </form>}
            </div>

        </main>
    )
}