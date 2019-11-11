export const validationResultParser = validationResult => {
  const { error } = validationResult;
  const valid = error == null;
  if (valid) return [];

  return error.details.map(e => e.message);
};
