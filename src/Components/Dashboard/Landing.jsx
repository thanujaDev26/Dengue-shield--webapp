export default function Landing() {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center bg-transparent min-h-1/2 m-0 w-full p-0">
                <div className="md:w-1/2 p-12 text-center md:text-left">
                    {/* <h2 className="text-4xl font-bold text-gray-800 leading-tight">Dashboard Overview</h2> */}
                </div>

                <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent md:block hidden"></div>
                    <img src="images/Dashboard_main.jpeg" alt="Dashboard Illustration" className="w-full h-auto object-cover"/>                    
                </div>
            </div>
        </div>
    );
}