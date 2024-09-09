export default function Drawer({ refLists, currentRefIndex, scroller }) {
  return (
    <div className="z-50 drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          className="fixed flex flex-col items-center justify-center w-10 align-middle transition-all duration-150 bg-white rounded-md cursor-pointer md:hidden aspect-square hover:shadow-md active:scale-95 active:shadow-lg top-3 right-8"
          htmlFor="my-drawer"
        >
          <i className="ri-menu-4-line text-slate-800"></i>
        </label>
      </div>
      <div className="z-50 drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="flex flex-col w-7/12 min-h-full gap-3 p-4 menu secondary-background text-base-content">
          {refLists?.map((item, index) => (
            <li
              key={index}
              className={`p-3 text-lg rounded-md cursor-pointer ${
                currentRefIndex === index
                  ? "bg-gradient-to-r from-sky-200 to-white"
                  : ""
              }`}
              onClick={() => scroller(item.ref)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
