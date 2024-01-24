import React, {useState} from "react";
import { Page, Text, View, Document, StyleSheet,Link , Svg, Circle, Font, Image}  from '@react-pdf/renderer';
import img from '../../assets/32.png';
import {custLoanDetails} from '../../loanInfodata.js';

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  },
  {
    family: 'Quicksand',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  },
  {
    family: 'sans-serif',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  },  
  {
    family: 'Roboto1',
    src: 'https://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf'
  },  
  {
    family: 'Roboto',
    fonts: [
        {
          src: `./Roboto.ttf`
        },
    ]
  },  
  );

let dt = new Date();
  let year  = dt.getFullYear();
  let month = (dt.getMonth() + 1).toString().padStart(2, "0");
  let day   = dt.getDate().toString().padStart(2, "0");
  let currentDate = month + '/' + day  + '/' + year;

  const styles = StyleSheet.create({

    hContent: {
        fontFamily: 'Helvetica',       
        color: '#ccc',        
        textAlign:"left",
        fontStyle: 'normal',       
        padding: 5,
        border:0,
        //borderColor:'red',
        margin:2,   
        alignItems: 'center',   
        fontSize:16,
      },
      header: { 
        color: '#000', textAlign: 'center', margin:0,
             border:0, 
            backgroundColor:'#191970', height:85, fontFamily:'Oswald',
            '@media max-width: 400': {
            width: 300,
            },
            '@media orientation: landscape': {
            width: 400,
            },
            alignItems:"baseline",
        },
        image: {           
            alignItems: "flex-end",
            minHeight: 20,
            minWidth:20,
            position:"absolute",            
            right:0,
            border: 0,
            borderColor: 'green',
            width:80,
            height:80,
            zIndex: 1,
            top: 0,
            left:475,
            marginTop:2,            
          },
          section1: {
            margin: 2,
            padding: 2,          
            border:1,
          },
          page:{
            backgroundColor:'#fff',
            paddingBottom: '50pt',
         },
          tableRow:{
            flexDirection:'row',
            border:0,
            backgroundColor:"#fff",           
          },
          tableColMain:{
            flexDirection:'column',
            border:0,
            backgroundColor:"#fff",        
            width:50 + '%', 
          },
          tableCol:{
            flexDirection:'column',
            border:0,
            backgroundColor:"#FFFFFF",        
            width:50 + '%', 
          },
          td:{            
            fontFamily: 'Helvetica',       
            color: '#000',        
            textAlign:"left",
            fontWeight: 'bold',             
            fontSize:10.5,                   
            padding: 10,
            border:0,
            borderColor:'red',
            margin:1,              
            textAlign:'left', 
            flexWrap:'nowrap',     
            minHeight:35,      
          },
          tdValue:{
            fontFamily: 'Helvetica',       
            color: '#000',        
            textAlign:"left",
            fontWeight: 'normal',             
            fontSize:10.5,                   
            padding: 10,
            border:0,
            borderColor:'red',
            margin:1,              
            textAlign:'left', 
            flexWrap:'nowrap',
            minHeight:30,
          },
          pdfTable:{            
            border:0,
            backgroundColor:"#fff",              
            margin:5,
            flexDirection:"column",
          },
          pageNumber: {
            position: 'absolute',
            fontSize: 12,
            bottom: 55,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
            marginTop: 5,
            paddingTop: 5,
            paddingRight: 15,
          },


  })
//   interface RowsKeyValuePair  {
//     rowId: string;
//     label1: string;
//     data1: string | undefined | null;
//     dataTye1?: RowsValueDataType;
//     element1?: ReactElement | ReactElement[];
//     label2: string;
//     data2: string | undefined | null;
//     dataTye2?: RowsValueDataType;
//     element2?: ReactElement | ReactElement[];
//   };


 //const getLoanData = custLoanDetails;

export const LoanInfoDynamic=() =>{
    return (
        <Document author="Vikas" title="React-pdf" creator="React-pdf" producer="React-pdf"  >
            <Page size="A4" orientation="portrait" height="600px" style={styles.page} > 
                <View style={styles.header} fixed >           
                    <View style={{ color: 'white', textAlign: 'left', alignItems:"flex-start", margin: 2, width:65 +'%' ,border:0 }}>
                        <Text style={styles.hContent}>Printed:[{currentDate}] </Text>
                        <Text style={styles.hContent} >Loan Information:Sri Rama </Text>
                    </View>
                    <Image src={img} style={styles.image}></Image>                    
                </View>
                <View style={{backgroundColor:'green', height:'5'}} ></View>   
                <View style={styles.pdfTable} >
                    {custLoanDetails.map((ld, index) =>
                    (                        
                        <View  style={styles.tableRow} key={index} >  
                            <View style={styles.tableColMain} >
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td} > {ld.label1}: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> {ld.data1} </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.tableColMain} >
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableRow}  > 
                                        <View style={styles.tableCol} >  
                                            <Text style={styles.td}> {ld.label2}: </Text>
                                        </View>
                                        <View style={styles.tableCol} >  
                                            <Text style={styles.tdValue}> {ld.data2} </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>        
                    <Text style={styles.pageNumber}  render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed  />
                    <View style={{backgroundColor:'green', height:'5', position:"absolute", bottom:0, left:0,right:0}} fixed ></View>
                
            </Page>
        </Document>
    );
}