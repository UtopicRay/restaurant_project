// To parse this data:
//
//   import { Convert, RecipesAPI } from "./file";
//
//   const recipesAPI = Convert.toRecipesAPI(json);

export type RecipesAPI = {
    recipes: Recipe[];
    total:   number;
    skip:    number;
    limit:   number;
}

export type Recipe = {
    id:                 number;
    name:               string;
    ingredients:        string[];
    instructions:       string[];
    prepTimeMinutes:    number;
    cookTimeMinutes:    number;
    servings:           number;
    difficulty:         string;
    cuisine:            string;
    caloriesPerServing: number;
    tags:               string[];
    userId:             number;
    image:              string;
    rating:             number;
    reviewCount:        number;
    mealType:           string[];
}

// Converts JSON strings to/from your types
export class Convert {
    public static toRecipesAPI(json: string): RecipesAPI {
        return JSON.parse(json);
    }

    public static recipesAPIToJson(value: RecipesAPI): string {
        return JSON.stringify(value);
    }
}
