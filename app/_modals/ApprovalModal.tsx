import Image from "next/image";
import { ChangeEvent, useState } from "react";

const ApprovalModal = () => {
  const [src, setSrc] = useState<any>()
  function convert(e:  ChangeEvent<HTMLInputElement>) {

    var reader = new FileReader();
    if(e.target.files)
        reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      setSrc(reader.result); //base64encoded string
    };
}
  return (
    <div className="absolute inset-0 z-[101] flex-center backdrop-blur-[2px]">
      <div className="h-1/2 w-1/2 flex flex-col">
        <h3>Upload a proof!</h3>
        <input onChange={e => convert(e)} type="file" accept="image/png, image/jpeg, image/jpg" name="" id="" />
        <button>Request for Approval</button>
        {src && <Image src={src} alt="img" height={300} width={300}/>}
      </div>
    </div>
  )
}

export default ApprovalModal