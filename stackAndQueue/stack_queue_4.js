/**
 *
 * @see https://programmers.co.kr/learn/courses/30/lessons/42587
 * @description -
 *
 * 프린터
 * level 2
 */
function solution(priorities, location) {

    let printOrder = 0;
    let currentLocation = location;

    while (true) {
        const priorty = priorities[0];
        const isBiggerPriority = priorities.find(pr => pr > priorty);

        if (isBiggerPriority) {
            priorities.splice(0, 1);
            priorities.push(priorty);
            currentLocation = currentLocation === 0 ? priorities.length - 1 : currentLocation - 1;
        } else {
            priorities.splice(0, 1);
            printOrder++;
            if (currentLocation === 0) {
                return printOrder
            }
            currentLocation--;
        }
    }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0))