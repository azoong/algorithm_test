파이썬 솔루션
a, b = map(int, input().strip().split(' '))
for i in range(b): 
    for t in range(a):
        print('*', end='')
    print()
    
print(a + b)



자바스크립트 솔루션
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log((('*'.repeat(a))+'\n').repeat(b))   
});


