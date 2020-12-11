function validBraces(braces){
    //TODO 

//     let items = { };
//     let arrbraces = braces.split("");
//     for(let i = 0; i < arrbraces.length; i++){
 
//         switch(arrbraces[i]) {
//             case "(" : 
//                 items["("] = ++items["("] || 1;
//                 break;
//             case ")" : 
//                 items["("] = --items["("];
//                 if (items["("] < 0 ) return false;
//                 break;

//             case "{" : 
//                 items["{"] = ++items["{"] || 1;
//                 break;
//             case "}" : 
//                 items["{"] = --items["{"];
//                 if (items["{"] < 0 ) return false;
//                 break;

//             case "[" : 
//                 items["["] = ++items["["] || 1;
//                 break;
//             case "]" : 
//                 items["["] = --items["["];
//                 if (items["["] < 0 ) return false;
//                 break;

//             default:
//                 console.log( "Нет таких значений" );
//         }
//     }

//    return ( (items["("] = (items["("] || 0) == 0 )  
//             && (items["{"] = (items["{"] || 0) == 0 )
//             && (items["["] = (items["["] || 0) == 0 )
//             );

        let tracer = []
        for(let i=0;i < braces.length; i++){
        if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
            tracer.push(braces[i])
        } else{
            if(tracer.length === 0) return false
            let lastValue = tracer[tracer.length-1]
            if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
            {
            tracer.pop()
            } else {
            break;
            }
        }
        }
        return tracer.length === 0
  }

  console.log(validBraces( "()" ));
  console.log(validBraces( "((()))" ));  
  console.log(validBraces( "(((())" ));  
  console.log(validBraces( "[(])" ));  
  console.log(validBraces( "[({})](]" ));  