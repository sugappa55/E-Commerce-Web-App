export function GroupBy(list, key) {
    const group = {}//{women:[]}
    
    list.forEach((item) => {
      if (!group[item[key]]) group[item[key]]=[item];
        else { 
            let arr=group[item[key]]
            group[item[key]]=[...arr,item];
}            
    });
    return group;
}
