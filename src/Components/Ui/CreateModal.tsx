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
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [type, setType] = useState("");



  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const body = bodyRef.current?.value;


    if (!title || !link || !type) {
      alert("Title, Link and Types are required");
      return;
    }

    try {
      setLoading(true);
      await axios.post(Backend_URL + "/api/v1/content", {
        title: title,
        link: link,
        body: body,
        type: type,
      }, {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      })

      setLoading(false);
      props.onClose();

    } catch (error: unknown) {
      console.error("FULL ERROR:", error);

      if (axios.isAxiosError(error)) {
        console.error("STATUS:", error.response?.status);
        console.error("DATA:", error.response?.data);
        alert(error.response?.data?.message || "Request failed");
      } else {
        console.error("UNKNOWN ERROR:", error);
        alert("Unexpected error occurred");
      }
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
            <textarea ref={bodyRef} placeholder="Describe about the title..." className="border rounded-md pl-2 text-md focus:outline-none" />
            <select className="px-1 py-2 rounded-md border focus:outline-none" value={type} onChange={(e) => setType(e.target.value)}>
              <option disabled value={""}>--Select type--</option>
              <option value={contentType.Youtube}>Youtube</option>
              <option value={contentType.X}>X</option>
              <option value={contentType.Document}>Document</option>
            </select>


            <Button varient="primary" size="md" text="Submit" loading={loading} onClick={addContent} />
          </div>
        </div>

      </div>
    </div>
  );
}
