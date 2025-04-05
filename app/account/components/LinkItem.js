import { MdDragIndicator } from "react-icons/md";
import ShareLinkButton from "@/app/account/components/ShareLinkButton";

const LinkItem = ({ link, index, draggingIndex, handleDragStart, handleDragOver, handleDragEnd }) => {
  return (
    <div
      key={link.id}
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={(e) => handleDragOver(e, index)}
      onDragEnd={handleDragEnd}
      className={`w-full h-40 border-2 rounded-lg mt-4 flex items-center transition-all duration-150 ${
        draggingIndex === index ? "border-purple-500 bg-purple-50" : "border-gray-200"
      }`}
    >
      <div className="h-full flex items-center justify-center border-r-2 border-gray-100">
        <MdDragIndicator className="w-8 h-8 text-gray-700 mx-2 cursor-move" />
      </div>
      <div className="w-full h-full flex flex-col justify-start items-start">
        <div className="p-4 h-28 text-gray-800">
          <div className="text-2xl font-bold mb-3">{link.title}</div>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 text-xl"
          >
            {link.url}
          </a>
        </div>
        <div className="h-12 w-full flex justify-between items-center px-2 gap-2 border-t-2 border-gray-100">
          <ShareLinkButton />
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
