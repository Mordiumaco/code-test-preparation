/**
 *
 * @see https://programmers.co.kr/learn/courses/30/lessons/42579
 * @description -
 *
 * 베스트 앨범
 * level 3
 *
 */
function solution(genres = [], plays) {
  const songs = genres.map((genre, index) => ({
    index,
    genre,
    playCount: plays[index],
  }));

  const genrePlayCount = [];

  songs.forEach((song) => {
    const genre = genrePlayCount.find(
      (genrePlay) => genrePlay.genre === song.genre
    );

    if(!genre){
        genrePlayCount.push({genre: song.genre, totalPlayCount: song.playCount})
    }else{
        genre.totalPlayCount += song.playCount;
    }

  });

  genrePlayCount.sort((a, b) => b.totalPlayCount - a.totalPlayCount);

  const answer = [];

  genrePlayCount.forEach(genrePlay => {
      const thisGenreSongs = songs.filter(song => genrePlay.genre === song.genre);
      thisGenreSongs.sort((a, b) => (b.playCount - a.playCount));
      answer.push(thisGenreSongs[0].index);
      thisGenreSongs[1] && answer.push(thisGenreSongs[1].index) 
  })

  return answer;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]))