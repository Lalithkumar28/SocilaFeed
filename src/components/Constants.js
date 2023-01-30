import {
  faFileLines,
  faFilePen,
  faUsers,
  faUserPlus,
  faUserMinus,
  faBrain,
  faDatabase,
  faDollarSign,
  faFileUpload,
  faFileArchive,
  faCake,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../images/download.jpg";
import img2 from "../images/image.jpg";
import img3 from "../images/newimg.webp";
export const userData = [
  {
    id: 1,
    img: img1,
    userName: "OSLO",
    designation: "software engineer",
    day: "1d",
    content: "Marketing tips are here:reach influencers,Decisions and I...",
  },
  {
    id: 2,
    img: img2,
    userName: "ROBERT",
    designation: "Back-end developer",
    day: "2d",
    content: "Marketing tips are here:reach influencers,Decisions and I...",
  },
  {
    id: 3,
    img: img3,
    userName: "JOHN",
    designation: "front-end developer",
    day: "3d",
    content: "Marketing tips are here:reach influencers,Decisions and I...",
  },
];
export const sideBarData = [
  {
    id: 1,
    text: "Buzz home",
    font: faFileLines,
    number: "",
  },
  {
    id: 2,
    text: "My Buzz Posts",
    font: faFileLines,
    number: "8",
  },
  {
    id: 3,
    text: "Draft Posts",
    font: faFileLines,
    number: "22",
  },
  {
    id: 4,
    text: "My followers",
    font: faFilePen,
    number: "32",
  },
  {
    id: 5,
    text: "I am Following",
    font: faUserPlus,
    number: "1",
  },
  {
    id: 6,
    text: "My team",
    font: faUserMinus,
    number: "2",
  },
  {
    id: 7,
    text: "My reportees",
    font: faUsers,
    number: "36",
  },
  {
    id: 8,
    text: "Uploads",
    font: faFileUpload,
    number: "6",
  },
  {
    id: 9,
    text: "Archieve",
    font: faFileArchive,
    number: "8",
  },
  {
    id: 10,
    text: "New Folder",
    font: faFileLines,
    number: "22",
  },
];
export const newFolder = [];
export const sideBarData2 = [
  {
    id: 1,
    text: "New Artefacts",
    font: faDatabase,
    number: "82",
  },
  {
    id: 2,
    text: "New Modules",
    font: faDatabase,
    number: "8",
  },
  {
    id: 3,
    text: "New Skills",
    font: faBrain,
    number: "22",
  },
  {
    id: 4,
    text: "Accounts ",
    font: faDollarSign,
    number: "8",
  },
  {
    id: 5,
    text: "Celebrations",
    font: faCake,
    number: "28",
  },
];

export const buttonName = {
  delete: "Delete Image",
  camera: "Close Camera",
  video: "Delete video",
  audio: "Delete audio",
  deleteDocument: "Delete document",
  capture: "Capture",
};
export const attachmentData = {
  capture: "Capture It",
  say: "Say It",
  attach: "Any Attachments",
};
export const confirm = {
  delete: "Delete",
  ok: "Cancel",
};
