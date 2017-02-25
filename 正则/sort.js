let ary = [2,12,3,23,11,90,0,1,-1,0,99,-2];
let len = ary.length , 
        start = 0  ,
        mark = 0;  
    
while(mark!=len-1){ 
    if( start+mark > len-1 ){ 
        start = 0; 
        mark++;    
    } 
    if(ary[start++]>ary[start]){
       [ary[start],ary[start-1]]=[ary[start-1],ary[start]];  
    } 

}
  console.log(mark,ary.toString());
 console.log('-------------------------------------------------'); 

 ary = [2,12,3,23,11,90,0,1];
 function bubble_sort(a,  n)
{
    let i, j, temp;
    for (j = 0; j < n - 1; j++)
       { 
           for (i = 0; i < n - 1 - j; i++)
            {
                if(a[i] > a[i + 1])
                {
                    temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                }
            }
              console.log(ary.toString());
        }
}
bubble_sort(ary,ary.length);