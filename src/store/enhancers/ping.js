/*eslint-disable */
// eslint-disable выключает проверку этого блока "линтером".

// Middleware (напр., ping) - это всегда функция, которые обычно возвращают функцию
export const ping = store => next => action => {
  console.log(`Тип события: ${action.type}, дополнительные данные события: ${action.payload}`)
  return next(action)
}

/*
ES5-версия:
var ping = function ping(store) {
  return function (next) {
    return function (action) {
      console.log('ping');
      return next(action);
    };
  };
};
*/

/*
в возвращаемых функциях доступны аргументы:
	store - redux-store нашего приложения;
	next - функция-обертка, которая позволяет продолжить выполнение цепочки;
	action - действие, которое было вызвано (вызванные действия - это store.dispatch)
*/

/*eslint-enable */

