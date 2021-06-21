from random import randrange
n = randrange(1, 1500)
k = randrange(100)
print(n, end=" ")
print(k)
a = set()
frequency = {}
for i in range(n):
    x = randrange(200000)
    print(x, end=" ")
    a.add(x)
    if x not in frequency:
        frequency[x] = 1
    else:
        frequency[x] += 1
a = list(a)

print()
if n==1:
    print("0")
else:
    a = sorted(a)
c = 0
for i in range(1, len(a)-1):
    if a[i]-a[i-1]>k and a[i+1]-a[i]>k :
        c += frequency[a[i]]
if a[1]-a[0]>k:
    c+=frequency[a[0]]
if a[len(a)-1]-a[len(a)-2]>k:
    c +=frequency[a[len(a)-1]]
print(n-c)