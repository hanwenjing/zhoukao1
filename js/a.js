/**
 * Created by Administrator on 2017/10/9 0009.
 */
var arr=[1,2,3,4,5,4,3,2,1];
function repeat1(arr){
    var brr=[];
    for(var i=0;i<arr.length;i++){
        if(brr.indexOf(arr[i])===-1){
            brr.push(arr[i]);
        }
    }
    return brr;
}
console.log(repeat1(arr));
