export default function FilterButton({ label, current, onClick}) {
  return (
    <button onClick={onClick} className="text-sm md:text-[2vw] xl:text-[2vw] 2xl:text-[1.8vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase flex items-center">
      <span className="w-[1.6vw] h-[1.6vw] border border-black text-[1vw] flex items-center justify-center leading-none mr-[0.5vw]">
        {label == current && (
          <svg className="w-[1vw] fill-current stroke-current" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m11.988 10.76.354-.353-.354-.353-2.94-2.94 3.276-3.276.353-.353-.353-.354-1.192-1.191-.353-.354-.354.354L7.15 5.215l-2.94-2.94-.354-.353-.353.353L2.258 3.52l-.354.354.354.353 2.94 2.94-3.258 3.258-.354.354.354.353 1.191 1.192.354.353.353-.353 3.258-3.258 2.94 2.94.354.353.353-.354 1.245-1.244Z" /></svg>
        )}
      </span>
      {label}
    </button>
  )
}