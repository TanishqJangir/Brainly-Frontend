import { CrossIcon } from "../../Icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./InputBox";

interface ModalProps{
  open : boolean,
  onClose : () => void
}

export function CreateContentModal( props: ModalProps ) {
  if (!props.open) return null;
  return (
    <div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex justify-center items-center">

        <div className="relative z-10 bg-white text-black p-6 rounded-md">
          <div className="flex justify-end">
            <CrossIcon size={"lg"} onClick={props.onClose}/>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <Input type={"text"} placeholder="Enter the Title" className="border rounded-md pl-2 text-md focus:border-white" onChange={() => console.log("Hello")} />
            <Input type={"text"} placeholder="Enter the Link" className="border rounded-md pl-2 text-md" onChange={() => console.log("Hello2")} />
            <Button varient="primary" size="md" text="Submit" />
          </div>
        </div>

      </div>
    </div>
  );
}
