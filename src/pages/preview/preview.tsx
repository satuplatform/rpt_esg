import { EyeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PreviewPage = () => {
  const initialData={
    data:[]
  }
  const [stateData, setStateData] = useState(initialData);
  const {reportId}= useParams();
  
  const navigate = useNavigate();
  const getData=async()=>{
    const rawResponse = await fetch(`/api/report/new-report/preview?id=${reportId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });
    const jsonData = await rawResponse.json();
    console.log('jsonDatajsonDatajsonData',jsonData);
    if (jsonData.success) {
      setStateData({
        // data:jsonData.data.concat(jsonData.data)
        data:jsonData.data
      });
    }
  }

  useEffect (() => {
    getData();
  
    return () => {
      
    }
  }, [])
  
  return <div>
      {stateData.data.map((item)=>{
        return  <div key={item['_id']} className="mb-6   border-2 border-solid border-[#e5d3d3]  rounded-lg">
          <p className="font-bold border border-solid border-t-0 border-l-0 border-r-0 border-[#e3b4b4] px-5 py-4 flex justify-between flex-row"><div>{item['name']}</div> <EyeOutlined className='text-xl cursor-pointer' onClick={()=>{
             navigate(`/report/disclosures/${reportId}/${item['_id']}`);
          }} /></p>
          <p className="font-normal mt-4 px-5 pb-4" dangerouslySetInnerHTML={{ __html: item['content'] }}></p>
    

        </div>;
      })}
     
    </div>;
};
