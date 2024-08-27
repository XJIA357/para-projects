import WhiteButton from "../tools/WhiteButton";

export default function CommercialFitout(){
    return (
        <div className="container mx-auto p-10">
            <p className="text-gray-500 text-left
            text-2xl md:text-4xl xl:text-6xl">Commercial</p>
            <p className="text-black font-bold text-left pb-10
            text-2xl md:text-4xl xl:text-6xl">Fitout</p>
            <div className="border-t-2 flex flex-col py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <img src="/projects/commercial-fitout-one.jpg"></img>
                    <img src="/projects/commercial-fitout-two.jpg"></img>
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
                    <img src="/projects/commercial-fitout-three.jpg"></img>
                    <img src="/projects/commercial-fitout-four.jpg"></img>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
                    <img src="/projects/commercial-fitout-five.jpg"></img>
                    <img src="/projects/commercial-fitout-six.jpg"></img>
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