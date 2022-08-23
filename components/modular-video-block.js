export default function ModularVideoBlock({ video }) {
  return (
    <div className="grid grid-cols-9 p-3">
      <div className="col-span-7 col-start-2">
        <video 
          controls={true}
          preload="metadata"
          className="w-full h-[44vw] relative z-10 block object-cover object-center"
        >
          <source src={video} type="video/mp4"/>
          Sorry. Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}