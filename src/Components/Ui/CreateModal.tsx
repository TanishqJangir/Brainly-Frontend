import axios from "axios";
import { CrossIcon } from "../../Icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./InputBox";
import { useRef, useState } from "react";
import { Backend_URL } from "../../utils/config";

interface ModalProps {
  open: boolean,
  onClose: () => void
}

const contentType = {
  Youtube: "youtube",
  X: "x",
  Document: "document"
}


export function CreateContentModal(props: ModalProps) {

  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState("");


  
  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const body = bodyRef.current?.value;


    try {
      await axios.post(Backend_URL + "/api/v1/content", {
        title: title,
        link: link,
        body: body,
        type: type
      }, {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      })

      props.onClose();

    } catch (error) {
      console.error("Failed to add Content", error);
    }



  }





  if (!props.open) return null;
  return (
    <div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex justify-center items-center">

        <div className="relative z-10 bg-white text-black p-6 rounded-md">
          <div className="flex justify-end">
            <CrossIcon size={"lg"} onClick={props.onClose} />
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <Input type={"text"} reference={titleRef} placeholder="Enter the Title" className="border rounded-md pl-2 text-md focus:outline-none" />
            <Input type={"text"} reference={linkRef} placeholder="Enter the Link" className="border rounded-md pl-2 text-md focus:outline-none" />
            <textarea placeholder="Describe about the title..." className="border rounded-md pl-2 text-md focus:outline-none" />
            <select className="px-1 py-2 rounded-md border focus:outline-none" value={type} onChange={(e) => setType(e.target.value)}>
              <option disabled selected value={""}>--Select type--</option>
              <option value={contentType.Youtube}>Youtube</option>
              <option value={contentType.X}>X</option>
              <option value={contentType.Document}>Document</option>
            </select>

            <Button varient="primary" size="md" text="Submit" onClick={addContent} />
          </div>
        </div>

      </div>
    </div>
  );
}
