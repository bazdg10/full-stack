#include <bits/stdc++.h>
using namespace std;
int pairs(int elementlst[],int n,int z){
 int count=0;
  for(int i=0;i<n;i++){
    int a=elementlst[i];
    int id1=i;
    int id2=i;
    if(i==0){
      while(elementlst[id2+1]==a)
         id2+=1;
      if(elementlst[id2+1]<=a+z && elementlst[id2+1]>=a-z)
        count+=1;
    }
    else if(i<n-1){
      while(elementlst[id2+1]==a)
        id2+=1;
      while(elementlst[id1-1]==a)
        id1-=1;
      if(((elementlst[id1-1]<=a+z) && (elementlst[id1-1]>=a-z)) || ((elementlst[id2+1]<=a+z) && (elementlst[id2+1]>=a-z)))
        count+=1;
    }
    else{
      while(elementlst[id1-1]==a)
        id1-=1;
      if(elementlst[id1-1]<=a+z && elementlst[id1-1]>=a-z)
        count+=1;
    }
  }
  return count;
}
int main() {
	int n,z;
	cin>>n>>z;
	int elementlst[n];
	for(int i=0;i<n;i++){
	    cin>>elementlst[i];
	}
	sort(elementlst,elementlst+n);
	cout<<pairs(elementlst,n,z);
	return 0;
}