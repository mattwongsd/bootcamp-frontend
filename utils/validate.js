export const validateName = (val) => {
  var msg = [];
  if (!val) {
    msg = _.concat(msg, "Name is required");
  }
  if (val.length > 60) {
    msg = _.concat(msg, "Name cannot exceed 60 characters");
  }
  if (!val.match(/^[a-zA-Z\d_ ]+$/)) {
    msg = _.concat(
      msg,
      "Name must only contain alphanumeric characters or spaces"
    );
  }
  msg = msg.join(", ");
  return msg;
};

export const validateDescription = (val) => {
  var msg = [];
  if (!val) {
    msg = _.concat(msg, "Description is required");
  }
  if (val.length > 200) {
    msg = _.concat(msg, "Description cannot exceed 200 characters");
  }
  msg = msg.join(", ");
  return msg;
};

export const validateWebsite = (val) => {
  var msg = [];
  if (!val) {
    msg = _.concat(msg, "Website is required");
  }
  if (val.length > 200) {
    msg = _.concat(msg, "Website cannot exceed 100 characters");
  }
  if (
    !val.match(
      /^((((https?|ftps?|gopher|telnet|nntp):\/\/)|(mailto:|news:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/
    )
  ) {
    msg = _.concat(msg, "Please use a valid URL");
  }
  msg = msg.join(", ");
  return msg;
};

export const validatePhone = (val) => {
  var msg = [];
  if (!val) {
    msg = _.concat(msg, "Phone number is required");
  }
  if (val.length > 20) {
    msg = _.concat(msg, "Phone number cannot exceed 20 characters");
  }
  if (val.length < 8) {
    msg = _.concat(msg, "Phone number should be at least 8 numbers");
  }
  if (!val.match(/^(\+\d{2,3} ?)?(\d+)$/)) {
    msg = _.concat(msg, "Please use a valid phone number");
  }
  msg = msg.join(", ");
  return msg;
};

export const validateEmail = (val) => {
  var msg = [];
  if (!val) {
    msg = _.concat(msg, "Email is required");
  }
  if (val.length > 100) {
    msg = _.concat(msg, "Email cannot exceed 100 characters");
  }
  if (
    !val.match(
      /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/
    )
  ) {
    msg = _.concat(msg, "Please use a valid email");
  }
  msg = msg.join(", ");
  return msg;
};

export const validateAverageRating = (val, min, max) => {
  var msg = [];
  if (!val) {
    msg = _.concat(msg, "Average rating is required");
  }
  if (val > max || val < min) {
    msg = _.concat(msg, `Average rating must be between ${min} and ${max}`);
  }
  if (val % 1 != 0) {
    msg = _.concat(msg, "Please use an integer value");
  }
  msg = msg.join(", ");
  return msg;
};
