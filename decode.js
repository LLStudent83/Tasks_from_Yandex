// Задание:
// Современные методы шифрования надёжно защищают наши коммуникации даже в условиях,
// когда взломщик может делать миллионы попыток дешифровки в секунду.В докомпьютерную же
// эпоху шифрование и расшифровка сообщений была кропотливым ручным трудом даже для того,
// у кого был ключ к шифру.Но и сами шифры были проще.

// Одним из простейших методов шифрования является шифр подстановки, когда один или
// несколько исходных символов заменяются на один или несколько других.

// Реализуй функцию decode, удовлетворяющую следующим условиям:

// Специальных преобразовний регистра делать не нужно, заглавные и строчные буквы - это разные буквы:
// decode('Aa', [{ from: 'a', to: 'b' }]) === 'Ab'
// Части исходного сообщения, не требующие замены, остаются, как есть:
// decode('ab', [{ from: 'a', to: 'b' }]) === 'bb'
// Уже заменённые символы нельзя заменять повторно.:
// decode('ab', [{ from: 'a', to: 'ba' }, { from: 'b', to: 'r' }]) === 'bar'
// Зашифрованное сообщение расшифровывается слева направо. Замена, встретившаяся в слове раньше, имеет приоритет.:
// decode('ab', [{ from: 'b', to: 'bar' }, { from: 'ab', to: 'foo' }]) === 'foo'
// При совпадении позиции нескольких замен в слове та замена, о которой договорились позже, имеет приоритет.:
// decode('ab', [{ from: 'a', to: 'bar' }, { from: 'ab', to: 'foo' }]) === 'foo'

// Примечания
// Не забудь проверить граничные случаи – пустой массив замен и замену на пустую строку.

function decode(message, replaces) {
  let replacementHistory = {};
  let decodeString = message;

  for (let i = replaces.length - 1; i >= 0; i -= 1) {
    let key = replaces[i].from;
      let replacement = replaces[i].to;
      const difference = key.length - replacement.length;

      decodeString = decodeString.replace(new RegExp(`${key}`), (...match) => {
          for (let i in replacementHistory) {
              if (replacementHistory[i][0] === match[1]) {
                  
              }
          }
        // входит ли позиция найденной замены с уже замененными позициями записанными в replacementHistory
            // если входит идем дальше
            // если не входит то производим замену и при необходимости корректируем занчения в replacementHistory
        // если разность заменителя и заменяемого равна нулю то объект не пересчитываем ЕСЛИ меньше нуля то увеличиваем позиции ЕСЛИ больше нуля то уменьшаем
          
        console.log('match', match);
        replacementHistory[replacement] = [match[1], replacement.length];
        console.log('replacementHistory', replacementHistory);
      return replacement;
    });
  }

  console.log('Декодированная строка', decodeString);
}

// decode('Привет как дела', [
//   { from: 'как', to: 'где' },
//   { from: 'де', to: 'бы' },
// ]);

//   let decodeString = '';

//   for (let i = replaces.length - 1; i >= 0; i -= 1) {
//     const key = replaces[i].from;
//     const index = message.indexOf(key);
//     if (index !== -1) {
//       const lengthFrom = key.length;

//       const substr = message.slice(index, index + lengthFrom);
//       if (substr === key) {
//         decodeString += message
//           .slice(0, index + lengthFrom)
//           .replace(key, replaces[i].to);
//         message = message.slice(index + lengthFrom); // сохранили только оставшуюся часть строки для dальнейшего декодирования
//         if (i === 0) {
//           decodeString += message;
//         }
//       } else {
//         if (i === 0) {
//           decodeString += message;
//         }
//       }
//     }
//   }
//   if (replaces.length === 0) {
//     decodeString = message;
//   }
//   console.log(decodeString);
