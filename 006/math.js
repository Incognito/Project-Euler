var list = []
var sum=0;
for (i=1; i< 11; i++){
    list.push(Math.pow(i,2));
}
print(list);

for (i=0; i<list.length; i++){
    sum+=list[i];
    print(sum);
}
