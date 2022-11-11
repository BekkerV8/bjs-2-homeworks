function cachingDecoratorNew(func) {
  let cache = [];

    function wrapper(...args) {
      const hash = args.join(',');
      let objectInCache = cache.find((item) => item.hash == hash);
      if (objectInCache) {
        console.log("Из кэша: " + objectInCache.value);
        return "Из кэша: " + objectInCache.value;
      }

      let result = func(...args);
      cache.push({
        'hash': hash,
        'value': result
      });
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
    return wrapper;
  }


  function debounceDecoratorNew(func, ms) {
    let allImmediate;
    let flag = false;

    function wrapper(...args) {
      if (!flag) {
        func.apply(this, args);
        }
        flag = true;
          clearTimeout(allImmediate);
            allImmediate = setTimeout(() => {
              func.apply(this, args);
            flag = false;
            }, ms);
          };
        return wrapper;
      }



function debounceDecorator2(func,diff) {
  let timerId;
  let timeStatus = false;
  wrapper.count = 0;

    function wrapper(...args) {
    clearTimeout(timerId);
      if (!timeStatus) {
        func(...args);
        wrapper.count ++;
        timeStatus = true;
        }
        timerId = setTimeout(() => timeStatus = false, diff);
      }
      return wrapper;
  }

