import { Avatar,Modal,Button } from "keep-react";
import { useState } from "react";
import { BsPostcardHeart } from "react-icons/bs";
import DragandDropFile from "../DragandDropFile/DragandDropFile";

const PostInput = () => {
    const [showModal, setShowModal] = useState(false);
    const onClick = () => {
      setShowModal(!showModal);
    };
  return (
    <div className=" p-5 flex items-center justify-center gap-3">
        <div>
        <Avatar shape="circle" size="md" img="" />
        </div>
        <div className="relative mt-2  w-full shadow-sm rounded-full">
            <input
             onClick={onClick}
              type="text"
              name="price"
              className="block w-full rounded-full h-12 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Write Some thing"
            />
        </div>
        
    <Modal
        icon={<BsPostcardHeart size={28} color="#1B4DFF" />}
        size="2xl"
        show={showModal}
        position="bottom-center"
      >
        <Modal.Header className="text-center">Create post</Modal.Header>
        <hr />
        <Modal.Body>
          <div className="space-y-6">
          <div className=" mt-2  w-full shadow-sm rounded-full">
            
            <textarea className="block w-full rounded-3xl h-32 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                
            </textarea>
        </div>
          </div>
          <DragandDropFile></DragandDropFile>
        </Modal.Body>
        <Modal.Footer className="flex justify-center items-center mt-4">
          <Button type="outlineGray" onClick={onClick}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClick}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
};

export default PostInput;
