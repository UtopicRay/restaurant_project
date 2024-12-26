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
  return await response.json() as Recipe

}
export async function getRecipesByTags(id:string){
const response=await fetch(`https://dummyjson.com/recipes/tag/${id}`)
const {recipes}=await response.json() ;
return recipes;
}
export async function getAllRecipes(){
  const response=await fetch('https://dummyjson.com/recipes?limit=50');
    const {recipes}=await response.json() as RecipesAPI;
    return recipes
}
export async function getAllTagsRecipes(){
  const response=await fetch('https://dummyjson.com/recipes/tags');
    return await response.json() as string[];

}