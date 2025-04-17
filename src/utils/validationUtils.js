export const validateRegistrationForm = (formData) => {
  const errors = {};

  // Validate first name
  if (!formData.firstName?.trim()) {
    errors.firstName = "First name is required.";
  }

  // Validate last name
  if (!formData.lastName?.trim()) {
    errors.lastName = "Last name is required.";
  }

  // Validate email
  if (!formData.email?.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Invalid email format.";
  }

  // Validate phone
  if (!formData.phone?.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
    errors.phone = "Invalid phone number format.";
  }

  // Validate password
  if (!formData.password?.trim()) {
    errors.password = "Password is required.";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  return errors;
};
