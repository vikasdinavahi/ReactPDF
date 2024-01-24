import { PDFDownloadLink,Document,Page } from "@react-pdf/renderer";    
import { MyDocument } from "./MyDocument";
import { LoanInfoDocument } from "./PDFComponents/LoanInfoDocument";
import { FaFilePdf  } from "react-icons/fa6"

export const PDFDownload = () =>(
    <div>
        <div style={{display:'none'}}> 
        <PDFDownloadLink document={<MyDocument id="one" selectedText1="test pdf section1" selectedText2="test pdf section2" 
        anyOtherSection="Test section" />} fileName='somename.pdf'>
            {({blob, url, loading,error}) => 
            loading? (
                        <button>Loading document...</button> 
                     )   :(
                            <button>Download</button> 
                            )         
            }
        </PDFDownloadLink>
        </div>
        <div>
        <PDFDownloadLink document={<LoanInfoDocument/>} fileName='ld.pdf'>
            {({blob, url, loading,error}) => 
            loading? (
                        <button>Loading document...</button> 
                     )   :(
                            <FaFilePdf style={{color:'#dc143c', fontSize:20, margin:5 }}>Download</FaFilePdf> 
                            )         
            }
        </PDFDownloadLink>
        </div>
        <div>
            
        </div>
    </div>
);
