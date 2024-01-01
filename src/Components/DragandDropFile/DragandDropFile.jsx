import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";


import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import { FaImages } from "react-icons/fa";
const uploader = Uploader({
    apiKey: "free" // Get production API keys from Bytescale
  });
  
  // Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
  const options = { multi: true };
const DragandDropFile = () => {
    // const fileTypes = ["JPG", "PNG", "GIF"];
    // const [file, setFile] = useState(null);
    // const handleChange = (file) => {
    //   setFile(file);
    // };
    return (
        <div>
             {/* <FileUploader handleChange={handleChange} name="file" types={fileTypes} /> */}


             <UploadButton uploader={uploader}
                options={options}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
    {({onClick}) =>
      <button onClick={onClick}>
        <FaImages size={30}/>
      </button>
    }
  </UploadButton>
        </div>
    );
};

export default DragandDropFile;