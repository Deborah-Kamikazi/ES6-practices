// Set Up Sets and Maps: You're working with a list of product IDs that might
//  contain duplicates. Use a Set to remove all duplicates and return the unique product IDs.
  let id = [12,23,49,35,28,12,23];
  let duplicate = [...new Set(id)];
  console.log (duplicate);
