import type { Recipe, RecipesAPI } from "../type/recipesAPI";

export async function getRecipes(name:string,limit:string) {
  const response = await fetch(
    `https://dummyjson.com/recipes?limit=${limit?limit:"10"}${name?`&select=${name}`:""}`
  );
  const {recipes} = (await response.json()) as RecipesAPI;
  return recipes;
}
export async function getRecipeById(id:string) {
  const response=await fetch(`https://dummyjson.com/recipes/${id}`)
  const recipe=await response.json() as Recipe
  return recipe;
}
export async function getRecipesByTags(id:string){
const response=await fetch('https://dummyjson.com/recipes/tag/Pakistani')
const {recipes}=await response.json() ;
return recipes;
}