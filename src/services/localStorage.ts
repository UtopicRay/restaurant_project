import type {Recipe} from "@/type/recipesAPI.ts";

export function removeFavorites(id: number) {
    const favoriteList = loadFavorites();
        const updateList = favoriteList.filter((item: Recipe) => item.id !== id)
        return localStorage.setItem("saveData", JSON.stringify(updateList));

}

export function clearFavorites() {
    localStorage.setItem('saveData', '');
    window.location.reload();
}

export function loadFavorites() {
    const savedData = window.localStorage.getItem('saveData');
    if (savedData) {
        return (JSON.parse(savedData) as Recipe[]);
    }
    return [];
}