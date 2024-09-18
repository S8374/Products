import { useNavigation } from "react-router-dom";

const Maker = () => {
	const nav = useNavigation()
    return (
        <div>
              {
                         nav.state === 'loading' ? (
							<div className="text-center">
              <div
                className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
              ></div>
              <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
            </div>
						 ) : (
							<section className="dark:bg-gray-100 dark:text-gray-800">
							<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
								<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
									<h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
										<span className="dark:text-violet-600">senectus</span>erat pharetra
									</h1>
									<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
										<br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
									</p>
									<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
										<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</a>
										<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
									</div>
								</div>
								<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
									<img src="https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/452539541_1010643584042718_6658065231707619911_n.jpg?stp=dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=kzlVHx-I2H4Q7kNvgEkpLZ1&_nc_ht=scontent.fdac13-1.fna&oh=00_AYCbM_PApApfFObmg-Xt6iS06GccIasxdoEuFQXUBrnfWQ&oe=66F09D50" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
								</div>
							</div>
						</section>
						 )
			  }
  
        </div>
    );
};

export default Maker;