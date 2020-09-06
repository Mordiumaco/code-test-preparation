/**
 *
 * @see https://programmers.co.kr/learn/courses/30/lessons/42576
 * @description -
 *
 * 완주하지 못한 선수
 * level 1
 *
 */
// function solution(participant, completion) {
//   //한명의 선수 제외
//   //선수는 한명 이상
//   //completion 의 길이가 1보다 작음
//   //동명 이인이 있을 수 있음
//   // 1개 이상 20개 이하의 알파벳

//   const participantMap = new Map();

//   participant.forEach((element) => {
//     const count = participantMap.get(element);
//     participantMap.set(element, count ? count + 1 : 1);
//   });

//   completion.forEach((element) => {
//     participantMap.set(element, participantMap.get(element) - 1);
//   });

//   for(let [player, count] of participantMap.entries()){
//     if(count === 1){
//         return player;
//     }
//   }

// }

// console.log(solution(["mislav", "stanko", "mislav", "ana"], ["mislav", "stanko", "ana"]));



// 이런 방법도...
// function solution(participant, completion) {
//     var dic = completion.reduce((obj, t)=> (
        
//         obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{})
//     ;
        
        
//     return participant.find(t=> {
//         if(dic[t])
//             dic[t] = dic[t]-1;
//         else 
//             return true;
//     });
// }

//가독성은 포기하지만 간결코드..
//var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
var solution=(_,$)=>_.find(_=>{

    console.log($);

    return !$[_]--;

},$.map(_=>$[_]=($[_]|0)+1))



console.log(solution(["mislav", "stanko", "mislav", "ana"], ["mislav", "stanko", "ana"]));