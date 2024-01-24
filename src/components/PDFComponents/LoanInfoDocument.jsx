import React, {useState} from "react";
import { Page, Text, View, Document, StyleSheet,Link , Svg, Circle, Font, Image}  from '@react-pdf/renderer';
import img from '../../assets/32.png';

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
            padding: 3,
            border:0,
            borderColor:'red',
            margin:1,              
            textAlign:'left', 
            flexWrap:'nowrap',     
            minHeight:30,      
          },
          tdValue:{
            fontFamily: 'Helvetica',       
            color: '#000',        
            textAlign:"left",
            fontWeight: 'normal',             
            fontSize:10.5,                   
            padding: 3,
            border:0,
            borderColor:'red',
            margin:1,              
            textAlign:'left', 
            flexWrap:'nowrap',
            minHeight:30,
          },
          pdfTable:{            
            border:0,
            backgroundColor:"#ffe4b5",              
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


//   const data =  [
//     {
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },
//     {
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },{
//         rowId: 'primary1',
//         label1: 'Loan Alias',
//         data1: '6123',           
//         label2: 'Current Balance',
//         data2: '3030303',
      
//     },
//     {
//         rowId: 'primary2',
//         label1: 'All-iIn Rate',
//         data1: '11.11%',           
//         label2: 'C Project',
//         data2: '445123',
      
//     },
   
// ];

export const LoanInfoDocument=() =>{
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
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Customer Legal Name: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> Sri Rama </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Inquire Date Time: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> Tuesday, December 19,2023 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* {data.map((item) => (                      
                       <View style={styles.tableRow}  > 
                            <View style={styles.tableCol} >  
                                <Text style={styles.td}> {item.label1}: </Text>
                            </View>
                            <View style={styles.tableCol} >  
                                <Text style={styles.tdValue}> {item.data1} </Text>
                            </View>
                            <View style={styles.tableCol} >  
                                <Text style={styles.td}> {item.label2}: </Text>
                            </View>
                            <View style={styles.tableCol} >  
                                <Text style={styles.tdValue}> {item.data2} </Text>
                            </View>
                        </View>   
                    )
                    )};  */}

                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Loan Alias: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> 610226001 </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Current Balance: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> $23,152.54 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> All-In Rate: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> 11.11% </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> CProjected Loan Maturity Date: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> 45108 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Loan Maturity Date: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> Saturday, July 1, 2023 </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Available to Draw: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> 51847.46 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Est # of Payments Remaining: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> $455,646  </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Repricing Date: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> Saturday, July 1, 2023 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Loan Frequency: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> Annually </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Performing Status: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> ACCR </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Accrued Interest: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> $1,063.68  </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Facility Type: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> Revol </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Other Borrowers: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> DUCOTE TAMMY 001-7519 </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Facility Original Commitment: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> $75,000.00 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Branch: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> Austin Branch  </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Guarantor: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> Jim Robets </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>                  
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Loan Officer: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> Paul Adams </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Facility Control Number: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> 56985785 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Portfolio: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> Hold for Investment - Taxable </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Legal Address: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> 4561, Sam Huston Rd, TX, 78026 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Loan Pricing Option: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> FC001 </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Facility Current Commitment: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> $75,000.00 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Base Rate: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> 3.81% </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Loan Term: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> 360 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                   
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Borrower/Loan Spread: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> 7.30% </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Original Balance: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> $1,250.00 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Rate Basis: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> Actual/365/366 </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> End of Prior Year Principal Balance: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> $23,152.54 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}> Loan Effective Date: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}> Saturday, July 1, 2023 </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}> Preferred Remittance Instruction: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}> Text line </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.tableRow} >  
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableCol} >  
                                    <Text style={styles.td}>YTD Interest Paid: </Text>
                                </View>
                                <View style={styles.tableCol} >  
                                    <Text style={styles.tdValue}>$58,000.00 </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableColMain} >
                            <View style={styles.tableRow}  > 
                                <View style={styles.tableRow}  > 
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.td}>PY Interest Paid: </Text>
                                    </View>
                                    <View style={styles.tableCol} >  
                                        <Text style={styles.tdValue}>87.37 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>                
                <Text style={styles.pageNumber}  render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed  />
                <View style={{backgroundColor:'green', height:'5', position:"absolute", bottom:0, left:0,right:0}} fixed ></View>
            </Page>
        </Document>
    );
}