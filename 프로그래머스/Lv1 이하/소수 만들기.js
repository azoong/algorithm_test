function solution(nums) {
    let len = nums.length, answer = 0;
  
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len ; j++) {
        for (let k = j + 1; k < len; k++) {
          if (isPrime(nums[i] + nums[j] + nums[k])) {
            answer++;
          }
        }
      }
    }
      
    return answer;
  }
  
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }

//   주어진 숫자 중 3개의 수를 더하는 모든 경우의 수를 구해야 합니다.

// 이는 각각의 수를 다룰 3개의 for문이 있으면 됩니다.

 

// 각 3개의 수를 더한 값이 소수인지 판별해줍니다.

// 이때 판별할 값의 제곱근보다 큰 수까지는 반복문을 돌릴 필요가 없습니다.

 

// 예를 들어 짝수인 10의 제곱근으로 반복문을 돌려도 i가 2일 때 바로 소수가 아님이 판별 나게 됩니다.

 

// 반복문에서 1과 판별할 값을 제외한 수 중에 나누어 떨어지는 값이 있을 시 소수가 아니게 되고, 모든 경우의 수를 돌려 소수로 합쳐지는 경우의 수를 반환해줍니다.

 