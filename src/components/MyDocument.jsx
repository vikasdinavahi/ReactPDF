import React, {useState} from "react";
import { Page, Text, View, Document, StyleSheet,Link , Svg, Circle, Font, Image}  from '@react-pdf/renderer'



//Font.register({family:'Roboto', src: 'https://gist.github.com/sadikay/d5457c52e7fb2347077f5b0fe5ba9300'});

/*const styles1 = StyleSheet.create({
  page: {  flexDirection: 'row',
  backgroundColor: 'white' },
  section: { color: 'blue', textAlign: 'center', margin: 30 },
  header: { color: 'blue', textAlign: 'center', border:1 },
  text: {
    margin: 1,
    padding: 1,
    border:1,      
    
  },
});

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto'
  },
    page: {
      flexDirection: 'row',
      backgroundColor: 'white'
    },
    section: {     
      color: 'blue', 
      margin: 1,
      padding: 1,
      border:1,      
      width: 200,
    '@media max-width: 400': {
      width: 300,
    },
    '@media orientation: landscape': {
      width: 400,
    },
    },
    text: {
      margin: 1,
      padding: 1,
      border:1,      
     
    },
    header: {
      border:1,      
      color: 'blue', textAlign: 'center',     
      margin: 1,
      padding:1,
    },
    image: {
      width: 500,
      height: 100,
    },

  });
  */
  
  Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });
  
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald'
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });

  


  const pageTitle = "Landscape" + "01-19-2024";
  export const MyDocument =(props) =>{   
      return  (    
    <Document author="FCBT" title={pageTitle} creator="FCBT" producer="FCBT"  >
        <Page size="A4" style = {styles.body} orientation="portrait" height="600px" wrap > 
        <Image src="https://image.shutterstock.com/image-photo/tiny-floating-house-on-lake-600w-1980476267.jpg" style={styles.image} />
        <Text style={styles.header} fixed>PDF Header Text goes here.</Text>
        <View style={styles.section}>                   
                <Text style={styles.text}>{props.id}</Text>
                <Text style={styles.text}>{props.selectedText2}</Text>
                <Text style={styles.text}>{props.id}</Text>
                <Text style={styles.text}>{props.selectedText2}</Text>
                <Text style={styles.text}>{props.id}</Text>
                <Text style={styles.text}>{props.selectedText2}</Text>
                <Text style={styles.text}>{props.id}</Text>
                <Text style={styles.text}>{props.selectedText2}</Text>                
                <Text style={styles.text}>{props.selectedText2}</Text>
                <Text style={styles.text}>{props.id}</Text>
                <Text style={styles.text}>{props.selectedText2}</Text>
                <Text style={styles.text} break>Take break</Text>
                <Text style={styles.text}>{props.selectedText2}</Text>
                <Text style={styles.text}>{props.id}</Text>
                <Text style={styles.text}>{props.selectedText2}</Text>
                <Text style={styles.text}>{props.id}</Text>
                <Text  style={styles.text}>{props.selectedText2}</Text>
                <Text style={styles.text}>{props.id}</Text>
                <Text style={styles.text}>{props.selectedText2}</Text>
                <Text style={styles.text}>{props.id}</Text>
                <Text style={styles.text}>{props.selectedText2}</Text>               
            </View>
            <View style={styles.section}>
                <Text>{props.selectedText1}</Text>
            </View>            
            <View style={styles.section}>
            <Svg viewBox="0 0 100 100">
                <Circle
                  cx="50"
                  cy="50"
                  r="5"
                  fill="tomato"
                  stroke="gray"
                />
              </Svg> 
            </View>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => 
              `${pageNumber} / ${totalPages}`
            } fixed />
        </Page>
    </Document>  
    );

}