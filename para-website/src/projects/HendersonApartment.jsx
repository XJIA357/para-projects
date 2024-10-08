import WhiteButton from "../tools/WhiteButton";

export default function HendersonApartment(){
    return (
        <div className="container mx-auto p-10">
            <p className="text-gray-500 text-left
            text-2xl md:text-4xl xl:text-6xl">Project</p>
            <p className="text-black font-bold text-left pb-10
            text-2xl md:text-4xl xl:text-6xl">Henderson Apartment</p>
            <div className="border-t-2 flex flex-col py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <img src="/projects/henderson-apartment-one.jpg"></img>
                    <img src="/projects/henderson-apartment-two.jpg"></img>
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
                    <img src="/projects/henderson-apartment-three.jpg"></img>
                    <img src="/projects/henderson-apartment-four.jpg"></img>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
                    <img src="/projects/henderson-apartment-five.jpg"></img>
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