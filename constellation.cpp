#include<bits/stdc++.h>
using namespace std;

map<queue<vector<char>>, char> vowels;

void initialize() 
{
    queue<vector<char>> v;
    // A
    v.push({'.', '*', '*'});
    v.push({'*', '*', '.'});
    v.push({'.', '*', '*'});
    vowels.insert({v, 'A'});
    while(!v.empty())
        v.pop();
    

    // E
    v.push({'*', '*', '*'});
    v.push({'*', '*', '*'});
    v.push({'*', '*', '*'});
    vowels.insert({v, 'E'});
    while(!v.empty())
        v.pop();

    // I
    v.push({'*', '.', '*'});
    v.push({'*', '*', '*'});
    v.push({'*', '.', '*'});
    vowels.insert({v, 'I'});
    while(!v.empty())
        v.pop();

    //O
    v.push({'*', '*', '*'});
    v.push({'*', '.', '*'});
    v.push({'*', '*', '*'});
    vowels.insert({v, 'O'});
    while(!v.empty())
        v.pop();

    //U
    v.push({'*', '*', '*'});
    v.push({'.', '.', '*'});
    v.push({'*', '*', '*'});
    vowels.insert({v, 'U'});
    while(!v.empty())
        v.pop();
}

int main()
{
    initialize();

    int n;
    cin >> n;

    vector<vector<char>> x(n, vector<char>(3));

   for(int i=0;i<3;i++)
  	{
    	for(int j=0;j<n;j++)	
  	    	{
                  cin>>x[j][i];    
                // cout << x[j][i] << " ";
            }
       // cout << "\n";
    }
    string constellation = "";
    queue<vector<char>> q;
    for ( int i=0; i<n; i++ )
    {
        if (q.size()==3)
            {
            if (vowels.find(q)!=vowels.end())
                {
                    constellation += vowels[q];
                    while(!q.empty())
                        q.pop();
                }
            else
            q.pop();   
            }
        if (x[i][0]=='#'&&x[i][1]=='#'&&x[i][2]=='#')
            {
                constellation += '#';
                while (!q.empty())
                    q.pop();
                continue;
            }
        q.push(x[i]);
    }
    
    if (q.size()==3&&vowels.find(q)!=vowels.end())
        constellation += vowels[q];              

    cout << constellation;

    return 0;
}
