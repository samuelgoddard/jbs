export default function ModularVideoBlock({ video }) {
  return (
    <div className="grid grid-cols-9 md:p-3 border-b border-white md:border-0">
      <div className="col-span-9 md:col-span-7 md:col-start-2">
        <video 
          controls={true}
          className="w-full h-[66vw] md:h-[44vw] relative z-10 block object-cover object-center"
        >
          <source src={video} type="video/mp4"/>
          Sorry. Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}