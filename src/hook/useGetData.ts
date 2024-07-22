import { useState } from "preact/hooks";

export function useGetData() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  async function getRecipes({ name, limit }: { name: string; limit: string }) {
    await fetch(
      `https://dummyjson.com/recipes?limit=${limit ? limit : "10"}${
        name ? `&select=${name},image` : ",image"
      }`
    )
      .then((response) => response.json())
      .then((data) => setData(data)).finally(()=>setIsLoading(false)).catch((error:Error)=>setError(error.message()));
  }
  return { data,isLoading,error,getRecipes };
}
