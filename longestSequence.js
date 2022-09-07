// Дана последовательность нолей и единиц [1, 0, 1, 0, 1, 1, 1].
// Необходимо найти самую длинную последовательность единиц

function longestSequence(vector) {
  const stringVector = vector.join('');
  let arrOfOnes = stringVector.match(/1+/g) || [];
  const sortArrOfOnes = arrOfOnes.sort((a, b) => b.length - a.length);
  const maxItemSortArrOfOnes = sortArrOfOnes[0] ? sortArrOfOnes[0].length : 0;
  console.log(
    'Самая длинная последовательность единиц равна ',
    maxItemSortArrOfOnes
  );
}

longestSequence([]);
