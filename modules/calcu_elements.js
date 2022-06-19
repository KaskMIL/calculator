const checkNum = (list) => {
  if (list[list.length - 1].num2 == 0 || list.length == 0) {
    return true;
  } else {
    return false;
  }
}

export { checkNum };