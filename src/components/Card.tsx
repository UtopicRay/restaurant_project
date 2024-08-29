import {inView} from "motion";
import {useEffect} from "preact/hooks";

function Card({
  img,
  name,
  description,
  id
}: {
  img: string;
  name: string;
  description: string[];
  id:string
}) {
  useEffect(() => {
    inView("#card",(card)=>{
      card.target.classList.add('animate-fade-up');
      card.target.classList.add('animate-duration-400');
    })
  }, []);

  return (
    <div id="card" class="p-4 border-orange-400 border-[1px] rounded-lg max-w-[300px]">
      <img src={img} class="max-w-full h-auto rounded-lg" />
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
        <a
          href={`/recipes/${id}`}
          class="w-full my-5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Description
        </a>
      </div>
    </div>
  );
}
export default Card;
