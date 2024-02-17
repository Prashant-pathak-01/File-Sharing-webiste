import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { getHistory, deleteFile as deleteFileAPI } from "../../../API/api";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import authError from '../../../Images/401-Error-Unauthorized-v1.svg'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Loading from '../../../Images/Pulse-1s-200px.svg'
import FileSVG from '../../../Images/file.png';
function App() {
  const [history, setHistory] = useState(null);
  const [updateDocs, setUpdateDocs] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();
  const [url,setUrl] = useState("http://localhost:3000/download-file/")
  useEffect(() => {
    const getHistoryData = async () => {
      if (user?.primaryEmailAddress.emailAddress) {
        try {
          const res = await getHistory({ UserName: user.primaryEmailAddress.emailAddress });
          setHistory(res);
        } catch (error) {
          console.error("Error fetching history:", error);
        }
      }
    }
    getHistoryData();
  }, [user, updateDocs]);

  const loggedOut = async () => {
    navigate('/');
  }

  const deleteFile = async (FileId, e) => {
    e.preventDefault();
    await deleteFileAPI({ FileId: FileId });
    setUpdateDocs(!updateDocs);
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <SignedOut>
        <img src={authError} className="w-1/2 h-1/2 cursor-pointer" onClick={loggedOut} alt="Unauthorized Error"></img>
        <p className="w-full text-4xl text-blue-900 font-sarifs font-bold flex flex-row items-center justify-center">Please logIn to your account</p>
      </SignedOut>
      <SignedIn>
        {  history==null?
        <div className="flex flex-col justify-center items-center h-screen"><img src={Loading} className="w-14 h-14"></img></div>
        :<>
        <p className="text-3xl font-bold w-full p-8 ml-10">Your History</p>
        <div className="w-4/5 h-4/5 p-10 bg-purple-200 rounded-3xl overflow-y-scroll">
          {
           history.map((File) => (
              <div key={File.FileId} className='w-auto h-20 bg-primaryColorB text-blue-900 p-10 rounded-lg m-6 flex flex-row justify-between items-center'>
                <img src={(File.Type=='image/jpeg' || File.Type=='image/png' || File.Type=='image/gif')?File.Url:FileSVG} className='w-16 h-16 rounded-md overflow-hidden' alt={File.Name}></img>
                <div>
                  <p className='text-lg max-w-2/3 overflow-hidden'>{File.Name}</p>
                  <p className='text-sm'>{((File.Size) / 1024 / 1024).toFixed(3)} Mb</p>
                </div>
                <div className='w-20 flex flex-row justify-between'>
                  <a href={`${url}${File.FileId}`}><DownloadOutlinedIcon className='cursor-pointer hover:scale-125'></DownloadOutlinedIcon></a>
                  <button onClick={(e) => deleteFile(File.FileId, e)}><DeleteOutlineIcon className='text-red-600 cursor-pointer  hover:scale-125 '></DeleteOutlineIcon></button>
                </div>
              </div>
            ))
          }
        </div>
        </>}
      </SignedIn>
    </div>
  )
}

export default App;
