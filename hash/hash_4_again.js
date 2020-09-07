/**
 *
 * @see https://programmers.co.kr/learn/courses/30/lessons/42579
 * @description -
 *
 * 베스트 앨범
 * level 3
 *
 */
function solution(genres = [], plays = []) {

    const songs = genres.map((genre, index) => {
        return ({
            no: index,
            genre,
            play: plays[index]
        })
    })

    const genreRank = songs.reduce((previousValue, song) => {
        const genre = previousValue.find(genre => { return genre.genre === song.genre })
        return genre ? genre.play += song.play : previousValue.push({ genre: song.genre, play: song.play }), previousValue
    }, []).sort((a, b) => b.play - a.play);


    return genreRank.reduce((previousValue, genre) => {
        const genreSongs = songs.filter(song => song.genre === genre.genre).sort((a, b) => b.play - a.play);
        return previousValue.push(genreSongs[0].no), genreSongs[1] && previousValue.push(genreSongs[1].no), previousValue
    }, [])

}


console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]))