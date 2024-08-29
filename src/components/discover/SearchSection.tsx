import Card from "../Card";
import Loader from "../Loader";
import Error from "../Error";
import {useState, useEffect} from "preact/hooks";
import {useGetData} from "../../hook/useGetData";
import type {Recipe} from "../../type/recipesAPI";

function SearchSection({tags}: { tags: string[] }) {
    const [products, setProducts] = useState<Recipe[]>([]);
    const {data: recipes, isLoading, error, getAllRecipes} = useGetData();
    const [filterRecipes, setFilterRecipes] = useState({
        name: "",
        tag: "",
    });
    // @ts-ignore
    useEffect(async () => {
        await getAllRecipes();
    }, []);
    useEffect(() => {
        //@ts-ignore
        setProducts(recipes);
    }, [recipes]);
    if (isLoading) {
        return <Loader></Loader>;
    }
    if (error) {
        return <Error></Error>;
    }


    function handleClick(e:any) {
        e.preventDefault();
        //@ts-ignore
        let filteredProducts:Recipe[]|undefined = [...recipes];

        if (filterRecipes.tag !== "All") {
            filteredProducts = filteredProducts.filter((product: Recipe) =>
                product.tags.includes(filterRecipes.tag)
            );
        }

        if (filterRecipes.name !== "") {
            filteredProducts = filteredProducts.filter((product: Recipe) =>
                product.name.toLowerCase().includes(filterRecipes.name.toLowerCase())
            );
        }
        //@ts-ignore
        setProducts(filteredProducts);
    }

    //@ts-ignore
    function handleChange(e) {
        e.preventDefault();
        setFilterRecipes((prevState) => ({
            ...prevState,
            name: e.target.value,
        }));
    }

    //@ts-ignore
    function handleChangeSelect(e) {
        e.preventDefault();
        setFilterRecipes((prevState) => ({
            ...prevState,
            tag: e.target.value,
        }));
    }

    return (
        <section>
            <header className="grid md:grid-cols-3 grid-cols-1 my-4 p-2">
                <h2 className="text-orange-500 font-semibold text-4xl">
                    Discover your Recipe
                </h2>

                <form class="md:col-span-2 col-span-auto mt-3">
                    <div class="flex">
                        <label
                            for="search-dropdown"
                            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Your Email
                        </label>
                        <select
                            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-1 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            onChange={handleChangeSelect}
                        >
                            {tags.map((tag) => (
                                <option value={tag}>{tag}</option>
                            ))}
                        </select>

                        <div class="relative w-full">
                            <input
                                type="search"
                                id="search-dropdown"
                                class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                placeholder="Search"
                                required
                                onChange={handleChange}
                            />
                            <button
                                class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={handleClick}
                            >
                                <svg
                                    class="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </header>
            <div className="flex flex-wrap justify-center gap-3 my-2 place-items-center">
                {products.map((recipe: Recipe) => (
                    <Card
                        name={recipe.name}
                        img={recipe.image}
                        description={recipe.tags}
                        id={recipe.id.toString()}
                    />
                ))}
            </div>
        </section>
    );
}

export default SearchSection;
