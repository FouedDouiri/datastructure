function unique(set1,set2){
    let merged=[]
    for(let i=0;i<set1.length;i++){
        if (!set2.includes(set1[i])){
          merged.push(set1[i])  
        }
    }
       for(let i=0;i<set2.length;i++){
        if (!set1.includes(set2[i])){
          merged.push(set2[i])  
        }
    }
    let final=0
    for(i=0;i<merged.length;i++){
        final+=merged[i]
    }
    return final
}
console.log(unique([3, 1, 7, 9],[2, 4, 1, 9, 3]))