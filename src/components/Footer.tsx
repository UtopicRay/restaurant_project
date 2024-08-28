import {useRef} from "preact/hooks";
import emailjs from "@emailjs/browser";

function Footer() {
    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs
            .sendForm("service_yen6efm", "template_f3b2eq4", form.current, {
                publicKey: "aKSBVKOiowvq4CCQk",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };
    // @ts-ignore
    return (
        <footer id="contact"
                className="w-full p-4 bg-green-900 border-t border-gray-200 shadow  md:p-6 md:pt-10 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-300 mt-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 place-items-center my-2 ">
                <div className="flex flex-col">
                    <h1 className="text-white text-4xl font-bold text-left"> Astro <span
                        className="text-orange-400">Restuarant</span></h1>
                    <p className="text-white lg:max-w-[80%] max-w-full mt-3">Welcome to AstroRestuarant, where celestial
                        flavors collide with earthly delights. Our cosmic menu features interstellar dishes crafted from
                        the finest ingredients across the galaxy. From stardust-infused pastas to nebula-inspired
                        desserts, every bite is an otherworldly experience. Join us under the starlit canopy and let
                        your taste buds explore the universe!” 🌟🚀🪐</p>
                </div>
                <form className="w-full md:my-0 my-8" ref={form}>
                    <label htmlFor="email"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round"
                                 className="icon icon-tabler icons-tabler-outline icon-tabler-mail">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/>
                                <path d="M3 7l9 6l9 -6"/>
                            </svg>
                        </div>
                        <input type="search" id="email" name="from_email"
                               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="astroRestaurant@gmail.com" required/>
                        <button type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={sendEmail}>Contact
                            us!
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex justify-between">
                <h1 className="text-white mt-4 font-semibold">Proyecto propio</h1>
                <div className="text-3xl gap-4 flex justify-center items-center glass text-white p-2 "><a
                    href="https://github.com/UtopicRay">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                         className="hover:scale-110 transition-all duration-200" height="1em" width="1em"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                </a><a
                    href="https://www.linkedin.com/in/ray-rendon-mesa-1948b7260?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWGSERolORaigToBCXdkJaQ%3D%3D">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                         className="hover:scale-110 transition-all duration-200" height="1em" width="1em"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                    </svg>
                </a></div>
            </div>
        </footer>

    )
}

export default Footer