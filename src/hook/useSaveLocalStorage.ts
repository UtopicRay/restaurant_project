import {getRecipeById} from "@/services/recipes.ts";
import {useEffect, useState} from "preact/hooks";
import type {Recipe} from "@/type/recipesAPI.ts";
import {loadFavorites} from "@/services/localStorage.ts";

export function useSaveLocalStorage() {
    // Retrieve your data from locaStorage
    const [favoritesItem, setFavoritesItem] = useState<Recipe[]>(() => {
        const data = localStorage.getItem("saveData");
        return data ? JSON.parse(data) : [] as Recipe[];
    });
    useEffect(() => {
        const savedData = window.localStorage.getItem('saveData');
        if (savedData) {
            setFavoritesItem(JSON.parse(savedData) as Recipe[]);}
        },[]);

        useEffect(() => {
            window.localStorage.setItem("saveData", JSON.stringify(favoritesItem));
            console.log(loadFavorites());
        }, [favoritesItem]);

        async function setValue(id: number) {
            try {
                const favorites = loadFavorites();
                const Recipe = await getRecipeById(id.toString())
                const updateData = [...favorites, {...Recipe}];
                setFavoritesItem(updateData);
                return
            } catch (error) {
                console.log(error);
            }
        }

        return [favoritesItem, setValue] as [Recipe[], (id: number) => Promise<void>];
    }
