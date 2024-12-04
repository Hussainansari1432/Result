 
function checkout(){
     
    let total_Number_Of_English = Number(document.getElementById("enTotal").value);          
    let obtained_Number_Of_English = Number(document.getElementById("enObt").value);         
    let percentage_Of_English = (obtained_Number_Of_English/total_Number_Of_English) * 100 

  

    let total_Number_Of_Urdu = Number(document.getElementById("urTotal").value);          
    let obtained_Number_Of_Urdu = Number(document.getElementById("urObt").value);         
    let percentage_Of_Urdu = (obtained_Number_Of_Urdu/total_Number_Of_Urdu) * 100 

    let total_Number_Of_Math = Number(document.getElementById("maTotal").value);           
    let obtained_Number_Of_Math = Number(document.getElementById("maObt").value);          
    let percentage_Of_Math = (obtained_Number_Of_Math/total_Number_Of_Math) * 100 
    

    let total_Number_Of_Biology = Number(document.getElementById("biTotal").value);          
    let obtained_Number_Of_Biology = Number(document.getElementById("biObt").value);         
    let percentage_Of_Biology = (obtained_Number_Of_Biology/total_Number_Of_Biology) * 100 

    let total_Number_Of_Chemistry = Number(document.getElementById("chTotal").value);       
    let obtained_Number_Of_Chemistry = Number(document.getElementById("chObt").value);
    let percentage_Of_Chemistry = (obtained_Number_Of_Chemistry/total_Number_Of_Chemistry) * 100 


    let total_Number_Of_Physic = Number(document.getElementById("phyTotal").value);          
    let obtained_Number_Of_Physic = Number(document.getElementById("phyObt").value);         
    let percentage_Of_Physic = (obtained_Number_Of_Physic/total_Number_Of_Physic) * 100      
         /// Targeting Input Element and getting value
    

///English///
document.getElementById("showTotalen").innerText = total_Number_Of_English;          
document.getElementById("showObtaineden").innerText = obtained_Number_Of_English;         
document.getElementById("showPercentageen").innerText = percentage_Of_English + "%";    
 
 
if(percentage_Of_English >= 80){                                         
    document.getElementById("showGradeen").innerText = "A+"            
}else if(percentage_Of_English >= 70){                                    
    document.getElementById("showGradeen").innerText = "A"              
}else if(percentage_Of_English >= 60){                                    
    document.getElementById("showGradeen").innerText = "B"              
}else if(percentage_Of_English >= 50){                                   
    document.getElementById("showGradeen").innerText = "C"              
}else{                                                                 
    document.getElementById("showGradeen").innerText = "Fail"   
}
 ///English///  
 
 
///Urdu///
document.getElementById("showTotalur").innerText = total_Number_Of_Urdu;          
document.getElementById("showObtainedur").innerText = obtained_Number_Of_Urdu;         
document.getElementById("showPercentageur").innerText = percentage_Of_Urdu + "%";    
 
 
if(percentage_Of_Urdu >= 80){                                         
    document.getElementById("showGradeur").innerText = "A+"            
}else if(percentage_Of_Urdu >= 70){                                    
    document.getElementById("showGradeur").innerText = "A"              
}else if(percentage_Of_Urdu >= 60){                                    
    document.getElementById("showGradeur").innerText = "B"              
}else if(percentage_Of_Urdu >= 50){                                   
    document.getElementById("showGradeur").innerText = "C"              
}else{                                                                  
    document.getElementById("showGradeur").innerText = "Fail"   
}
 ///Urdu///  

///Math///
document.getElementById("showTotalma").innerText = total_Number_Of_Math;          
document.getElementById("showObtainedma").innerText = obtained_Number_Of_Math;         
document.getElementById("showPercentagema").innerText = percentage_Of_Math + "%";    
 
 
if(percentage_Of_Math >= 80){                                         
    document.getElementById("showGradema").innerText = "A+"            
}else if(percentage_Of_Math >= 70){                                    
    document.getElementById("showGradema").innerText = "A"              
}else if(percentage_Of_Math >= 60){                                    
    document.getElementById("showGradema").innerText = "B"              
}else if(percentage_Of_Math >= 50){                                   
    document.getElementById("showGradema").innerText = "C"              
}else{                                                                  
    document.getElementById("showGradema").innerText = "Fail"   
}
 ///Math/// 




 ///Biology///
document.getElementById("showTotalbi").innerText = total_Number_Of_Biology;          
document.getElementById("showObtainedbi").innerText = obtained_Number_Of_Biology;         
document.getElementById("showPercentagebi").innerText = percentage_Of_Biology + "%";    
 
 
if(percentage_Of_Biology >= 80){                                         
    document.getElementById("showGradebi").innerText = "A+"            
}else if(percentage_Of_Biology >= 70){                                    
    document.getElementById("showGradebi").innerText = "A"              
}else if(percentage_Of_Biology >= 60){                                    
    document.getElementById("showGradebi").innerText = "B"              
}else if(percentage_Of_Biology >= 50){                                   
    document.getElementById("showGradebi").innerText = "C"              
}else{                                                                  
    document.getElementById("showGradebi").innerText = "Fail"   
}
 ///Biology///  




 ///Chemistry///
document.getElementById("showTotalch").innerText = total_Number_Of_Chemistry;          
document.getElementById("showObtainedch").innerText = obtained_Number_Of_Chemistry;         
document.getElementById("showPercentagech").innerText = percentage_Of_Chemistry + "%";    
 
 
if(percentage_Of_Chemistry >= 80){                                         
    document.getElementById("showGradech").innerText = "A+"            
}else if(percentage_Of_Chemistry >= 70){                                    
    document.getElementById("showGradech").innerText = "A"              
}else if(percentage_Of_Chemistry >= 60){                                    
    document.getElementById("showGradech").innerText = "B"              
}else if(percentage_Of_Chemistry >= 50){                                   
    document.getElementById("showGradech").innerText = "C"              
}else{                                                                  
    document.getElementById("showGradech").innerText = "Fail"   
}
 ///Chemistry///  


 

 ///Physic  ///
    document.getElementById("showTotalphy").innerText = total_Number_Of_Physic;          
    document.getElementById("showObtainedphy").innerText = obtained_Number_Of_Physic;         
    document.getElementById("showPercentagephy").innerText = percentage_Of_Physic + "%";    
     
 
    if(percentage_Of_Physic >= 80){                                         
        document.getElementById("showGradephy").innerText = "A+"            
    }else if(percentage_Of_Physic >= 70){                                    
        document.getElementById("showGradephy").innerText = "A"              
    }else if(percentage_Of_Physic >= 60){                                    
        document.getElementById("showGradephy").innerText = "B"              
    }else if(percentage_Of_Physic >= 50){                                   
        document.getElementById("showGradephy").innerText = "C"              
    }else{                                                                  
        document.getElementById("showGradephy").innerText = "Fail"       
    }
///Physic///     

 

      /// Over All  ///
  let total_Number_Of_All_Subject =total_Number_Of_English + total_Number_Of_Urdu + total_Number_Of_Math + total_Number_Of_Biology + total_Number_Of_Chemistry + total_Number_Of_Physic                       /// Calculating All Subject Total Number
  let obtained_Number_Of_All_Subject = obtained_Number_Of_English + obtained_Number_Of_Urdu + obtained_Number_Of_Math + obtained_Number_Of_Biology + obtained_Number_Of_Chemistry + obtained_Number_Of_Physic           
  let percentage_Of_All_Subject = (obtained_Number_Of_All_Subject / total_Number_Of_All_Subject) * 100                            
   

   
  document.getElementById("showTotalAll").innerText = total_Number_Of_All_Subject;                          
  document.getElementById("showObtainedAll").innerText = obtained_Number_Of_All_Subject;           
  document.getElementById("showPercentageAll").innerText = percentage_Of_All_Subject;             
  
  
  if(percentage_Of_All_Subject >= 80){
      document.getElementById("showGradeAll").innerText = "A+"
  }else if(percentage_Of_All_Subject >= 70){
      document.getElementById("showGradeAll").innerText = "A"
  }else if(percentage_Of_All_Subject >= 60){
      document.getElementById("showGradeAll").innerText = "B"
  }else if(percentage_Of_All_Subject >= 50){
      document.getElementById("showGradeAll").innerText = "C"
  }else{
      document.getElementById("showGradeAll").innerText = "Fail"
  }
  /// Over all ///
}
 
