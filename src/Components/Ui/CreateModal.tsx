import { CrossIcon } from "../../Icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./InputBox";

export function CreateContentModal({ open, onClose }) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
      />

      {/* Modal */}
      <div className="relative z-10 bg-white text-black p-6 rounded-md">
        <div className="flex justify-end">
            <CrossIcon size={"lg"}/>
        </div>

        <div className="flex flex-col gap-4 mt-6">
            <Input type={"text"} placeholder="Enter the title" className="border rounded-md pl-2 text-md focus:border-white" />
            <Input type={"text"} placeholder="Enter the title" className="border rounded-md pl-2 text-md" />
            <Button varient="primary" size="md" text="Add Content" />

        </div>
      </div>

    </div>
  );
}
