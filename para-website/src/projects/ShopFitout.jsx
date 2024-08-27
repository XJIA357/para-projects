import WhiteButton from "../tools/WhiteButton";

export default function ShopFitout(){
    return (
        <div className="container mx-auto p-10">
            <p className="text-gray-500 text-left
            text-2xl md:text-4xl xl:text-6xl">Shop</p>
            <p className="text-black font-bold text-left pb-10
            text-2xl md:text-4xl xl:text-6xl">Fitting</p>
            <div className="border-t-2 flex flex-col py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <img src="/projects/shop-fitout-one.jpg"></img>
                    <img src="/projects/shop-fitout-two.jpg"></img>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
                    <img src="/projects/shop-fitout-three.jpg"></img>
                    <img src="/projects/shop-fitout-four.jpg"></img>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
                    <img src="/projects/shop-fitout-nine.jpg"></img>
                    <img src="/projects/shop-fitout-ten.jpg"></img>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
                    <img src="/projects/shop-fitout-five.jpg"></img>
                    <img src="/projects/shop-fitout-six.jpg"></img>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
                    <img src="/projects/shop-fitout-seven.jpg"></img>
                    <img src="/projects/shop-fitout-eight.jpg"></img>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
                    <img src="/projects/shop-fitout-eleven.jpg"></img>
                    <img src="/projects/shop-fitout-twelve.jpg"></img>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
                    <img src="/projects/shop-fitout-thirteen.jpg"></img>
                </div>
                <div className="flex justify-start w-full py-10">
                    <a href="/projects">
                        <WhiteButton buttonText={"← Back"} />
                    </a>
                </div>
            </div>
        </div>
    );
}