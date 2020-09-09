/**
 *
 * @see https://programmers.co.kr/learn/courses/30/lessons/42746
 * @description -
 *
 * 가장 큰 수
 * level 2
 */
function solution(numbers = []) {

    let answer = '';

    while (true) {
        const numbersLength = numbers.length;

        if (numbersLength === 0) {
            return answer;
        }

        let maxNumber = 0;
        let maxNumberIndex = 0;
        for (let i = 0; i < numbersLength; i++) {

            let number = numbers[i]

            while (true) {
                if (parseInt(number / 10) === 0) {
                    number = number % 10
                    break;
                } else {
                    number = parseInt(number / 10);
                }
                break;
            }


            if (maxNumber < number) {
                maxNumber = number
                maxNumberIndex = i;
            } else if (maxNumber === number) {


                const maxNumberString = numbers[maxNumberIndex].toString();
                const numberString = numbers[i].toString();

                if (maxNumberString.length > numberString.length) {
                    for (let j = 0; j < maxNumberString.length; j++) {
                        if (parseInt(maxNumberString[j]) < number) {
                            maxNumber = number
                            maxNumberIndex = i;
                            break;
                        }
                    }
                } else if (maxNumberString.length === numberString.length) {

                }




            }

        }

        answer += `${numbers[maxNumberIndex]}`;

        numbers.splice(maxNumberIndex, 1);
    }



}


console.log(solution([3, 30, 34, 5, 9]));