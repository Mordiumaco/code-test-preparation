/**
 *
 * @see https://programmers.co.kr/learn/courses/30/lessons/42576
 * @description -
 *
 * 완주하지 못한 선수
 * level 1
 *
 */
function solution(participant = [], completion = []) {

    const completionList = completion.reduce((obj, currentValue) => {

        return obj[currentValue] ? obj[currentValue]++ : obj[currentValue] = 1, obj;

    }, {})



    const unCompletedPlayer = participant.find(player => {
        const count = completionList[player] ? --completionList[player] : -1;
        return count === -1 ? true : false;
    })

    return unCompletedPlayer;
}


console.log(solution(["mislav", "stanko", "mislav", "ana"], ["mislav", "stanko", "ana"]));