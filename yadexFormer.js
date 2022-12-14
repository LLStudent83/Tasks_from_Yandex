// Условия задачи:
// Яндексоиды научились образовывать Гештальд.Гештальд - это когда разработчики меньшего
// уровня собираются в одного Яндексформера и решают большую и сложную задачу.У каждого
// яндексоида есть свой грейд.Грейд яндексоида - это целое число от 0 до 25, обозначающее
// максимальный уровень задачи, которую сотрудник способен решить.Грейд же Яндексформера -
// это сумма грейдов входящих в гештальд.Проблема в том, что для Яндексформера нужен
// компьютер с K клавиатурами, где K число яндексоидов в объеденении.Клавиатур меньше
// чем Яндексоидов, помогите определить максимальный возможный уровень Яндексформера,
// доступного для сборки.

// Например: При доступных к объединению разработчиков с грейдами[10, 1, 23, 0, 1] и 2(ух)
// доступных клавиатурах будет оптимально объединить в гештальд разработчиков с грейдами 10 и 23,
// тогда максимально возможный уровень Яндексформера будет равен 33.

// Реализуйте функцию, которая принимает 3 аргумента: N, staff, и K и возвращает одно число -
// максимально возможный уровень Яндексформера для этих значений.

function yndexoid(n, staff, k) {
  const sortArr = staff.sort((a, b) => b - a);
  const maxArr = sortArr.slice(0, k);
  const x = maxArr.reduce((total, value) => total + value);
  console.log('Максимально возможный уровень Яндексформера равен ', x)
}

yndexoid(12, [22, 7, 24, 24, 11, 22, 24, 3, 9, 16, 2, 19], 7);
