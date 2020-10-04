function rangeRight(start, end, step) {
  return range(start, end, step, true);
}

function range(start, end, step, isRight) {
  const result_array = [];
  const actual_end = end || start;
  const actual_start = end ? start : 0;
  const actual_step = step || 1;

  if (actual_start !== actual_end) {
    if (actual_end > actual_start) {
      for (let i = actual_start; i < actual_end; i += actual_step) {
        result_array.push(i);
      }
    } else {
      for (let i = actual_start; i > actual_end; i -= actual_step) {
        result_array.push(i);
      }
    }
  }

  return isRight ? result_array.reverse() : result_array;
}
