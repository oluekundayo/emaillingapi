const nameValid = (name, nameFine, notRequired) => {
  if (!notRequired && !name) return nameFine + " is required";
  // else if (!/^([a-zA-Z]{2,3}\s+)?[a-zA-Z'-]+$/.test(name))
  //   return nameFine + " is not in the right format";
  else if (name.length < 2)
    return nameFine + " should be at least 2 characters long";
  else if (name.length > 20)
    return nameFine + " should not be more than 20 characters long";
  return true;
};

module.exports = { nameValid };
