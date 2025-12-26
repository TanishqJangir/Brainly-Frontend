import { DeleteIcon } from "../../Icons/DeleteIcon"
import { DocumentIcon } from "../../Icons/DocumentIcon"
import { ShareIcon } from "../../Icons/shareIcon"
// import { VideoIcon } from "../../Icons/VideoIcon"
// import { XIcon } from "../../Icons/XIcon"
import { getYouTubeVideoId } from "../../utils/getYoutubeVideoId"

interface CardProps {
  title: string,
  link: string,
  type: "document" | "youtube" | "tweet",
}

// const iconSizeVarient = {
//   "sm": "size-2",
//   "md": "size-4",
//   "lg": "size-6",
// }


// const linkType = {
//   "document": <DocumentIcon size={"sm"} />,
//   "youtube": <VideoIcon size={"sm"} />,
//   "tweet": <XIcon size={"sm"} />

// }


const cardDefaultStyles = "shadow-xl max-w-xs bg-white p-3 rounded-md border border-gray-300 h-[320px] flex flex-col"

export const Card = (props: CardProps) => {
  return (
    <div className={cardDefaultStyles}>
      <div className="flex justify-between p-2 ">
        <div className="flex items-center gap-4 text-gray-600">
          <DocumentIcon size={"md"} /> 
          <h1 className="text-2xl font-[640] text-black">{props.title}</h1>
        </div>
        <div className="flex items-center justify-end gap-4 text-gray-600">
          <ShareIcon size={"md"} />
          <DeleteIcon size={"md"} />
        </div>
      </div>


      <div className="flex-1 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {props.type === "youtube" && <iframe className="max-w-full aspect-video rounded-xl"
          src={`https://www.youtube.com/embed/${getYouTubeVideoId(props.link)}`}
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>}


        {props.type === "tweet" && <blockquote className="twitter-tweet w-full rounded-xl">
          <a href={props.link.replace("x.com", "twitter.com")}></a>
        </blockquote>}


          {/* its not working, i don't know why */}
        {/* {props.type === "document" && <iframe src="https://awesome-bus-ce4.notion.site/ebd//2d44d4de638f81969bd6e778dbd2a85f"
          className="h-64 w-full rounded-xl" height="600" frameBorder="0" allowFullScreen />} */}
      </div>

    </div>
  )
}
