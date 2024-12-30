import {useEffect, useState} from "preact/hooks";
import type {Recipe} from "@/type/recipesAPI.ts";

export function useSearchRecipe({recipe}:{recipe:Recipe[]}) {
    const [recipes, setRecipes] = useState<Recipe[]>();
    useEffect(() => {
        setRecipes(recipe);
    }, []);

function searchRecipe({filterRecipe,allRecipes}:{filterRecipe:{name:string,tag:string},allRecipes:Recipe[]}) {
    let filteredProducts: Recipe[] = [...allRecipes];
    if (filterRecipe.tag !== "All") {
        filteredProducts = filteredProducts.filter((product: Recipe) =>
            product.tags.includes(filterRecipe.tag)
        );
    }
    if (filterRecipe.name !== "") {
        filteredProducts = filteredProducts.filter((product: Recipe) =>
            product.name.toLowerCase().includes(filterRecipe.name.toLowerCase())
        );
    }
    if(filterRecipe.tag === "All"&& filterRecipe.name==="") {
        return setRecipes([...recipe]);
    }
    setRecipes([...filteredProducts]);
}
return [recipes, searchRecipe] as [Recipe[],({filterRecipe,allRecipes}:{filterRecipe:{name:string,tag:string},allRecipes:Recipe[]})=>void];
}