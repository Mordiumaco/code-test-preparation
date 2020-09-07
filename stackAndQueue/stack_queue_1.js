/**
 *
 * @see https://programmers.co.kr/learn/courses/30/lessons/42586
 * @description -
 *
 * 기능개발
 * level 2
 *
 * 

 */
function solution(progresses = [], speeds = []) {

    const deploys = [];

    while (true) {

        const progressLength = progresses.length;

        for (let i = 0; i < progressLength; i++) {
            progresses[i] += speeds[i]
        }

        if (progresses[0] >= 100) {

            let endIndex = 0;

            for (let i = 0; i < progressLength; i++) {
                if (progresses[i] < 100) {
                    endIndex = i - 1;
                    break;
                }

                if (progresses[i] > 100 && i === progressLength - 1) {
                    endIndex = i;
                }
            }
            speeds.splice(0, endIndex + 1);
            deploys.push(endIndex + 1);
            progresses = progresses.slice(endIndex + 1);
            endIndex = 0;
        }

        if (progresses.length === 0) {
            break;
        }
    }

    return deploys;
}




console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));