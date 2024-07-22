import type { RecipesAPI } from "../type/recipesAPI";

export async function getRecipes(name:string,limit:string) {
  const response = await fetch(
    `https://dummyjson.com/recipes?limit=${limit?limit:"10"}${name?`&select=${name},image`:""}`
  );
  const {recipes} = (await response.json()) as RecipesAPI;
  return recipes;
}
