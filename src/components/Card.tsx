import {inView} from "motion";
import {useEffect, useState} from "preact/hooks";
import {useSaveLocalStorage} from "@/hook/useSaveLocalStorage.ts";
import {HeartFilledIcon} from "@/components/icons/HeartFilledIcon.tsx";
import {HeartIcon} from "@/components/icons/HeartIcon.tsx";
import type {Recipe} from "@/type/recipesAPI.ts";
import {removeFavorites} from "@/services/localStorage.ts";

export type CardProps = {
  img: string;
  name: string;
  description: string[];
  id: number;
  inFavorite?: boolean;
}

function Card({img, name, description, id, inFavorite}: CardProps) {
    const [isFavorite, setFavorite] = useState<boolean>()
    const [favorites,addInFavorites] = useSaveLocalStorage();

    useEffect(() => {
        if(favorites.some((item:Recipe) => item.id === id)){
            setFavorite(true)
        }
    }, []);


    useEffect(() => {
        inView("#card", (card) => {
            card.target.classList.add('animate-fade-up');
            card.target.classList.add('animate-duration-400');
        })
    }, []);

    async function addFavorite() {
        setFavorite(true);
      await addInFavorites(id)
    }

    function removeFavorite() {
        setFavorite(false);
        removeFavorites(id)
        if(inFavorite){
            window.location.reload();
        }
    }

  return (
      <div id="card"
           class={`p-4 border-orange-400 border-[1px] rounded-lg ${inFavorite ? "max-w-[250px]" : "max-w-[300px]"} `}>
          <img src={img} alt={`recipe_${id}_image`} class={`h-auto rounded-lg max-w-full`}/>
          <div class="mt-4 flex flex-col">
              <h1 class="text-2xl font-bold text-ellipsis overflow-hidden text-nowrap">
          {name}
        </h1>
        <div class="flex flex-wrap place-items-center">
          {description.map((info, index) => (
            <span
              class={` ${
                index > 2 ? "hidden" : "block"
              } mt-5 bg-blue-100 text-blue-800 hover:bg-blue-900 hover:text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-blue-400 border border-blue-400`}
            >
              {info}
            </span>
          ))}
        </div>
              <div className='flex w-full gap-3 items-center justify-center'>
                  <a
                      href={`/recipes/${id}`}
                      className="w-full my-5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                      Description
                  </a>
                  {isFavorite||inFavorite ? <HeartFilledIcon deleteFromFavorite={removeFavorite}/> :
                      <HeartIcon addFavorite={addFavorite}/>}
              </div>
      </div>
    </div>
  );
}

export default Card;
