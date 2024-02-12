import { faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Layout({ children }) {
  let navItems = [{ name: "Home" }, { name: "Shop" }, { name: "Blissful Sleep" }, { name: "Amrit Kalash" }, { name: "Glucomap" }, { name: "Amlant" }, { name: "Dosha Quiz" }, { name: "Consult Vaidya" }]
  return (
    <>
      <nav className="bg-lotion shadow-2xl">
        <div className="mx-auto py-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">

            <div className="flex flex-1 justify-between items-center">
              <div className="flex flex-shrink-0 items-center">
                <img src="https://maharishiayurvedaindia.com/cdn/shop/files/Group_216587_2x_538d73b5-f5f6-4e28-8c75-2999cfe868f1_100x.png?v=1673676406" alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">

                  {navItems.map(({ name }, idx) =>
                    <a key={idx} href="#" className="text-zinnwaldite_Brown hover:border-b-2 border-[#ff2A00] px-3 py-2 text-base font-normal" aria-current="page">{name}</a>

                  )}

                </div>
              </div>
              <div className="flex gap-8">
                <div>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className="flex flex-col">
                  <FontAwesomeIcon icon={faUser} />

                  <button type="button" className="relative flex rounded-full text-sm" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    Login
                  </button>
                </div>
                <div className="flex flex-col">

                  <FontAwesomeIcon icon={faCartShopping} />
                  <button type="button" className="relative flex rounded-full text-sm" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    Cart
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          </div>
        </div>
      </nav>

      {children}
    </>

  )
}