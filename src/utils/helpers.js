
export const importNameFromPath=(url)=>{
    let array=url.split("/")
    let fileNameWithExtension=array[array.length-1]
    let fileName=fileNameWithExtension.split(".")[0]
    return removeUnderscores(fileName)
}

const removeUnderscores=(name)=>{
    let arr=name.split("_")
    return arr[0]+" "+arr[1].split("-")[0]
}