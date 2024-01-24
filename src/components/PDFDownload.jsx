import { PDFDownloadLink,Document,Page } from "@react-pdf/renderer";    
import { MyDocument } from "./MyDocument";
import { LoanInfoDocument } from "./PDFComponents/LoanInfoDocument.jsx";
import { LoanInfoDocument2Page } from "./PDFComponents/LoanInfoDocument2page.jsx";
import { LoanInfoDynamic } from "./PDFComponents/LoanInfoDynamic.jsx";
import { FcDownload  } from "react-icons/fc";
import {FaFilePdf} from "react-icons/fa6";

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
            <PDFDownloadLink document={<LoanInfoDynamic/>} fileName='lIDynamic.pdf'>
                {({blob, url, loading,error}) => 
                loading? (
                            <FaFilePdf style={{color:'#a9a9a9', fontSize:20, margin:5 }}>Loading document...</FaFilePdf>                             
                        )   :(
                                <FaFilePdf style={{color:'#00ced1', fontSize:20, margin:5 }}>Download</FaFilePdf> 
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
            <PDFDownloadLink document={<LoanInfoDocument2Page/>} fileName='ld2page.pdf'>
                {({blob, url, loading,error}) => 
                loading? (
                            <button>Loading document...</button> 
                        )   :  error? (<h1> error </h1>): (
                                <FcDownload style={{color:'#dc143c', fontSize:20, margin:5 }}>Download</FcDownload> 
                                )         
                }
            </PDFDownloadLink>
        </div>       
    </div>
);
