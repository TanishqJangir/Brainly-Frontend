import { DeleteIcon } from "../../Icons/DeleteIcon"
import { DocumentIcon } from "../../Icons/DocumentIcon"
import { ShareIcon } from "../../Icons/shareIcon"
import { VideoIcon } from "../../Icons/VideoIcon"
import { XIcon } from "../../Icons/XIcon"


interface CardProps {
  title: string,
  link: string,
  type: "document" | "youtube" | "tweet",
}

const iconSizeVarient = {
  "sm": "size-2",
  "md": "size-4",
  "lg": "size-6",
}


const linkType = {
  "document": <DocumentIcon size={"sm"} />,
  "youtube": <VideoIcon size={"sm"} />,
  "tweet": <XIcon size={"sm"} />

}





const cardDefaultStyles = "shadow-xl max-w-xs bg-white p-3 rounded-md border border-gray-300"

export const Card = (props : CardProps) => {
  return (
    <div className={cardDefaultStyles}>
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-4 text-gray-600">
          <DocumentIcon size={"md"} />
          <h1 className="text-2xl font-[640] text-black">{props.title}</h1>
        </div>
        <div className="flex items-center justify-end gap-4 text-gray-600">
          <ShareIcon size={"md"} />
          <DeleteIcon size={"md"} />
        </div>
      </div>



      {/* <iframe className="w-full rounded-xl" src="https://www.youtube.com/embed/V_3wtXybR9I?si=JKddrRme6ED_dhKF" 
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe> */}

      {/* <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">day 1 as a spy in 
            <a href="https://twitter.com/100xSchool?ref_src=twsrc%5Etfw">@100xSchool</a> 
            <a href="https://t.co/rpo1uBiiFM">pic.twitter.com/rpo1uBiiFM</a>
            </p>
            &mdash; Ashish Mohapatra (@ssh_ashish) 
            <a href="https://twitter.com/ssh_ashish/status/2004128314613772454?ref_src=twsrc%5Etfw">
            December 25, 2025
            </a>
            </blockquote> 
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}


      <blockquote className="twitter-tweet">
        <a href={props.link}></a>
      </blockquote>


    </div>
  )
}
