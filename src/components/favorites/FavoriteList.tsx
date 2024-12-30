import type {Recipe} from "@/type/recipesAPI.ts";
import Card from "@/components/Card.tsx";
import {clearFavorites} from "@/services/localStorage.ts";
import {useSaveLocalStorage} from "@/hook/useSaveLocalStorage.ts";


export default function FavoriteList() {
    const [favorites] = useSaveLocalStorage()

    return (
        <section className='flex flex-col justify-center items-center py-2 px-2 md:px-3'>
            {favorites.length>0 ? (
                <>
                    <div className="flex flex-wrap justify-center gap-3 my-2 place-items-center">
                        {favorites.map((recipe: Recipe) => (
                            <Card
                                key={recipe.id}
                                name={recipe.name}
                                img={recipe.image}
                                description={recipe.tags}
                                id={recipe.id}
                                inFavorite={true}
                            />
                        ))}
                    </div>
                    <button className="bg-red-300 px-4 py-3 rounded" onClick={clearFavorites}>
                        Clear Recipes
                    </button>
                </>
            ) : (<h2 className='text-3xl mt-4 font-semibold text-center'>You dont add your favorites recipes yet</h2>)}

        </section>
    )
}