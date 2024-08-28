
import type {Images} from "../type/recipesAPI.ts";

function Carousel({images}:{images:Images[]} ) {
    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map(img => (
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img.img.src}
                               class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                               alt={img.alt}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Carousel;