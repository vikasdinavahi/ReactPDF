
import React from 'react';
import ReactPDF,{PDFViewer, renderToFile, usePDF, Page, Document} from '@react-pdf/renderer';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import {MyDocument} from './components/MyDocument.jsx';
import {PDFDownload} from './components/PDFDownload.jsx';
import { useState } from 'react';
import filePath from './assets/e-Pizza.pdf';
import { LoanInfoDocument } from './components/PDFComponents/LoanInfoDocument.jsx';

function App() { 
  let dt = new Date();
  let year  = dt.getFullYear();
  let month = (dt.getMonth() + 1).toString().padStart(2, "0");
  let day   = dt.getDate().toString().padStart(2, "0");

 
  async function handleClick(){
      console.log("PDF button Click");    
     
      console.log(month + '/' + day  + '/' + year); 
      //await renderToFile(<TestDoc />,'C:/Temp/example1.pdf');
      //ReactPDF.render(<MyDocument />, 'C:/Temp/example.pdf');
      //const d1 = new Date();
      //const d2 = d1.getUTCMonth(); //(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds());
      //console.log(d1);
      //console.log(d2);
      
  }
 
  return (
    <>        
      <Header />
      <main>   
      {/*  
      <PDFViewer showToolbar={false} height={800} width={800}>
        <LoanInfoDocument></LoanInfoDocument>     
       </PDFViewer>
        <PDFDownload></PDFDownload>           
        <button onClick={handleClick}>DownloadPDF</button>  
        <h1>[{(month + '/' + day  + '/' + year)}]</h1>
  */}
   <PDFDownload></PDFDownload> 
       <CoreConcepts/>
       <Examples/>
       {/* 
       <PDFViewer showToolbar={true} height={800} width={500}>
        <MyDocument></MyDocument>
       </PDFViewer>
       */}
      
      </main>
    </>
  );
}

export default App;
